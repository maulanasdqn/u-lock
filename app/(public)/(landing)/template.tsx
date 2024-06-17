import { Navbar } from "@/components/ui/navbar";
import { FC, PropsWithChildren } from "react";

const LandingTemplate: FC<PropsWithChildren> = (props) => {
  return (
    <main className="w-full flex flex-col items-center bg-sky-50 font-sans">
      <Navbar />
      {props.children}
    </main>
  );
};

export default LandingTemplate;
