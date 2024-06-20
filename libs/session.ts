"use server";
import "server-only";
import { cookies } from "next/headers";
import { generateToken, verifyToken } from "./token";
import { redirect } from "next/navigation";

type TSession = {
  id: string;
  email: string;
};

const cookie = {
  name: "session",
  options: { httpOnly: true, secure: true, sameSite: "lax", path: "/" },
  duration: 60 * 60 * 24 * 1000,
} as const;

export const createSession = async (payload: TSession) => {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await generateToken(payload);
  cookies().set(cookie.name, session, { ...cookie.options, expires });
  redirect("/onboard");
};

export const verifySession = async () => {
  const token = cookies().get(cookie.name)?.value;
  const session = await verifyToken(String(token));

  if (!session.email) {
    redirect("/login");
  }

  return session;
};

export const deleteSession = async () => {
  cookies().delete(cookie.name);
  redirect("/login");
};
