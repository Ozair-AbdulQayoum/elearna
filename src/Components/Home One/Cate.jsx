import React from "react";
import { motion } from "framer-motion";

// =====================
// Images
// =====================
import img01 from "../../assets/1- Home One imgs/WomanUsingLaptop.webp";
import img02 from "../../assets/1- Home One imgs/HomeOneVideo-poster.jpg";
import img03 from "../../assets/1- Home One imgs/Controls.svg";

import Cate1 from "../../assets/1- Home One imgs/CategoryIcons.svg";
import Cate2 from "../../assets/1- Home One imgs/CategoryIcons-2.svg";
import Cate3 from "../../assets/1- Home One imgs/CategoryIcons.svg";
import Cate4 from "../../assets/1- Home One imgs/CategoryIcons-4.svg";
import Cate5 from "../../assets/1- Home One imgs/CategoryIcons-5.svg";
import Cate6 from "../../assets/1- Home One imgs/CategoryIcons-6.svg";

// =====================
// Data
// =====================
const cateData = {
  header: {
    title: "Top Categories",
    subtitle: "Discover leading categories to elevate your journey",
  },

  categories: [
    { icon: Cate1, name: "Creative Web Design", courses: 8 },
    { icon: Cate2, name: "Finance Accounting", courses: 10 },
    { icon: Cate3, name: "IT & Software", courses: 5 },
    { icon: Cate4, name: "Digital Marketing", courses: 4 },
    { icon: Cate5, name: "Content Writing", courses: 8 },
    { icon: Cate6, name: "Business Strategy", courses: 6 },
  ],

  banners: {
    left: {
      image: img01,
      text: "Quick access to the popular courses",
      button: "View Courses",
    },

    right: {
      image: img02,
      controls: img03,
      title: "Develop your skills online!",
      button: "Apply Now",
    },
  },
};

// =====================
// Animations
// =====================
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// =====================
// Component
// =====================
export default function Cate() {
  const { header, categories, banners } = cateData;

  return (
    <section className="w-full bg-white py-20 px-4">
      {/* HEADER */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {header.title}
        </h2>

        <p className="mt-3 text-gray-500 text-sm md:text-base">
          {header.subtitle}
        </p>
      </motion.div>

      {/* CATEGORY CARDS (RESPONSIVE GRID) */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {categories.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* ICON */}
            <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.name}
                className="w-10 h-10 object-contain group-hover:scale-110 transition"
              />
            </div>

            <h3 className="font-semibold text-sm text-gray-800">{item.name}</h3>

            <p className="text-xs text-gray-500 mt-1">
              {item.courses}+ Courses
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* BANNERS */}
      <div className="max-w-6xl mx-auto mt-16 grid lg:grid-cols-2 gap-8">
        {/* LEFT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-2xl shadow-lg h-[280px]"
        >
          <img
            src={banners.left.image}
            alt="Popular Courses"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="h-full w-full md:w-2/3 bg-gradient-to-r from-white via-white/95 to-transparent flex flex-col justify-center px-8">
              <p className="text-gray-600 mt-3 max-w-sm">{banners.left.text}</p>

              <button className="mt-6 w-fit bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
                {banners.left.button}
              </button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-2xl shadow-lg h-[280px] bg-slate-900"
        >
          <img
            src={banners.right.image}
            alt="Learning"
            className="absolute right-0 top-0 h-full w-[55%] object-cover"
          />

          <img
            src={banners.right.controls}
            alt="Controls"
            className="absolute right-[12%] bottom-4 md:bottom-6 w-36 md:w-44 z-20 drop-shadow-2xl"
          />

          <div className="relative z-10 flex flex-col justify-center h-full px-8 max-w-xs">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              {banners.right.title}
            </h3>

            <button className="mt-6 w-fit bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition">
              {banners.right.button}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
