import React from "react";
import { BsApple, BsCheck } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-[60rem] max-w-full px-4 mx-auto my-8">
      <h1 className="text-3xl font-medium">Log in to Cloudflare</h1>

      {/*  */}
      <div className="form-control max-w-full mt-5 md:w-[60%] w-full">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          className="input input-bordered border-[#797979] w-full h-[42px] focus:outline-none focus:border-primary focus:border-2"
        />
      </div>
      {/*  */}
      <div className="form-control max-w-full mt-2 md:w-[60%] w-full">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          className="input input-bordered border-[#797979] w-full h-[42px] focus:outline-none focus:border-primary focus:border-2"
        />
      </div>

      {/*  */}
      <p className="text-sm text-[#196535] mt-4">Password requirements met!</p>
      <p className="text-[13px]  text-[#196535] font-semibold mb-1 bg-[#E3F8EB] max-w-full mt-5 md:w-[60%] w-full px-2 py-1 flex items-center">
        <BsCheck className="text-xl" />
        <span> 8 characters</span>
      </p>
      <p className="text-[13px]  text-[#196535] font-semibold mb-1 bg-[#E3F8EB] max-w-full md:w-[60%] w-full px-2 py-1 flex items-center">
        <BsCheck className="text-xl" />
        <span> 1 number</span>
      </p>
      <p className="text-[13px]  text-[#196535] font-semibold mb-1 bg-[#E3F8EB] max-w-full md:w-[60%] w-full px-2 py-1 flex items-center">
        <BsCheck className="text-xl" />
        <span> 1 special character e.g., $, !, @, %, &</span>
      </p>
      <p className="text-[13px]  text-[#196535] font-semibold mb-1 bg-[#E3F8EB] max-w-full md:w-[60%] w-full px-2 py-1 flex items-center">
        <BsCheck className="text-xl" />
        <span>No leading or trailing whitespace</span>
      </p>
      {/*  */}
      <p className="py-4 text-sm font-light">
        By clicking Create Account, I agree to Cloudflare's terms,{" "}
        <Link className="text-primary underline font-medium">
          privacy policy
        </Link>
        , {"  "} and {"  "}
        <Link className="text-primary underline font-medium">
          cookie policy.
        </Link>
      </p>

      <div className=" w-[350px] max-w-full">
        <button className="bg-primary text-white w-full py-3 rounded-md mt-4">
          Create Account
        </button>
      </div>

      {/*  */}
      <div className="max-w-full md:w-[60%] w-full mt-5 flex items-center justify-between">
        <Link className="text-primary underline" to="/login">
          Already have an account? Log in
        </Link>
      </div>
    </div>
  );
};

export default Register;
