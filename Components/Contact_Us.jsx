"use client";
import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append("access_key", "5fef3df7-bf17-4784-8c19-5daeb60c800e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <section
      id="Contact"
      className="w-full overflow-hidden text-center p-6 py-20 lg:px-32 bg-white"
      aria-labelledby="contact-heading"
    >
      {/* Heading */}
      <motion.h1
        id="contact-heading"
        className="text-2xl sm:text-4xl font-bold mb-2 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-gray-500 text-center mb-12 mx-auto max-w-80"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        Ready to Make a Move? Let's Build Your Future Together.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-500 pt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        aria-label="Contact Form"
      >
        <fieldset className="border-0">
          <legend className="sr-only">Contact Information</legend>

          {/* Name & Email */}
          <motion.div
            className="flex flex-wrap"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-left w-full md:w-1/2">
              <label htmlFor="name" className="block font-medium text-gray-700">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="px-4 py-3 w-full border rounded mt-2"
              />
            </div>

            <div className="text-left w-full md:w-1/2 md:pl-4">
              <label
                htmlFor="email"
                className="block font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="px-4 py-3 w-full border rounded mt-2"
              />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            className="my-6 text-left"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            <label
              htmlFor="message"
              className="block font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              required
              className="w-full px-3 py-3 mt-2 h-48 border rounded resize-none"
            ></textarea>
          </motion.div>
        </fieldset>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-black bg-lime-300 font-medium px-12 py-2 rounded mb-3 shadow-md hover:bg-lime-400 transition-colors"
        >
          {result ? result : "Send Message"}
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
