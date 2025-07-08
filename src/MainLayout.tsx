import React, { PropsWithChildren } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-[1440px] mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
