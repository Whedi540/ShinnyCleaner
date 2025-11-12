"use client"
import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [mobilemenu, setMobilemenu] = useState(false);

  return (
    <header className='absolute top-0 left-0 w-full z-10 bg-gray-900'>
      <nav className='flex mx-auto items-center justify-between py-1 px-6 md:px-20 lg:px-32 bg-transparent' aria-label="Main Navigation">
        <a href="#Header">
          <Image src={assets.logo} alt="Logo" width={150} />
        </a>

        <ul className='hidden md:flex gap-7 text-white'>
          <li><a className='hover:text-lime-300 cursor-pointer' href="#Header">Home</a></li>
          <li><a className='hover:text-lime-300 cursor-pointer' href="#Services">Services</a></li>
          <li><a className='hover:text-lime-300 cursor-pointer' href="#About">About Us</a></li>
          <li><a className='hover:text-lime-300 cursor-pointer' href="#Contact">Contact Us</a></li>
        </ul>

        <a
          href="https://wa.me/965568141087"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-lime-300 text-black rounded-full px-3 py-2 cursor-pointer border"
        >
          <FaWhatsapp className="text-green-600 text-xl" />
          WhatsApp
        </a>

        <button
          onClick={() => setMobilemenu(true)}
          className='md:hidden justify-end w-7'
          aria-label="Open mobile menu"
        >
          <Image src={assets.menu_icon} alt="Menu Icon" />
        </button>
      </nav>

      {/* ----------------Mobile view------------------------ */}
      <aside
        className={`md:hidden overflow-hidden ${mobilemenu ? 'fixed w-[80%]' : 'hidden'} top-0 right-0 bottom-0 bg-lime-300`}
        aria-label="Mobile Navigation"
      >
        <button
          onClick={() => setMobilemenu(false)}
          className='flex justify-end p-6 cursor-pointer'
          aria-label="Close mobile menu"
        >
          <Image className='w-6' src={assets.cross_icon} alt="Close Icon" />
        </button>

        <ul className='flex flex-col gap-2 items-center mt-5 px-5 text-lg font-medium'>
          <li><a onClick={() => setMobilemenu(false)} className='px-4 py-2 rounded-full inline-block cursor-pointer' href="#Header">Home</a></li>
          <li><a onClick={() => setMobilemenu(false)} className='px-4 py-2 rounded-full inline-block cursor-pointer' href="#Services">Services</a></li>
          <li><a onClick={() => setMobilemenu(false)} className='px-4 py-2 rounded-full inline-block cursor-pointer' href="#Aboutus">About Us</a></li>
          <li><a onClick={() => setMobilemenu(false)} className='px-4 py-2 rounded-full inline-block cursor-pointer' href="#Contactus">Contact Us</a></li>
        </ul>

        <div className="flex justify-center mt-6 mb-10">
          <a
            href="https://wa.me/965568141087"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white rounded-full px-5 py-2 cursor-pointer border border-green-700 hover:bg-green-700 transition"
          >
            <FaWhatsapp className="text-white text-xl" />
            WhatsApp
          </a>
        </div>
      </aside>
    </header>
  )
}

export default Navbar
