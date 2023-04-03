import React from "react";

const SecurityInsights = () => {
  return (
    <div className="w-[1024px] mx-auto max-w-full my-10 px-4">
      <h1 className="font-semibold text-[32px] text-[#313131] ">
        Security Insights
      </h1>
      <p className="text-xl mb-4">
        Review and manage potential security risks and vulnerabilities in your
        IT infrastructure.
      </p>

      {/*  */}
      <div className="grid md:grid-cols-2 grid-cols-1 border p-8 rounded-md">
        <div className="">
          <h2 className="text-xl font-semibold">Perform initial scan</h2>
          <p className="py-6 font-normal">
            Map your attack surface and identify potential security risks,
            vulnerabilities, or insecure configurations.
          </p>
          <button className="btn btn-sm btn-primary rounded-md border-0 capitalize font-light text-white">
            Start Scan
          </button>
        </div>
        <div className=" flex items-center justify-end">
          <img
            className="max-w-full w-[260px]"
            src="https://static.dash.cloudflare.com/bf7dd6ac35a28501dbf5.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SecurityInsights;
