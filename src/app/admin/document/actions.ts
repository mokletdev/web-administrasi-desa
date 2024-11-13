"use server";

import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";
import { ActionResponse, ActionResponses } from "@/types/actions";
import { Prisma, UserRole } from "@prisma/client";
import { revalidatePath } from "next/cache";

export interface DocumentFormInput {
  id?: string;
  title: string;
  level: UserRole;
  signs: Array<{
    positionId: number;
  }>;
  form: {
    fields: Array<{
      id?: number;
      label: string;
      required: boolean;
      fieldTypeId: number;
      fieldNumber: number;
      options?: Array<{
        id?: string;
        value: string;
      }>;
    }>;
  };
}

interface DocumentFormResponse {
  documentId: string;
  formId: string;
}
const validateAccess = async (documentId: string) => {
  const session = await getServerSession();
  if (!session?.user) {
    return { allowed: false, error: ActionResponses.unauthorized() };
  }

  if (session.user.role !== "SUPERADMIN") {
    return { allowed: false, error: ActionResponses.unauthorized() };
  }

  if (documentId) {
    const document = await prisma.document.findUnique({
      where: { id: documentId },
      include: {
        form: {
          include: {
            submissions: { select: { id: true } },
            fields: {
              include: { options: true },
              orderBy: { fieldNumber: "asc" },
            },
          },
        },
      },
    });

    if (!document) {
      return {
        allowed: false,
        error: ActionResponses.notFound("Document not found"),
      };
    }

    return {
      allowed: true,
      document,
      user: session.user,
    };
  }

  return { allowed: true, user: session.user };
};

export async function upsertDocumentForm(
  input: DocumentFormInput & { content: FormData }, // formData is only used to retrieve DOCX files.
): Promise<ActionResponse<DocumentFormResponse>> {
  try {
    const validation = await validateAccess(input.id || "");
    if (!validation.allowed) {
      return ActionResponses.unauthorized();
    }

    if (validation?.document?.form?.submissions?.length || 0 > 0) {
      return ActionResponses.badRequest(
        "Cannot edit form with existing submissions",
      );
    }

    const contentFile = input.content.get("content") as File | null;
    const contentBase64 = contentFile
      ? Buffer.from(await contentFile.arrayBuffer()).toString("base64")
      : undefined;

    const result = await prisma.$transaction(
      async (tx) => {
        const document = input.id
          ? await tx.document.update({
              where: { id: input.id },
              data: {
                title: input.title,
                content: contentBase64,
              },
            })
          : await tx.document.create({
              data: {
                title: input.title,
                // If the user's creating a new docuent, then the content would always be present
                content: contentBase64!,
                level: input.level,
                userId: validation?.user?.id || "",
              },
            });

        if (input.signs?.length) {
          if (input.id) {
            await tx.sign.deleteMany({
              where: { documentId: document.id },
            });
          }

          await tx.sign.createMany({
            data: input.signs.map((sign) => ({
              documentId: document.id,
              positionId: sign.positionId,
            })),
          });
        }

        let form = validation.document?.form;

        if (!form) {
          form = await tx.form.create({
            data: {
              documentId: document.id,
              userId: validation.user?.id || "",
            },
            include: {
              submissions: { select: { id: true } },
              fields: {
                include: { options: true },
                orderBy: { fieldNumber: "asc" },
              },
            },
          });
        }

        if (input.form.fields?.length) {
          if (form.fields?.length) {
            const keepFieldIds = input.form.fields
              .map((f) => f.id)
              .filter((id) => id !== undefined) as number[];

            await tx.field.deleteMany({
              where: {
                formId: form.id,
                id: { notIn: keepFieldIds },
              },
            });
          }

          await Promise.all(
            input.form.fields.map(async (field, index) => {
              const fieldData = {
                label: field.label,
                required: field.required,
                fieldTypeId: field.fieldTypeId,
                fieldNumber: index + 1,
                formId: form?.id || "",
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

        return { documentId: document.id, formId: form.id };
      },
      { timeout: 20000, maxWait: 20000 },
    );

    revalidatePath("/admin/document");
    revalidatePath("/admin/document/[id]");
    return ActionResponses.success(result);
  } catch (error) {
    console.error("Error in upsertDocumentForm:", error);
    return ActionResponses.serverError("Failed to save document and form");
  }
}

export async function getDocumentForm(
  id: string,
): Promise<ActionResponse<DocumentFormInput & { content: string }>> {
  try {
    const validation = await validateAccess(id);
    if (!validation.allowed) {
      return ActionResponses.unauthorized();
    }

    const document = await prisma.document.findUnique({
      where: { id },
      include: {
        user: { select: { name: true } },
        signs: true,
        form: {
          include: {
            fields: {
              include: { options: true },
              orderBy: { fieldNumber: "asc" },
            },
          },
        },
      },
    });

    if (!document) {
      return ActionResponses.notFound("Document not found");
    }

    const documentForm: DocumentFormInput & { content: string } = {
      id: document.id,
      title: document.title,
      content: document.content,
      signs: document.signs.map((sign) => ({
        positionId: sign.positionId,
      })),
      level: document.level,
      form: {
        fields:
          document.form?.fields.map((field) => ({
            id: field.id,
            label: field.label,
            required: field.required,
            fieldTypeId: field.fieldTypeId,
            fieldNumber: field.fieldNumber,
            options: field.options.map((opt) => ({
              id: opt.id,
              value: opt.value,
            })),
          })) || [],
      },
    };

    return ActionResponses.success(documentForm);
  } catch (error) {
    console.error("Error in getDocumentForm:", error);
    return ActionResponses.serverError("Failed to fetch document and form");
  }
}

export async function deleteDocument(
  documentId: string,
): Promise<ActionResponse<{ id: string }>> {
  try {
    if (!documentId) {
      return ActionResponses.badRequest("ID is required", "id");
    }

    const session = await getServerSession();
    if (!session?.user) {
      return ActionResponses.unauthorized();
    }

    if (session.user.role !== "SUPERADMIN") {
      return ActionResponses.unauthorized();
    }

    const document = await prisma.document.findUnique({
      where: { id: documentId },
    });

    if (!document) {
      return ActionResponses.notFound("Document not found");
    }

    await prisma.document.delete({
      where: { id: documentId },
    });

    revalidatePath("/admin/document");
    revalidatePath("/admin/document/[id]");

    return ActionResponses.success({ id: documentId });
  } catch (error) {
    console.error("Error in deleteDocument:", error);
    return ActionResponses.serverError("Failed to delete document");
  }
}

type fieldTypeResponse = Prisma.FieldTypeGetPayload<{
  select: { id: true; name: true };
}>;
export async function getFieldTypes(): Promise<
  ActionResponse<fieldTypeResponse[]>
> {
  try {
    const fieldTypes = await prisma.fieldType.findMany({
      select: { id: true, name: true },
    });

    return ActionResponses.success(fieldTypes);
  } catch (error) {
    console.error("Error in getFieldTypes:", error);
    return ActionResponses.serverError("Failed to fetch field types");
  }
}
