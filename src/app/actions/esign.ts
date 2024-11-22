"use server";

import { ActionResponse, ActionResponses } from "@/types/actions";

interface ESignParams {
  file: Buffer;
  halaman: string;
  imageTTD?: string;
  height: string;
  width: string;
  qrcode: string;
  reason?: string;
  xAxis: string;
  yAxis: string;
  passphrase: string;
}

export async function eSign(
  params: ESignParams,
): Promise<ActionResponse<Buffer>> {
  try {
    if (
      !process.env.TTE_URL ||
      !process.env.TTE_USERNAME ||
      !process.env.TTE_PASSWORD
    ) {
      return ActionResponses.serverError("Missing E-Sign configuration");
    }

    const auth = Buffer.from(
      `${process.env.TTE_USERNAME}:${process.env.TTE_PASSWORD}`,
    ).toString("base64");

    const { file, ...queryParams } = params;
    const query = new URLSearchParams(queryParams).toString();

    const formData = new FormData();
    formData.append("file", new Blob([file]), "document.pdf");

    const response = await fetch(
      `${process.env.TTE_URL}api/sign/pdf?${query}`,
      {
        method: "POST",
        headers: { Authorization: `Basic ${auth}` },
        body: formData,
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseBuffer = Buffer.from(await response.arrayBuffer());
    return ActionResponses.success(responseBuffer);
  } catch (error) {
    console.error("E-Sign Error:", error);
    return ActionResponses.serverError("PDF signing failed");
  }
}
