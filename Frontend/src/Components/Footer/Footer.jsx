import React from "react";
import {
  FaPhoneAlt,
  FaSmile,
  FaEdit,
  FaPaw,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaPaperPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";
import paymentImg from "./FooterImg/pay.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B2C4D] text-white">
      {/* SECTION 1 - Top Support Bar */}
      <div className="bg-[#0B2C4D] border-b border-[#1a4570]">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Block 1 - Contact Us */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                  <FaPhoneAlt className="text-xl" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1">
                  Didn't find what you were looking for?
                </h3>
                <a
                  href="#contact"
                  className="text-sm text-gray-300 hover:text-white underline transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Block 2 - Help Center */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                  <FaSmile className="text-xl" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1">
                  How can we help you today?
                </h3>
                <a
                  href="#help"
                  className="text-sm text-gray-300 hover:text-white underline transition-colors"
                >
                  Help Center
                </a>
              </div>
            </div>

            {/* Block 3 - Feedback */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                  <FaEdit className="text-xl" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1">
                  We'd love to hear what you think!
                </h3>
                <a
                  href="#feedback"
                  className="text-sm text-gray-300 hover:text-white underline transition-colors"
                >
                  Give Feedback
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2 - Main Footer Content */}
      <div className="bg-[#0B2C4D] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Column 1 - Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <FaPaw className="text-2xl" />
                <h2 className="text-2xl font-bold">PetPaw</h2>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-start gap-2">
                  <MdLocationOn className="text-lg mt-1 flex-shrink-0" />
                  <p>
                    99 New Theme St, XY, USA 12345, Beside the Sun point land.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MdEmail className="text-lg flex-shrink-0" />
                  <a
                    href="mailto:demo@example.com"
                    className="hover:text-white transition-colors"
                  >
                    demo@example.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-base flex-shrink-0" />
                  <a
                    href="tel:+00123456789"
                    className="hover:text-white transition-colors font-semibold"
                  >
                    +00 123-456-789
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2 - Get To Know Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get To Know Us</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Term & Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    News & Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Information</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a
                    href="#help"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#feedback"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Feedback
                  </a>
                </li>
                <li>
                  <a
                    href="#faqs"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#size"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Size Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#payments"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Payments
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Orders & Returns */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Orders & Returns</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a
                    href="#track"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Track Order
                  </a>
                </li>
                <li>
                  <a
                    href="#delivery"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Delivery
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#returns"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#exchange"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Exchange
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5 - Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Sign up for Newsletter
              </h3>
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 pr-12 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0B2C4D] text-white p-2 rounded-md hover:bg-[#163f66] transition-colors"
                  >
                    <FaPaperPlane className="text-base" />
                  </button>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="#facebook"
                  className="w-10 h-10 rounded-full bg-transparent border border-white flex items-center justify-center hover:bg-white hover:text-[#0B2C4D] transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-base" />
                </a>
                <a
                  href="#twitter"
                  className="w-10 h-10 rounded-full bg-transparent border border-white flex items-center justify-center hover:bg-white hover:text-[#0B2C4D] transition-all duration-300"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="text-base" />
                </a>
                <a
                  href="#instagram"
                  className="w-10 h-10 rounded-full bg-transparent border border-white flex items-center justify-center hover:bg-white hover:text-[#0B2C4D] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-base" />
                </a>
                <a
                  href="#pinterest"
                  className="w-10 h-10 rounded-full bg-transparent border border-white flex items-center justify-center hover:bg-white hover:text-[#0B2C4D] transition-all duration-300"
                  aria-label="Pinterest"
                >
                  <FaPinterestP className="text-base" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3 - Bottom Strip */}
      <div className="bg-[#082238] py-6 border-t border-[#1a4570]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright Text */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 PetPaw_Default - WordPress Theme by Avanam
            </p>

            {/* Payment Methods Image */}
            <div className="flex-shrink-0 py-[rem] pb-[2rem] ">
              <img
                src={paymentImg}
                alt="Payment Methods"
                className="h-3 md:h-4 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
