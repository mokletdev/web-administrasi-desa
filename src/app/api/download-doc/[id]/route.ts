import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { patchDocument, PatchType, TextRun } from "docx";
import { normalizeVariableName } from "@/lib/utils";
import { Blob } from "buffer";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    const { id } = await params;
    const data = await prisma.submission.findUnique({
      where: { id },
      include: {
        fields: { include: { field: { select: { label: true } } } },
        form: {
          include: { document: { select: { content: true, title: true } } },
        },
      },
    });

    if (!data || !data.form)
      return NextResponse.json(
        {
          status: 404,
        },
        { status: 404 },
      );

    const bufferDocx = Buffer.from(data.form.document.content, "base64");

    let patches: any = {};

    for (let i = 0; i < data.fields.length; i++) {
      const field = data.fields[i];
      const normal = normalizeVariableName(field.field.label);

      patches[normal] = {
        type: PatchType.PARAGRAPH,
        children: [new TextRun(field.value)],
      };
    }

    const doc = await patchDocument({
      outputType: "blob",
      data: bufferDocx,
      patches,
    });
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
