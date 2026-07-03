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

// =====================
// Component
// =====================
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
    }, 180);
  };

  return (
    <section className="py-24 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-14">
          <p className="text-blue-600 font-semibold uppercase mb-3">
            {header.tag}
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {header.title}
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((course, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => handleEnter(course)}
              onMouseLeave={handleLeave}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={course.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  alt={course.title}
                />

                <div className="absolute top-4 right-4 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                  {course.price}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <span className="text-blue-600 text-sm font-semibold">
                  {course.category}
                </span>

                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3">
                  {course.title}
                </h3>

                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-500">({course.reviews})</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {hoveredCourse && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            onMouseEnter={() => clearTimeout(closeTimer.current)}
            onMouseLeave={handleLeave}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-xl w-full p-6"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
            >
              <img
                src={hoveredCourse.image}
                className="w-full h-52 object-cover rounded-xl mb-4"
                alt="course"
              />

              <span className="text-blue-600 text-sm font-semibold">
                {hoveredCourse.category}
              </span>

              <h2 className="text-2xl font-bold mt-2 mb-3">
                {hoveredCourse.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                {hoveredCourse.description}
              </p>

              <div className="flex justify-between text-sm text-gray-700 mb-6">
                <span>⭐ {hoveredCourse.rating}</span>
                <span>👥 {hoveredCourse.reviews} reviews</span>
              </div>

              <div className="flex gap-3">
                {hoveredCourse.buttons.includes("details") && (
                  <button className="flex-1 bg-gray-900 text-white py-2 rounded-full">
                    Course Details
                  </button>
                )}

                {hoveredCourse.buttons.includes("enroll") && (
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-full">
                    Enroll
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
