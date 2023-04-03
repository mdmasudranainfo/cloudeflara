import React from "react";
import { Link } from "react-router-dom";

const TurnstileSites = () => {
  return (
    <div className="w-[1264px] max-w-full mx-auto px-4 mt-10 min-h-[411px]">
      <div className=" lg:flex block gap-10">
        <div className="lg:w-[70%] w-full max-w-full">
          <h1 className="text-[32px] font-semibold">Turnstile Sites</h1>
          <p className="font-light">
            Turnstile is Cloudflare’s smart CAPTCHA alternative. It can be
            embedded into any website without sending traffic through
            Cloudflare, and works without showing visitors a CAPTCHA.
          </p>

          {/*  */}
          <div className="border p-8 flex mt-4 rounded-md">
            <div className="md:block hidden">
              <img
                className="max-w-full"
                src="https://static.dash.cloudflare.com/f55265e313aa2eb090c6.svg"
                alt=""
              />
            </div>
            <div className="">
              <h1 className=" font-semibold">Get started</h1>
              <p className="py-3">
                Add a site to get started with Turnstile Analytics.{" "}
                <Link className="text-primary underline">
                  Migrate from a<br /> CAPTCHA Service
                </Link>
              </p>

              <button className="btn btn-sm btn-primary rounded-md border-0 capitalize font-light text-white">
                Add Site
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-[30%] block w-full lg:mt-0 mt-5">
          <h1 className="text-xl font-semibold">Documentation</h1>

          <Link className="text-primary underline font-light block mt-2 text-sm">
            Migrate from a CAPTCHA Service
          </Link>
          <Link className="text-primary underline font-light block mt-2 text-sm">
            Turnstile Developer Documentation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TurnstileSites;
