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

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        role: true,
      },
    });

    if (user?.role === "OFFICIAL")
      return ActionResponses.serverError("User sudah menjabat!");

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

export async function deleteOfficial(id: any) {
  try {
    const tryDeleteOfficial = await prisma.official.delete({
      where: {
        id,
      },
      select: {
        id: true,
        userId: true,
      },
    });

    if (!tryDeleteOfficial)
      return ActionResponses.serverError("Data official tidak ditemukan!");

    await prisma.user.update({
      where: {
        id: tryDeleteOfficial.userId!,
      },
      data: {
        role: "CITIZEN",
      },
    });

    revalidatePath("/admin/official");
    return ActionResponses.success({ id: tryDeleteOfficial.id });
  } catch (e) {
    console.error(e);
    return ActionResponses.serverError();
  }
}
