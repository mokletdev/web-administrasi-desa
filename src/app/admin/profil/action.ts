"use server";

import { ActionResponses } from "@/types/actions";
import prisma from "@/lib/prisma";

export default async function updateUserEsign(userId: string, nik: string) {
  try {
    const res = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        NIK: nik,
      },
    });

    return ActionResponses.success(res);
  } catch (error) {
    console.error("Verify Error:", error);
    return ActionResponses.serverError("Verify NIK failed");
  }
}

export async function checkNIKStatus(nik: string) {
  try {
    if (
      !process.env.TTE_URL ||
      !process.env.TTE_USER ||
      !process.env.TTE_PASSWORD
    ) {
      return ActionResponses.serverError("Missing E-Sign configuration");
    }

    const auth = Buffer.from(
      `${process.env.TTE_USER}:${process.env.TTE_PASSWORD}`,
    ).toString("base64");

    const response = await fetch(
      `${process.env.TTE_URL}api/user/status/${nik}`,
      {
        headers: { Authorization: `Basic ${auth}` },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return ActionResponses.success<{
      status_code: number;
      status:
        | "ISSUE"
        | "EXPIRED"
        | "RENEW"
        | "WAITING_FOR_VERIFICATION"
        | "NEW"
        | "NO_CERTIFICATE"
        | "NOT_REGISTERED"
        | "SUSPEND"
        | "REVOKE";
      message: string;
    }>(await response.json());
  } catch (error) {
    console.error("E-Sign Error:", error);
    return ActionResponses.serverError("Verify NIK failed");
  }
}
