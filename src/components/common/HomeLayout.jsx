import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import HomeFooter from "./HomeFooter";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[60vh]">
        <Outlet />
      </div>
      <HomeFooter />
    </>
  );
};

export default HomeLayout;
