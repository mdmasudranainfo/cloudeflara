import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardMenu from "../Components/DashboardMenu/DashboardMenu";
import Footer from "../Components/Footer/Footer";
import { MenuContext } from "../Context/AllContext";
import DashboardMenu2 from "../Components/DashboardMenu/DashboardMenu2";

const DashboardLayout = () => {
  const { openMenu, openText, setOpenText, Collapse, setCollapse } =
    useContext(MenuContext);

  const hoverEffect = () => {
    if (!Collapse) {
      setOpenText(false);
    }
  };
  const hoverEffect2 = () => {
    if (!Collapse) {
      setOpenText(true);
    }
  };
  return (
    <div className="relative overflow-hidden ">
      {/*  */}
      <div
        className={`${
          openMenu ? "block" : "hidden"
        } lg:ml-[-500px] ml-0 w-[260px]  bg-white z-50 absolute top-0 left-0 `}
      >
        <DashboardMenu2 />
      </div>

      {/*  */}
      <div className="flex ">
        {/* dashboard menu  */}

        <div
          onMouseEnter={hoverEffect}
          onMouseLeave={hoverEffect2}
          className={`bg-white  lg:block hidden top-0 left-0 parentMenu ${
            !openText ? "lg:w-[260px]" : "w-[80px] "
          }   h-screen `}
        >
          <DashboardMenu className="" />
        </div>
        {/* dashboard OUtlate  */}
        <div className="lg:w-[87%] w-[100%] overflow-scroll h-screen hide-scroll-bar">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
