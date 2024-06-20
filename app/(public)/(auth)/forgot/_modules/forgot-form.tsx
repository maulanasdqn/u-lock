"use client";

import { Button } from "@/components/ui/button";
import { InputText } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { TForgotForm, schema } from "../_entities/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotAction } from "../_actions/forgot-action";
import { FC, ReactElement } from "react";

export const ForgotForm: FC = (): ReactElement => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TForgotForm>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await forgotAction(data);

    if (res.success) {
      alert(res.success.message);
    }

    if (res.error) {
      alert(res.error.message);
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
      <h1 className="font-semibold text-2xl mb-6 text-sky-400">
        Lupa Kata Sandi
      </h1>
      <div className="flex flex-col gap-y-8">
        <InputText
          required
          label="Alamat Email"
          type="email"
          control={control}
          name="email"
        />
      </div>
      <Button disabled={!isValid}>Kirim email</Button>
      <div className="w-full flex justify-center">
        <div className="text-xs sm:text-sm text-gray-500">
          Sudah ingat akun anda?{" "}
          <Link className="text-sky-700 text-xs sm:text-sm" href="/login">
            Masuk Disini
          </Link>
        </div>
      </div>
    </form>
  );
};
