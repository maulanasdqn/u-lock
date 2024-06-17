"use server";
import type { NextPage } from "next";
import type { ReactElement } from "react";
import { RegisterForm } from "./_modules/register-form";

const RegisterPage: NextPage = (): ReactElement => {
  return <RegisterForm />;
};

export default RegisterPage;
