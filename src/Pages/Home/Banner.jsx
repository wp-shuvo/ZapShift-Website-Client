import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router';
// import { FaArrowUpRight } from 'react-icons/fa6';

import bannerImg1 from '../../assets/banner/banner1.png';
import bannerImg2 from '../../assets/banner/banner2.png';
import bannerImg3 from '../../assets/banner/banner3.png';

const Banner = () => {
  const slides = [bannerImg1, bannerImg2, bannerImg3];

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
    >
      {slides.map((img, i) => (
        <div key={i} className="relative">
          <img src={img} className="w-full" alt="" />

          {/* Buttons */}
          <div className="absolute left-30 bottom-20 flex items-center gap-4 z-20">
            <Link
              // to="/track"
              className="bg-[#C8E661] border-white border-2 px-6 py-3 rounded-xl font-semibold text-gray-900 flex items-center gap-2 hover:bg-[#b7d854] transition"
            >
              Track Your Parcel
              <span className="bg-black text-[#C8E661] p-2 rounded-full">
                {/* <FaArrowUpRight /> */}
              </span>
            </Link>

            <Link
              to="/be-a-rider"
              className="bg-white px-6 py-3 rounded-xl font-semibold text-gray-900 border border-gray-300 hover:bg-gray-100 transition"
            >
              Be A Rider
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
