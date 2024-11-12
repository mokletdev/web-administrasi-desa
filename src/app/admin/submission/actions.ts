"use server";

import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";
import { ActionResponse, ActionResponses } from "@/types/actions";
import { Prisma, Submission } from "@prisma/client";

type submissionDetails = Prisma.SubmissionGetPayload<{
  include: {
    fields: { include: { field: true } };
    approvals: true;
    signRequests: true;
  };
}>;

export const getSubmissions = async (): Promise<
  ActionResponse<Submission[]>
> => {
  try {
    const session = await getServerSession();

    if (!session?.user) {
      return ActionResponses.unauthorized();
    }

    const { user } = session;

    const userLevel = await prisma.user.findUnique({
      where: { id: user.id },
      select: { cityId: true, subDistrictId: true, districtId: true },
    });

    const submissions = await prisma.submission.findMany({
      where: {
        OR: [
          // CITY level: requires both DISTRICT and SUBDISTRICT approval
          {
            AND: [
              // Check if submission has signs required at CITY level
              {
                form: {
                  document: {
                    signs: {
                      some: {
                        position: {
                          level: "CITY",
                        },
                      },
                    },
                  },
                },
              },
              // Check if all lower level admins have approved
              {
                signRequests: {
                  every: {
                    AND: [
                      {
                        status: "SIGNED",
                        user: {
                          OR: [
                            {
                              role: "DISTRICT_ADMIN",
                            },
                            {
                              role: "SUBDISTRICT_ADMIN",
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              },
              {
                cityId: userLevel?.cityId,
              },
            ],
          },

          // DISTRICT level: requires SUBDISTRICT approval
          {
            AND: [
              // Check if submission has signs required at DISTRICT level
              {
                form: {
                  document: {
                    signs: {
                      some: {
                        position: {
                          level: "DISTRICT",
                        },
                      },
                    },
                  },
                },
              },
              // Check if subdistrict admin has approved
              {
                signRequests: {
                  every: {
                    status: "SIGNED",
                    user: {
                      role: "SUBDISTRICT_ADMIN",
                    },
                  },
                },
              },
              {
                districtId: userLevel?.districtId,
              },
            ],
          },

          // SUBDISTRICT level: no lower level approval needed
          {
            AND: [
              {
                form: {
                  document: {
                    signs: {
                      some: {
                        position: {
                          level: "SUBDISTRICT",
                        },
                      },
                    },
                  },
                },
              },
              {
                subDistrictId: userLevel?.subDistrictId,
              },
            ],
          },

          // Check user's administrative access
          {
            OR: [
              {
                user: {
                  id: user.id,
                  role: {
                    in: ["CITY_ADMIN", "DISTRICT_ADMIN", "SUBDISTRICT_ADMIN"],
                  },
                },
              },
            ],
          },
        ],
      },
      include: {
        approvals: true,
        signRequests: true,
        form: { select: { document: { select: { title: true } } } },
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

export const handleApproval = async (
  submissionId: string,
  status: "ACCEPT" | "REJECT",
): Promise<ActionResponse<{ id: string }>> => {
  try {
    const session = await getServerSession();

    if (!session?.user) {
      return ActionResponses.unauthorized();
    }

    const { user } = session;

    let approval = await prisma.approval.findFirst({
      where: { submissionId, approvedById: user.id },
    });

    if (!approval) {
      approval = await prisma.approval.create({
        data: {
          approvedById: user.id,
          submissionId,
          status: status === "ACCEPT" ? "APPROVED" : "REJECTED",
        },
      });
    } else {
      await prisma.approval.update({
        where: { id: approval.id },
        data: { status: status === "ACCEPT" ? "APPROVED" : "REJECTED" },
      });
    }

    const signs = await prisma.sign.findMany({
      include: { position: { select: { level: true } } },
      where: {
        document: { form: { submissions: { some: { id: submissionId } } } },
      },
    });
    const approvals = await prisma.approval.findMany({
      select: { approvedBy: { select: { role: true } } },
      where: { submissionId, status: { in: ["APPROVED", "REJECTED"] } },
    });

    const notApproved =
      signs.findIndex(
        (sign) =>
          approvals.findIndex((approve) =>
            approve.approvedBy?.role.includes(sign.position.level),
          ) === -1,
      ) !== -1;

    if (!notApproved) {
      await prisma.submission.update({
        where: { id: submissionId },
        data: { status: "READY_FOR_SIGNATURE" },
      });
    }

    return ActionResponses.success({ id: approval.id });
  } catch (error) {
    console.error("Error getting requests:", error);
    return ActionResponses.serverError();
  }
};
//   submissionId: string,
//   status: "ACCEPT" | "REJECT",
// ): Promise<ActionResponse<{ id: string }>> => {
//   try {
//     const session = await getServerSession();

//     if (!session?.user) {
//       return ActionResponses.unauthorized();
//     }

//     const { user } = session;

//     const submission = await prisma.submission.findUnique({
//       where: { id: submissionId },
//       include: {
//         form: {
//           include: {
//             document: {
//               include: {
//                 signs: {
//                   include: {
//                     position: true
//                   }
//                 }
//               }
//             }
//           }
//         },
//         approvals: {
//           include: {
//             approvedBy: true
//           }
//         },
//         signRequests: {
//           include: {
//             user: true
//           }
//         }
//       }
//     });

//     if (!submission) {
//       return ActionResponses.notFound("Submission not found");
//     }

//     let approval = await prisma.approval.findFirst({
//       where: { submissionId, approvedById: user.id },
//     });

//     if (!approval) {
//       approval = await prisma.approval.create({
//         data: {
//           approvedById: user.id,
//           submissionId,
//           status: status === "ACCEPT" ? "APPROVED" : "REJECTED",
//         },
//       });
//     } else {
//       await prisma.approval.update({
//         where: { id: approval.id },
//         data: { status: status === "ACCEPT" ? "APPROVED" : "REJECTED" },
//       });
//     }

//     // Check approvals from all administrative levels
//     const signRequests = submission.signRequests;

//     // Check each level's approval status
//     const cityApproval = signRequests.some(
//       sr => sr.user.role === "CITY_ADMIN" && sr.status === "SIGNED"
//     );
//     const districtApproval = signRequests.some(
//       sr => sr.user.role === "DISTRICT_ADMIN" && sr.status === "SIGNED"
//     );
//     const subdistrictApproval = signRequests.some(
//       sr => sr.user.role === "SUBDISTRICT_ADMIN" && sr.status === "SIGNED"
//     );

//       console.log("------------------------");
//       console.log("✅ ALL LEVELS HAVE APPROVED THIS SUBMISSION");
//       console.log("------------------------");

//       await prisma.submission.update({
//         where: { id: submissionId },
//         data: { status: "SIGNED" }
//       });

//     return ActionResponses.success({ id: approval.id });
//   } catch (error) {
//     console.error("Error handling approval:", error);
//     return ActionResponses.serverError();
//   }
// };

type SignStatus = "ACCEPT" | "REJECT";
type DbSignStatus = "SIGNED" | "REJECTED";

const mapSignStatus = (status: SignStatus): DbSignStatus => {
  return status === "ACCEPT" ? "SIGNED" : "REJECTED";
};

const getOrCreateSignRequest = async (
  userId: string,
  submissionId: string,
  status: DbSignStatus,
) => {
  const existingSign = await prisma.signRequest.findFirst({
    where: { submissionId, userId },
  });

  await prisma.submission.update({
    where: { id: submissionId },
    data: { status: "REJECTED" },
  });

  if (existingSign) {
    return prisma.signRequest.update({
      where: { id: existingSign.id },
      data: { status },
    });
  }

  return prisma.signRequest.create({
    data: { userId, submissionId, status },
  });
};

const getPendingSignRequests = async (submissionId: string) => {
  const signs = await prisma.sign.findMany({
    where: {
      document: { form: { submissions: { some: { id: submissionId } } } },
    },
    include: { position: { include: { officials: true } } },
  });

  const officialUserIds = signs
    .map((item) => item.position.officials.map((org) => org.userId))
    .flat();

  return prisma.signRequest.findMany({
    where: {
      userId: { in: officialUserIds },
      status: { not: "SIGNED" },
    },
  });
};

const updateSubmissionStatus = async (submissionId: string) => {
  return prisma.submission.update({
    where: { id: submissionId },
    data: { status: "APPROVED" },
  });
};

export const handleSign = async (
  submissionId: string,
  status: SignStatus,
): Promise<ActionResponse<{ id: string }>> => {
  try {
    const session = await getServerSession();

    if (!session?.user) {
      return ActionResponses.unauthorized();
    }

    const dbStatus = mapSignStatus(status);
    const signRequest = await getOrCreateSignRequest(
      session.user.id,
      submissionId,
      dbStatus,
    );

    const pendingSignRequests = await getPendingSignRequests(submissionId);

    if (pendingSignRequests.length === 0) {
      await updateSubmissionStatus(submissionId);
    }

    return ActionResponses.success({ id: signRequest.id });
  } catch (error) {
    console.error("Error handling sign request:", error);
    return ActionResponses.serverError();
  }
};

export const getSubmissionDetails = async (
  id: string,
): Promise<ActionResponse<submissionDetails>> => {
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

    return ActionResponses.success(submission);
  } catch (error) {
    console.error("Error getting requests:", error);
    return ActionResponses.serverError();
  }
};
