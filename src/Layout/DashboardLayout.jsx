import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardMenu from "../Components/DashboardMenu/DashboardMenu";
import Footer from "../Components/Footer/Footer";
import { MenuContext } from "../Context/AllContext";

const DashboardLayout = () => {
  const { openMenu, openText, setOpenText } = useContext(MenuContext);
  return (
    <div className="relative overflow-hidden ">
      <div
        className={`${
          openMenu ? "block" : "hidden"
        } lg:ml-[-500px] ml-0 w-[260px]  bg-white z-50 absolute top-0 left-0 `}
      >
        <DashboardMenu />
      </div>
      <div className="flex ">
        {/* dashboard menu  */}

        <div
          onMouseEnter={() => setOpenText(false)}
          // onMouseLeave={() => setOpenText(true)}
          className={`bg-white  lg:block hidden top-0 left-0 ${
            !openText ? "lg:w-[260px]" : "w-[80px] "
          }   h-screen `}
        >
          <DashboardMenu className="" />
        </div>
        {/* dashboard OUtlate  */}
        <div className="lg:w-[87%] w-[100%] ">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
