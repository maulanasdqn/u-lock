import { Button } from "@/components/ui/button";
import { FC, ReactElement } from "react";
import Link from "next/link";

export const Navbar: FC = (): ReactElement => {
  return (
    <header className="w-full items-center justify-center max-w-7xl">
      <nav className="flex items-center justify-between flex-wrap bg-sky-50 px-3 py-6 md:p-6 w-full sticky top-0">
        <div className="flex items-center flex-shrink-0 text-white md:mr-6">
          <Link href="/" className="flex gap-x-4 items-center">
            <span className="text-2xl font-semibold text-sky-800">U-Lock</span>
          </Link>
        </div>
        <div className="md:flex hidden items-center flex-shrink-0 text-white md:mr-6 gap-x-10">
          <div className="flex gap-x-6 md:gap-x-10">
            <Link
              href={"/"}
              className="text-sm md:text-lg font-semibold hover:text-sky-600 text-sky-700"
            >
              Beranda
            </Link>
            <Link
              href={"/news"}
              className="text-sm md:text-lg font-semibold hover:text-sky-600 text-sky-700"
            >
              Buka IMEI Terblokir
            </Link>
            <Link
              href={"/articles"}
              className="text-sm md:text-lg font-semibold hover:text-sky-600 text-sky-700"
            >
              Cek IMEI
            </Link>
          </div>
          <div className="flex gap-x-4">
            <Link href="/login">
              <Button>Masuk</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
