"use server";

import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";
import { ActionResponse, ActionResponses } from "@/types/actions";
import { Prisma, Skip, UserRole } from "@prisma/client";
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

export const upsertService = async (
  name: string,
  id?: string,
): Promise<ActionResponse<{ id: string }>> => {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return ActionResponses.unauthorized();
    }

    if (session.user.role === "CITIZEN") {
      return ActionResponses.unauthorized();
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user || !user.administrativeUnitId) {
      return ActionResponses.unauthorized();
    }

    let service;
    if (!id) {
      service = await prisma.administrativeService.create({
        data: {
          name,
          createdById: user.id,
          administrativeUnitId: user.administrativeUnitId,
        },
      });
    } else {
      service = await prisma.administrativeService.update({
        where: { id },
        data: {
          name,
        },
      });
    }

    return ActionResponses.success({ id: service.id });
  } catch (error) {
    console.error("Error in createService:", error);
    return ActionResponses.serverError("Failed to createService");
  }
};

export const setSkip = async (
  id: string,
  skip?: Skip,
): Promise<ActionResponse<{ id: string }>> => {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return ActionResponses.unauthorized();
    }

    if (session.user.role === "CITIZEN") {
      return ActionResponses.unauthorized();
    }

    const service = await prisma.administrativeService.update({
      where: { id },
      data: {
        skipStep: skip || null,
      },
    });

    return ActionResponses.success({ id: service.id });
  } catch (error) {
    console.error("Error in createService:", error);
    return ActionResponses.serverError("Failed to createService");
  }
};

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
