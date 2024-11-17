import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { patchDocument, PatchType, TextRun } from "docx";
import { normalizeVariableName } from "@/lib/utils";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    const { id } = await params;
    const data = await prisma.submission.findUnique({
      where: { id },
      include: {
        fields: {
          include: {
            field: {
              select: { label: true, fieldType: { select: { label: true } } },
            },
          },
        },
        template: { select: { content: true, title: true } },
      },
    });

    if (!data)
      return NextResponse.json(
        {
          status: 404,
        },
        { status: 404 },
      );

    const bufferDocx = Buffer.from(data.template.content, "base64");

    let patches: any = {};

    for (const field of data.fields) {
      const normal = normalizeVariableName(
        field.field.label ?? field.field.fieldType.label,
      );

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

    const headers = new Headers();

    headers.set(
      "Content-Disposition",
      `attachment; filename=${data.template.title}.docx`,
    );

    return new NextResponse(doc, { status: 200, statusText: "OK", headers });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return NextResponse.json(
      { status: 500, message: "Internal server error!", e },
      { status: 500 },
    );
  }
};
