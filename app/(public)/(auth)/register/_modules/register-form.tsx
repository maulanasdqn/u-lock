"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { InputText } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const { control } = useForm();
  return (
    <form className="flex flex-col gap-y-4">
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
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <Checkbox />
          <span className="text-xs sm:text-sm font-semibold text-sky-700">
            Saya menerima Syarat dan Ketentuan
          </span>
        </div>
      </div>
      <Button disabled>Daftar Sekarang</Button>
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
