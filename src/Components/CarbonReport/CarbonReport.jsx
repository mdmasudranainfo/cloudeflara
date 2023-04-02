import React from "react";
import { Link } from "react-router-dom";

const CarbonReport = () => {
  return (
    <div className="w-[1250px] max-w-full mx-auto px-4">
      <div className="">
        <h2 className="text-2xl my-10">Carbon Impact Report</h2>

        <p className="text-white bg-primary p-4">
          Based on the recency of this account's creation date, we do not have
          annual information available yet related to carbon impact.
        </p>

        <h1 className="font-bold text-5xl mt-10">
          <span className="text-[#228B49]">Go green </span> with Cloudflare
        </h1>
        <p className="my-3">
          Did you know Cloudflare already offers ways to help reduce your carbon
          impact? Check out some of our <br /> recommendations below and
          optimize your website in the process.
        </p>

        {/* gird card  */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          {/* 1 */}
          <div className=" border p-10  relative">
            <div className="flex justify-center ">
              <img
                className="max-w-full"
                src="https://static.dash.cloudflare.com/0bcb52e1315c5ddf95b8.svg"
                alt=""
              />
            </div>
            <h1 className="text-xl font-semibold my-4">
              Workers, Durable Objects, Pages
            </h1>
            <p>
              Use Workers, Durable Objects, or Pages to host your content.
              Cloudflare offsets carbon emissions by purchasing Renewable Energy
              Certificates to match 100% of the power used in all of our data
              centers and offices around the world (certified by Green Web
              Foundation).
            </p>
            <div className="text-end absolute bottom-5 right-10">
              <Link className="text-primary underline">Learn more</Link>
            </div>
          </div>
          {/* 2 */}

          <div className=" border p-10  relative">
            <div className="flex justify-center ">
              <img
                className="max-w-full"
                src="https://i.ibb.co/RvsTc3v/image.png"
                alt=""
              />
            </div>
            <h1 className="text-xl font-semibold my-4">Image Resizing</h1>
            <p>
              Use Cloudflare’s Image Resizing for visual content on your site.
              Properly resizing images reduces the energy it takes each of your
              end users to load a page, thus reducing downstream carbon
              emissions.
            </p>
            <div className="text-end absolute bottom-5 right-10">
              <Link className="text-primary underline">Learn more</Link>
            </div>
          </div>
          {/* 3 */}

          <div className=" border p-10  relative">
            <div className="flex justify-center ">
              <img
                className="max-w-full"
                src="https://i.ibb.co/0KqhC14/image.png"
                alt=""
              />
            </div>
            <h1 className="text-xl font-semibold my-4">Cloud Security</h1>
            <p>
              Use Cloudflare’s cloud security and performance services such as
              WAF, network firewall, and DDoS Mitigation. The more cloud
              services you use, the more of your on-premise boxes you can
              retire. Decommissioning hardware reduces your carbon footprint!
            </p>
            <div className="text-end absolute bottom-5 right-10">
              <Link className="text-primary underline">Learn more</Link>
            </div>
          </div>
        </div>

        {/*  */}
        <h1 className="text-[40px] mt-10">Other tips to go green</h1>
        <p className="">
          Outside of Cloudflare, there are other ways that you could start
          optimizing your website to reduce your carbon footprint. Learn about
          other ways to go green below.
        </p>

        <div className=" border p-4 mt-10">
          <h2 className="text-xl font-semibold">Website optimization</h2>
          <p>
            Design your website with sustainability in mind: not auto-playing
            videos, trimming down bulky Javascript, and avoiding custom fonts
            can all help reduce the energy that it takes to power your website.
          </p>
        </div>
        <div className=" border p-4 my-10">
          <h2 className="text-xl font-semibold">
            Purchase Renewable Energy Credits (RECs)
          </h2>
          <p>
            Offset your carbon usage: consider purchasing RECs to offset your
            domain’s carbon usage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarbonReport;
