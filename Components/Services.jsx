"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export const Services = () => {
  const deepCleaningServices = [
    {
      title: "Sofa Cleaning",
      category: "DEEP CLEANING",
      description:
        "We remove stains, dust, and odors to bring back your sofa’s original freshness and comfort.",
      Image: assets.Sofa_cleaning,
    },
    {
      title: "Carpet Deep Cleaning",
      category: "DEEP CLEANING",
      description:
        "Our process eliminates dirt, allergens, and trapped bacteria to restore softness and clean texture.",
      Image: assets.Carpet_cleaning,
    },
    {
      title: "Mattress Deep Cleaning",
      category: "DEEP CLEANING",
      description:
        "Sleep healthier with deep extraction that removes dust mites, sweat stains, and hidden allergens.",
      Image: assets.Mattress_cleaning,
    },
    {
      title: "Villa, Apartment, Office & Studio Cleaning",
      category: "DEEP CLEANING",
      description:
        "Comprehensive cleaning for homes and commercial spaces to maintain hygiene and freshness.",
      Image: assets.Office_cleaning,
    },
    {
      title: "Car Seats & Interior Cleaning",
      category: "DEEP CLEANING",
      description:
        "Deep cleaning for car interiors, removing dust, stains, and odors for a refreshing experience.",
      Image: assets.Car_cleaning,
    },
  ];

  const marbleCareServices = [
    {
      title: "Marble Polishing",
      category: "MARBLE CARE",
      description:
        "We provide expert polishing to restore your marble’s natural shine and smooth surface.",
      Image: assets.Marbel_polishing,
    },
    {
      title: "Marble Restoration",
      category: "MARBLE CARE",
      description:
        "From scratches to dullness, our restoration process revives old marble surfaces to look brand new.",
      Image: assets.Marble_Restoration,
    },
    {
      title: "Marble Crystallization",
      category: "MARBLE CARE",
      description:
        "Enhance durability and brilliance with our professional crystallization treatment for marble floors.",
      Image: assets.Marble_Crystallization,
    },
  ];

  return (
    <main
      className="flex flex-col items-center justify-center mx-auto px-4 md:px-20 lg:px-32 w-full mt-10"
      id="Services"
    >
      {/* ===== Header Section ===== */}
      <header className="text-center mb-8">
        <motion.h1
          className="text-2xl sm:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Services
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-500 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Professional Cleaning Services
        </motion.p>
      </header>

      {/* ===== Deep Cleaning Section ===== */}
      <section
        aria-labelledby="deep-cleaning-title"
        className="py-16 bg-gray-50 w-full"
      >
        <div className="container mx-auto">
          <motion.h2
            id="deep-cleaning-title"
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Deep Cleaning Services
          </motion.h2>

          {/* Grid: full width on small screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deepCleaningServices.map((service, index) => (
              <motion.article
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg w-full"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={service.Image}
                  alt={service.title}
                  className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 transition-all duration-500"></div>

                <footer className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:translate-y-[-10px]">
                  <p className="text-sm font-semibold tracking-wider border-l-4 border-blue-400 pl-2 mb-2">
                    {service.category}
                  </p>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-2">
                    {service.description}
                  </p>
                  <a
                    className="bg-lime-300 text-black font-medium px-3 py-1 rounded-lg hover:bg-lime-400 transition-all duration-300"
                    href="https://wa.me/971568141087"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </footer>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Marble Care Section ===== */}
      <section
        aria-labelledby="marble-care-title"
        className="py-16 bg-white w-full"
      >
        <div className="container mx-auto">
          <motion.h2
            id="marble-care-title"
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Marble Care Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marbleCareServices.map((service, index) => (
              <motion.article
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg w-full"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={service.Image}
                  alt={service.title}
                  className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 transition-all duration-500"></div>

                <footer className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:translate-y-[-10px]">
                  <p className="text-sm font-semibold tracking-wider border-l-4 border-yellow-400 pl-2 mb-2">
                    {service.category}
                  </p>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-2">
                    {service.description}
                  </p>
                  <a
                    className="bg-lime-300 text-black font-medium px-3 py-1 rounded-lg hover:bg-lime-400 transition-all duration-300"
                    href="https://wa.me/971568141087"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </footer>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
