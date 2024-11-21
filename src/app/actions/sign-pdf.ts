"use server";
import { ActionResponses } from "@/types/actions";
import { printDoc } from "./print-doc";
import { convertToPdfV1 } from "./docx-pdf";
import { Blob } from "buffer";
import { eSign } from "./esign";

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
    const unsignedDoc = await printDoc(submissionId);
    const unsignedDocBlob = new Blob([unsignedDoc.data!]);
    const unsignedPdf = await convertToPdfV1(
      unsignedDocBlob as globalThis.Blob,
    );
    const unsignedPdfBuffer = Buffer.from(unsignedPdf.data!, "base64");
    const signedPdf = eSign({
      file: unsignedPdfBuffer,
      halaman,
      height,
      passphrase,
      qrcode,
      reason,
      width,
      xAxis,
      yAxis,
      imageTTD,
    });
  } catch (e) {
    console.error(e);
    return ActionResponses.serverError("PDF signing failed");
  }
};

export default signPdf;
