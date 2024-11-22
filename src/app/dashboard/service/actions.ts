"use server";

import { ActionResponse, ActionResponses } from "@/types/actions";
import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getServerSession } from "@/lib/next-auth";
import { normalizeVariableName } from "@/lib/utils";
import { PatchType, TextRun, patchDocument } from "docx";

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
  serviceId,
  answers,
}: {
  userId: string;
  serviceId: string;
  answers: { name: string; value: string }[];
}): Promise<ActionResponse<{ serviceRequestId: string }>> {
  try {
    const service = await prisma.administrativeService.findUnique({
      where: { id: serviceId },
      include: {
        administrativeUnit: { select: { administrativeLevel: true } },
        templates: {
          include: {
            fields: { include: { options: true, fieldType: true } },
            signs: true,
          },
        },
      },
    });

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return ActionResponses.notFound("User not found");
    }

    if (!service) {
      return ActionResponses.notFound("Form not Found");
    }

    // Filter out empty answers
    // answers = answers.filter(
    //   (answer) => answer.value && answer.value.trim() !== "",
    // );

    // const fields = service.templates
    // .map((item) => item.fields)
    // .flat()
    // .map((item) => ({
    //   ...item,
    //   variableName: normalizeVariableName(item.label ?? item.fieldType.label),
    // }));

    const status = `Menunggu operator ${
      service.skipStep === "SUBDISTRICT"
        ? "KECAMATAN"
        : service.skipStep === "SUBDISTRICT_DISTRICT"
          ? "Dinas"
          : "Kelurahan"
    }`;
    const serviceRequest = await prisma.serviceRequest.create({
      data: { userId, status, administrativeServiceId: serviceId },
    });
    for (const form of service.templates) {
      // Validate required fields and option values
      // for (const field of form.fields) {
      //   const answer = answers.find((item) => item.name === field.id.toString());

      //   if (field.required && (!answer || !answer.value)) {
      //     return ActionResponses.badRequest(
      //       `${field.label} is required.`,
      //       field.label,
      //     );
      //   }

      //   if (answer?.value && field.fieldType.baseType === "radio") {
      //     const invalidOption = !field.options.some(
      //       (option) => option.value === answer.value,
      //     );
      //     if (invalidOption) {
      //       return ActionResponses.badRequest("Invalid Request", field.label);
      //     }
      //   }
      // }

      // let patches: any = {};
      const fieldsCreate = form.fields.map((field) => {
        const variableName = normalizeVariableName(
          field.label ?? field.fieldType.label,
        );
        const answer =
          answers.find((answer) => answer.name === variableName)?.value ?? "-";

        // patches[variableName] = {
        //   type: PatchType.PARAGRAPH,
        //   children: [new TextRun(answer)],
        // };
        return { fieldId: field.id, value: answer };
      });

      // const bufferDocx = Buffer.from(form.content, "base64");
      // const doc = await patchDocument({
      //   outputType: "blob",
      //   data: bufferDocx,
      //   patches,
      // });

      await prisma.submission.create({
        data: {
          userId,
          templateId: form.id,
          fields: { createMany: { data: fieldsCreate } },
          serviceRequestId: serviceRequest.id,
        },
      });
    }

    revalidatePath("/admin/submission");
    revalidatePath("/dashboard/request");

    return ActionResponses.success({ serviceRequestId: serviceRequest.id });
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

    const submission = await prisma.serviceRequest.findUnique({
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
