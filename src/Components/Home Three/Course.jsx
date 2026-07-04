import React, { useState } from "react";
import { motion } from "framer-motion";

import bg1 from "../../assets/17- Home Three imgs/CourseBackground.webp";
import bg2 from "../../assets/17- Home Three imgs/CourseBackground-2.webp";
import bg3 from "../../assets/17- Home Three imgs/CourseBackground-3.webp";
import bg4 from "../../assets/17- Home Three imgs/CourseBackground-4.webp";
import bg5 from "../../assets/17- Home Three imgs/CourseBackground-5.webp";
import bg6 from "../../assets/17- Home Three imgs/CourseBackground-6.webp";

export default function Course() {
  const [active, setActive] = useState(0);

  const courses = [
    {
      title: "Building single page applications with angular",
      rating: "5.00 (328)",
      lessons: "6 Lessons",
      enrolled: "12k Enrolled",
      img: bg1,
    },
    {
      title: "Database integration with MongoDB",
      rating: "4.49 (756)",
      lessons: "10 Lessons",
      enrolled: "7k Enrolled",
      img: bg2,
    },
    {
      title: "Operations management and process improvement",
      rating: "5.00 (812)",
      lessons: "12 Lessons",
      enrolled: "23k Enrolled",
      img: bg3,
    },
    {
      title: "Risk management and business continuity",
      rating: "4.88 (210)",
      lessons: "3 Lessons",
      enrolled: "8k Enrolled",
      img: bg4,
    },
    {
      title: "Design systems and pattern libraries",
      rating: "5.00 (1.2K)",
      lessons: "8 Lessons",
      enrolled: "25k Enrolled",
      img: bg5,
    },
    {
      title: "Full-stack development with the MERN stack",
      rating: "5.00 (985)",
      lessons: "12 Lessons",
      enrolled: "22k Enrolled",
      img: bg6,
    },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* BACKGROUND */}
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0"
      >
        <img src={courses[active].img} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex min-h-screen items-center justify-between px-6 lg:px-16">
        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md text-white"
        >
          <h2 className="text-3xl font-bold">Trending courses</h2>

          <p className="mt-2 text-white/70">Explore our top programs</p>
        </motion.div>

        {/* RIGHT SIDE LIST */}
        <div className="max-w-2xl text-left text-white space-y-6">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActive(i)}
              whileHover={{ x: -10 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              {/* TITLE */}
              <h3
                className={`text-lg font-semibold transition
                  ${active === i ? "text-[#FFB606]" : "text-white"}`}
              >
                {course.title}
              </h3>

              {/* INFO */}
              <div className="mt-1 flex justify-end gap-4 text-sm text-white/70  text-left">
                <span>{course.rating}</span>
                <span>{course.lessons}</span>
                <span>{course.enrolled}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
