import React, { useState } from "react";
import { motion } from "framer-motion";

import Course1 from "../../assets/13- Course Two imgs/CourseImage-1.webp";
import Course2 from "../../assets/13- Course Two imgs/CourseImage-2.webp";
import Course3 from "../../assets/13- Course Two imgs/CourseImage-3.webp";
import Course4 from "../../assets/13- Course Two imgs/CourseImage-4.webp";
import Course5 from "../../assets/13- Course Two imgs/CourseImage-5.webp";
import Course6 from "../../assets/13- Course Two imgs/CourseImage-6.webp";
import Course7 from "../../assets/13- Course Two imgs/CourseImage-7.webp";
import Course8 from "../../assets/13- Course Two imgs/CourseImage-8.webp";
import Course9 from "../../assets/13- Course Two imgs/CourseImage-9.webp";
import Course10 from "../../assets/13- Course Two imgs/CourseImage-10.webp";
import Course11 from "../../assets/13- Course Two imgs/CourseImage-11.webp";
import Course12 from "../../assets/13- Course Two imgs/CourseImage-12.webp";

import iconrating from "../../assets/13- Course Two imgs/Rating.svg";

export default function Courses() {
  const [page, setPage] = useState(1);

  const courses = [
    {
      img: Course1,
      title: "Crisis management and problem-solving strategies",
      rating: "4.88 (210)",
      price: "Free",
    },
    {
      img: Course2,
      title: "Advanced photoshop techniques for designers",
      rating: "5.00 (1.2K)",
      price: "Free",
    },
    {
      img: Course3,
      title: "Understanding corporate finance and investments",
      rating: "4.88 (210)",
      price: "Free",
    },
    {
      img: Course4,
      title: "Building single page applications with angular",
      rating: "5.00 (328)",
      price: "Free",
    },
    {
      img: Course5,
      title: "Database integration with MongoDB",
      rating: "4.49 (756)",
      price: "$59",
    },
    {
      img: Course6,
      title: "Operations management and process improvement",
      rating: "5.00 (812)",
      price: "$49",
    },
    {
      img: Course7,
      title: "Risk management and business continuity",
      rating: "4.88 (210)",
      price: "$49",
    },
    {
      img: Course8,
      title: "Design systems and pattern libraries",
      rating: "5.00 (1.2K)",
      price: "$99",
    },
    {
      img: Course9,
      title: "Full-stack development with the MERN stack",
      rating: "5.00 (985)",
      price: "$72",
    },
    {
      img: Course10,
      title: "Grow your brand and reach your audience",
      rating: "4.88 (210)",
      price: "$49",
    },
    {
      img: Course11,
      title: "Learn interactive Web Design by building real projects",
      rating: "4.49 (756)",
      price: "$79",
    },
    {
      img: Course12,
      title: "The complete guide to personal and business finance",
      rating: "4.88 (210)",
      price: "$59",
    },
  ];

  const perPage = 6;
  const start = (page - 1) * perPage;
  const visibleCourses = courses.slice(start, start + perPage);

  const multiButtonIndexes = [4, 6, 7, 8, 9, 10, 11]; // 5,7,8,9,10,11,12

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* HEADER */}
      <div className="mb-10">
        <p className="text-gray-500 uppercase tracking-widest text-sm">
          Online Learning
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Top Online Courses</h2>
      </div>

      {/* GRID */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {visibleCourses.map((course, i) => {
          const realIndex = start + i;
          const hasTwoButtons = multiButtonIndexes.includes(realIndex);

          return (
            <motion.div
              key={i}
              className="group relative h-[440px] overflow-hidden rounded-3xl cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={course.img}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

              {/* PRICE */}
              <div className="absolute top-5 right-5 z-30 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white font-bold shadow-lg group-hover:scale-110 transition">
                {course.price}
              </div>

              {/* CORNER LINES */}
              <div className="absolute inset-0 z-20">
                <span className="absolute left-5 top-5 h-0 w-0 border-l-2 border-t-2 border-white transition-all duration-500 group-hover:h-14 group-hover:w-14"></span>
                <span className="absolute bottom-5 right-5 h-0 w-0 border-b-2 border-r-2 border-white transition-all duration-500 group-hover:h-14 group-hover:w-14"></span>
              </div>

              {/* TEXT */}
              <div className="absolute bottom-0 left-0 z-30 w-full p-6 text-white">
                <p className="text-sm font-semibold">{course.title}</p>

                <p className="text-xs flex items-center gap-2 mt-3">
                  <img src={iconrating} className="w-4 h-4" />
                  {course.rating}
                </p>

                {/* BUTTONS */}
                <div className="mt-5 flex gap-3 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                  <button className="bg-white text-black px-5 py-2 rounded-lg font-semibold">
                    Course Details
                  </button>

                  {hasTwoButtons && (
                    <button className="border border-white text-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition">
                      Preview
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-10 gap-3">
        {[1, 2].map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`px-4 py-2 rounded-lg border ${
              page === p ? "bg-black text-white" : "bg-white"
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </section>
  );
}
