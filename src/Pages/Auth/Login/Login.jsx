import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="">
      {/* Login Form */}
      <div className="flex items-center justify-center px-10 py-16 bg-white">
        <div className="w-full max-w-sm">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-500 mb-8">Login with ZapShift</p>

          <form>
            {/* Email */}
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full mb-4 bg-white"
            />

            {/* Password */}
            <div className="relative">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type={showPass ? 'text' : 'password'}
                name="password"
                className="input input-bordered w-full mb-4 bg-white z-0"
                placeholder="Password"
              />
              <div
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 bottom-6.5 cursor-pointer text-black z-40"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            {/* Forgot Password */}
            <div className="mt-2 mb-4">
              <a className="text-sm text-gray-500 hover:underline cursor-pointer">
                Forget Password?
              </a>
            </div>

            {/* Login Button */}
            <button className="btn bg-lime-300 text-black w-full rounded-md border-none hover:bg-lime-400">
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="mt-4 text-sm text-gray-600">
            Don’t have any account?{' '}
            <Link
              to="/register"
              className="text-green-600 font-semibold cursor-pointer hover:underline"
            >
              Register
            </Link>
          </p>

          {/* OR divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <button className="btn w-full bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Login with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
