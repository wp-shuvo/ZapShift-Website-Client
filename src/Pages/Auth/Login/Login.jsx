import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { singInuser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = data => {
    console.log(data);
    singInuser(data.email, data.password)
      .then(result => {
        console.log(result.user);
        toast.success('User Logged In Successfully');
        navigate(location.state || '/');
        data.reset();
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
          <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-500 mb-8">Login with ZapShift</p>

          <form onSubmit={handleSubmit(handleLogin)}>
            {/* Email */}
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              placeholder="Email"
              className="input input-bordered w-full mb-4 bg-white"
            />

            {/* Password */}
            <div className="relative">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type={showPass ? 'text' : 'password'}
                name="password"
                {...register('password', { required: true, minLength: 6 })}
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
              <Link
                to="/forget-password"
                className="text-sm text-gray-500 hover:underline cursor-pointer"
              >
                Forget Password?
              </Link>
            </div>

            {/* Login Button */}
            <button className="btn bg-lime-300 text-black w-full rounded-md border-none hover:bg-lime-400">
              Login
            </button>
            {errors.password?.type === 'required' && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
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
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
