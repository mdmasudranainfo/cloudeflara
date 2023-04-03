import React from "react";
import { Link } from "react-router-dom";

const Area = () => {
  return (
    <div className="w-[1240px] max-w-full mx-auto my-10 mb-48 px-4">
      <h1 className="text-[32px] font-medium">
        Cloudflare Area 1 Email Security
      </h1>
      <p className="text-xl ">
        Secure user inboxes, adopt a proactive security posture, and save time
        on email security operations.
      </p>
      <div className="flex sm:flex-row flex-col justify-center gap-4 py-10">
        <button className="btn btn-sm btn-primary rounded-md border-0 capitalize font-light text-white">
          Launch dashboard
        </button>
        <button className="btn btn-sm  hover:bg-[#DCEBFF] hover:border-primary  rounded-md border-primary bg-white text-primary capitalize font-light ">
          Request trial
        </button>
        <button className="btn btn-sm  hover:bg-[#DCEBFF] hover:border-primary  rounded-md border-primary bg-white text-primary capitalize font-light ">
          Explore demo
        </button>
      </div>

      {/*  */}

      <div className="grid sm:grid-cols-2 grid-cols-1 p-5 items-center ">
        <div className="">
          <img src="https://i.ibb.co/M61P2dj/image.png" alt="" />
        </div>
        <div className="">
          <ul className="ul">
            <li className="my-2">
              <span className="font-semibold">
                Stop phishing attacks before damage.
              </span>{" "}
              Proactively hunt for attacker and discover email fraud attempts.
            </li>
            <li className="my-2">
              <span className="font-semibold">
                Fits into any email security stack.
              </span>{" "}
              Deploy in minutes without any hardware, agents, or appliances.
            </li>
            <li className="my-2">
              <span className="font-semibold">
                Configure SPF, DKIM and DMARC.
              </span>{" "}
              <br />
              <Link className="text-primary underline">
                Use the Email Security DNS Wizard
              </Link>{" "}
              to protect your organization through SPF, DKIM and DMARC policies.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Area;
