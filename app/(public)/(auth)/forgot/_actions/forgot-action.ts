"use server";

import { sendLinkResetEmail } from "@/libs/email";
import { generateToken } from "@/libs/token";
import { TForgotForm } from "../_entities/schema";

export const forgotAction = async (data: TForgotForm) => {
  const token = await generateToken({ email: data.email, id: "" });
  const emailResponse = await sendLinkResetEmail({ token, email: data.email });

  if (emailResponse.error) {
    return {
      error: {
        message: emailResponse.error.message,
      },
    };
  }

  return {
    success: {
      message: "Email Berhasil terkirim!",
    },
  };
};
