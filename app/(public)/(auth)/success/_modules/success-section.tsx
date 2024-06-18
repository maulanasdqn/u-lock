"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { resendEmail } from "../_actions/resend-email-action";
import { useSearchParams } from "next/navigation";

export const SuccessSection: FC<{ isError: boolean }> = ({
  isError,
}): ReactElement => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const handleResendEmail = async () => {
    const res = await resendEmail({ email: String(email) });

    if (res.error) {
      alert(res.error.message);
    }

    if (res.success) {
      alert(res.success.message);
    }
  };
  return (
    <section className="flex flex-col gap-y-4">
      {isError ? (
        <>
          <h1 className="font-semibold text-2xl mb-6 text-red-400">
            Akun anda gagal di verifikasi
          </h1>
          <p>Silahkan melakukan pengajuan kirim ulang email</p>
          <Button variant={"secondary"} onClick={handleResendEmail}>
            Kirim Email baru
          </Button>
          <Link href="/login">
            <Button>Kembali Masuk</Button>
          </Link>
        </>
      ) : (
        <>
          <h1 className="font-semibold text-2xl mb-6 text-sky-400">
            Selamat Akun ada berhasil terverifikasi
          </h1>
          <p>Silahkan Masuk untuk Melanjutkan</p>
          <Link href="/login">
            <Button>Masuk</Button>
          </Link>
        </>
      )}
    </section>
  );
};
