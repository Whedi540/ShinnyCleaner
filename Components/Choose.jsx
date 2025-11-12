"use client";
import React from "react";
import { motion } from "framer-motion";

const Choose = () => {
  const features = [
    {
      number: "01",
      title: "Experienced & Trained Staff",
      text: "Our professional cleaners are fully trained and experienced, ensuring top-quality results every time.",
    },
    {
      number: "02",
      title: "Customized Cleaning Plans",
      text: "We create cleaning solutions tailored to your home, office, or commercial space requirements.",
    },
    {
      number: "03",
      title: "Eco-Friendly Products",
      text: "We use safe and sustainable cleaning products that protect your family, pets, and the environment.",
    },
    {
      number: "04",
      title: "Flexible Scheduling",
      text: "We work around your schedule — morning, evening, or weekends — to make cleaning hassle-free.",
    },
    {
      number: "05",
      title: "Satisfaction Guaranteed",
      text: "If you’re not completely satisfied, we’ll return and make it right. Your happiness is our priority.",
    },
  ];

  return (
    <section
      id="Choose"
      className="flex flex-col items-center justify-center mx-auto px-6 md:px-16 lg:px-32 w-full mt-16"
      aria-labelledby="choose-heading"
    >
      {/* Heading Section */}
      <header className="text-center mb-8">
        <motion.h2
          id="choose-heading"
          className="text-2xl sm:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Why{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Choose Us
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-500 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          We don’t just clean — we care about your comfort, safety, and
          satisfaction.
        </motion.p>
      </header>

      {/* Features Section */}
      <motion.section
        className="w-full py-10 bg-white"
        aria-label="Key reasons to choose our company"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="flex flex-col items-center text-center space-y-3 bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.3 }}
                className="bg-lime-300 text-black font-bold rounded-full w-14 h-14 flex items-center justify-center text-lg shadow-md"
              >
                {item.number}
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base text-left md:text-center lg:text-left">
                {item.text}
              </p>
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </section>
  );
};

export default Choose;
