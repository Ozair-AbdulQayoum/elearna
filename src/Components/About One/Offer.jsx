import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import img001 from "../../assets/2- About One imgs/HomeOneVideoposter.jpg";
import img002 from "../../assets/2- About One imgs/GirlImageUsingLaptop.webp";

const offerData = {
  header: {
    tag: "What We Offer",
    title: "Personalized learning for your ambitions",
  },

  features: [
    "Skill-based instruction",
    "Analytics and insights",
    "Global certification",
    "Customizable courses",
  ],

  cta: {
    title: "Still have questions?",
    description:
      "Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.",
    button: "Get Started",
  },

  images: {
    small: img001,
    big: img002,
  },
};

export default function Offer() {
  const { header, features, cta, images } = offerData;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex gap-6 items-center justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={images.small}
            alt="small"
            className="w-40 h-52 object-cover rounded-2xl shadow-lg"
          />

          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            src={images.big}
            alt="big"
            className="w-64 h-[420px] object-cover rounded-3xl shadow-xl"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-600 font-semibold uppercase tracking-wider mb-4">
            {header.tag}
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            {header.title}
          </h2>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {features.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600" />
                <span className="font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-blue-50 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5 border border-blue-100"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {cta.title}
              </h3>
              <p className="text-gray-600 max-w-md">{cta.description}</p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
              {cta.button}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
