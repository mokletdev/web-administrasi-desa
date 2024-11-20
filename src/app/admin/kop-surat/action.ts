"use server";

import prisma from "@/lib/prisma";
import { ActionResponses } from "@/types/actions";
import { revalidatePath } from "next/cache";

export default async function upsertLetterHead(
  form: FormData,
  id: string,
  previousBase64?: string | null,
) {
  const image = form.get("headerimage") as File;
  console.log(image);
  try {
    if (image.size > 5120000)
      return ActionResponses.serverError("File Kop Surat Melebehi 5 MB!");
    const imageBuffer = Buffer.from(await image.arrayBuffer());
    const imageBase64 =
      "data:" + image.type + ";base64," + imageBuffer.toString("base64");
    if (imageBase64 === previousBase64)
      return ActionResponses.serverError("File Kop Surat Sama!");
    const tryUpdateAdminUnit = await prisma.administrativeUnit.update({
      where: {
        id,
      },
      data: {
        letterhead: imageBase64,
      },
    });

    revalidatePath("/admin/official");
    return ActionResponses.success({ id: tryUpdateAdminUnit.id });
  } catch (e) {
    console.error(e);
    return ActionResponses.serverError();
  }
}
