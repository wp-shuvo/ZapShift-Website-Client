import React from 'react';
import Banner from './Home/Banner';
import HowitWorks from './Home/HowitWorks';
import OurServices from './Home/OurServices';
import Brands from './Home/Brands';
import WhatWeOffer from './Home/WhatWeOffer';
import PrioritySection from './Home/PrioritySection';
import Reviews from './Home/Reviews/Reviews';
import FAQ from './Home/FAQ/FAQ';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-20">
        <HowitWorks />
      </div>
      <div className="my-20">
        <OurServices />
      </div>
      <div className="mb-20 ">
        <h4 className="text-center mb-20 text-2xl font-extrabold text-text-secondary ">
          We've helped thousands of sales teams
        </h4>
        <Brands />
      </div>
      <div className="mb-20 border-y-2 pb-20 border-dashed border-[#03373d]">
        <WhatWeOffer />
      </div>
      <div className="mb-20">
        <PrioritySection />
      </div>
      <div className="mb-20">
        <Reviews reviewsPromise={reviewsPromise} />
      </div>
      <div className="mb-20">
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
