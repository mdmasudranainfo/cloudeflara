import React from "react";
import { BiDownArrow } from "react-icons/bi";

const WebAnalytics = () => {
  return (
    <div className="w-[800px] max-w-full mx-auto ">
      <div className="md:p-16 p-4 my-5 border">
        <h1 className="text-3xl font-semibold text-center">
          Get started with Web Analytics
        </h1>
        <p className="my-5 text-center font-light">
          See page views and visits for your website for free
        </p>

        {/* stepers */}

        <div className=" flex justify-evenly">
          <div className="flex items-center gap-1 text-sm font-light">
            <span className="bg-primary rounded-full text-white h-5 w-5 flex justify-center items-center">
              1
            </span>
            <p>Set up hostname</p>
          </div>

          <div className="flex items-center gap-1 text-sm font-light">
            <div className="border md:block hidden h-[1px] w-[30px]"></div>
            <span className="border rounded-full text-[#595959] h-5 w-5 flex justify-center items-center">
              2
            </span>
            <p>Installation</p>
          </div>
          <div className="flex items-center gap-1 text-sm font-light">
            <div className="border md:block hidden  h-[1px] w-[30px]"></div>
            <span className="border rounded-full text-[#595959] h-5 w-5 flex justify-center items-center">
              3
            </span>
            <p>Get Analytics</p>
          </div>
        </div>
        {/*  */}
        <div className="divider my-10"></div>
        {/*  */}

        <div className="">
          <p className="p-4 text-[#002b67] bg-[#ECF4FF] rounded-md border border-primary">
            Cloudflare does not track individual visitors.
          </p>
          <p className="p-4 ">
            Enter your website's hostname for Web Analytics.
          </p>
          <h2 className="mt-5 p-4">Set up hostname</h2>
          <p className="text-sm font-light pl-4">
            Enter your website's hostname or select from your existing websites
            on <br /> Cloudflare.
          </p>
          <div className="relative max-w-full w-[50%]">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mt-5 h-[2rem] rounded-sm pl-7 focus:outline-primary focus:border-primary ease-in duration-100"
            />
            <BiDownArrow className="absolute top-7 right-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAnalytics;
