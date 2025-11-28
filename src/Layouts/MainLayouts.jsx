import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-[#e8e8e8]">
        {/* use on product p-4 md:px-16 md:py-8 */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
