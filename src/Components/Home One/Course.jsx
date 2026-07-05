import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaBookOpen, FaUsers, FaArrowRight } from "react-icons/fa";

// Images
import Course1 from "../../assets/1- Home One imgs/CourseImage-1.webp";
import Course2 from "../../assets/1- Home One imgs/CourseImage-2.webp";
import Course3 from "../../assets/1- Home One imgs/CourseImage-3.webp";
import Course4 from "../../assets/1- Home One imgs/CourseImage-4.webp";
import Course5 from "../../assets/1- Home One imgs/CourseImage-5.webp";
import Course6 from "../../assets/1- Home One imgs/CourseImage-6.webp";

const filters = [
  "All Courses",
  "Design",
  "Development",
  "Management",
  "Finance",
];

const courses = [
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
];

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const buttonBase =
  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300";

export default function Course() {
  const [activeFilter, setActiveFilter] = useState("All Courses");

  const filteredCourses =
    activeFilter === "All Courses"
      ? courses
      : courses.filter((course) => course.category === activeFilter);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-24">
      <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-cyan-100/60 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 h-60 w-60 rounded-full bg-[#FFB606]/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-[blacke]">
              Online Learning
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
              Top Online Courses
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setActiveFilter(item)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeFilter === item
                    ? "border-[#FFB606] bg-[#FFB606] text-white shadow-lg"
                    : "border-gray-200 bg-white text-gray-700 hover:border-[#FFB606] hover:bg-[#FFB606] hover:text-gray-950"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredCourses.map((course, index) => {
            const isFirstThree = index < 3;

            return (
              <motion.div
                key={course.title}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg shadow-gray-200/70 transition duration-300 hover:shadow-2xl hover:shadow-cyan-100/70"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>

                  <div className="absolute left-5 top-5 flex h-16 w-16 items-center justify-center rounded-full bg-[blue] text-base font-bold text-white shadow-xl">
                    {course.price}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-[#FFB606]">
                    {course.category}
                  </p>

                  <h3 className="mt-3 min-h-[58px] text-xl font-bold leading-snug text-gray-900 transition group-hover:text-cyan-700">
                    {course.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2">
                    <FaStar className="text-[#FFB606]" />
                    <span className="font-bold text-gray-900">
                      {course.rating}
                    </span>
                    <span className="text-gray-500">({course.reviews})</span>
                  </div>

                  <div className="relative mt-5 h-16 overflow-hidden border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between text-sm font-medium text-gray-600 transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0">
                      <div className="flex items-center gap-2">
                        <FaBookOpen className="text-cyan-600" />
                        <span>{course.lessons}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <FaUsers className="text-cyan-600" />
                        <span>{course.enrolled}</span>
                      </div>
                    </div>

                    <div className="absolute inset-0 flex translate-y-6 items-center justify-center gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {isFirstThree ? (
                        <button
                          className={`${buttonBase} bg-[#0F252A] text-white hover:bg-[#FFB606] hover:text-gray-950`}
                        >
                          Course Details <FaArrowRight className="text-xs" />
                        </button>
                      ) : (
                        <>
                          <button
                            className={`${buttonBase} bg-[#0F252A] text-white hover:bg-black`}
                          >
                            Details
                          </button>

                          <button
                            className={`${buttonBase} bg-[#FFB606] text-gray-950 hover:bg-cyan-500 hover:text-white`}
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
        </motion.div>
      </div>
    </section>
  );
}
