import type { FC, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const CTASection: FC = (): ReactElement => {
  return (
    <section className="bg-sky-100 h-[500px] items-center w-full flex flex-col">
      <div className="w-full flex md:flex-row flex-col gap-y-4 justify-between items-start gap-x-6 max-w-7xl px-6 py-12">
        <Image
          priority
          src="/images/cta.png"
          width={500}
          height={500}
          alt="CTA Image"
        />
        <div className="flex flex-col gap-y-3 justify-center items-center h-full">
          <h1 className="lg:text-5xl text-3xl font-bold text-sky-800">
            Akses Tanpa Batas untuk Ponselmu
          </h1>
          <p className="text-lg text-gray-500">
            Solusi Aman untuk Unlock IMEI Kamu. Mulai sekarang dan nikmati
            kebebasan penuh dengan ponsel Kamu!
          </p>
          <div className="flex w-full justify-start">
            <Link href="/register" className="w-fit">
              <Button variant="secondary">Mari Buktikan</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
