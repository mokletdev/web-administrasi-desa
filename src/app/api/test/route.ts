import prisma from "@/lib/prisma";

export async function GET() {
  prisma.administrativeUnit.create({
    data: {
      administrativeLevel: "CITY",
      name: "Kota Batu",
      children: {
        create: [{ name: "Kocak", administrativeLevel: "DISTRICT" }],
      },
    },
  });
}
