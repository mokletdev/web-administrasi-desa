"use server";

import { ActionResponse, ActionResponses } from "@/types/actions";
import prisma from "@/lib/prisma";
import {
  formatDate,
  mapImagePositionToDocx,
  normalizeVariableName,
} from "@/lib/utils";
import { ImageRun, Paragraph, PatchType, TextRun, patchDocument } from "docx";
import { getPenduduk } from "./dbSistemDesa";

export async function printDoc(
  submissionId: string,
): Promise<ActionResponse<Buffer>> {
  // try {
  const submission = await prisma.submission.findUnique({
    where: {
      id: submissionId,
    },
    include: {
      user: { select: { administrativeUnitId: true } },
      fields: { include: { field: { include: { fieldType: true } } } },
      template: {
        include: {
          signs: true,
          AdministrativeService: {
            include: {
              administrativeUnit: true,
            },
          },
        },
      },
      signRequests: {
        include: {
          official: {
            select: {
              name: true,
              user: {
                select: { name: true, unit: { select: { name: true } } },
              },
            },
          },
        },
      },
      approvals: { select: { registerNumber: true } },
    },
  });

  const templateLevel = submission?.template.level;

  const findLetterHead = await prisma.administrativeUnit.findFirst({
    where: {
      administrativeLevel: templateLevel,
      OR: [
        {
          id: submission?.template.AdministrativeService.administrativeUnitId,
        },
        {
          parents: {
            some: {
              OR: [
                {
                  id: submission?.template.AdministrativeService
                    .administrativeUnitId,
                },
                {
                  parents: {
                    some: {
                      id: submission?.template.AdministrativeService
                        .administrativeUnitId,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    },
    select: { letterhead: true },
  });

  const letterhead = findLetterHead?.letterhead;

  // signs: {
  //   include: {
  //     Official: { include: { unit: { select: { name: true } } } },
  //   },
  // },

  if (!submission) return ActionResponses.notFound("submission not found");
  // if (!submission.template.AdministrativeService.administrativeUnit.letterhead)
  //   return ActionResponses.badRequest("Letterhead unit belum diset!");

  const bufferDocx = Buffer.from(submission.template.content, "base64");

  let patches: any = {
    no_surat: {
      type: PatchType.PARAGRAPH,
      children: [new TextRun(submission.approvals[0]?.registerNumber || "-")],
    },
  };

  if (letterhead !== null && letterhead !== undefined) {
    patches["kop_surat"] = {
      type: PatchType.DOCUMENT,
      children: [
        new Paragraph({
          children: [
            new ImageRun({
              type: "jpg",
              data: letterhead,
              floating: {
                allowOverlap: false,
                wrap: {
                  type: 1,
                },
                horizontalPosition: {
                  align: "center",
                },
                verticalPosition: {
                  align: "inside",
                  offset: 100,
                },
              },
              transformation: {
                height: 100,
                width: 750,
              },
            }),
          ],
        }),
      ],
    };
  }

  const manualSigns = submission.template.signs.filter(
    (sign) => sign.image !== null,
  );

  if (manualSigns.length > 0)
    patches["manual_sign"] = {
      type: PatchType.DOCUMENT,
      children: manualSigns.map((manualSign) =>
        mapImagePositionToDocx({
          bottom: manualSign.coordY,
          left: manualSign.coordX,
          width: manualSign.size,
          height: manualSign.size,
          imageBase64: manualSign.image!,
        }),
      ),
    };

  for (const sign of submission.signRequests) {
    const normal = normalizeVariableName(sign.official?.name ?? "-");

    patches[`tte_${normal}`] = {
      type: PatchType.PARAGRAPH,
      children: [new TextRun(sign.official?.user?.name ?? "-")],
    };

    patches[`tte_${normal}_tgl`] = {
      type: PatchType.PARAGRAPH,
      children: [new TextRun(formatDate(sign.signedAt))],
    };

    patches[`tgl_surat`] = {
      type: PatchType.PARAGRAPH,
      children: [new TextRun(formatDate(sign.signedAt))],
    };

    patches[`tte_${normal}_location`] = {
      type: PatchType.PARAGRAPH,
      children: [new TextRun(sign.official?.user?.unit?.name ?? "Belum TTE")],
    };
  }

  const nik = submission.fields.find((field) => field.field.label === "NIK");
  const penduduk = nik?.value ? await getPenduduk(nik?.value) : undefined;
  if (penduduk?.success) {
    for (const data in penduduk.data) {
      const value = penduduk.data[data] ?? "-";

      const formatedValue = value instanceof Date ? formatDate(value) : value;
      patches[data] = {
        type: PatchType.PARAGRAPH,
        children: [new TextRun(formatedValue)],
      };
    }
  }
  // console.log(patches);

  for (const field of submission.fields.filter(
    (item) => item.field.fieldType.baseType !== "file",
  )) {
    const normal = normalizeVariableName(
      field.field.label || field.field.fieldType.label,
    );

    patches[normal] = {
      type: PatchType.PARAGRAPH,
      children: [new TextRun(field.value ?? "-")],
    };
  }

  for (const field of submission.fields) {
    const normal = normalizeVariableName(
      field.field.label || field.field.fieldType.label,
    );

    patches[normal] = {
      type: PatchType.PARAGRAPH,
      children: [new TextRun(field.value)],
    };
  }

  const doc = await patchDocument({
    outputType: "nodebuffer",
    data: bufferDocx,
    patches,
  });

  return ActionResponses.success(doc);
  // } catch (error) {
  //   console.log("Error in printDoc:", error);
  //   return ActionResponses.serverError();
  // }
}
