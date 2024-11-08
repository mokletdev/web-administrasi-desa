import { generateHash } from "@/lib/bcryptjs";
import prisma from "@/lib/prisma";
import { UserRole } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createAdminSchema = z.object({
  name: z.string().min(1).max(255),
  username: z.string().min(1).max(255),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum([
    UserRole.CITIZEN,
    UserRole.CITY_ADMIN,
    UserRole.DISTRICT_ADMIN,
    UserRole.SUBDISTRICT_ADMIN,
    UserRole.SUPERADMIN,
  ]),
  creation_password: z.string().min(1),
});

// Special route to create a Super Admin account
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const data = createAdminSchema.safeParse(body);
    if (!data.success) {
      return NextResponse.json(
        { status: 400, message: "Data is invalid!" },
        { status: 400 },
      );
    }

    const { email, username, name, password, role, creation_password } =
      data.data;

    if (creation_password !== process.env.CREATION_PASSWORD) {
      return NextResponse.json(
        { status: 403, message: "Creation password is invalid!" },
        { status: 403 },
      );
    }

    const createdAdmin = await prisma.user.create({
      data: { email, name, username, role, password: generateHash(password) },
    });

    return NextResponse.json(
      {
        status: 201,
        message: "User created successfully!",
        data: createdAdmin,
      },
      { status: 201 },
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return NextResponse.json(
      { status: 500, message: "Internal server error!" },
      { status: 500 },
    );
  }
};
