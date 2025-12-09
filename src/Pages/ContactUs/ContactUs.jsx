import React from 'react';
import toast from 'react-hot-toast';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const ContactUs = () => {
  const handleContact = e => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    e.target.reset();
  };

  return (
    <div className=" bg-gray-50 px-4 py-12 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-8 md:p-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Contact <span className="text-lime-500">ZapShift</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Get in Touch
            </h3>

            <div className="flex items-start gap-4">
              <FiMail size={28} className="text-lime-500" />
              <div>
                <p className="text-lg font-medium text-gray-800">Email</p>
                <p className="text-gray-600">support@zapshift.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiPhone size={28} className="text-lime-500" />
              <div>
                <p className="text-lg font-medium text-gray-800">Phone</p>
                <p className="text-gray-600">+880 1234 567 890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMapPin size={28} className="text-lime-500" />
              <div>
                <p className="text-lg font-medium text-gray-800">Office</p>
                <p className="text-gray-600">Mirpur, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleContact} className="space-y-5">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                required
                type="text"
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:border-lime-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                required
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:border-lime-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                required
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:border-lime-400"
                placeholder="Write your message"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-lime-300 text-black font-semibold py-3 rounded-lg hover:bg-lime-400 transition"
            >
              <FiSend size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
