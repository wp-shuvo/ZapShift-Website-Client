import React from 'react';
import image1 from '../../assets/img/live-tracking.png';
import image2 from '../../assets/img/safe-delivery.png';
import image3 from '../../assets/img/safe-delivery.png';

const offers = [
  {
    image: image1,
    title: 'Live Parcel Tracking',
    description:
      'Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.',
    bg: '#eef1f2',
  },
  {
    image: image2,
    title: '100% Safe Delivery',
    description:
      'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
    bg: '#eef1f2',
  },
  {
    image: image3,
    title: '24/7 Call Center Support',
    description:
      'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
    bg: '#eef1f2',
  },
];

const OfferCard = ({ image, title, description }) => (
  <div className="py-10 px-4 md:px-8">
    <div
      className="
      mx-auto bg-white rounded-2xl p-6 md:p-10
      flex flex-col md:flex-row items-center gap-6 shadow-lg
    "
    >
      {/* IMAGE */}
      <img src={image} alt={title} className="w-40 md:w-56 object-contain" />

      {/* Divider */}
      <div className="hidden md:block h-32 border-r border-gray-300"></div>

      {/* TEXT */}
      <div className="text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-bold text-[#03373d]">
          {title}
        </h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const WhatWeOffer = () => {
  return (
    <div>
      {offers.map((item, index) => (
        <div key={index}>
          <OfferCard
            image={item.image}
            title={item.title}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
};

export default WhatWeOffer;
