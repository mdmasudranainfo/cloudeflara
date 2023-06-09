import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdKeyboardDoubleArrowRight, MdWeb } from "react-icons/md";
import { ImEarth } from "react-icons/im";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { TfiReload } from "react-icons/tfi";
import { AiOutlineSafety } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";
import { MdAnalytics } from "react-icons/md";
import { BsSafe2 } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

import "./DashboardMenu.css";
import { MenuContext } from "../../Context/AllContext";

const DashboardMenu = () => {
  const { openText, setOpenText, Collapse, setCollapse } =
    useContext(MenuContext);
  console.log(Collapse);
  const ActiveClasses = ` overflow-hidden block m-4 mr-0 px-3 py-1 hover:bg-[#E9F7FB] text-[#0051c3] rounded-l-full decoration-dashed	hover:underline`;

  const parentActiveClasses = `p-2 my-2  hover:bg-[#E9F7FB] rounded-l-full flex items-center gap-2   decoration-dashed	hover:underline text-[#0051c3] `;
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
      to: "/DomainRegistration",

      items: [
        {
          title: "Manage Domains",
          to: "/DomainRegistration",
        },
      ],

      icone2: <MdOutlineArrowDropDown className="text-xl mt-[-5px]" />,
      icone: <ImEarth className="text-xl" />,
    },
    {
      title: "Analytics & Logs",
      collapsed: true,
      to: "/analytics",
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
      to: "/SecurityInsights",
      items: [
        {
          title: "Security Insights",
          to: "/SecurityInsights",
        },
        {
          title: "Infrastructure",
          to: "/Infrastructure",
        },
        {
          title: "Investigate",
          to: "/Investigate",
        },
      ],
      icone2: <MdOutlineArrowDropDown className="text-xl mt-[-5px]" />,
      icone: <BsSafe2 className="text-xl" />,
    },
    {
      title: "Turnstile",
      collapsed: true,
      to: "/TurnstileSites",
      items: [],
      // icone2: <MdOutlineArrowDropDown className="text-xl mt-[-5px]" />,
      icone: <TfiReload className="text-xl" />,
    },
    // {
    //   title: "Zero Trust",
    //   collapsed: true,
    //   items: [],
    //   // icone2: <MdOutlineArrowDropDown className="text-xl mt-[-5px]" />,
    //   icone: <AiOutlineSafety className="text-xl" />,
    // },
    {
      title: "Area 1",
      collapsed: true,
      to: "/Area",
      items: [],
      // icone2: <MdOutlineArrowDropDown className="text-xl mt-[-5px]" />,
      icone: <RiMailSendLine className="text-xl" />,
    },
  ]);

  //
  const dropdownElements = options.map((option, index) => {
    return (
      <div
        key={index}
        className={`${option?.title === "Turnstile" && "border-y"} pl-6`}
      >
        <NavLink
          to={option?.to}
          className={({ isActive }) =>
            isActive
              ? `${parentActiveClasses} ${
                  option?.items && "bg-[#ECF4FF] border-primary border"
                } }`
              : `${parentActiveClasses} `
          }
          onClick={() => {
            const newOptions = [...options];
            newOptions[index].collapsed = !option?.collapsed;
            setOptions(newOptions);
            setOpenText(false);
          }}
        >
          <span className=""> {option.icone}</span>
          <span className={`${openText ? "hidden" : "block"}`}>
            {" "}
            {option?.title}
          </span>
          <span className={`${openText ? "hidden" : "block"}`}>
            {" "}
            {option?.icone2}
          </span>
        </NavLink>
        {!option?.collapsed && (
          <ul className={`ml-4 ${openText ? "hidden" : "block"}`}>
            {option.items.map((item, index) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${ActiveClasses}  border border-r-0 bg-[#ECF4FF] border-primary`
                      : `${ActiveClasses} `
                  }
                  to={item?.to}
                  key={index}
                >
                  <span>{item?.title}</span>
                </NavLink>
              );
            })}
          </ul>
        )}
      </div>
    );
  });

  return (
    <div className="border border-t-0 font-light text-[14px] h-screen bg-white relative">
      <span className={`${openText ? "inline-block" : "hidden"} border-b`}>
        <div className={` rounded-full p-3 mx-3 mb-2  bg-[#ECF4FF] text-xl`}>
          MA
        </div>
      </span>
      <p className={`${openText ? "hidden" : "block"} p-4 border-b`}>
        mdmasude7@gmail.com
      </p>

      {/* manu items  */}
      {dropdownElements}

      <div className=" absolute bottom-20 left-0 w-full">
        <div
          onClick={() => setCollapse(!Collapse)}
          className={`${Collapse ? "hidden" : "block"} flex items-center mx-5`}
        >
          <MdKeyboardDoubleArrowLeft className="text-primary text-3xl font-light" />
          <span className={`${openText && "hidden"}`}> Collapse sidebar</span>
        </div>
        <div
          onClick={() => setCollapse(!Collapse)}
          className={`${Collapse ? "block" : "hidden"} flex items-center mx-5 `}
        >
          <MdKeyboardDoubleArrowRight className="text-primary text-3xl font-light" />
          <span>Expand sidebar</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
