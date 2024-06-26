"use server";

import { db } from "@/drizzle/connection";
import { TLoginForm } from "../_entities/schema";
import { users } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { verifyPassword } from "@/libs/hash";
import { createSession } from "@/libs/session";

export const loginAction = async (data: TLoginForm) => {
  const userData = await db
    .select()
    .from(users)
    .where(eq(users.email, data.email))
    .then((data) => data?.at(0));

  const isPasswordMatch = await verifyPassword(
    data.password,
    String(userData?.password),
  );

  if (!isPasswordMatch) {
    return {
      error: {
        message: "Email atau kata sandi tidak valid",
      },
    };
  }

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
