"use server";

import { ActionResponse, ActionResponses } from "@/types/actions";
import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getServerSession } from "@/lib/next-auth";

export async function autoComplete({
  value,
  field,
  tableName,
}: {
  value: string;
  field: string;
  tableName: string;
}): Promise<ActionResponse<{ data: any }>> {
  try {
    const model = Prisma.dmmf.datamodel.models.find(
      (model) => model.name === tableName,
    );
    const fieldDefinition = model?.fields.find((f) => f.name === field);

    if (!fieldDefinition || !fieldDefinition.isUnique) {
      throw new Error(
        `The field '${field}' is not unique in the '${tableName}' table.`,
      );
    }

    const data = await prisma.$queryRawUnsafe<any[]>(
      `SELECT * FROM "${tableName}" WHERE "${field}" = ?`,
      [value],
    );

    if (data.length === 0) {
      return ActionResponses.notFound("Not Found");
    }

    return ActionResponses.success({ data: data[0] });
  } catch (error) {
    console.error("Error in upsertPosition:", error);
    return ActionResponses.serverError("Failed to save position");
  }
}

export async function submitForm({
  userId,
  formId,
  answers,
}: {
  userId: string;
  formId: string;
  answers: { name: string; value: string }[];
}): Promise<ActionResponse<{ submissionId: string }>> {
  try {
    const session = await getServerSession();
    const form = await prisma.form.findFirst({
      where: { id: formId },
      include: { fields: { include: { options: true, fieldType: true } } },
    });

    const { user: sessionUser } = session!;
    const user = await prisma.user.findUnique({
      where: { id: sessionUser?.id },
    });
    if (!user) {
      return ActionResponses.notFound("User not found");
    }

    if (!form) {
      return ActionResponses.notFound("Form not Found");
    }

    // Filter out empty answers
    answers = answers.filter(
      (answer) => answer.value && answer.value.trim() !== "",
    );

    // Check if all answer names correspond to valid form fields
    const invalidAnswer = answers.find(
      (item) => !form.fields.some((field) => item.name === field.id.toString()),
    );

    if (invalidAnswer) {
      return ActionResponses.badRequest("Bad Request", invalidAnswer.name);
    }

    // Validate required fields and option values
    for (const field of form.fields) {
      const answer = answers.find((item) => item.name === field.id.toString());

      if (field.required && (!answer || !answer.value)) {
        return ActionResponses.badRequest(
          `${field.label} is required.`,
          field.label,
        );
      }

      if (answer?.value && field.fieldType.baseType === "radio") {
        const invalidOption = !field.options.some(
          (option) => option.value === answer.value,
        );
        if (invalidOption) {
          return ActionResponses.badRequest("Invalid Request", field.label);
        }
      }
    }

    // Create the submission
    const fieldsCreate = answers.map((answer) => ({
      fieldId: parseInt(answer.name),
      value: answer.value,
    }));

    const newSubmission = await prisma.submission.create({
      data: {
        userId,
        formId,
        fields: { createMany: { data: fieldsCreate } },

        // To identify what instance the user is from
        cityId: user.cityId,
        districtId: user.districtId,
        subDistrictId: user.subDistrictId,
      },
    });

    revalidatePath("/admin/submission");
    revalidatePath("/dashboard/request");

    return ActionResponses.success({ submissionId: newSubmission.id });
  } catch (error) {
    console.error("Error in submitForm:", error);
    return ActionResponses.serverError("Failed to save submission");
  }
}

export async function deleteSubmission(
  id: string,
): Promise<ActionResponse<{ id: string }>> {
  try {
    if (!id) {
      return ActionResponses.badRequest("ID is required", "id");
    }

    const submission = await prisma.submission.findUnique({
      where: { id },
    });

    if (!submission) {
      return ActionResponses.notFound("Submission not found");
    }

    if (submission.status !== "PENDING_APPROVAL") {
      return ActionResponses.notFound(
        "Request has been processed. cannot be deleted",
      );
    }

    await prisma.submission.delete({
      where: { id },
    });

    revalidatePath("/dashboard/request");

    return ActionResponses.success({ id });
  } catch (error) {
    console.error("Error in deletePosition:", error);
    return ActionResponses.serverError("Failed to delete position");
  }
}
