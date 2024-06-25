import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { FC, ReactElement } from "react";

export const HeroSection: FC = (): ReactElement => {
  return (
    <div className="w-full flex flex-col h-auto max-w-7xl px-6">
      <div className="w-full h-[500px] flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 mt-8">
        <div className="md:w-1/2 w-full flex flex-col gap-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-sky-400">
            {" "}
            U-Lock
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-500">
            Buka perangkat anda hanya dengan IMEI
          </h2>
          <span className="text-lg font-semibold text-sky-500">
            Harga Promo mulai dari : Rp 100.000
          </span>
          <Link href="/register" className="w-fit">
            <Button>Coba Sekarang</Button>
          </Link>
        </div>
        <Image
          priority
          src="/images/banner.png"
          width={500}
          height={500}
          alt="Banner Image"
        />
      </div>
    </div>
  );
};
