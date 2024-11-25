"use server";

import { generateHash } from "@/lib/bcryptjs";
import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";
import { divisionLevelMap, levelMap } from "@/lib/utils";
import { ActionResponse, ActionResponses } from "@/types/actions";
import { User, UserRole } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function upsertUser(data: {
  id?: string;
  username: string;
  email: string;
  NIK?: string;
  name: string;
  password?: string;
  role: UserRole;
  administrativeUnitId?: string;
}): Promise<ActionResponse<User>> {
  const session = await getServerSession();

  if (!session) return ActionResponses.unauthorized();

  const { user: sessionUser } = session;
  if (!sessionUser) return ActionResponses.unauthorized();

  const user = await prisma.user.findUnique({
    where: { id: sessionUser.id },
    select: { role: true, unit: { select: { id: true } } },
  });

  if (!user)
    return ActionResponses.notFound(`User with ${sessionUser.email} not found`);

  const { id, username, email, NIK, password } = data;

  if (!id && !password)
    return ActionResponses.badRequest("Password is required", "password");

  const existingUser = await prisma.user.findFirst({
    where: { OR: [{ username }, { email }, { NIK }] },
    select: { username: true, email: true, NIK: true },
  });

  if (!id && existingUser) {
    let conflictField = "";

    if (existingUser.username === username) conflictField = "username";
    else if (existingUser.email === email) conflictField = "email";
    else if (existingUser.NIK === NIK) conflictField = "NIK";

    return ActionResponses.badRequest(
      `User already exists with the same ${conflictField}.`,
      conflictField,
    );
  }

  const upsertUserAction = id
    ? await prisma.user.update({
        where: { id },
        data: {
          ...data,
          administrativeUnitId:
            user.role === "SUBDISTRICT_ADMIN"
              ? user.unit?.id
              : data.administrativeUnitId,
          password: password ? generateHash(password) : undefined,
        },
      })
    : await prisma.user.create({
        data: {
          ...data,
          administrativeUnitId:
            user.role === "SUBDISTRICT_ADMIN"
              ? user.unit?.id
              : data.administrativeUnitId,
          password: generateHash(password!),
        },
      });

  revalidatePath("/admin/user");
  return ActionResponses.success(upsertUserAction);
}

export async function searchUnit(terms: string) {
  const units = await prisma.administrativeUnit.findMany({
    where: { name: { contains: terms } },
    select: { id: true, name: true, administrativeLevel: true },
    take: 10,
  });

  return units.map((unit) => ({
    label: levelMap[unit.administrativeLevel] + " " + unit.name,
    value: unit.id,
  }));
}
