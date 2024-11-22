"use server";

import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";
import { ActionResponse, ActionResponses } from "@/types/actions";
import { Skip, UserRole } from "@prisma/client";

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

export const deleteService = async (
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

    let service = await prisma.administrativeService.delete({
      where: { id },
    });

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
