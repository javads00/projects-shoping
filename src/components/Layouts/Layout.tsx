import React, { ReactElement } from "react";
import { Header } from "../Header/Header";
import { useAppSelector } from "@/hooks/index";
import { Footer } from "../Footer";

export const AppLayout: React.FC<{
  children: ReactElement | Array<ReactElement>;
}> = ({ children }) => {
  const user = useAppSelector((state) => state.userReducer);
  return (
    <>
      <Header user={user} />
      <main className="min-h-screen overflow-hidden">{children}</main>
      <Footer />
    </>
  );
};
