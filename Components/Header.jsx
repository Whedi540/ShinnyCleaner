"use client"
import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"
const Header = () => {
   return (
    <div className='min-h-screen overflow-hidden w-full items-center bg-center bg-cover mb-4 flex'  style={{
    backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/slide1.jpg')",
     }} id='Header'>
       <Navbar/>
      <motion.div 
      initial={{opacity:0,y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className='container text-center mx-auto text-white px-6 md:px-20 lg:px-32 py-4'>
         <h2 className='text-5xl sm:text-6xl md:text-[50px] inline-block pt-20 max-w-3xl font-semibold'>Refresh Your Space with Professional Cleaning</h2>
         <div className='mt-16 space-x-6 '>
           <a
            href="#Services"
            className="border border-white py-3 px-8 rounded hover:bg-white hover:text-gray-900 transition"
          >
            Our Services
          </a>
          <a
            href="https://wa.me/965568141087"
            target="_blank"
            className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-medium py-3 px-8 rounded transition"
          >
            Book Now
          </a>
         </div>
      </motion.div>
    </div>
  )
}

export default Header