"use client";
import React from "react";
import { assets, testimonialsData } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const CustomerReviews = () => {
  return (
    <section
      className="mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
      aria-labelledby="testimonials-title"
    >
      {/* ===== Heading Section ===== */}
      <header className="text-center mb-12">
        <motion.h1
          id="testimonials-title"
          className="text-2xl sm:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What Our{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Clients Say
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-500 max-w-80 mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          Feedback from satisfied customers.
        </motion.p>
      </header>

      {/* ===== Testimonials Section ===== */}
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.article
            key={index}
            className="max-w-[340px] border shadow-lg rounded-xl px-8 py-12 text-center bg-white hover:shadow-xl transition-shadow duration-300"
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Customer Image */}
            <figure className="mb-4">
              <Image
                className="w-20 h-20 rounded-full mx-auto"
                src={testimonial.image}
                alt={testimonial.alt || `${testimonial.name}'s photo`}
              />
              <figcaption className="sr-only">
                {testimonial.name} from {testimonial.address}
              </figcaption>
            </figure>

            {/* Customer Info */}
            <header>
              <h2 className="text-xl text-gray-700 font-semibold mb-1">
                {testimonial.name}
              </h2>
              <p className="text-gray-500 mb-4 text-sm">
                {testimonial.address}
              </p>
            </header>

            {/* Rating Stars */}
            <div
              className="flex justify-center gap-1 text-yellow-400 mb-4"
              aria-label={`Rated ${testimonial.rating} out of 5 stars`}
            >
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <Image
                  key={i}
                  src={assets.star_icon}
                  alt="star"
                  className="w-5 h-5"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default CustomerReviews;
