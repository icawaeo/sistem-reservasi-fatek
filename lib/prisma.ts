import { PrismaClient } from "@prisma/client";

interface CustomNodeJSGlobal {
  prisma: PrismaClient;
}

declare const global: CustomNodeJSGlobal;

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;