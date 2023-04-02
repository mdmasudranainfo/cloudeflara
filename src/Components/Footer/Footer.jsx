import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t ">
      <div className="w-[1040px] mx-auto max-w-full px-4 ">
        <div className="grid md:grid-cols-5 grid-cols-1 mt-10 gap-2 text-[14px]">
          <div className="">
            <h2 className="font-semibold mb-2 text-[16px]">Contact</h2>
            <Link className="mb-2 block text-primary hover:underline">
              Contact support
            </Link>
            <Link className="mb-2 block text-primary hover:underline">
              Contact sales
            </Link>
            <Link className="mb-2 block ">Call sales: +1 (888) 993 5273</Link>

            <div className=" flex  gap-4 mt-5">
              <BsTwitter className="text-xl text-primary " />
              <BsFacebook className="text-xl text-primary " />
              <BsLinkedin className="text-xl text-primary " />
            </div>
          </div>

          {/* 2 */}
          <div className="">
            <h2 className="font-semibold mb-2 text-[16px]">What we do</h2>
            <Link className="mb-2 block text-primary hover:underline">
              Plans
            </Link>
            <Link className="mb-2 block text-primary hover:underline">
              Overview
            </Link>
            <Link className="mb-2 block text-primary hover:underline ">
              Features
            </Link>
            <Link className="mb-2 block text-primary hover:underline ">
              Network
            </Link>
            <Link className="mb-2 block text-primary hover:underline ">
              Apps
            </Link>
          </div>

          {/* 3 */}
          <div className="">
            <h2 className="font-semibold mb-2 text-[16px]">Resources</h2>
            <Link className="mb-2 block text-primary hover:underline">
              Documentation
            </Link>
            <Link className="mb-2 block text-primary hover:underline">
              Blog
            </Link>
            <Link className="mb-2 block text-primary hover:underline ">
              Case studies
            </Link>
            <Link className="mb-2 block text-primary hover:underline ">
              Partners
            </Link>
            <Link className="mb-2 block text-primary hover:underline ">
              Customers
            </Link>
            <Link className="mb-2 block text-primary hover:underline ">
              API
            </Link>
          </div>
          {/* 4 */}
          <div className="">
            <h2 className="font-semibold mb-2 text-[16px]">Support</h2>
            <Link className="mb-2 block text-primary hover:underline">
              Knowledgebase
            </Link>
            <Link className="mb-2 block text-primary hover:underline">
              Community
            </Link>
            <Link className="mb-2 block text-primary hover:underline ">
              System status
            </Link>
            <Link className="mb-2 block text-primary hover:underline ">
              Videos
            </Link>
            <Link className="mb-2 block text-primary hover:underline ">
              Trust & Safety
            </Link>
          </div>
          {/* 5 */}
          <div className="">
            <h2 className="font-semibold mb-2 text-[16px]">About us</h2>
            <Link className="mb-2 block text-primary hover:underline">
              Our team
            </Link>
            <Link className="mb-2 block text-primary hover:underline">
              Careers
            </Link>
            <Link className="mb-2 block text-primary hover:underline ">
              Press{" "}
            </Link>
            <Link className="mb-2 block text-primary hover:underline ">
              Website Terms of Use
            </Link>
            <Link className="mb-2 block text-primary hover:underline ">
              Self-serve Subscription Agreement
            </Link>
            <Link className="mb-2 block text-primary hover:underline ">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
