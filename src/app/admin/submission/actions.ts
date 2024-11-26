"use server";

import { convertToPdfV1 } from "@/app/actions/docx-pdf";
import { printDoc } from "@/app/actions/print-doc";
import signPdf from "@/app/actions/sign-pdf";
import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";
import { divisionLevelIndex, levelMap } from "@/lib/utils";
import { ActionResponse, ActionResponses } from "@/types/actions";
import { AdministrativeLevel, ApprovalStatus, Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

type Submission = Prisma.ServiceRequestGetPayload<{
  select: {
    id: true;
    status: true;
    createdAt: true;
    done: true;
    name: true;
    user: { select: { name: true } };
    submissions: {
      select: {
        approvals: true;
        id: true;
        status: true;
        template: { select: { title: true } };
      };
    };
  };
}>[];

type SubmissionOfficial = Prisma.ServiceRequestGetPayload<{
  select: {
    id: true;
    status: true;
    createdAt: true;
    done: true;
    name: true;
    user: { select: { name: true } };
    submissions: {
      select: {
        signRequests: true;
        id: true;
        status: true;
        template: { select: { title: true } };
      };
    };
  };
}>[];

export const getSubmissionsForOfficial = async (): Promise<
  ActionResponse<SubmissionOfficial>
> => {
  try {
    const session = await getServerSession();

    if (!session?.user) {
      return ActionResponses.unauthorized();
    }

    const { user } = session;

    const userLevel = await prisma.user.findUnique({
      where: { id: user.id },
      select: { unit: { select: { administrativeLevel: true } } },
    });

    const administrativeLevels: Record<
      AdministrativeLevel,
      AdministrativeLevel[]
    > = {
      CITY: ["CITY"],
      DISTRICT: ["CITY", "DISTRICT"],
      SUBDISTRICT: ["CITY", "DISTRICT", "SUBDISTRICT"],
    };
    const level: AdministrativeLevel[] = administrativeLevels[
      userLevel?.unit?.administrativeLevel!
    ] || ["CITY", "DISTRICT", "SUBDISTRICT"];

    const submissions = await prisma.serviceRequest.findMany({
      where: {
        submissions: {
          some: {
            status: "READY_FOR_SIGNATURE",
            template: {
              signs: { some: { Official: { user: { id: user.id } } } },
            },
          },
        },
        levelNow: { in: level },
      },
      select: {
        id: true,
        status: true,
        createdAt: true,
        done: true,
        name: true,
        user: { select: { name: true } },
        submissions: {
          select: {
            signRequests: { where: { official: { userId: user.id } } },
            id: true,
            status: true,
            template: { select: { title: true } },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return ActionResponses.success(submissions);
  } catch (error) {
    console.error("Error getting requests:", error);
    return ActionResponses.serverError();
  }
};

export const getSubmissions = async (): Promise<ActionResponse<Submission>> => {
  try {
    const session = await getServerSession();

    if (!session?.user) {
      return ActionResponses.unauthorized();
    }

    const { user } = session;

    const userLevel = await prisma.user.findUnique({
      where: { id: user.id },
      select: { unit: true },
    });

    const administrativeLevels: Record<
      AdministrativeLevel,
      AdministrativeLevel[]
    > = {
      CITY: ["CITY"],
      DISTRICT: ["CITY", "DISTRICT"],
      SUBDISTRICT: ["CITY", "DISTRICT", "SUBDISTRICT"],
    };
    const level: AdministrativeLevel[] = administrativeLevels[
      userLevel?.unit?.administrativeLevel!
    ] || ["CITY", "DISTRICT", "SUBDISTRICT"];

    const submissions = await prisma.serviceRequest.findMany({
      where: {
        levelNow: { in: level },
        admnistrativeService: {
          administrativeUnit: {
            OR: [
              { users: { some: { id: user.id } } },
              {
                children: {
                  some: {
                    OR: [
                      {
                        users: { some: { id: user.id } },
                      },
                      {
                        children: {
                          some: {
                            users: { some: { id: user.id } },
                          },
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      select: {
        id: true,
        status: true,
        createdAt: true,
        done: true,
        name: true,
        user: { select: { name: true } },
        submissions: {
          select: {
            approvals: {
              where: {
                approvedBy: {
                  unit: {
                    administrativeLevel: userLevel?.unit?.administrativeLevel,
                  },
                },
              },
            },
            id: true,
            status: true,
            template: { select: { title: true } },
          },
        },
      },
    });

    return ActionResponses.success(submissions);
  } catch (error) {
    console.error("Error getting requests:", error);
    return ActionResponses.serverError();
  }
};

export const handleApproval = async (
  serviceRequestId: string,
  status: "ACCEPT" | "REJECT",
  registerNumber?: string,
  reason?: string,
): Promise<ActionResponse<{ id: string }>> => {
  // try {
  const session = await getServerSession();

  if (!session?.user) {
    return ActionResponses.unauthorized();
  }

  const { user } = session;

  const userDb = await prisma.user.findUnique({
    where: { id: user.id },
    select: { unit: { select: { administrativeLevel: true } } },
  });

  if (!userDb || !userDb.unit?.administrativeLevel) return notFound();

  const request = await prisma.serviceRequest.findUnique({
    where: { id: serviceRequestId },
    include: {
      admnistrativeService: { include: { administrativeUnit: true } },
      submissions: {
        where: { template: { level: userDb.unit.administrativeLevel } },
        include: {
          template: { include: { signs: { where: { image: null } } } },
        },
      },
    },
  });

  const approvals: Prisma.ApprovalCreateManyInput[] =
    request?.submissions.map((item) => ({
      submissionId: item.id,
      approvedById: user.id,
      registerNumber,
      status: (status === "ACCEPT" ? "APPROVED" : "REJECTED") as ApprovalStatus,
    })) ?? [];
  await prisma.approval.createMany({ data: approvals });

  let transaction = [];
  let noTTE = true;
  for (const submission of request?.submissions ?? []) {
    const signLength = submission.template.signs.length;
    let finalPdf;

    if (signLength !== 0) {
      noTTE = false;
    } else {
      const doc = await printDoc(submission.id);
      const pdfBlob = new Blob([doc.data as BlobPart]);
      finalPdf = await convertToPdfV1(pdfBlob);
    }

    transaction.push(
      prisma.submission.update({
        where: { id: submission.id },
        data: {
          signedPdf: finalPdf?.data,
          status:
            status === "ACCEPT"
              ? signLength !== 0
                ? "READY_FOR_SIGNATURE"
                : "SIGNED"
              : "REJECTED",
        },
      }),
    );
  }
  await prisma.$transaction(transaction);

  const next = getNextLevel(
    request?.levelNow,
    request?.admnistrativeService?.administrativeUnit.administrativeLevel,
    request?.admnistrativeService?.skipStep!,
  );

  let newStatus = `Menunggu Tanda Tangan di ${
    request?.levelNow ? levelMap[request?.levelNow] : ""
  }`;
  let level = request?.levelNow;

  if (status === "REJECT") {
    newStatus = `Ditolak TTE di ${
      request?.levelNow ? levelMap[request?.levelNow] : ""
    } (${reason})`;
  } else if (noTTE && next.nextLevel === null) newStatus = "Selesai";
  else if (noTTE && next.nextLevel) {
    level = next.nextLevel as AdministrativeLevel;
    newStatus = `Menunggu Operator ${next.nextLevel}`;
  }

  await prisma.serviceRequest.update({
    where: { id: serviceRequestId },
    data: {
      levelNow: level,
      status: newStatus,
      done: newStatus === "Selesai",
    },
  });

  revalidatePath("/", "layout");

  return ActionResponses.success({ id: serviceRequestId });
  // } catch (error) {
  //   console.error("Error getting requests:", error);
  //   return ActionResponses.serverError();
  // }
};

export const handleSign = async (
  serviceRequestId: string,
  status: "ACCEPT" | "REJECT",
  officialId: string,
  paraphrase: string,
  reason?: string,
): Promise<ActionResponse<{ id: string }>> => {
  // try {
  const session = await getServerSession();

  if (!session?.user) {
    return ActionResponses.unauthorized();
  }

  const { user } = session;

  const userDb = await prisma.user.findUnique({
    where: { id: user.id },
    select: { unit: { select: { administrativeLevel: true } } },
  });

  if (!userDb?.unit?.administrativeLevel) return notFound();

  const request = await prisma.serviceRequest.findUnique({
    where: { id: serviceRequestId },
    include: {
      admnistrativeService: { include: { administrativeUnit: true } },
      submissions: {
        include: {
          signRequests: { include: { official: true } },
          template: {
            include: {
              signs: { where: { image: null }, include: { Official: true } },
            },
          },
        },
        where: { template: { level: userDb.unit.administrativeLevel } },
      },
    },
  });

  const approvals: Prisma.SignRequestCreateManyInput[] =
    request?.submissions
      .filter(
        (item) =>
          item.template.signs.some((i) => i.Official.userId === user.id) &&
          !item.signRequests.some((i) => i.official.userId === user.id),
      )
      .map((item) => ({
        officialId,
        signedPdf: "-",
        submissionId: item.id,
        signedAt: new Date(),
      })) ?? [];

  await prisma.signRequest.createMany({ data: approvals });
  let doneAllTTE = true;
  if (request?.submissions) {
    for (let submission of request.submissions) {
      const signLength = submission.template.signs.length;
      const signedLength = submission.signRequests.length;
      const remainingSignatures = signLength - signedLength;
      console.log("REMAINS:", remainingSignatures);

      const availableForTTE =
        submission.template.signs.some(
          (sign) => sign.Official.userId === user.id,
        ) &&
        !submission.signRequests.some(
          (request) => request.official.userId === user.id,
        );

      const done = availableForTTE
        ? remainingSignatures <= 1
        : remainingSignatures === 0;

      if (!done) doneAllTTE = false;
      if (!availableForTTE) continue;

      let pdfFinal;
      if (status !== "REJECT") {
        const doc = await signPdf(submission.id, paraphrase);
        if (done) pdfFinal = doc.data?.toString("base64");
        const update = await prisma.signRequest.updateMany({
          where: {
            officialId,
            submissionId: submission.id,
          },
          data: { signedPdf: doc.data?.toString("base64") ?? "-" },
        });
      }
      await prisma.submission.update({
        where: { id: submission.id },
        data: {
          signedPdf: pdfFinal,
          status: status === "ACCEPT" ? "SIGNED" : "REJECTED",
        },
      });
    }
  }

  const next = getNextLevel(
    request?.levelNow,
    request?.admnistrativeService?.administrativeUnit.administrativeLevel,
    request?.admnistrativeService?.skipStep!,
  );

  let newStatus =
    doneAllTTE && next.nextLevel == null
      ? "Selesai"
      : `Menunggu Tanda Tangan di ${
          request?.levelNow ? levelMap[request?.levelNow] : ""
        }`;
  let level = request?.levelNow;

  console.log("DONEALL:", doneAllTTE);
  console.log("level:", next);
  console.log("condition:", doneAllTTE && next.nextLevel === null);

  if (doneAllTTE && next.nextLevel) {
    level = next.nextLevel as AdministrativeLevel;
    newStatus = `Menunggu Operator ${next.nextLevel}`;
  }

  if (status === "REJECT") {
    newStatus = `Ditolak TTE di ${
      request?.levelNow ? levelMap[request?.levelNow] : ""
    } (${reason})`;
  }

  console.log(newStatus);

  await prisma.serviceRequest.update({
    where: { id: serviceRequestId },
    data: {
      levelNow: level,
      status: newStatus,
      done: newStatus === "Selesai",
    },
  });

  revalidatePath("/", "layout");
  return ActionResponses.success({ id: serviceRequestId });
  // } catch (error) {
  //   console.error("Error getting requests:", error);
  //   return ActionResponses.serverError();
  // }
};

// type SignStatus = "ACCEPT" | "REJECT";
// type DbSignStatus = "SIGNED" | "REJECTED";

// const mapSignStatus = (status: SignStatus): DbSignStatus => {
//   return status === "ACCEPT" ? "SIGNED" : "REJECTED";
// };

// const getOrCreateSignRequest = async (
//   userId: string,
//   submissionId: string,
//   status: DbSignStatus,
// ) => {
//   const existingSign = await prisma.signRequest.findFirst({
//     where: { submissionId, userId },
//   });

//   if (status === "REJECTED")
//     await prisma.submission.update({
//       where: { id: submissionId },
//       data: { status: "REJECTED" },
//     });

//   if (existingSign) {
//     return prisma.signRequest.update({
//       where: { id: existingSign.id },
//       data: { status },
//     });
//   }

//   return prisma.signRequest.create({
//     data: { userId, submissionId, status },
//   });
// };

// const getPendingSignRequests = async (submissionId: string) => {
//   const signs = await prisma.sign.findMany({
//     where: {
//       document: { form: { submissions: { some: { id: submissionId } } } },
//     },
//     include: { position: { include: { officials: true } } },
//   });

//   const officialUserIds = signs
//     .map((item) => item.position.officials.map((org) => org.userId!))
//     .flat();

//   return prisma.signRequest.findMany({
//     where: {
//       userId: { in: officialUserIds },
//       status: { not: "SIGNED" },
//     },
//   });
// };

// const updateSubmissionStatus = async (submissionId: string) => {
//   return prisma.submission.update({
//     where: { id: submissionId },
//     data: { status: "APPROVED" },
//   });
// };

// export const handleSign = async (
//   submissionId: string,
//   status: SignStatus,
// ): Promise<ActionResponse<{ id: string }>> => {
//   try {
//     const session = await getServerSession();

//     if (!session?.user) {
//       return ActionResponses.unauthorized();
//     }

//     const dbStatus = mapSignStatus(status);
//     const signRequest = await getOrCreateSignRequest(
//       session.user.id,
//       submissionId,
//       dbStatus,
//     );

//     const pendingSignRequests = await getPendingSignRequests(submissionId);

//     if (pendingSignRequests.length === 0) {
//       await updateSubmissionStatus(submissionId);
//     }

//     return ActionResponses.success({ id: signRequest.id });
//   } catch (error) {
//     console.error("Error handling sign request:", error);
//     return ActionResponses.serverError();
//   }
// };

export const getSubmissionDetails = async (
  id: string,
): Promise<
  ActionResponse<
    Prisma.SubmissionGetPayload<{
      include: {
        fields: { include: { field: true } };
        approvals: true;
        signRequests: true;
      };
    }>
  >
> => {
  try {
    const submission = await prisma.submission.findUnique({
      where: { id },
      include: {
        fields: { include: { field: true } },
        approvals: true,
        signRequests: true,
      },
    });

    if (!submission) return ActionResponses.notFound("Submission not found");

    revalidatePath("/", "layout");
    return ActionResponses.success(submission);
  } catch (error) {
    console.error("Error getting requests:", error);
    return ActionResponses.serverError();
  }
};

function getNextLevel(
  currentLevel?: string,
  higherLevel?: string,
  skippedLevel?: string,
) {
  // Jika level sekarang adalah CITY, tidak bisa naik lagi
  if (currentLevel === "CITY") {
    return {
      canProceed: false,
      nextLevel: null,
      message: "Done",
    };
  }

  const currentIndex = divisionLevelIndex.indexOf(currentLevel as any);
  const higherIndex = divisionLevelIndex.indexOf(higherLevel as any);

  // Jika level sekarang masih dibawah level tertinggi
  if (currentIndex < higherIndex) {
    // Logika untuk menentukan level selanjutnya berdasarkan skippedLevel
    switch (skippedLevel) {
      case "SUBDISTRICT":
        if (currentLevel === "SUBDISTRICT") {
          return {
            canProceed: true,
            nextLevel: "Kecamatan",
            message: "Lompat ke DISTRICT karena SUBDISTRICT di-skip",
          };
        }
        break;

      case "DISTRICT":
        if (currentLevel === "DISTRICT") {
          return {
            canProceed: true,
            nextLevel: "Dinas",
            message: "Lompat ke CITY karena DISTRICT di-skip",
          };
        }
        break;

      case "SUBDISTRICT_DISTRICT":
        if (currentLevel === "SUBDISTRICT") {
          return {
            canProceed: true,
            nextLevel: "Dinas",
            message: "Lompat ke CITY karena semua level di-skip",
          };
        }
        break;
    }

    // Jika tidak ada skip atau level saat ini tidak terpengaruh skip
    return {
      canProceed: true,
      nextLevel: divisionLevelIndex[currentIndex + 1],
      message: `Lanjut ke level ${divisionLevelIndex[currentIndex + 1]}`,
    };
  }

  return {
    canProceed: false,
    nextLevel: null,
    message: "Done",
  };
}
