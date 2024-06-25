"use client";
import type { FC, ReactElement } from "react";
import { Button } from "@/components/ui/button";

export const CheckSection: FC = (): ReactElement => {
  return (
    <section className="bg-sky-100 h-auto items-center w-full flex flex-col">
      <div className="w-full flex flex-col gap-y-4 justify-between items-center max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-y-3 justify-center items-center h-full">
          <h1 className="lg:text-5xl text-3xl font-bold text-sky-800">
            Cek IMEI Kamu Sekarang
          </h1>
          <p className="text-lg text-gray-500">
            Silahkan masukan IMEI handphone kamu untuk melakukan pengencekan
          </p>
        </div>
        <div className="flex w-1/2 justify-start">
          <input
            type="text"
            className="w-full bg-sky-50 placeholder:text-gray-300 p-3 border-2 border-sky-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-none"
            placeholder="Masukan IMEI"
            required
          />
        </div>
        <div className="flex w-fit justify-start">
          <Button variant="secondary">Cek Sekarang</Button>
        </div>
      </div>
    </section>
  );
};
