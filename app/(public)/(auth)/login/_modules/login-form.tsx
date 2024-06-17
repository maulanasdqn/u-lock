"use client";

import { Button } from "@/components/ui/button";
import { InputText } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const { control } = useForm();
  return (
    <form className="flex flex-col gap-y-4">
      <h1 className="font-semibold text-2xl mb-6 text-sky-400">
        Selamat Datang di U-Lock
      </h1>
      <div className="flex flex-col gap-y-8">
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
      </div>
      <div className="w-full flex justify-end">
        <Link
          className="text-xs sm:text-sm font-semibold text-sky-700"
          href="/forgot"
        >
          Lupa kata sandi?
        </Link>
      </div>
      <Button disabled>Masuk</Button>
      <div className="w-full flex justify-center">
        <div className="text-xs sm:text-sm text-gray-500">
          Belum Mempunyai Akun?{" "}
          <Link className="text-sky-700 text-xs sm:text-sm" href="/register">
            Daftar Disini
          </Link>
        </div>
      </div>
    </form>
  );
};
