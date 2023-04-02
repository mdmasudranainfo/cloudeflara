import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const DomainRegistration = () => {
  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  return (
    <div className="w-[1270px] max-w-full  mx-auto mb-28 px-4">
      <h1 className="mt-10 text-3xl font-semibold">Domain Registration</h1>
      <h2 className="text-xl font-semibold mt-10">Manage Domains</h2>

      {/* lebel input  */}
      <div className="form-control max-w-full mt-10">
        <label className="label">
          Search websites in Mdmasude7@gmail.com's Account...
        </label>
        <div className="md:flex block items-center gap-3 relative ">
          {/* icone  */}
          <div className="absolute top-2 left-2">
            <BsSearch />
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full h-[2rem] rounded-sm pl-7 focus:outline-primary focus:border-primary ease-in duration-100"
          />
          <button className="bg-primary py-1 px-3 rounded text-white md:mt-0 mt-2">
            Search
          </button>
        </div>
      </div>

      {/*  */}
      <div className="grid md:grid-cols-5 grid-cols-1  justify-items-center bg-[#D9D9D9] mt-4">
        <div
          onClick={() => setArrow1(!arrow1)}
          className="flex  items-center gap-1 font-bold p-3 cursor-pointer"
        >
          <p>Domain</p>
          {!arrow1 ? (
            <MdOutlineArrowDropDown className="text-3xl text-primary" />
          ) : (
            <MdOutlineArrowDropUp className="text-3xl text-primary" />
          )}
        </div>
        <div className="flex  items-center gap-1 font-bold p-3">
          <p>Status</p>
        </div>
        <div className="flex  items-center gap-1 font-bold p-3">
          <p>Auto-renew</p>
        </div>

        <div
          onClick={() => setArrow2(!arrow2)}
          className="flex  items-center gap-1 font-bold p-3 cursor-pointer"
        >
          <p>Expires</p>
          {!arrow2 ? (
            <MdOutlineArrowDropDown className="text-3xl text-primary" />
          ) : (
            <MdOutlineArrowDropUp className="text-3xl text-primary" />
          )}
        </div>
        <div className="flex  items-center gap-1 font-bold p-3">
          <p>Manage</p>
        </div>
      </div>

      {/* arrow button */}
      <div className="flex gap-4 mt-4">
        <MdOutlineArrowBackIos className="text-3xl border font-light rounded-md" />
        <MdOutlineArrowForwardIos className="text-3xl border font-light rounded-md" />
      </div>
    </div>
  );
};

export default DomainRegistration;
