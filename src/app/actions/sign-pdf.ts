"use server";
import { ActionResponses } from "@/types/actions";
import { printDoc } from "./print-doc";
import { convertToPdfV1 } from "./docx-pdf";
import { Blob } from "buffer";
import { eSign } from "./esign";
import prisma from "@/lib/prisma";
import { getServerSession } from "@/lib/next-auth";

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

const signPdf = async (submissionId: string, passphrase: string) => {
  try {
    const session = await getServerSession()

    const submission = await prisma.submission.findUnique({
      where:{
        id: submissionId,
      },
       include:{
       template:{
        include:{
          signs:{
            include:{
              Official: true
            }
          }
        }
       }
       }
    })
    const sign = submission?.template.signs.filter(item=>item.Official?.userId === session?.user?.id)?.[0]
    const unsignedDoc = await printDoc(submissionId);
    const unsignedDocBlob = new Blob([unsignedDoc.data!]);
    const unsignedPdf = await convertToPdfV1(
      unsignedDocBlob as globalThis.Blob,
    );
    const unsignedPdfBuffer = Buffer.from(unsignedPdf.data!, "base64");
    const signedPdf = await eSign({
      file: unsignedPdfBuffer,
      halaman:"1",
      height:sign?.size.toString()!,
      passphrase,
      qrcode:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png",
      width:sign?.size.toString()!,
      xAxis:sign?.coordX.toString()!,
      yAxis: sign?.coordY.toString()!,
    });
    return ActionResponses.success(signedPdf)
  } catch (e) {
    console.error(e);
    return ActionResponses.serverError("PDF signing failed");
  }
};

export default signPdf;
