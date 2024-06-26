import { FC, PropsWithChildren, ReactElement } from "react";

const AuthTemplate: FC<PropsWithChildren> = (props): ReactElement => {
  return (
    <section className="flex items-center justify-center w-full bg-gray-100 h-full min-h-screen px-6">
      <div className="md:w-1/3 w-full h-auto min-h-1/3 p-6 rounded-lg bg-white shadow-md">
        {props.children}
      </div>
    </section>
  );
};

export default AuthTemplate;
