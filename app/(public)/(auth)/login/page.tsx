"use server";
import type { NextPage } from "next";
import type { ReactElement } from "react";
import { LoginForm } from "./_modules/login-form";

const LoginPage: NextPage = (): ReactElement => {
  return <LoginForm />;
};

export default LoginPage;
