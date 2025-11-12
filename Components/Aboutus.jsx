"use client";
import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col items-center justify-center mx-auto px-14 md:px-20 lg:px-32 w-full mt-10"
    >
      {/* Heading Section */}
      <header className="text-center mb-8">
        <motion.h1
          className="text-2xl sm:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Our Company
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-500 max-w-80 mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          Professional Cleaning. Exceptional Results.
        </motion.p>
      </header>

      {/* Main Content Section */}
      <article className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        {/* Image Section */}
        <motion.figure
          className="w-full sm:w-1/2 max-w-lg"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={assets.Aboutus}
            alt="Our professional cleaning team at work"
            className="w-full h-130 rounded-lg shadow-lg object-cover"
          />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            Dedicated cleaning professionals ensuring spotless results.
          </figcaption>
        </motion.figure>

        {/* Text Section */}
        <motion.div
          className="flex flex-col mt-10 md:mt-0"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Stats Section */}
          <motion.section
            className="grid grid-cols-2 gap-6 md:gap-10 text-gray-600 w-full 2xl:pr-28"
            aria-label="Company Achievements"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center md:items-start text-center">
              <p className="text-4xl font-medium text-gray-800">8+</p>
              <p>Years of Experience</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center">
              <p className="text-4xl font-medium text-gray-800">100+</p>
              <p>Satisfied Clients</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center">
              <p className="text-4xl font-medium text-gray-800">500+</p>
              <p>Spaces Cleaned</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center">
              <p className="text-4xl font-medium text-gray-800">24/7</p>
              <p>Customer Support</p>
            </div>
          </motion.section>

          {/* Description Section */}
          <motion.p
            className="my-10 max-w-lg text-gray-600 md:text-left"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            We are a trusted cleaning company committed to providing spotless
            results for homes, offices, and commercial spaces. Our professional
            team uses eco-friendly products and modern cleaning techniques to
            ensure a safe and hygienic environment. From deep cleaning to
            regular maintenance — we take care of every detail so you can enjoy
            a cleaner, healthier space.
          </motion.p>

          {/* Contact Button */}
          <motion.a
            href="#Contact"
            className="bg-lime-300 text-black hover:bg-lime-400 px-8 py-2 rounded-lg shadow-md transition-all duration-200 w-fit mx-auto md:mx-0"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </article>
    </section>
  );
};

export default About;
