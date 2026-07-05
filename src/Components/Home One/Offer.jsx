import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

// Images
import img001 from "../../assets/1- Home One imgs/WomanImageHolding.webp";
import img002 from "../../assets/1- Home One imgs/ManImageHoldingGraph.webp";
import img003 from "../../assets/1- Home One imgs/FreeCourse.avif";

const features = [
  "Skill-based instruction",
  "Analytics and insights",
  "Global certification",
  "Customizable courses",
];

const fadeLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Offer() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24">
      {/* Soft Background */}
      <div className="absolute left-0 top-20 h-60 w-60 rounded-full bg-cyan-100/60 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 h-64 w-64 rounded-full bg-[black]/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Images */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative h-[560px]"
        >
          <motion.img
            src={img001}
            alt="Woman learning"
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ duration: 0.4 }}
            className="absolute right-0 top-16 z-20 w-[76%] rounded-3xl object-cover shadow-2xl"
          />

          <motion.img
            src={img003}
            alt="Free course"
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-4 top-0 z-30 w-[36%] rounded-3xl border-8 border-white object-cover shadow-2xl"
          />

          <motion.img
            src={img002}
            alt="Learning graph"
            animate={{ y: [0, 14, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-8 left-0 z-30 w-[48%] rounded-3xl border-8 border-white object-cover shadow-2xl"
          />

          <div className="absolute bottom-0 right-8 h-32 w-32 rounded-full bg-[black]/30 blur-2xl"></div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-[black]">
            What We Offer
          </p>

          <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Personalized learning for your ambitions
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.12 }}
            className="mb-10 grid gap-5 sm:grid-cols-2"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <FaCheckCircle className="text-lg text-[black]" />
                <span className="font-semibold text-gray-800">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-[#0F252A]  text-[white] p-7 shadow-2xl shadow-gray-200/80"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Still have questions?
                </h3>

                <p className="max-w-md leading-7 text-gray-300">
                  Get guidance from our expert team and find the right learning
                  path for your goals.
                </p>
              </div>

              <button className="inline-flex w-fit items-center gap-3 rounded-full bg-[white] px-7 py-3 text-sm font-bold text-gray-950 transition duration-300 hover:bg-white">
                Get Started
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
