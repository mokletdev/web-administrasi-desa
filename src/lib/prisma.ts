import { PrismaClient } from "@prisma/client";
import {
  PrismaClient as SistemDesa,
  Prisma as SistemDesaPrisma,
} from "@/../prisma/client/sistem-desa";

// Extend the NodeJS Global interface to include the prisma instance.
declare global {
  // Prevent TypeScript from throwing errors on the global prisma property.
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
  var sistemdesa: SistemDesa | undefined;
}

let prisma: PrismaClient;
let sistemdesa: SistemDesa;

if (process.env.NODE_ENV !== "production") {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  if (!global.sistemdesa) {
    global.sistemdesa = new SistemDesa({
      datasources: {
        db: {
          url: process.env.SISTEMDESA_DATABASE_URL,
        },
      },
    });
  }
  prisma = global.prisma;
  sistemdesa = global.sistemdesa;
} else {
  prisma = new PrismaClient();
  sistemdesa = new SistemDesa({
    datasources: {
      db: {
        url: process.env.SISTEMDESA_DATABASE_URL,
      },
    },
  });
}

export default prisma;
export { sistemdesa, SistemDesa as SistemDesaClient, SistemDesaPrisma };
