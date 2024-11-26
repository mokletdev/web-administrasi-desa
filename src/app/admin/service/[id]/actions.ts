"use server";

import { ActionResponse, ActionResponses } from "@/types/actions";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { AdministrativeLevel } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { convertToPdf } from "@/app/actions/docx-pdf";

export interface UpsertTemplateParams {
  id?: string;
  title: string;
  level: AdministrativeLevel;
  administrativeServiceId: string;
  signs: Array<{
    coordX: number;
    coordY: number;
    size: number;
    officialId: string;
  }>;
  fields: Array<{
    id?: number;
    label?: string;
    required?: boolean;
    fieldTypeId: number;
    options?: Array<{
      id?: string;
      value: string;
    }>;
  }>;
}

const validateAccess = async (templateId?: string) => {
  const session = await getServerSession();
  if (!session?.user) {
    return { allowed: false, error: ActionResponses.unauthorized() };
  }

  if (session.user.role === "CITIZEN") {
    return { allowed: false, error: ActionResponses.unauthorized() };
  }

  if (templateId) {
    const template = await prisma.template.findUnique({
      where: { id: templateId },
      include: {
        submissions: { select: { id: true } },
        fields: {
          include: { options: true },
          orderBy: { fieldNumber: "asc" },
        },
      },
    });

    if (!template) {
      return {
        allowed: false,
        error: ActionResponses.notFound("Document not found"),
      };
    }

    return {
      allowed: true,
      template,
      user: session.user,
    };
  }

  return { allowed: true, user: session.user };
};

export async function upsertTemplate(
  input: UpsertTemplateParams & { content: FormData }, // formData is only used to retrieve DOCX files.
): Promise<
  ActionResponse<{
    templateId: string;
  }>
> {
  try {
    const validation = await validateAccess(input.id);
    if (!validation.allowed) {
      return ActionResponses.unauthorized();
    }

    // if (
    //   validation?.template?.submissions.length &&
    //   validation.template.submissions.length > 0
    // ) {
    //   return ActionResponses.badRequest(
    //     "Cannot edit form with existing submissions",
    //   );
    // }

    const contentFile = input.content.get("content") as File | null;

    if (!input.id && !contentFile) {
      return ActionResponses.badRequest("Content must be provided!", "content");
    }

    const contentBase64 = contentFile
      ? Buffer.from(await contentFile.arrayBuffer()).toString("base64")
      : undefined;
    const contentPdf = contentBase64
      ? await convertToPdf(input.content)
      : undefined;
    const contentPdfBase64 = contentPdf?.data;

    if (!input.id && !contentPdfBase64) {
      return ActionResponses.serverError("Failed to convert docx to PDF");
    }

    const result = await prisma.$transaction(
      async (tx) => {
        const template = input.id
          ? await tx.template.update({
              where: { id: input.id },
              data: {
                title: input.title,
                content: contentBase64,
                contentPdf: contentPdfBase64,
              },
            })
          : await tx.template.create({
              data: {
                title: input.title,
                // If the user's creating a new template, then the content would always be present
                content: contentBase64!,
                contentPdf: contentPdfBase64!,
                level: input.level,
                AdministrativeService: {
                  connect: { id: input.administrativeServiceId },
                },
              },
            });

        if (input.signs?.length) {
          if (input.id) {
            await tx.sign.deleteMany({
              where: { templateId: template.id },
            });
          }

          await tx.sign.createMany({
            data: input.signs.map((sign) => ({
              ...sign,
              templateId: template.id,
            })),
          });
        }

        if (input.fields?.length) {
          const keepFieldIds = input.fields
            .map((f) => f.id)
            .filter((id) => id !== undefined);

          await tx.field.deleteMany({
            where: {
              templateId: template.id,
              id: { notIn: keepFieldIds },
            },
          });

          await Promise.all(
            input.fields.map(async (field, index) => {
              const fieldData = {
                label: field.label,
                required: field.required,
                fieldTypeId: field.fieldTypeId,
                fieldNumber: index + 1,
                templateId: template.id,
              };

              const upsertedField = field.id
                ? await tx.field.update({
                    where: { id: field.id },
                    data: fieldData,
                  })
                : await tx.field.create({
                    data: fieldData,
                  });

              if (field.options?.length) {
                if (field.id) {
                  await tx.fieldOption.deleteMany({
                    where: { fieldId: upsertedField.id },
                  });
                }

                await tx.fieldOption.createMany({
                  data: field.options.map((option) => ({
                    value: option.value,
                    fieldId: upsertedField.id,
                  })),
                });
              }
            }),
          );
        }

        return { templateId: template.id };
      },
      { timeout: 20000, maxWait: 20000 },
    );

    revalidatePath("/admin/service/[id]", "layout");
    return ActionResponses.success(result);
  } catch (error) {
    console.error("Error in upsertDocumentForm:", error);
    return ActionResponses.serverError("Failed to save document and form");
  }
}

export async function deleteTemplate(id: string) {
  try {
    const tryDeleteOfficial = await prisma.template.delete({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

    revalidatePath("/admin/service/[id]");
    return ActionResponses.success({ id: tryDeleteOfficial.id });
  } catch (e) {
    console.error(e);
    return ActionResponses.serverError();
  }
}
