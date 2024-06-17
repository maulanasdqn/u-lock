"use client";

import { Button } from "@/components/ui/button";
import { InputText } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export const ResetForm = () => {
  const { control } = useForm();
  return (
    <form className="flex flex-col gap-y-4">
      <h1 className="font-semibold text-2xl mb-6 text-sky-400">
        Atur Ulang Kata Sandi
      </h1>
      <div className="flex flex-col gap-y-8">
        <InputText
          required
          label="Kata Sandi Baru"
          type="password"
          control={control}
          name="password"
        />
        <InputText
          required
          label="Konfirmasi Kata Sandi Baru"
          type="password"
          control={control}
          name="confirmPassword"
        />
        <div className="text-xs text-gray-500">
          Pastikan kata sandi anda :
          <ul className="list-disc px-6">
            <li>Minimal 8 karakter panjang.</li>
            <li>
              Mengandung kombinasi huruf besar, huruf kecil, angka, dan simbol.
            </li>
          </ul>
        </div>
      </div>
      <Button disabled>Atur Ulang</Button>
    </form>
  );
};
