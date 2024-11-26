import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { patchDocument, PatchType, TextRun } from "docx";
import { normalizeVariableName } from "@/lib/utils";
import { printDoc } from "@/app/actions/print-doc";
import { convertToPdf, convertToPdfV1 } from "@/app/actions/docx-pdf";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    const { id } = await params;
    const data = await prisma.submission.findUnique({
      where: { id },
      include: {},
    });

    const b64toBlob = (base64: string, type = "application/octet-stream") =>
      fetch(`data:${type};base64,${base64}`).then((res) => res.blob());

    let doc: Blob;
    if (data?.status !== "SIGNED") {
      const print = await printDoc(id);
      if (!print.data)
        return NextResponse.json(
          {
            status: 500,
          },
          { status: 500 },
        );

      const printBlob = new Blob([print.data]);
      const printPdf = await convertToPdfV1(printBlob);
      console.log(printPdf);

      doc = await b64toBlob(printPdf.data!, "application/pdf");
    } else {
      let newestDoc: any = await prisma.signRequest.findFirst({
        where: { submissionId: id },
        select: { signedPdf: true },
        orderBy: { signedAt: "desc" },
      });

      if (!newestDoc?.signedPdf)
        newestDoc = await prisma.submission.findUnique({
          where: { id },
          select: { signedPdf: true },
        });

      doc = await b64toBlob(newestDoc?.signedPdf!, "application/pdf");
    }

    if (!data)
      return NextResponse.json(
        {
          status: 404,
        },
        { status: 404 },
      );

    const formData = new FormData();
    formData.append(
      "file",
      new File([doc as unknown as BlobPart], `${data.id}.docx`),
    );

    const tryGetPdf = await (
      await fetch("https://pdf.benspace.xyz/", {
        body: formData,
        method: "POST",
      })
    ).blob();

    const response = new NextResponse(tryGetPdf);
    response.headers.set("content-type", "application/pdf");
    return response;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { status: 500, message: "Internal server error!" },
      { status: 500 },
    );
  }
};
