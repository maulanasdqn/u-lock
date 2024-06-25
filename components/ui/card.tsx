import { FC, ReactElement, ReactNode } from "react";

export type TCard = {
  title: string;
  content: string;
  customHeader?: ReactNode;
};

export const Card: FC<TCard> = (props): ReactElement => {
  return (
    <div className="w-auto flex flex-col gap-y-4 h-auto bg-sky-50 shadow-md rounded px-5 py-7">
      {props.customHeader}
      <h1 className="text-xl font-bold text-sky-800">{props.title}</h1>
      <p className="text-[16px] text-sky-700 font-sans">{props.content}</p>
    </div>
  );
};
