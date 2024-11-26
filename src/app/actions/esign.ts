"use server";

import { ActionResponse, ActionResponses } from "@/types/actions";

interface ESignParams {
  file: Buffer;
  page: string;
  imageTTD?: string;
  height: string;
  width: string;
  linkQR: string;
  reason?: string;
  xAxis: string;
  yAxis: string;
  passphrase: string;
  tampilan: "visible" | "invisible";
  nik: string;
  image: boolean;
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

    console.log("TTE: 1");
    const formData = new FormData();
    for (let key in queryParams) {
      if (params[key as keyof ESignParams]) {
        formData.append(key, params[key as keyof ESignParams] as string);
      }
    }
    formData.append(
      "file",
      new Blob([file], { type: "application/pdf" }),
      "document.pdf",
    );
    console.log("TTE: 2");

    const response = await fetch(`${process.env.TTE_URL}api/sign/pdf`, {
      method: "POST",
      headers: { Authorization: `Basic ${auth}` },
      body: formData,
    });

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
