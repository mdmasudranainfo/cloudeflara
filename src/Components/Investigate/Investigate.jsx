import React from "react";
import { Link } from "react-router-dom";

const Investigate = () => {
  return (
    <div className="w-[1264px] max-w-full mx-auto px-4 mt-10 min-h-[411px]">
      <div className=" lg:flex block gap-10">
        <div className="lg:w-[70%] w-full max-w-full">
          <h1 className="text-[32px] font-semibold">Investigate</h1>
          <p className="text-2xl">
            Investigate threats using data from the Cloudflare network.
          </p>

          <div className="border p-4 rounded-md ">
            <div className=" sm:flex block  gap-4">
              <input
                type="text"
                placeholder="1.1.1.1"
                className="input input-bordered w-full border focus:outline-primary ease-in duration-100 h-9 mb-4"
              />
              <button className="btn btn-sm btn-primary rounded-md border-0   capitalize font-light text-white">
                Start Scan
              </button>
            </div>
            <p className="text-sm font-light sm:mt-0 mt-4">
              Search by IP address, domain name, URL or AS number. You have 100
              API requests remaining this month.
            </p>
          </div>
        </div>

        <div className="lg:w-[30%] block w-full lg:mt-0 mt-5">
          <h1 className="text-xl font-semibold">Search</h1>
          <p className="text-sm font-light">
            Search by IP address, domain name, URL or AS number.
          </p>
          <Link className="text-primary underline font-light block mt-2">
            Analyze
          </Link>

          <p className="text-sm font-light mt-1">
            Analyze javascript files for malicious content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Investigate;
