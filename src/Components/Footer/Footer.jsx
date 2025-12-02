import React from 'react';
import { Link } from 'react-router';
import LOgo from '../../assets/img/logo.png';
import {
  FaLinkedin,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-white py-14 px-4 rounded-4xl">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <img src={LOgo} alt="ZapShift" className="mx-auto h-12 mb-6" />

        {/* Description */}
        <p className="text-gray-300 max-w-2xl mx-auto text-sm mb-10">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        {/* Navigation Links */}
        <div className="border-t border-gray-700/40 pt-6">
          <ul className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/coverage" className="hover:text-white">
                Coverage
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons (External Links) */}
        <div className="mt-8 flex justify-center gap-5 text-xl text-gray-300">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
