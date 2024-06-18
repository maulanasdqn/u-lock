"use server";

import { sendLinkVerifyEmail } from "@/libs/email";
import { TSuccess } from "../_entities/type";
import { generateToken } from "@/libs/token";

export const resendEmail = async (data: Omit<TSuccess, "token">) => {
  const token = await generateToken({ email: data.email, id: "" });
  const emailResponse = await sendLinkVerifyEmail({ email: data.email, token });

  if (emailResponse.error) {
    return {
      error: {
        message: emailResponse.error.message,
      },
    };
  }

  return {
    success: {
      message: "Berhasil Mengirim ulang email verifikasi",
    },
  };
};
