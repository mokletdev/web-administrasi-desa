import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { AdministrativeLevel } from "@prisma/client";

type ServiceType = {
  id: string;
  administrativeUnit: {
    name: string;
    administrativeLevel: AdministrativeLevel;
  };
  name: string;
};

type ResponseType = {
  kelurahan: ServiceType[];
  kecamatan: ServiceType[];
  kabupaten: ServiceType[];
};

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  try {
    const response: ResponseType = {
      kelurahan: [],
      kecamatan: [],
      kabupaten: [],
    };

    const tryFindService = await prisma.administrativeService.findMany({
      where: {
        administrativeUnit: {
          OR: [
            { oldId: id },
            {
              children: { some: { oldId: id } },
            },
          ],
        },
      },
      select: {
        id: true,
        administrativeUnit: {
          select: {
            administrativeLevel: true,
            name: true,
            oldId: true,
          },
        },
        name: true,
      },
    });

    response["kelurahan"] = tryFindService.filter(
      (i) => i.administrativeUnit.administrativeLevel === "SUBDISTRICT",
    );
    response["kecamatan"] = tryFindService.filter(
      (i) => i.administrativeUnit.administrativeLevel === "DISTRICT",
    );
    response["kabupaten"] = tryFindService.filter(
      (i) => i.administrativeUnit.administrativeLevel === "CITY",
    );

    return NextResponse.json(
      { data: response, message: "Success Get Service", status: 200 },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { status: 400, message: "Invalid" },
      { status: 400 },
    );
  }
};
