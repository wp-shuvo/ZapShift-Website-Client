import React from 'react';
import TabsSection from './TabsSection';

const AboutUs = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      {/* Title */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-neutral">About Us</h1>

        <p className="mt-3 max-w-2xl text-sm text-gray-500">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Tabs + Content */}
      <div className="rounded-xl  bg-base-100 shadow-sm">
        <TabsSection />
      </div>
    </section>
  );
};

export default AboutUs;
