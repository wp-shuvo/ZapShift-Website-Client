import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="">
      {/* Login Form */}
      <div className="flex items-center justify-center px-10 py-16 bg-white">
        <div className="w-full max-w-sm">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-2">Create an Account</h1>
          <p className="text-gray-500 mb-8">Register with ZapShift</p>

          <form onSubmit={handleSubmit(handleRegister)}>
            {/* image */}
            <label className="block mb-2 font-medium">Uplode Image</label>
            <input
              className="border w-full border-gray-300 py-2 px-3 rounded-md mb-2 font-medium"
              type="file"
              {...register('image', { required: true })}
              accept="image/*"
            />
            {/*name*/}
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder=" Your Name"
              {...register('name', { required: true })}
              className="input input-bordered py-3 px-4 w-full mb-4 bg-white"
            />
            {errors.name?.type === 'required' && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
            {/* Email */}
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
              className="input input-bordered w-full py-3 px-4 mb-4 bg-white"
            />
            {errors.email?.type === 'required' && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}

            {/* Password */}
            <div className="relative">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type={showPass ? 'text' : 'password'}
                name="password"
                {...register('password', {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
                })}
                className="input input-bordered w-full mb-4 bg-white z-0"
                placeholder="Password"
              />
              <div
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 bottom-6.5 cursor-pointer text-black z-40"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </div>
              {errors.password?.type === 'required' && (
                <p className="text-red-500 text-sm">Password is required</p>
              )}
              {errors.password?.type === 'minLength' && (
                <p className="text-red-500 text-sm">
                  Password must be at least 6 characters long
                </p>
              )}
              {errors.password?.type === 'pattern' && (
                <p className="text-red-500 text-sm">
                  Password must contain at least one uppercase letter, one
                  lowercase letter, one number, and one special character
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="mt-2 mb-4">
              <a className="text-sm text-gray-500 hover:underline cursor-pointer">
                Forget Password?
              </a>
            </div>

            {/* Login Button */}
            <button className="btn bg-lime-300 text-black w-full rounded-md border-none hover:bg-lime-400">
              Register
            </button>
          </form>

          {/* Register Link */}
          <p className="mt-4 text-sm text-gray-600">
            Already have account?{' '}
            <Link
              to="/login"
              className="text-green-600 font-semibold cursor-pointer hover:underline"
            >
              Login
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

export default Register;
