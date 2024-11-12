"use server";

import prisma from "@/lib/prisma";
import { ActionResponses } from "@/types/actions";
import { revalidatePath } from "next/cache";
import { MultiValue } from "react-select";

export default async function upsertOfficial(
  positionId: number,
  officials: MultiValue<{
    label: string;
    value: string;
  }>,
  disconnectOficials: {
    label: string;
    value: string;
  }[],
) {
  try {
    if (!positionId || !officials || !disconnectOficials)
      return ActionResponses.serverError("Official(s) must be selected!");

    console.log("aselole1");
    console.log(officials.map((i) => ({ id: i.value })));

    await prisma.position.update({
      where: {
        id: positionId,
      },
      data: {
        officials: {
          connectOrCreate: officials.map((i) => ({
            create: { userId: i.value },
            where: { userId: i.value },
          })),
          deleteMany:
            disconnectOficials.length > 0
              ? disconnectOficials.map((j) => ({ userId: j.value }))
              : [],
        },
      },
    });
    console.log("aselole2");
    revalidatePath("/admin/official");
    return ActionResponses.success({ id: positionId });
  } catch (e) {
    console.error("Error getting column names:", e);
    return ActionResponses.serverError();
  }
}
