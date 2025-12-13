import React from 'react';
import { Link } from 'react-router';

const blogs = [
  {
    id: 1,
    title: 'ZapShift Expands Nationwide Delivery Network',
    source: 'ZapShift Courier',
    date: '05/01/2025',
    time: '10:25 PM',
    description:
      'ZapShift continues its rapid growth by expanding delivery services to all major districts, ensuring faster and more reliable parcel delivery for businesses and individuals across Bangladesh.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
  },
  {
    id: 2,
    title: 'How ZapShift Ensures Same-Day Delivery',
    source: 'ZapShift Courier',
    date: '06/01/2025',
    time: '09:10 PM',
    description:
      'With smart routing, local hubs, and trained delivery riders, ZapShift guarantees same-day delivery in major cities while maintaining safety and accuracy.',
    image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b5',
  },
  {
    id: 3,
    title: 'Secure Parcel Handling with ZapShift',
    source: 'ZapShift Courier',
    date: '07/01/2025',
    time: '08:40 PM',
    description:
      'From packaging to doorstep delivery, ZapShift follows strict security protocols to protect your parcels and ensure damage-free delivery every time.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7',
  },
  {
    id: 4,
    title: 'Why Businesses Trust ZapShift Logistics',
    source: 'ZapShift Courier',
    date: '08/01/2025',
    time: '07:55 PM',
    description:
      'Thousands of businesses rely on ZapShift for fast pickups, real-time tracking, and transparent pricing that helps them scale with confidence.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e',
  },
];

const Blog = () => {
  return (
    <div className=" mx-auto px-4 py-16">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-4">Recent Blog</h2>
      <p className="text-gray-600 max-w-3xl mb-14">
        Stay updated with the latest news, service updates, and logistics
        insights from ZapShift Courier — delivering speed, trust, and
        reliability.
      </p>

      {/* Blog Cards */}
      <div className="space-y-14">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            } gap-10 items-center border rounded-xl p-6`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded-xl w-full h-[280px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>

              <p className="text-sm text-gray-500 mb-3">
                <span className="font-extrabold">{blog.source}</span> <br />
                Date: {blog.date} &nbsp; Time: {blog.time}
              </p>

              <p className="text-gray-600 mb-6">{blog.description}</p>

              <Link
                // to={`/blog/${blog.id}`}
                className="inline-block px-6 py-3 rounded-lg font-semibold text-black"
                style={{ backgroundColor: '#B8E34F' }}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
