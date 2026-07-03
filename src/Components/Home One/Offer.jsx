import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

// =====================
// Images
// =====================
import img001 from "../../assets/1- Home One imgs/WomanImageHolding.webp";
import img002 from "../../assets/1- Home One imgs/ManImageHoldingGraph.webp";
import img003 from "../../assets/1- Home One imgs/FreeCourse.avif";

// =====================
// Data
// =====================
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
      "Get guidance from our expert team and find the right learning path for your goals.",
    button: "Get Started",
  },

  images: {
    main: img001,
    second: img002,
    third: img003,
  },
};

// =====================
// Animations
// =====================
const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

// =====================
// Component
// =====================
export default function Offer() {
  const { header, features, cta, images } = offerData;

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT IMAGES ================= */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative h-[600px]"
        >
          <motion.img
            src={images.main}
            whileHover={{ scale: 1.03 }}
            className="absolute right-0 top-12 w-[75%] rounded-3xl shadow-2xl"
            alt="Main"
          />

          <motion.img
            src={images.second}
            whileHover={{ scale: 1.03 }}
            className="absolute left-0 bottom-10 w-[45%] rounded-3xl shadow-xl border-8 border-white"
            alt="Second"
          />

          <motion.img
            src={images.third}
            whileHover={{ scale: 1.03 }}
            className="absolute left-10 top-0 w-[35%] rounded-3xl shadow-xl border-8 border-white"
            alt="Third"
          />
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-blue-600 font-semibold uppercase tracking-wider mb-4">
            {header.tag}
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            {header.title}
          </h2>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA CARD */}
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

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition">
              {cta.button}
              <FaArrowRight />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
