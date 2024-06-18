"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InputText } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { TRegisterForm, schema } from "../_entities/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerAction } from "../_actions/register-action";

export const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TRegisterForm>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await registerAction(data);
    if (res.error) {
      alert(res.error.message);
    }

    if (res.success) {
      alert(res.success.message);
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
      <h1 className="font-semibold text-2xl mb-6 text-sky-400">
        Daftar untuk melanjutkan
      </h1>
      <div className="flex flex-col gap-y-8">
        <InputText
          required
          label="Nama Lengkap"
          type="text"
          control={control}
          name="fullname"
        />
        <InputText
          required
          label="Alamat Email"
          type="email"
          control={control}
          name="email"
        />
        <InputText
          required
          label="Kata Sandi"
          type="password"
          control={control}
          name="password"
        />
        <InputText
          required
          label="Konfirmasi Kata Sandi"
          type="password"
          control={control}
          name="confirmPassword"
        />
      </div>
      <Button disabled={!isValid}>Daftar Sekarang</Button>
      <div className="w-full flex justify-center">
        <div className="text-xs sm:text-sm text-gray-500">
          Sudah Mempunyai Akun?{" "}
          <Link className="text-sky-700 text-xs sm:text-sm" href="/login">
            Masuk Disini
          </Link>
        </div>
      </div>
    </form>
  );
};
