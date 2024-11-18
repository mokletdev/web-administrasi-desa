import { PrismaClient, AdministrativeLevel } from "@prisma/client";
import { readFileSync } from "fs";
import { join } from "path";

const prisma = new PrismaClient();

interface City {
  id: string;
  name: string;
}

interface District {
  id: string;
  city_id: string;
  name: string;
}

interface Subdistrict {
  id: string;
  district_id: string;
  name: string;
}

interface DinasTemplate {
  suffix: string;
  type?: string;
}

const DINAS_TEMPLATES: DinasTemplate[] = [
  { suffix: "Dinas Pendidikan dan Kebudayaan" },
  { suffix: "Dinas Kesehatan" },
  { suffix: "Dinas Sosial" },
] as const;

const BATCH_SIZE = 200;

async function loadJsonData<T>(filename: string): Promise<T[]> {
  try {
    const filePath = join(process.cwd(), "prisma/seeders/region", filename);
    const data = readFileSync(filePath, "utf-8");
    return JSON.parse(data) as T[];
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    throw new Error(`Failed to load ${filename}`);
  }
}

async function createDinasUnits(cities: City[]) {
  console.log("Creating dinas units...");
  const dinasMap = new Map<string, string[]>();

  try {
    const dinasUnits = cities.flatMap((city) =>
      DINAS_TEMPLATES.map((dinas) => ({
        name: `${dinas.suffix} ${city.name}`,
        administrativeLevel: "CITY",
        cityId: city.id,
      })),
    );

    for (let i = 0; i < dinasUnits.length; i += BATCH_SIZE) {
      const batch = dinasUnits.slice(i, i + BATCH_SIZE);
      const created = await prisma.$transaction(
        batch.map((unit) =>
          prisma.administrativeUnit.create({
            data: {
              name: unit.name,
              administrativeLevel: "CITY",
            },
            select: {
              id: true,
              name: true,
            },
          }),
        ),
      );

      batch.forEach((unit, index) => {
        const dinasIds = dinasMap.get(unit.cityId) || [];
        dinasIds.push(created[index].id);
        dinasMap.set(unit.cityId, dinasIds);
      });
    }

    return dinasMap;
  } catch (error) {
    console.error("Error creating dinas units:", error);
    throw error;
  }
}

async function createDistricts(
  districts: District[],
  dinasMap: Map<string, string[]>,
) {
  console.log("Creating districts...");
  const districtMap = new Map<string, string>();

  try {
    const districtUnits = districts.map((district) => ({
      name: district.name,
      administrativeLevel: "DISTRICT",
      parentIds: dinasMap.get(district.city_id) || [],
      originalId: district.id,
    }));

    for (let i = 0; i < districtUnits.length; i += BATCH_SIZE) {
      const batch = districtUnits.slice(i, i + BATCH_SIZE);
      const created = await prisma.$transaction(
        batch.map((unit) =>
          prisma.administrativeUnit.create({
            data: {
              name: unit.name,
              administrativeLevel: "DISTRICT",
              parents: {
                connect: unit.parentIds.map((id) => ({ id })),
              },
            },
            select: {
              id: true,
            },
          }),
        ),
      );

      batch.forEach((unit, index) => {
        districtMap.set(unit.originalId, created[index].id);
      });
    }

    return districtMap;
  } catch (error) {
    console.error("Error creating districts:", error);
    throw error;
  }
}

async function createSubdistricts(
  subdistricts: Subdistrict[],
  districtMap: Map<string, string>,
) {
  console.log("Creating subdistricts...");

  try {
    const validSubdistricts = subdistricts.filter((sub) =>
      districtMap.has(sub.district_id),
    );

    const subdistrictUnits = validSubdistricts.map((subdistrict) => ({
      name: subdistrict.name,
      administrativeLevel: "SUBDISTRICT",
      parentId: districtMap.get(subdistrict.district_id)!,
    }));

    for (let i = 0; i < subdistrictUnits.length; i += BATCH_SIZE) {
      const batch = subdistrictUnits.slice(i, i + BATCH_SIZE);
      await prisma.$transaction(
        batch.map((unit) =>
          prisma.administrativeUnit.create({
            data: {
              name: unit.name,
              administrativeLevel: "SUBDISTRICT",
              parents: {
                connect: [{ id: unit.parentId }],
              },
            },
          }),
        ),
      );
    }
  } catch (error) {
    console.error("Error creating subdistricts:", error);
    throw error;
  }
}

async function main() {
  console.log("Starting data seeding process...");

  try {
    const cities = await loadJsonData<City>("cities.json");
    const districts = await loadJsonData<District>("districts.json");
    const subdistricts = await loadJsonData<Subdistrict>("subdistricts.json");
    const dinasMap = await createDinasUnits(cities);
    const districtMap = await createDistricts(districts, dinasMap);
    await createSubdistricts(subdistricts, districtMap);

    console.log("Data seeding completed successfully");
  } catch (error) {
    console.error("Fatal error during seeding:", error);
    throw error;
  }
}

main()
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
