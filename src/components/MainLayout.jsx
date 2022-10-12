import React from "react";
import { Outlet } from "react-router-dom";

// components
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <div id="main-content">
        <Outlet />
      </div>
      <MainFooter />
    </>
  );
};

export default MainLayout;
