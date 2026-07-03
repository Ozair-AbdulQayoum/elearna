import React from "react";
import { motion } from "framer-motion";

import icon1 from "../../assets/16- Contact Two imgs/HomeIcon.svg";
import icon2 from "../../assets/16- Contact Two imgs/BooksIcon.svg";
import icon3 from "../../assets/16- Contact Two imgs/ClockIcons.svg";

const contactInfo = [
  {
    id: 1,
    icon: icon1,
    title: "Area Location",
    line1: "410 Sandtown, California 94001, USA",
    line2: "",
  },
  {
    id: 2,
    icon: icon2,
    title: "Contact Details",
    line1: "888-123-4567",
    line2: "info@example.com",
  },
  {
    id: 3,
    icon: icon3,
    title: "Opening Hours",
    line1: "Monday - Friday",
    line2: "10:30 a.m - 7:00 p.m",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Heading */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          Contact Us
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
          Get details information about online courses, contact us. We're happy
          to discuss.
        </h2>

        <p className="mt-6 text-gray-600 leading-8">
          Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
          nam id purus suspendisse. Imperdiet nam lorem tempus in.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
      >
        {contactInfo.map((info) => (
          <motion.div
            key={info.id}
            variants={item}
            className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600">
              <img
                src={info.icon}
                alt={info.title}
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              {info.title}
            </h3>

            <p className="mt-4 text-gray-600 leading-8">{info.line1}</p>

            {info.line2 && (
              <p className="text-gray-600 leading-8">{info.line2}</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
