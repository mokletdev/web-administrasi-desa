"use server";

import prisma from "@/lib/prisma";
import { ActionResponse, ActionResponses } from "@/types/actions";
import { revalidatePath } from "next/cache";

export async function deleteRequest(
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

    await prisma.submission.delete({
      where: { id },
    });

    revalidatePath("/admin/submission");

    return ActionResponses.success({ id });
  } catch (error) {
    console.error("Error in deleteSubmission:", error);
    return ActionResponses.serverError("Failed to delete submission");
  }
}
