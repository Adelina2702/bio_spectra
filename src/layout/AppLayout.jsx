import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const AppLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
