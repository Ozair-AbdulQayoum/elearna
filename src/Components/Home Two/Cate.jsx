import React from "react";
import { motion } from "framer-motion";

import Cate1 from "../../assets/11- Home Two Imgs/CategorIcons.svg";
import Cate2 from "../../assets/11- Home Two Imgs/CategoryIcons-2.svg";
import Cate3 from "../../assets/11- Home Two Imgs/CategoryIcons-3.svg";
import Cate4 from "../../assets/11- Home Two Imgs/CategoryIcons-4.svg";
import Cate5 from "../../assets/11- Home Two Imgs/CategoryIcons-5.svg";
import Cate6 from "../../assets/11- Home Two Imgs/CategoryIcons-6.svg";

const categories = [
  {
    icon: Cate1,
    title: "Creative Web Design",
    courses: "8 Courses",
  },
  {
    icon: Cate2,
    title: "Finance Accounting",
    courses: "10 Courses",
  },
  {
    icon: Cate3,
    title: "IT & Software",
    courses: "5 Courses",
  },
  {
    icon: Cate4,
    title: "Digital Marketing",
    courses: "4 Courses",
  },
  {
    icon: Cate5,
    title: "Web Development",
    courses: "8 Courses",
  },
  {
    icon: Cate6,
    title: "Content Writing",
    courses: "3 Courses",
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

const card = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Cate() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#4D6B7E] font-semibold uppercase tracking-wider mb-3">
            Top Categories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Discover leading categories
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4D6B7E] transition-colors duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl cursor-pointer"
            >
              <motion.img
                src={item.icon}
                alt={item.title}
                className="w-14 h-14 mb-5"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />

              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              <p className="text-gray-500">{item.courses}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
