import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: "01",
    title: "Flexibility and convenience",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
  {
    id: "02",
    title: "Course accessibility",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
  {
    id: "03",
    title: "Cost-effectiveness",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
  {
    id: "04",
    title: "Personalized learning",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
];

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
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

export default function Why() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      {/* Heading */}
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-blue-600 font-semibold uppercase tracking-wider">
          Why We Are
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
          We believe in our good education and development system
        </h2>

        <p className="mt-6 text-gray-600 leading-8">
          We believe in our good education and development system and we know
          how to work together to reach greater success.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
          >
            <span className="text-blue-600 text-sm font-bold">{item.id}</span>

            <h3 className="mt-4 text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
              {item.title}
            </h3>

            <p className="mt-5 text-gray-600 leading-8">{item.desc}</p>

            <div className="overflow-hidden">
              <button className="mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium transition-all duration-500 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
