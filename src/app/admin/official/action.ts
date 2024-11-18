"use server";

import prisma from "@/lib/prisma";
import { ActionResponses } from "@/types/actions";
import { revalidatePath } from "next/cache";

export default async function upsertOfficial(
  name: string | undefined,
  administrativeUnitId: string | undefined,
  userId: string | undefined,
) {
  try {
    if (!name || !administrativeUnitId || !userId)
      return ActionResponses.serverError("data harus diisi semua!");
    const tryUpsertOfficial = await prisma.official.create({
      data: {
        name,
        administrativeUnitId,
        userId,
      },
    });

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        role: "OFFICIAL",
      },
    });

    revalidatePath("/admin/official");
    return ActionResponses.success({ id: tryUpsertOfficial.id });
  } catch (e) {
    console.error(e);
    return ActionResponses.serverError();
  }
}
