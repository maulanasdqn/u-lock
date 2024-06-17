"use server";
import type { NextPage } from "next";
import type { ReactElement } from "react";
import { ForgotForm } from "./_modules/forgot-form";

const ForgotPage: NextPage = (): ReactElement => {
  return <ForgotForm />;
};

export default ForgotPage;
