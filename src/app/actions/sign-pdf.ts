"use server";
import { ActionResponses } from "@/types/actions";
import { printDoc } from "./print-doc";
import { convertToPdfV1 } from "./docx-pdf";
import { Blob } from "buffer";
import { eSign } from "./esign";
import prisma from "@/lib/prisma";
import { getServerSession } from "@/lib/next-auth";
import { revalidatePath } from "next/cache";

interface ESignParams {
  halaman: string;
  imageTTD?: string;
  height: string;
  width: string;
  qrcode: string;
  reason: string;
  xAxis: string;
  yAxis: string;
  passphrase: string;
}

const signPdf = async (submissionId: string, paraphrase: string) => {
  try {
    const session = await getServerSession();

    const submission = await prisma.submission.findUnique({
      where: {
        id: submissionId,
      },
      include: {
        signRequests: {
          where: { signedPdf: { not: "-" } },
          orderBy: { signedAt: "desc" },
          take: 1,
        },
        template: {
          include: {
            signs: {
              include: {
                Official: {
                  include: {
                    user: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    const sign = submission?.template.signs.filter(
      (item) => item.Official?.userId === session?.user?.id,
    )?.[0];
    let unsignedPdf;
    if (submission?.signRequests[0]) {
      unsignedPdf = submission?.signRequests[0].signedPdf;
    } else {
      const unsignedDoc = await printDoc(submissionId);
      const unsignedDocBlob = new Blob([unsignedDoc.data!]);
      unsignedPdf = (await convertToPdfV1(unsignedDocBlob as globalThis.Blob))
        .data;
    }

    const unsignedPdfBuffer = Buffer.from(unsignedPdf!, "base64");
    console.log("TTE Proccess");
    const signedPdf = await eSign({
      file: unsignedPdfBuffer,
      page: sign?.page.toString()!,
      height: sign?.size.toString()!,
      passphrase: paraphrase,
      linkQR: process.env.URL + "/api/download/" + submissionId,
      width: sign?.size.toString()!,
      xAxis: sign?.coordX.toString()!,
      yAxis: sign?.coordY.toString()!,
      tampilan: "visible",
      nik: sign?.Official.user?.NIK!,
      image: false,
    });

    if (signedPdf.error) {
      return ActionResponses.serverError("PDF signing failed");
    }

    revalidatePath("/", "layout");
    return ActionResponses.success(signedPdf.data);
  } catch (e) {
    console.error(e);
    return ActionResponses.serverError("PDF signing failed");
  }
};

const signPdfManual = async (
  formData: FormData,
  submissionId: string,
  paraphrase: string,
) => {
  try {
    const session = await getServerSession();

    const submission = await prisma.submission.findUnique({
      where: {
        id: submissionId,
      },
      include: {
        signRequests: {
          where: { signedPdf: { not: "-" } },
          orderBy: { signedAt: "desc" },
          take: 1,
        },
        template: {
          include: {
            signs: {
              include: {
                Official: {
                  include: {
                    user: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    const sign = submission?.template.signs.filter(
      (item) => item.Official?.userId === session?.user?.id,
    )?.[0];
    let unsignedPdf;
    if (submission?.signRequests[0]) {
      unsignedPdf = submission?.signRequests[0].signedPdf;
    } else {
      const unsignedDoc = await printDoc(submissionId);
      const unsignedDocBlob = new Blob([unsignedDoc.data!]);
      unsignedPdf = (await convertToPdfV1(unsignedDocBlob as globalThis.Blob))
        .data;
    }

    const unsignedPdfBuffer = Buffer.from(unsignedPdf!, "base64");
    const signedPdf = await eSign({
      file: unsignedPdfBuffer,
      page: sign?.page.toString()!,
      height: sign?.size.toString()!,
      passphrase: paraphrase,
      width: sign?.size.toString()!,
      xAxis: sign?.coordX.toString()!,
      yAxis: sign?.coordY.toString()!,
      tampilan: "visible",
      nik: sign?.Official.user?.NIK!,
      imageTTD: sign?.image!,
      image: true,
    });

    if (signedPdf.error) {
      return ActionResponses.serverError("PDF signing failed");
    }

    revalidatePath("/", "layout");
    return ActionResponses.success(signedPdf.data);
  } catch (e) {
    console.error(e);
    return ActionResponses.serverError("PDF signing failed");
  }
};

export default signPdf;
module.exports = { signPdfManual };
