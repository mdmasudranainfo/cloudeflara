import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoAddCircle, IoSearchOutline } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MenuContext } from "../../Context/AllContext";

const NavBar = () => {
  const { setOpenMenu, openMenu } = useContext(MenuContext);

  // console.log(openMenu);

  return (
    <div className="flex justify-between items-center bg-white border-b">
      <div className="">
        {/* logo */}
        <div className="flex items-center gap-3 ">
          {/* icone */}

          <span
            onClick={() => setOpenMenu(!openMenu)}
            className="cursor-pointer lg:hidden block"
          >
            <AiOutlineMenu className="text-3xl" />
          </span>

          <div className=" flex flex-col items-end">
            <img
              className="w-14 max"
              src="https://i.ibb.co/StLCSfT/Cloudflare-Logo.png"
              alt=""
            />
            <h3 className="font-bold md:block hidden">Cloud Flara</h3>
          </div>
        </div>
      </div>
      <div className="">
        <ul className="flex text-[15px]">
          <li className="p-5 hover:bg-[#F2F2F2] lg:block hidden">
            <Link className="flex items-center gap-1">
              <IoAddCircle className="text-2xl" /> <span>Add Site</span>
            </Link>
          </li>
          <li className="p-5 hover:bg-[#F2F2F2] lg:block hidden">
            <Link className="flex items-center gap-1">
              <IoSearchOutline className="text-2xl" />
            </Link>
          </li>
          <li className="p-5 hover:bg-[#F2F2F2] lg:block hidden">
            <Link className="flex items-start ">
              <span>Support</span>
              <MdOutlineArrowDropDown className="text-3xl mt-[-5px]" />
            </Link>
          </li>
          <li className="p-5 hover:bg-[#F2F2F2]">
            <Link className="flex items-start ">
              <span>English US</span>
              <MdOutlineArrowDropDown className="text-3xl mt-[-5px]" />
            </Link>
          </li>
          <li className="p-5 hover:bg-[#F2F2F2]">
            <Link className="flex items-start ">
              <span>
                <FaUserAlt className="text-xl" />
              </span>
              <MdOutlineArrowDropDown className="text-3xl mt-[-10px]" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
