"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Company Info Section */}
        <section
          className="w-full md:w-1/3 mb-8 md:mb-0"
          aria-labelledby="footer-company-info"
        >
          <Image src={assets.logo} alt="CleanPro Logo" className="w-32" />
          <p id="footer-company-info" className="text-gray-400 mt-3">
            CleanPro Cleaning Services is your trusted partner for spotless
            homes, offices, and commercial spaces across Dubai. We ensure
            hygiene, shine, and satisfaction in every service we deliver.
          </p>
        </section>

        {/* Navigation Links Section */}
        <nav
          className="w-full md:w-1/5 mb-8 md:mb-0"
          aria-label="Footer Navigation"
        >
          <h3 className="text-lg text-white font-bold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <a href="#Header" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#Services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Newsletter Section */}
        <section
          className="w-full md:w-1/3"
          aria-labelledby="footer-newsletter"
        >
          <h3
            id="footer-newsletter"
            className="text-lg text-white font-bold mb-4"
          >
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            Get cleaning tips, exclusive offers, and updates about our latest
            services — straight to your inbox.
          </p>
          <form className="flex gap-2 mb-10" aria-label="Newsletter Form">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none w-full md:w-auto"
              required
            />
            <button
              type="submit"
              className="py-2 px-4 rounded bg-lime-300 hover:bg-lime-400 transition text-black"
            >
              Subscribe
            </button>
          </form>
        </section>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6 mt-6">
        © {new Date().getFullYear()} CleanPro Cleaning Services. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
