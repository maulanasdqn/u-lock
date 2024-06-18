"use server";
import { hashPassword } from "@/libs/hash";
import { schema, TRegisterForm } from "../_entities/schema";
import { db } from "@/drizzle/connection";
import { users } from "@/drizzle/schema";
import { sendLinkVerifyEmail } from "@/libs/email";
import { generateToken } from "@/libs/token";

export const registerAction = async (data: TRegisterForm) => {
  const validatedData = schema.safeParse(data);

  if (!validatedData.success) {
    return {
      error: {
        message: validatedData.error.flatten().fieldErrors,
      },
    };
  }

  const { fullname, password, email } = validatedData.data;

  const hashedPassword = await hashPassword(password);

  const response = await db
    .insert(users)
    .values({ fullname, email, password: hashedPassword })
    .returning({ id: users.id })
    .then((data) => data.at(0));

  const token = await generateToken({ id: String(response?.id), email });

  const emailResponse = await sendLinkVerifyEmail({ email, token });

  if (emailResponse.error) {
    return {
      error: {
        message: emailResponse.error.message,
      },
    };
  }

  return {
    success: {
      message:
        "Registrasi Berhasil, email dengan link verifikasi sudah di kirim, silahkan cek",
    },
  };
};
