"use server";
import { SuccessSection } from "../_modules/success-section";
import { successAction } from "../_actions/success-action";

type TPage = {
  params: { token: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};
const SuccessPage = async ({ params, searchParams }: TPage) => {
  const res = await successAction({
    token: params.token,
    email: String(searchParams?.email),
  });
  return <SuccessSection isError={!!res?.error} />;
};

export default SuccessPage;
