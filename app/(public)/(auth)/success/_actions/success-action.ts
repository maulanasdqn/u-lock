"use server";

import { db } from "@/drizzle/connection";
import { users } from "@/drizzle/schema";
import { TSuccess } from "../_entities/type";
import { eq } from "drizzle-orm";
import { verifyToken } from "@/libs/token";

export const successAction = async (data: TSuccess) => {
  try {
    const verify = await verifyToken(data.token);

    if (!verify.email) {
      return {
        error: {
          message: "Gagal memverifikasi email",
        },
      };
    }

    await db
      .update(users)
      .set({ emailVerified: new Date() })
      .where(eq(users.email, data.email));
  } catch (err) {
    return {
      error: {
        message: err,
      },
    };
  }
};
