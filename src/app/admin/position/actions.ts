"use server";

import { ActionResponse, ActionResponses } from "@/types/actions";
import { DivisionLevel, Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type PositionData = Prisma.PositionGetPayload<{}>;

export async function upsertPosition(
  formData: FormData,
): Promise<ActionResponse<PositionData>> {
  try {
    const rawId = formData.get("id");
    const id = rawId ? Number(rawId) : undefined;
    const title = formData.get("title") as string;
    const level = formData.get("level") as DivisionLevel;

    if (!title) {
      return ActionResponses.badRequest("Title is required", "title");
    }

    let position;
    if (id) {
      position = await prisma.position.update({
        where: { id },
        data: {
          title,
          level,
        },
      });
    } else {
      position = await prisma.position.create({
        data: {
          title,
          level,
        },
      });
    }

    revalidatePath("/admin/position");
    return ActionResponses.success({
      id: position.id,
      title: position.title,
      level: position.level,
    });
  } catch (error) {
    console.error("Error in upsertPosition:", error);
    return ActionResponses.serverError("Failed to save position");
  }
}

export async function deletePosition(
  id: number,
): Promise<ActionResponse<{ id: number }>> {
  try {
    if (!id) {
      return ActionResponses.badRequest("ID is required", "id");
    }

    const position = await prisma.position.findUnique({
      where: { id },
    });

    if (!position) {
      return ActionResponses.notFound("Position not found");
    }

    await prisma.position.delete({
      where: { id },
    });

    revalidatePath("/admin/position");

    return ActionResponses.success({ id });
  } catch (error) {
    console.error("Error in deletePosition:", error);
    return ActionResponses.serverError("Failed to delete position");
  }
}

export async function getAllPositions(): Promise<
  ActionResponse<{ positions: PositionData[] }>
> {
  try {
    const positions = await prisma.position.findMany({});

    return ActionResponses.success({ positions });
  } catch (error) {
    console.error("Error in getAllPositions:", error);
    return ActionResponses.serverError("Failed to get positions");
  }
}
