"use server";

import { db } from "@/drizzle/connection";
import { TLoginForm } from "../_entities/schema";
import { users } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { createSession } from "@/libs/session";

export const loginAction = async (data: TLoginForm) => {
  const userData = await db
    .select()
    .from(users)
    .where(eq(users.email, data.email))
    .then((data) => data?.at(0));

  if (!userData) {
    return {
      error: {
        message: "Akun Tidak Ditemukan",
      },
    };
  }

  if (!userData?.emailVerified) {
    return {
      error: {
        message: "Akun Belum Terverifikasi",
      },
    };
  }

  await createSession(userData);

  return {
    success: {
      message: "Login Berhasil",
    },
  };
};
