import React from 'react';
import serviceImage1 from '../../assets/img/service.png';

const OurServices = () => {
  const services = [
    {
      title: 'Express & Standard Delivery',
      desc: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',
      img: serviceImage1,
    },
    {
      title: 'Nationwide Delivery',
      desc: 'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.',
      img: serviceImage1,
    },
    {
      title: 'Fulfillment Solution',
      desc: 'We offer customized service with inventory management support, online order processing, packaging, and after-sales support.',
      img: serviceImage1,
    },
    {
      title: 'Cash on Home Delivery',
      desc: '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
      img: serviceImage1,
    },
    {
      title: 'Corporate Service / Contract In Logistics',
      desc: 'Customized corporate services including warehouse and inventory management support.',
      img: serviceImage1,
    },
    {
      title: 'Parcel Return',
      desc: 'Through reverse logistics, we allow end customers to return/exchange products with online merchants.',
      img: serviceImage1,
    },
  ];
  return (
    <section className="bg-[#00363d] rounded-3xl py-16 px-6 md:px-10">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Services
        </h2>
        <p className="text-gray-200 mt-2 max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="
                bg-white rounded-xl p-6 text-center shadow-md
                hover:bg-primary hover:text-[#03373d]
                transition-all duration-300 cursor-pointer
              "
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto w-16 h-16 mb-4 object-contain"
              />
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
