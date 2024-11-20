"use server";

import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";
import { Readable } from "stream";
import { ActionResponse, ActionResponses } from "@/types/actions";

const CREDENTIALS = {
  type: process.env.GOOGLE_TYPE,
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT_URL,
};

export async function convertToPdf(
  data: FormData,
): Promise<ActionResponse<string>> {
  const file = data.get("content") as File | null;
  if (!file) {
    return ActionResponses.badRequest("Content does not exist!", "content");
  }

  try {
    const auth = new GoogleAuth({
      credentials: CREDENTIALS,
      scopes: ["https://www.googleapis.com/auth/drive.file"],
    });

    const drive = google.drive({ version: "v3", auth });

    const driveResponse = await drive.files.create({
      requestBody: {
        name: "file.docx",
        mimeType: "application/vnd.google-apps.document",
      },
      media: {
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        body: Readable.from(Buffer.from(await file.arrayBuffer())),
      },
    });

    const documentId = driveResponse.data.id;
    if (!documentId) throw new Error("Failed to upload to Google Drive");

    const pdfResponse = await drive.files.export(
      {
        fileId: documentId,
        mimeType: "application/pdf",
      },
      {
        responseType: "arraybuffer",
      },
    );

    await drive.files.delete({
      fileId: documentId,
    });

    const bufferData = Buffer.from(pdfResponse.data as ArrayBuffer);

    return ActionResponses.success(bufferData.toString("base64"));
  } catch (error) {
    console.error("Conversion error:", error);
    return ActionResponses.serverError();
  }
}

export async function validateMimeType(file: File) {
  const allowedTypes = [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
  ];

  if (!allowedTypes.includes(file.type)) {
    throw new Error("Invalid file type. Please upload a DOCX file.");
  }
}
