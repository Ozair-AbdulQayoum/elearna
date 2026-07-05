import React from "react";
import { motion } from "framer-motion";

// Images
import img01 from "../../assets/1- Home One imgs/WomanUsingLaptop.webp";
import img02 from "../../assets/1- Home One imgs/HomeOneVideo-poster.jpg";
import img03 from "../../assets/1- Home One imgs/Controls.svg";

import Cate1 from "../../assets/1- Home One imgs/CategoryIcons.svg";
import Cate2 from "../../assets/1- Home One imgs/CategoryIcons-2.svg";
import Cate3 from "../../assets/1- Home One imgs/CategoryIcons.svg";
import Cate4 from "../../assets/1- Home One imgs/CategoryIcons-4.svg";
import Cate5 from "../../assets/1- Home One imgs/CategoryIcons-5.svg";
import Cate6 from "../../assets/1- Home One imgs/CategoryIcons-6.svg";

const categories = [
  { icon: Cate1, name: "Creative Web Design", courses: 8 },
  { icon: Cate2, name: "Finance Accounting", courses: 10 },
  { icon: Cate3, name: "IT & Software", courses: 5 },
  { icon: Cate4, name: "Digital Marketing", courses: 4 },
  { icon: Cate5, name: "Content Writing", courses: 8 },
  { icon: Cate6, name: "Business Strategy", courses: 6 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function Cate() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-24">
      {/* Soft Background */}
      <div className="absolute left-0 top-20 h-52 w-52 rounded-full bg-cyan-100/60 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 h-56 w-56 rounded-full bg-[#FFB606]/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
            Top Categories
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-500">
            Discover leading categories to elevate your journey
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6"
        >
          {categories.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition duration-300 hover:border-cyan-100 hover:shadow-2xl hover:shadow-cyan-100/70"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 transition duration-300 group-hover:bg-[#FFB606]/15">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-10 w-10 object-contain transition duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="text-sm font-bold leading-6 text-gray-900">
                {item.name}
              </h3>

              <p className="mt-2 text-sm font-medium text-gray-500">
                {item.courses}+ Courses
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Banners */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Left Banner */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -6 }}
            className="group relative h-[310px] overflow-hidden rounded-3xl shadow-xl shadow-gray-200/70"
          >
            <img
              src={img01}
              alt="Popular Courses"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10"></div>

            <div className="absolute inset-0 flex items-center px-8 md:px-10">
              <div className="max-w-sm">
                <h3 className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
                  Quick access to the popular courses
                </h3>

                <button className="mt-7 rounded-full bg-[#0F252A] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30">
                  View Courses
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Banner */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -6 }}
            className="group relative h-[310px] overflow-hidden rounded-3xl bg-[#0F252A] shadow-xl shadow-gray-200/70"
          >
            <img
              src={img02}
              alt="Learning"
              className="absolute right-0 top-0 h-full w-[58%] object-cover opacity-80 transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0F252A] via-[#0F252A]/95 to-[#0F252A]/20"></div>

            <motion.img
              src={img03}
              alt="Controls"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-6 right-[10%] z-20 w-36 drop-shadow-2xl md:w-44"
            />

            <div className="relative z-10 flex h-full max-w-sm flex-col justify-center px-8 md:px-10">
              <h3 className="text-2xl font-bold leading-tight text-white md:text-4xl">
                Develop your skills online!
              </h3>

              <button className="mt-7 w-fit rounded-full bg-[#FFB606] px-7 py-3 text-sm font-semibold text-gray-950 transition duration-300 hover:bg-white hover:shadow-lg">
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
