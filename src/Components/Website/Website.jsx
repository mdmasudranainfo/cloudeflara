import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoAddCircle } from "react-icons/io5";

const Website = () => {
  return (
    <div className="w-[1040px] max-w-full p-4 mx-auto mt-10">
      <h2 className="text-3xl font-semibold">Home</h2>

      {/* lebel input  */}
      <div className="form-control max-w-full w-[500px] mt-10">
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

      {/* box */}

      <div className=" border p-10 mt-10 rounded-sm flex flex-col items-center mb-56">
        <h2 className="text-[20px]  text-center ">
          You currently don't have any websites.
        </h2>
        <button className="btn btn-sm  btn-primary rounded-sm flex items-center gap-1 mt-4">
          <IoAddCircle />
          <span> Add Site</span>
        </button>
      </div>
    </div>
  );
};

export default Website;
