import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../assets/17- Home Three imgs/CourseSmallImage.webp";
import img2 from "../../assets/17- Home Three imgs/CourseSmallImage-2.webp";
import img3 from "../../assets/17- Home Three imgs/CourseSmallImage-3.webp";
import img4 from "../../assets/17- Home Three imgs/CourseSmallImage-4.webp";
import img5 from "../../assets/17- Home Three imgs/CourseSmallImage-5.webp";
import img6 from "../../assets/17- Home Three imgs/CourseSmallImage-6.webp";
import img7 from "../../assets/17- Home Three imgs/CourseSmallImage-7.webp";
import img8 from "../../assets/17- Home Three imgs/CourseSmallImage-8.webp";

import ratingIcon from "../../assets/17- Home Three imgs/Rating.svg";

export default function Learning() {
  const [active, setActive] = useState(null);

  const courses = [
    {
      img: img1,
      category: "Development",
      title: "Building single page applications with angular",
      rating: "5.00 (328)",
      price: "Free",
      lessons: "6 Lessons",
      enrolled: "12k Enrolled",
      desc: "Eget viverra suspendisse imperdiet.",
      btn: "single",
    },
    {
      img: img2,
      category: "Development",
      title: "Database integration with MongoDB",
      rating: "4.49 (756)",
      price: "$59",
      lessons: "10 Lessons",
      enrolled: "7k Enrolled",
      desc: "Eget viverra suspendisse imperdiet.",
      btn: "dual",
    },
    {
      img: img3,
      category: "Management",
      title: "Risk management and business continuity",
      rating: "4.88 (210)",
      price: "$49",
      lessons: "3 Lessons",
      enrolled: "8k Enrolled",
      desc: "Eget viverra suspendisse imperdiet.",
      btn: "dual",
    },
    {
      img: img4,
      category: "Development",
      title: "Full-stack development with the MERN stack",
      rating: "5.00 (985)",
      price: "$72",
      lessons: "12 Lessons",
      enrolled: "22k Enrolled",
      desc: "Eget viverra suspendisse imperdiet.",
      btn: "dual",
    },
    {
      img: img5,
      category: "Finance",
      title: "Operations management and process improvement",
      rating: "5.00 (812)",
      price: "Free",
      lessons: "12 Lessons",
      enrolled: "23k Enrolled",
      desc: "Eget viverra suspendisse imperdiet.",
      btn: "single",
    },
    {
      img: img6,
      category: "Design",
      title: "Design systems and pattern libraries",
      rating: "5.00 (1.2K)",
      price: "$99",
      lessons: "8 Lessons",
      enrolled: "25k Enrolled",
      desc: "Eget viverra suspendisse imperdiet.",
      btn: "dual",
    },
    {
      img: img7,
      category: "Management",
      title: "Grow your brand and reach your audience",
      rating: "4.88 (210)",
      price: "$49",
      lessons: "10 Lessons",
      enrolled: "8k Enrolled",
      desc: "Eget viverra suspendisse imperdiet.",
      btn: "single",
    },
    {
      img: img8,
      category: "Finance",
      title: "The complete guide to personal and business finance",
      rating: "4.88 (210)",
      price: "$99",
      lessons: "10 Lessons",
      enrolled: "8k Enrolled",
      desc: "Eget viverra suspendisse imperdiet.",
      btn: "single",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      {/* HEADER (TOP LEFT FIXED) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-12 text-left"
      >
        <h2 className="text-3xl font-bold text-[#0F2227] sm:text-4xl">
          Online Learning
        </h2>
        <p className="mt-2 text-lg font-semibold text-gray-600">
          Popular courses
        </p>
      </motion.div>

      {/* GRID */}
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-visible rounded-xl bg-white shadow-sm"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={course.img}
                className="h-48 w-full object-cover transition duration-500"
              />

              <div className="absolute right-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                {course.price}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <p className="text-xs font-semibold uppercase text-blue-600">
                {course.category}
              </p>

              <h3 className="mt-1 text-sm font-bold text-[#0F2227]">
                {course.title}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                <img src={ratingIcon} className="h-4 w-4" />
                {course.rating}
              </div>
            </div>

            {/* PREVIEW CARD (TOP RIGHT) */}
            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-2 top-2 z-50 w-[260px] rounded-xl bg-white p-4 shadow-2xl"
                >
                  <h3 className="text-sm font-bold text-[#0F2227]">
                    {course.title}
                  </h3>

                  <div className="mt-1 flex gap-3 text-xs text-gray-600">
                    <span>{course.lessons}</span>
                    <span>{course.enrolled}</span>
                  </div>

                  <p className="mt-2 text-xs text-gray-500">{course.desc}</p>

                  <div className="mt-2 space-y-1 text-xs text-gray-600">
                    <p>• Lorem ipsum dolor sit amet consectetur</p>
                    <p>• Lorem ipsum dolor</p>
                    <p>• Lorem ipsum dolor sit</p>
                  </div>

                  {course.btn === "dual" ? (
                    <div className="mt-3 flex gap-2">
                      <button className="w-full rounded bg-[#FFB606] py-1 text-xs font-semibold">
                        Course Details
                      </button>
                      <button className="w-full rounded border border-[#0F2227] py-1 text-xs font-semibold">
                        Enroll
                      </button>
                    </div>
                  ) : (
                    <button className="mt-3 w-full rounded bg-[#FFB606] py-1 text-xs font-semibold">
                      Course Details
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
