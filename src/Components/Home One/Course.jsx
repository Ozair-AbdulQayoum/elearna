import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaBookOpen, FaUsers } from "react-icons/fa";

// =====================
// Images
// =====================
import Course1 from "../../assets/1- Home One imgs/CourseImage-1.webp";
import Course2 from "../../assets/1- Home One imgs/CourseImage-2.webp";
import Course3 from "../../assets/1- Home One imgs/CourseImage-3.webp";
import Course4 from "../../assets/1- Home One imgs/CourseImage-4.webp";
import Course5 from "../../assets/1- Home One imgs/CourseImage-5.webp";
import Course6 from "../../assets/1- Home One imgs/CourseImage-6.webp";

// =====================
// Data
// =====================
const courseData = {
  header: {
    tag: "Online Learning",
    title: "Top Online Courses",
    filters: ["All Courses", "Design", "Development", "Management", "Finance"],
  },

  courses: [
    {
      image: Course1,
      category: "Management",
      title: "Crisis management and problem-solving strategies",
      rating: "4.88",
      reviews: "210",
      lessons: "6 Lessons",
      enrolled: "8k Enrolled",
      price: "Free",
    },
    {
      image: Course2,
      category: "Design",
      title: "Advanced photoshop techniques for designers",
      rating: "5.00",
      reviews: "1.2K",
      lessons: "8 Lessons",
      enrolled: "25k Enrolled",
      price: "Free",
    },
    {
      image: Course3,
      category: "Finance",
      title: "Operations management and process improvement",
      rating: "5.00",
      reviews: "812",
      lessons: "12 Lessons",
      enrolled: "23k Enrolled",
      price: "Free",
    },
    {
      image: Course4,
      category: "Development",
      title: "Database integration with MongoDB",
      rating: "4.49",
      reviews: "756",
      lessons: "10 Lessons",
      enrolled: "7k Enrolled",
      price: "$59",
    },
    {
      image: Course5,
      category: "Management",
      title: "Risk management and business continuity",
      rating: "4.88",
      reviews: "210",
      lessons: "3 Lessons",
      enrolled: "8k Enrolled",
      price: "$49",
    },
    {
      image: Course6,
      category: "Development",
      title: "Full-stack development with the MERN stack",
      rating: "5.00",
      reviews: "985",
      lessons: "12 Lessons",
      enrolled: "22k Enrolled",
      price: "$72",
    },
  ],
};

// =====================
// Animation
// =====================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const buttonBase =
  "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300";

// =====================
// Component
// =====================
export default function Course() {
  const { header, courses } = courseData;

  return (
    <section className="py-20 px-4 bg-white">
      {/* HEADER */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-14"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div>
          <p className="text-blue-600 font-semibold mb-2">{header.tag}</p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            {header.title}
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {header.filters.map((item, index) => (
            <button
              key={index}
              className="px-5 py-2 rounded-full border hover:bg-blue-600 hover:text-white transition"
            >
              {item}
            </button>
          ))}
        </div>
      </motion.div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => {
          const isFirstThree = index < 3;

          return (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition duration-300"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* PRICE */}
              <div className="absolute top-4 left-4 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg z-20">
                {course.price}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <p className="text-blue-600 font-medium text-sm">
                  {course.category}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4 leading-snug">
                  {course.title}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <FaStar className="text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-500">({course.reviews})</span>
                </div>

                {/* HOVER SECTION */}
                <div className="relative h-14 overflow-hidden border-t pt-3">
                  {/* INFO */}
                  <div className="flex items-center justify-between text-sm text-gray-600 transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0">
                    <div className="flex items-center gap-2">
                      <FaBookOpen />
                      <span>{course.lessons}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaUsers />
                      <span>{course.enrolled}</span>
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {isFirstThree ? (
                      <button
                        className={`${buttonBase} bg-blue-600 text-white hover:bg-blue-700`}
                      >
                        Course Details
                      </button>
                    ) : (
                      <>
                        <button
                          className={`${buttonBase} bg-gray-900 text-white hover:bg-black`}
                        >
                          Course Details
                        </button>

                        <button
                          className={`${buttonBase} bg-blue-600 text-white hover:bg-blue-700`}
                        >
                          Enroll
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
