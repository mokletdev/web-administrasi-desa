import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

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

    if (!data)
      return NextResponse.json(
        {
          status: 404,
        },
        { status: 404 },
      );

    const url = process.env.URL;
    return NextResponse.redirect(
      `https://pdf.benspace.xyz/?url=${url}/api/download-doc/pdf/${id}`,
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return NextResponse.json(
      { status: 500, message: "Internal server error!", e },
      { status: 500 },
    );
  }
};
