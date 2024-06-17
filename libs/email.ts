"use server";
import { Resend } from "resend";

export type TSendLink = {
  email: string;
  token: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

export const sendLinkResetEmail = async (payload: TSendLink) =>
  await resend.emails.send({
    from: "noreply <verfication@noreply.msdqn.dev>",
    to: [payload.email],
    subject: "Tautan Atur Ulang Kata Sandi",
    text: `Silahkan klik Tautan berikut untuk mengatur ulang kata sandi anda ${appUrl}/reset/${payload.token}?email=${payload.email}`,
    tags: [
      {
        name: "category",
        value: "reset_password",
      },
    ],
  });

export const sendLinkVerifyEmail = async (payload: TSendLink) =>
  await resend.emails.send({
    from: "noreply <verfication@noreply.msdqn.dev>",
    to: [payload.email],
    subject: "Tautan Verifikasi Email",
    text: `Silahkan klik Tautan berikut untuk memverifikasi email anda ${appUrl}/success/${payload.token}?email=${payload.email}`,
    tags: [
      {
        name: "category",
        value: "reset_password",
      },
    ],
  });
