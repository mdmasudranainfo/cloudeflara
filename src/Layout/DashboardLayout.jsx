import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardMenu from "../Components/DashboardMenu/DashboardMenu";
import Footer from "../Components/Footer/Footer";
import { MenuContext } from "../Context/AllContext";

const DashboardLayout = () => {
  const { openMenu } = useContext(MenuContext);
  return (
    <div className="relative overflow-hidden ">
      <div
        className={`${
          openMenu ? "block" : "hidden"
        } lg:ml-[-500px] ml-0 w-[260px]=  bg-white z-50 absolute top-0 left-0 `}
      >
        <DashboardMenu className="" />
      </div>
      <div className="flex ">
        {/* dashboard menu  */}

        <div
          className={`bg-white  lg:block hidden top-0 left-0  lg:w-[260px] w-[50px] h-screen `}
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
