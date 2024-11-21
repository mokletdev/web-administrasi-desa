"use server";

import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";
import { ActionResponse, ActionResponses } from "@/types/actions";
import { AdministrativeLevel, Prisma } from "@prisma/client";

type Submission = Prisma.SubmissionGetPayload<{
  include: {
    approvals: true;
    signRequests: true;
  };
}>[];

export const getSubmissionsForOfficial = async (): Promise<
  ActionResponse<Submission>
> => {
  try {
    const session = await getServerSession();

    if (!session?.user) {
      return ActionResponses.unauthorized();
    }

    const { user } = session;

    const submissions = await prisma.submission.findMany({
      where: {
        template: { signs: { some: { Official: { user: { id: user.id } } } } },
        status: "READY_FOR_SIGNATURE",
      },
      include: {
        approvals: true,
        signRequests: true,
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

export const getSubmissions = async (): Promise<
  ActionResponse<
    Prisma.ServiceRequestGetPayload<{
      include: {
        submissions: true;
      };
    }>[]
  >
> => {
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

    const submissions = await prisma.serviceRequest.findMany({
      where: {
        admnistrativeService: {
          administrativeUnit: {
            OR: [
              { administrativeLevel: userLevel?.unit?.administrativeLevel },
              {
                parents: {
                  some: {
                    OR: [
                      {
                        administrativeLevel:
                          userLevel?.unit?.administrativeLevel,
                      },
                      {
                        parents: {
                          some: {
                            administrativeLevel:
                              userLevel?.unit?.administrativeLevel,
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
      include: {
        submissions: true,
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
  registerNumber: string,
): Promise<ActionResponse<{ id: string }>> => {
  try {
    const session = await getServerSession();

    if (!session?.user) {
      return ActionResponses.unauthorized();
    }

    const { user } = session;

    const userDb = await prisma.user.findUnique({
      where: { id: user.id },
      select: { unit: { select: { administrativeLevel: true } } },
    });

    const request = await prisma.serviceRequest.findUnique({
      where: { id: serviceRequestId },
      include: {
        submissions: { where: { template: { level: userDb?.unit as any } } },
      },
    });

    const submissionsId = request?.submissions.map((item) => ({ id: item.id }));

    await prisma.submission.updateMany({
      where: { OR: submissionsId },
      data: { status: status === "ACCEPT" ? "APPROVED" : "REJECTED" },
    });

    return ActionResponses.success({ id: serviceRequestId });
  } catch (error) {
    console.error("Error getting requests:", error);
    return ActionResponses.serverError();
  }
};

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

  if (status === "REJECTED")
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
    .map((item) => item.position.officials.map((org) => org.userId!))
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

    return ActionResponses.success(submission);
  } catch (error) {
    console.error("Error getting requests:", error);
    return ActionResponses.serverError();
  }
};
