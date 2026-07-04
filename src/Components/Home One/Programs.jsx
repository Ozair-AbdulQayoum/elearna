import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

// =====================
// Images
// =====================
import Prog1 from "../../assets/1- Home One imgs/CourseSmallImage-1.webp";
import Prog2 from "../../assets/1- Home One imgs/CourseSmallImage-2.webp";
import Prog3 from "../../assets/1- Home One imgs/CourseSmallImage-3.webp";
import Prog4 from "../../assets/1- Home One imgs/CourseSmallImage-4.webp";

// =====================
// Data
// =====================
const programData = {
  header: {
    tag: "Trending Courses",
    title: "Explore our top programs",
  },

  programs: [
    {
      image: Prog1,
      category: "Development",
      title: "Building single page applications with Angular",
      rating: "5.00",
      reviews: 328,
      price: "$20",
      lessons: "6 Lessons",
      enrolled: "12k Enrolled",
      description:
        "Learn how to build scalable single-page applications using Angular with modern best practices.",
      buttons: ["details"],
    },
    {
      image: Prog2,
      category: "Database",
      title: "Database integration with MongoDB",
      rating: "4.95",
      reviews: 275,
      price: "$25",
      lessons: "10 Lessons",
      enrolled: "7k Enrolled",
      description:
        "Master MongoDB integration techniques and build powerful backend systems.",
      buttons: ["details", "enroll"],
    },
    {
      image: Prog3,
      category: "Business",
      title: "Risk management and business continuity",
      rating: "4.90",
      reviews: 198,
      price: "$18",
      lessons: "3 Lessons",
      enrolled: "8k Enrolled",
      description:
        "Understand risk strategies and ensure business stability in real-world scenarios.",
      buttons: ["details", "enroll"],
    },
    {
      image: Prog4,
      category: "Full Stack",
      title: "Full-stack development with the MERN stack",
      rating: "4.98",
      reviews: 245,
      price: "$22",
      lessons: "12 Lessons",
      enrolled: "22k Enrolled",
      description:
        "Become a full-stack developer by mastering MongoDB, Express, React, and Node.js.",
      buttons: ["details", "enroll"],
    },
  ],
};

export default function Programs() {
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const closeTimer = useRef(null);

  const { header, programs } = programData;

  const handleEnter = (course) => {
    clearTimeout(closeTimer.current);
    setHoveredCourse(course);
  };

  const handleLeave = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setHoveredCourse(null);
    }, 150);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* ================= HEADER (TOP LEFT) ================= */}
        <div className="text-left mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            {header.tag}
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
            {header.title}
          </h2>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((course, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => handleEnter(course)}
              onMouseLeave={handleLeave}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="relative bg-white rounded-2xl shadow-md overflow-visible"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={course.image}
                  className="w-full h-52 object-cover transition duration-500 hover:scale-110"
                  alt={course.title}
                />

                <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {course.price}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <p className="text-xs font-semibold uppercase text-blue-600">
                  {course.category}
                </p>

                <h3 className="mt-1 text-sm font-bold text-gray-900">
                  {course.title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                  <FaStar className="text-yellow-400" />
                  {course.rating} ({course.reviews})
                </div>
              </div>

              {/* ================= PREMIUM PREVIEW (TOP RIGHT) ================= */}
              <AnimatePresence>
                {hoveredCourse === course && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-2 top-2 z-50 w-[280px] rounded-xl bg-white p-4 shadow-2xl border"
                  >
                    <h3 className="text-sm font-bold text-gray-900">
                      {course.title}
                    </h3>

                    <div className="mt-1 flex gap-3 text-xs text-gray-600">
                      <span>{course.lessons}</span>
                      <span>{course.enrolled}</span>
                    </div>

                    <p className="mt-2 text-xs text-gray-500">
                      {course.description}
                    </p>

                    {/* FEATURE POINTS */}
                    <div className="mt-2 space-y-1 text-xs text-gray-600">
                      <p>• Modern learning system</p>
                      <p>• Real-world projects</p>
                      <p>• Industry-ready skills</p>
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-3 flex gap-2">
                      {course.buttons.includes("details") && (
                        <button className="flex-1 bg-gray-900 text-white py-1 rounded-lg text-xs">
                          Course Details
                        </button>
                      )}

                      {course.buttons.includes("enroll") && (
                        <button className="flex-1 bg-blue-600 text-white py-1 rounded-lg text-xs">
                          Enroll
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
