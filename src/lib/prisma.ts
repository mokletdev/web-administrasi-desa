import { PrismaClient } from "@prisma/client";

// Extend the NodeJS Global interface to include the prisma instance.
declare global {
  // Prevent TypeScript from throwing errors on the global prisma property.
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV !== "production") {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
} else {
  prisma = new PrismaClient();
}

export default prisma;
