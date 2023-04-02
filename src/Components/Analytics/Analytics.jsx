import React from "react";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";

const Analytics = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d449.83646259081604!2d88.64141591059979!3d25.581921855731164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb539969647079%3A0x1c5d225e26b2f085!2sb%20Technologies!5e0!3m2!1sen!2sbd!4v1680319728640!5m2!1sen!2sbd";
  return (
    <div className="max-w-full w-[1220px] mx-auto mt-10 px-4">
      <div className="">
        <h2 className="md:text-3xl text-lg font-bold">
          All sites for Mdmasude7@gmail.com's Account
        </h2>
        <div className="md:flex block justify-end gap-5 mt-10">
          <Link className="flex gap-2 text-primary hover:underline">
            <BsDownload />
            <span className="text-center">
              Download data for: All sites for account, <br />
              Previous 7 days
            </span>
          </Link>
          <select className="select select-bordered w-full max-w-xs focus:outline-primary ease-in duration-100">
            <option>Previous 24 hours</option>
            <option>Previous 7 days</option>
            <option>Previous 30 days</option>
            <option>Custom range</option>
          </select>
        </div>

        {/* gird  */}

        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 justify-items-center md:justify-items-start mt-10">
          <div className="">
            <p className="text-[14px]">Requests</p>
            <h2 className="text-2xl font-semibold">0</h2>
          </div>
          <div className="">
            <p className="text-[14px]">Bandwidth</p>
            <h2 className="text-2xl font-semibold">0 B</h2>
          </div>
          <div className="">
            <p className="text-[14px]">Visits</p>
            <h2 className="text-2xl font-semibold">0</h2>
          </div>
          <div className="">
            <p className="text-[14px]">Page views</p>
            <h2 className="text-2xl font-semibold">0</h2>
          </div>
        </div>

        {/* google map not a mapbox  */}
        <div className="grid md:grid-cols-2 grid-cols-1 mt-10 gap-3">
          <div className="">
            <iframe
              className="w-full h-full min-h-[500px] "
              src={mapSrc}
              frameborder="0"
            ></iframe>
          </div>
          <div className="">
            <div className="grid grid-cols-2 justify-items-center">
              <p className="font-bold">Requests</p>
              <p className="font-bold">Bandwidth</p>
            </div>
            <div className="py-5 border-b text-center">No Data</div>
            <div className="py-7 border-b text-center"></div>
            <div className="py-7 border-b text-center"></div>
            <div className="py-7 border-b text-center"></div>
            <div className="py-7 border-b text-center"></div>
            <div className="py-7 border-b text-center"></div>
            <div className="py-7 border-b text-center"></div>
            <div className="py-7 border-b text-center"></div>
            <div className="py-7 border-b text-center"></div>
            <div className="py-7 border-b text-center"></div>
            <div className="py-7 border-b text-center"></div>
            <div className="py-7 border-b text-center"></div>
            <div className="py-7 border-b text-center"></div>
          </div>
        </div>

        {/* Security, Cache, Errors, Network */}
        <div className=" ">
          {/* 1 */}
          <div className=" border mt-10 p-6  rounded-md">
            <h1 className="text-xl font-semibold mb-2">Security</h1>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  ">
              <div className="">
                <p className="text-[14px]">Encrypted requests</p>
                <h2 className="text-2xl font-semibold">0</h2>
              </div>
              <div className="">
                <p className="text-[14px]">Encrypted requests rate</p>
                <h2 className="text-2xl font-semibold">0 %</h2>
              </div>
              <div className="">
                <p className="text-[14px]">Encrypted bandwidth</p>
                <h2 className="text-2xl font-semibold">0 B</h2>
              </div>
              <div className="">
                <p className="text-[14px]">Encrypted bandwidth rate</p>
                <h2 className="text-2xl font-semibold">0 %</h2>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className=" border mt-10 p-6  rounded-md">
            <h1 className="text-xl font-semibold mb-2">Cache</h1>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  ">
              <div className="">
                <p className="text-[14px]">Cached requests</p>
                <h2 className="text-2xl font-semibold">0</h2>
              </div>
              <div className="">
                <p className="text-[14px]">Cached requests rate</p>
                <h2 className="text-2xl font-semibold">0 %</h2>
              </div>
              <div className="">
                <p className="text-[14px]">Cached bandwidth</p>
                <h2 className="text-2xl font-semibold">0 B</h2>
              </div>
              <div className="">
                <p className="text-[14px]">Cached bandwidth rate</p>
                <h2 className="text-2xl font-semibold">0 %</h2>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className=" border mt-10 p-6  rounded-md">
            <h1 className="text-xl font-semibold mb-2">Errors</h1>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  ">
              <div className="">
                <p className="text-[14px]">4xx errors</p>
                <h2 className="text-2xl font-semibold">0</h2>
              </div>
              <div className="">
                <p className="text-[14px]">4xx error rate</p>
                <h2 className="text-2xl font-semibold">0 %</h2>
              </div>
              <div className="">
                <p className="text-[14px]">5xx errors</p>
                <h2 className="text-2xl font-semibold">0 B</h2>
              </div>
              <div className="">
                <p className="text-[14px]">5xx error rate</p>
                <h2 className="text-2xl font-semibold">0 %</h2>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className=" border   my-10  rounded-md">
            <h1 className="text-xl font-semibold mb-2 pl-6 pt-6">Network</h1>
            <div className="grid sm:grid-cols-3  grid-cols-1">
              <div className=" border-r p-6 ">
                <p className="text-[14px] font-semibold">
                  Client HTTP Version Used
                </p>
                <p className="">No data</p>
              </div>
              <div className=" border-r p-6 ">
                <p className="text-[14px] font-semibold">
                  Traffic Served Over SSL
                </p>
                <p className="">No data</p>
              </div>
              <div className=" border-r p-6 ">
                <p className="text-[14px] font-semibold">Top Content Types</p>
                <p className="">No data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
