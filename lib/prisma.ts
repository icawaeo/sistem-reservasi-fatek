import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

interface CustomNodeJSGlobal {
  prisma: PrismaClient;
}

declare const global: CustomNodeJSGlobal;

const connectionString = process.env.DATABASE_URL || "";

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const prisma =
  global.prisma ||
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["query"] : [],
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;