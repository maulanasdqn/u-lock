"use server";
import type { NextPage } from "next";
import type { ReactElement } from "react";
import { ResetForm } from "../_modules/reset-form";

const ResetPage: NextPage = (): ReactElement => {
  return <ResetForm />;
};

export default ResetPage;
