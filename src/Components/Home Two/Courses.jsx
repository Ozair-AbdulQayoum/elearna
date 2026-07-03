import React from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/11- Home Two Imgs/CourseImage-1.webp";
import img2 from "../../assets/11- Home Two Imgs/CourseImage-2.webp";
import img3 from "../../assets/11- Home Two Imgs/CourseImage-3.webp";
import img4 from "../../assets/11- Home Two Imgs/CourseImage-4.webp";
import rating from "../../assets/11- Home Two Imgs/Rating.svg";

const courses = [
  {
    category: "Development",
    title: "Building single page applications with Angular",
    rating: "5.00 (328)",
    price: "Free",
    img: img1,
    singleBtn: true,
  },
  {
    category: "Development",
    title: "Database integration with MongoDB",
    rating: "4.49 (756)",
    price: "$59",
    img: img2,
    singleBtn: false,
  },
  {
    category: "Finance",
    title: "Operations management and process improvement",
    rating: "5.00 (812)",
    price: "Free",
    img: img3,
    singleBtn: true,
  },
  {
    category: "Management",
    title: "Risk management and business continuity",
    rating: "4.88 (210)",
    price: "$49",
    img: img4,
    singleBtn: false,
  },
  {
    category: "Design",
    title: "Design systems and pattern libraries",
    rating: "5.00 (1.2K)",
    price: "$99",
    img: img1,
    singleBtn: false,
  },
  {
    category: "Development",
    title: "Full-stack development with the MERN stack",
    rating: "5.00 (985)",
    price: "$72",
    img: img2,
    singleBtn: false,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Courses() {
  return (
    <section className="py-24 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="uppercase tracking-[5px] text-gray-500 text-sm">
            Online Learning
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Top Online Courses
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative h-[440px] overflow-hidden rounded-3xl cursor-pointer"
            >
              {/* Image */}
              <img
                src={course.img}
                alt={course.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

              {/* Price Badge */}
              <div className="absolute top-5 right-5 z-30 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl ring-4 ring-white/20 transition-transform duration-500 group-hover:scale-110">
                <span className="text-lg font-bold text-white">
                  {course.price}
                </span>
              </div>

              {/* Corner Borders */}
              <div className="pointer-events-none absolute inset-0 z-20">
                <span className="absolute left-5 top-5 h-0 w-0 border-l-[3px] border-t-[3px] border-white transition-all duration-500 group-hover:h-16 group-hover:w-16"></span>

                <span className="absolute bottom-5 right-5 h-0 w-0 border-b-[3px] border-r-[3px] border-white transition-all duration-500 group-hover:h-16 group-hover:w-16"></span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 z-30 w-full p-8 text-white">
                <p className="text-xs uppercase tracking-[4px] text-yellow-400">
                  {course.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-snug">
                  {course.title}
                </h3>

                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={rating}
                    alt="Rating"
                    className="w-24 object-contain"
                  />

                  <span className="text-sm font-medium">{course.rating}</span>
                </div>

                {/* Buttons */}
                <div className="mt-7 flex gap-3 opacity-0 translate-y-8 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {course.singleBtn ? (
                    <button className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-yellow-300">
                      Enroll Now
                    </button>
                  ) : (
                    <>
                      <button className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-yellow-300">
                        Enroll Now
                      </button>

                      <button className="rounded-full border border-white px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-black hover:scale-105">
                        Details
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
