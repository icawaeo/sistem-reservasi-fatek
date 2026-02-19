import { UserType } from "@prisma/client";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      userType: UserType;
      identifier?: string | null;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    userType: UserType;
    identifier?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    userType: UserType;
    identifier?: string | null;
  }
}
