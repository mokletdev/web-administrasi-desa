"use server";
import { getServerSession } from "@/lib/next-auth";
import { ActionResponse, ActionResponses } from "@/types/actions";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

export async function getUserServices(): Promise<
  ActionResponse<Array<{ name: string; id: string }>>
> {
  try {
    const session = await getServerSession();

    if (!session?.user) return notFound();

    const {
      user: { id: userId },
    } = session;

    const services = await prisma.administrativeService.findMany({
      select: { name: true, id: true },
      where: {
        administrativeUnit: {
          OR: [
            { users: { some: { id: userId } } },
            {
              children: {
                some: {
                  OR: [
                    { users: { some: { id: userId } } },
                    { children: { some: { users: { some: { id: userId } } } } },
                  ],
                },
              },
            },
          ],
        },
      },
    });

    return ActionResponses.success(services);
  } catch (error) {
    console.log("Error in getUserServices: ", error);
    return ActionResponses.serverError();
  }
}
