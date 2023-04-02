import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdWeb } from "react-icons/md";
import { ImEarth } from "react-icons/im";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { TfiReload } from "react-icons/tfi";
import { AiOutlineSafety } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";
import { MdAnalytics } from "react-icons/md";
import { BsSafe2 } from "react-icons/bs";

import "./DashboardMenu.css";

const DashboardMenu = () => {
  const [options, setOptions] = useState([
    {
      title: "Website",
      // collapsed: true,
      items: [],
      to: "/",
      icone: <MdWeb className="text-xl" />,
    },
    {
      title: "Domain Registration",
      collapsed: true,
      items: [
        {
          title: "Manage Domains",
        },
      ],
      to: "/DomainRegistration",
      icone2: <MdOutlineArrowDropDown className="text-xl mt-[-5px]" />,
      icone: <ImEarth className="text-xl" />,
    },
    {
      title: "Analytics & Logs",
      collapsed: true,
      items: [
        {
          title: "Account Analytics",
          to: "/analytics",
        },
        {
          title: "Web Analytics",
          to: "/WebAnalytics",
        },
        {
          title: "Carbon Impact Report",
          to: "/CarbonReport",
        },
      ],
      icone2: <MdOutlineArrowDropDown className="text-xl mt-[-5px]" />,
      icone: <MdAnalytics className="text-xl" />,
    },
    {
      title: "Security Center",
      collapsed: true,
      items: [
        {
          title: "Security Insights",
          to: "/analytics",
        },
        {
          title: "Infrastructure",
        },
        {
          title: "Investigate",
        },
      ],
      icone2: <MdOutlineArrowDropDown className="text-xl mt-[-5px]" />,
      icone: <BsSafe2 className="text-xl" />,
    },
    {
      title: "Turnstile",
      collapsed: true,
      items: [],
      // icone2: <MdOutlineArrowDropDown className="text-xl mt-[-5px]" />,
      icone: <TfiReload className="text-xl" />,
    },
    {
      title: "Zero Trust",
      collapsed: true,
      items: [],
      // icone2: <MdOutlineArrowDropDown className="text-xl mt-[-5px]" />,
      icone: <AiOutlineSafety className="text-xl" />,
    },
    {
      title: "Area 1",
      collapsed: true,
      items: [],
      // icone2: <MdOutlineArrowDropDown className="text-xl mt-[-5px]" />,
      icone: <RiMailSendLine className="text-xl" />,
    },
  ]);

  //
  const dropdownElements = options.map((option, index) => {
    return (
      <div key={index} className="">
        <NavLink
          to={option?.to}
          className="p-4 hover:bg-[#E9F7FB] rounded-l-full flex items-center gap-2   decoration-dashed	hover:underline text-[#002b67] "
          onClick={() => {
            const newOptions = [...options];
            newOptions[index].collapsed = !option?.collapsed;
            setOptions(newOptions);
          }}
        >
          <span> {option.icone}</span>
          <span className=" "> {option?.title}</span>
          <span className=" "> {option?.icone2}</span>
        </NavLink>
        {!option?.collapsed && (
          <ul>
            {option.items.map((item, index) => {
              return (
                <li
                  className="m-4 ml-8 px-3 py-1 hover:bg-[#E9F7FB] text-[#002b67] rounded-l-full decoration-dashed	hover:underline"
                  key={index}
                >
                  <NavLink to={item?.to}>{item?.title}</NavLink>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  });

  return (
    <div className="border text-[14px] h-screen ">
      <p className="p-5 border border-r-0">mdmasude7@gmail.com</p>

      {/* manu items  */}
      {dropdownElements}
    </div>
  );
};

export default DashboardMenu;
