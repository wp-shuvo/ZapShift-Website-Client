import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Link, Outlet } from 'react-router';
import authImage from '../assets/img/authImage.png';
import navLogo from '../assets/img/logoNav.png';

const AuthLayout = () => {
  return (
    <div className=" min-h-screen px-12 pb-12 pt-8">
      <Link to="/">
        <img src={navLogo} className="h-12" alt="" />
      </Link>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-8 gap-8">
        <div className="flex-1">
          <Outlet />
        </div>
        <div className="flex-1">
          <img src={authImage} alt="Delivery Illustration" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
