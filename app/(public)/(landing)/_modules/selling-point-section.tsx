import { Card, TCard } from "@/components/ui/card";
import { FC, ReactElement } from "react";

const contentCard: Array<TCard> = [
  {
    title: "Evaluasi Status Ponsel",
    content:
      "Ketahui kondisi Jaringan ponsel Kamu dengan cepat melalui pemeriksaan status yang mudah digunakan.",
  },
  {
    title: "Dapatkan Analisis Instan",
    content:
      "Dapatkan rekomendasi yang dipersonalisasi berdasarkan IMEI ponsel Anda, dianalisis dengan teknologi canggih U-Lock.",
  },
  {
    title: "Temukan Solusi Terbaik",
    content:
      "Temukan opsi terbaik untuk unlock IMEI ponsel Kamu yang aman dan sesuai dengan kebutuhan Kamu.",
  },
  {
    title: "Pelajari Lebih Lanjut",
    content:
      "Akses informasi dan panduan yang terpercaya tentang cara unlock IMEI ponsel Kamu dengan aman dan efektif.",
  },
];

export const SellingPointSection: FC = (): ReactElement => {
  return (
    <section className="bg-sky-100 h-auto items-center w-full flex flex-col">
      <div className="flex flex-col items-start gap-y-6 h-full max-h-2xl w-full justify-start px-6 py-20 max-w-7xl">
        <div className="w-full lg:gap-y-6 gap-y-4 flex flex-col justify-center h-full mt-8">
          <h1 className="lg:text-5xl leading-10 sm:text-3xl text-2xl font-bold text-sky-700 w-full">
            Apa yang bisa <span className="text-sky-900">dilakukan</span>
          </h1>
          <p className="lg:text-xl text-lg text-sky-700 font-sans">
            Berikut fitur yang kami tawarkan untuk Anda
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 lg:grid-rows-2 gap-7 w-full">
          {contentCard.map((data, index) => (
            <Card key={index} title={data.title} content={data.content} />
          ))}
        </div>
      </div>
    </section>
  );
};
