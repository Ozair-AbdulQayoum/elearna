import React, { useState } from "react";
import { motion } from "framer-motion";

// =====================
// Images
// =====================
import course1 from "../../assets/3- Course One imgs/CourseImage-1.webp";
import course2 from "../../assets/3- Course One imgs/CourseImage-2.webp";
import course3 from "../../assets/3- Course One imgs/CourseImage-3.webp";
import course4 from "../../assets/3- Course One imgs/CourseImage-4.webp";
import course5 from "../../assets/3- Course One imgs/CourseImage-5.webp";
import course6 from "../../assets/3- Course One imgs/CourseImage-6.webp";
import course7 from "../../assets/3- Course One imgs/CourseImage-7.webp";
import course8 from "../../assets/3- Course One imgs/CourseImage-8.webp";
import course9 from "../../assets/3- Course One imgs/CourseImage-9.webp";
import course10 from "../../assets/3- Course One imgs/CourseImage-10.webp";
import course11 from "../../assets/3- Course One imgs/CourseImage-11.webp";
import course12 from "../../assets/3- Course One imgs/CourseImage-12.webp";

// Icons
import Icon1 from "../../assets/3- Course One imgs/Books.svg";
import Icon2 from "../../assets/3- Course One imgs/Person.svg";
import Icon3 from "../../assets/3- Course One imgs/Rating.svg";

// =====================
// Data
// =====================
const courseData = [
  {
    image: course1,
    category: "Finance",
    title: "Understanding corporate finance and investments",
    rating: "4.88",
    reviews: "210",
    lessons: "10 Lessons",
    enrolled: "8k Enrolled",
    price: "Free",
  },
  {
    image: course2,
    category: "Design",
    title: "Advanced photoshop techniques for designers",
    rating: "5.00",
    reviews: "1.2K",
    lessons: "8 Lessons",
    enrolled: "25k Enrolled",
    price: "Free",
  },
  {
    image: course3,
    category: "Management",
    title: "Crisis management and problem-solving strategies",
    rating: "4.88",
    reviews: "210",
    lessons: "6 Lessons",
    enrolled: "8k Enrolled",
    price: "Free",
  },
  {
    image: course4,
    category: "Development",
    title: "Building single page applications with Angular",
    rating: "5.00",
    reviews: "328",
    lessons: "6 Lessons",
    enrolled: "8k Enrolled",
    price: "Free",
  },
  {
    image: course5,
    category: "Development",
    title: "Database integration with MongoDB",
    rating: "4.49",
    reviews: "756",
    lessons: "10 Lessons",
    enrolled: "7k Enrolled",
    price: "$59",
  },
  {
    image: course6,
    category: "Development",
    title: "Full-stack development with the MERN stack",
    rating: "5.00",
    reviews: "985",
    lessons: "12 Lessons",
    enrolled: "22k Enrolled",
    price: "$72",
  },
  {
    image: course7,
    category: "Finance",
    title: "The complete guide to personal and business finance",
    rating: "4.88",
    reviews: "210",
    lessons: "10 Lessons",
    enrolled: "8K Enrolled",
    price: "$99",
  },
  {
    image: course8,
    category: "Design",
    title: "Learn interactive Web Design by building real projects",
    rating: "4.49",
    reviews: "756",
    lessons: "12 Lessons",
    enrolled: "23k Enrolled",
    price: "$79",
  },
  {
    image: course9,
    category: "Management",
    title: "Grow your brand and reach your audience",
    rating: "5.00",
    reviews: "210",
    lessons: "10 Lessons",
    enrolled: "8k Enrolled",
    price: "$49",
  },
  {
    image: course10,
    category: "Design",
    title: "Design systems and pattern libraries",
    rating: "5.00",
    reviews: "1.2K",
    lessons: "8 Lessons",
    enrolled: "25k Enrolled",
    price: "$99",
  },
  {
    image: course11,
    category: "Finance",
    title: "Operations management and process improvement",
    rating: "5.00",
    reviews: "510",
    lessons: "12 Lessons",
    enrolled: "23k Enrolled",
    price: "Free",
  },
  {
    image: course12,
    category: "Management",
    title: "Risk management and business continuity",
    rating: "4.92",
    reviews: "730",
    lessons: "8 Lessons",
    enrolled: "18k Enrolled",
    price: "$55",
  },
];

// Icons
const icons = {
  lessons: Icon1,
  students: Icon2,
  rating: Icon3,
};

// =====================
// Component
// =====================
export default function Courses() {
  const [page, setPage] = useState(1);

  const perPage = 6;
  const start = (page - 1) * perPage;
  const displayed = courseData.slice(start, start + perPage);

  const onlyDetails = [0, 1, 2, 3, 10];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Online Learning
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            Top Online Courses
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayed.map((course, index) => {
            const globalIndex = start + index;
            const singleButton = onlyDetails.includes(globalIndex);

            return (
              <motion.div
                key={globalIndex}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute -bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white font-bold shadow-lg">
                    {course.price}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 pt-10">
                  <p className="text-sm font-semibold text-blue-600">
                    {course.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    {course.title}
                  </h3>

                  {/* Rating */}
                  <div className="mt-4 flex items-center gap-2">
                    <img src={icons.rating} className="w-5 h-5" />
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-gray-500">({course.reviews})</span>
                  </div>

                  {/* Info */}
                  <div className="mt-6 flex justify-between text-sm text-gray-600 group-hover:opacity-0 transition">
                    <div className="flex items-center gap-2">
                      <img src={icons.lessons} className="w-5 h-5" />
                      {course.lessons}
                    </div>

                    <div className="flex items-center gap-2">
                      <img src={icons.students} className="w-5 h-5" />
                      {course.enrolled}
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition">
                    {singleButton ? (
                      <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
                        Course Details
                      </button>
                    ) : (
                      <div className="flex gap-3">
                        <button className="w-1/2 bg-gray-900 text-white py-3 rounded-lg">
                          Course Details
                        </button>

                        <button className="w-1/2 bg-blue-600 text-white py-3 rounded-lg">
                          Enroll
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* PAGINATION */}
        <div className="mt-14 flex justify-center gap-3">
          {[1, 2].map((item) => (
            <button
              key={item}
              onClick={() => setPage(item)}
              className={`h-11 w-11 rounded-full border font-semibold ${
                page === item
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-gray-700 border-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
