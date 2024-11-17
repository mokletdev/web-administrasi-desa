import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  await prisma.administrativeUnit.create({
    data: {
      name: "Dinas Kesehatan Kabupaten Malang",
      administrativeLevel: "CITY",
      children: {
        create: [
          {
            name: "Kecamatan Klojen",
            administrativeLevel: "DISTRICT",
            children: {
              create: [
                {
                  name: "Kelurahan Kauman",
                  administrativeLevel: "SUBDISTRICT",
                },
              ],
            },
          },
          {
            name: "Kecamatan Kepanjen",
            administrativeLevel: "DISTRICT",
            children: {
              create: [
                {
                  name: "Kelurahan Cepokomulyo",
                  administrativeLevel: "SUBDISTRICT",
                },
                {
                  name: "Kelurahan Ardirejo",
                  administrativeLevel: "SUBDISTRICT",
                },
              ],
            },
          },
          {
            name: "Kecamatan Bululawang",
            administrativeLevel: "DISTRICT",
            children: {
              create: [
                {
                  name: "Kelurahan Wonokerto",
                  administrativeLevel: "SUBDISTRICT",
                },
                {
                  name: "Kelurahan Krebet",
                  administrativeLevel: "SUBDISTRICT",
                },
              ],
            },
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
