import React from 'react';
import { Truck, MapPin } from 'lucide-react';

const data = [
  {
    icon: <Truck className="w-10 h-10 text-[#03373d]" />,
    title: 'Booking Pick & Drop',
    desc: 'From personal packages to business shipments — we deliver on time, every time.',
  },
  {
    icon: <Truck className="w-10 h-10 text-[#03373d]" />,
    title: 'Cash On Delivery',
    desc: 'From personal packages to business shipments — we deliver on time, every time.',
  },
  {
    icon: <Truck className="w-10 h-10 text-[#03373d]" />,
    title: 'Delivery Hub',
    desc: 'From personal packages to business shipments — we deliver on time, every time.',
  },
  {
    icon: <Truck className="w-10 h-10 text-[#03373d]" />,
    title: 'Booking SME & Corporate',
    desc: 'From personal packages to business shipments — we deliver on time, every time.',
  },
];
const HowitWorks = () => {
  return (
    <div className=" bg-gray-50 p-5 rounded-2xl">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">How it Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
