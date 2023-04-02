import React from "react";
import { BsApple } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
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

      <div className=" w-[350px] max-w-full">
        <button className="bg-primary text-white w-full py-3 rounded-md mt-4">
          log in
        </button>
      </div>

      <div className=" w-[350px] max-w-full">
        <div className="divider">OR</div>
      </div>

      {/*  */}

      <div className=" w-[350px] max-w-full">
        <button className=" border w-full py-3 rounded-md mt-4 font-semibold flex items-center justify-center gap-3">
          <BsApple className="text-xl" />
          <span> Sign in with Apple</span>
        </button>
      </div>

      {/*  */}
      <div className="max-w-full md:w-[60%] w-full mt-5 flex items-center justify-between">
        <Link className="text-primary underline" to="/login/register">
          Sign up
        </Link>
        <Link className="text-primary underline">Forgot your password?</Link>
        <Link className="text-primary underline">Forgot your email?</Link>
      </div>
    </div>
  );
};

export default Login;
