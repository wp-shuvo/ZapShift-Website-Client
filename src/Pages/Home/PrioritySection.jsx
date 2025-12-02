import React from 'react';
import { Link } from 'react-router';
import RightGraphic from '../../assets/img/location-merchant.png';
import WaveTop from '../../assets/img/be-a-merchant-bg.png';

const PrioritySection = () => {
  return (
    <div className="relative bg-[#003B3F] text-white rounded-3xl p-10 md:p-14 overflow-hidden mt-10">
      {/* Top Wave Image */}
      <img
        src={WaveTop}
        alt=""
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] opacity-50 pointer-events-none select-none"
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Merchant and Customer Satisfaction <br />
            is Our First Priority
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-gray-200 mb-7">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/merchant"
              className="bg-[#C7EF5A] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#b8e34f] transition"
            >
              Become a Merchant
            </Link>

            <Link
              to="/courier"
              className="border border-[#C7EF5A] text-[#C7EF5A] font-semibold px-6 py-3 rounded-full hover:bg-[#C7EF5A] hover:text-black transition"
            >
              Earn with ZapShift Courier
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={RightGraphic}
            alt="Boxes"
            className="w-full max-w-[420px] object-contain hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default PrioritySection;
