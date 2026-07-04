import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Cour1 from "../../assets/18- Course Three imgs/CourseImage-1.webp";
import Cour2 from "../../assets/18- Course Three imgs/CourseImage-2.webp";
import Cour3 from "../../assets/18- Course Three imgs/CourseImage-3.webp";
import Cour4 from "../../assets/18- Course Three imgs/CourseImage-4.webp";
import Cour5 from "../../assets/18- Course Three imgs/CourseImage-5.webp";
import Cour6 from "../../assets/18- Course Three imgs/CourseImage-6.webp";
import Cour7 from "../../assets/18- Course Three imgs/CourseImage-7.webp";
import Cour8 from "../../assets/18- Course Three imgs/CourseImage-8.webp";
import Cour9 from "../../assets/18- Course Three imgs/CourseImage-9.webp";
import Cour10 from "../../assets/18- Course Three imgs/CourseImage-10.webp";
import Cour11 from "../../assets/18- Course Three imgs/CourseImage-11.webp";

import Icon from "../../assets/18- Course Three imgs/Rating.svg";
export default function Courses() {
  const [page, setPage] = useState(1);
  const [hovered, setHovered] = useState(null);

  const courses = [
    {
      img: Cour1,
      category: "Management",
      title: "Crisis management and problem-solving strategies",
      lessons: "6 Lessons",
      enrolled: "8k Enrolled",
      price: "Free",
      desc: "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
      bullets: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit",
      ],
      type: "single",
    },
    {
      img: Cour2,
      category: "Design",
      title: "Advanced photoshop techniques for designers",
      lessons: "8 Lessons",
      enrolled: "25k Enrolled",
      price: "Free",
      desc: "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
      bullets: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit",
      ],
      type: "single",
    },
    {
      img: Cour3,
      category: "Finance",
      title: "Understanding corporate finance and investments",
      lessons: "10 Lessons",
      enrolled: "8k Enrolled",
      price: "Free",
      desc: "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
      bullets: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit",
      ],
      type: "single",
    },
    {
      img: Cour4,
      category: "Development",
      title: "Full-stack development with the MERN stack",
      lessons: "12 Lessons",
      enrolled: "22k Enrolled",
      price: "$72",
      desc: "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
      bullets: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit",
      ],
      type: "dual",
    },
    {
      img: Cour5,
      category: "Development",
      title: "Building single page applications with Angular",
      lessons: "6 Lessons",
      enrolled: "12k Enrolled",
      price: "$0",
      desc: "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
      bullets: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit",
      ],
      type: "single",
    },
    {
      img: Cour6,
      category: "Development",
      title: "Database integration with MongoDB",
      lessons: "10 Lessons",
      enrolled: "7k Enrolled",
      price: "$59",
      desc: "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
      bullets: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit",
      ],
      type: "dual",
    },
    {
      img: Cour7,
      category: "Management",
      title: "Risk management and business continuity",
      lessons: "10 Lessons",
      enrolled: "7k Enrolled",
      price: "$59",
      desc: "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
      bullets: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit",
      ],
      type: "dual",
    },
    {
      img: Cour8,
      category: "Management",
      title: "Risk management and business continuity",
      lessons: "10 Lessons",
      enrolled: "7k Enrolled",
      price: "$59",
      desc: "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
      bullets: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit",
      ],
      type: "dual",
    },
    {
      img: Cour9,
      category: "Management",
      title: "Risk management and business continuity",
      lessons: "10 Lessons",
      enrolled: "7k Enrolled",
      price: "$59",
      desc: "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
      bullets: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit",
      ],
      type: "dual",
    },
    {
      img: Cour10,
      category: "Management",
      title: "Risk management and business continuity",
      lessons: "10 Lessons",
      enrolled: "7k Enrolled",
      price: "$59",
      desc: "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
      bullets: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit",
      ],
      type: "dual",
    },
    {
      img: Cour11,
      category: "Management",
      title: "Risk management and business continuity",
      lessons: "10 Lessons",
      enrolled: "7k Enrolled",
      price: "$59",
      desc: "Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.",
      bullets: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit",
      ],
      type: "dual",
    },
  ];

  const perPage = 8;
  const totalPages = Math.ceil(courses.length / perPage);
  const visible = courses.slice((page - 1) * perPage, page * perPage);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Online learning
          </h2>
          <p className="text-gray-600 mt-2">All online courses</p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visible.map((c, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl shadow-sm hover:shadow-xl transition"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={c.img}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  {c.price}
                </div>
              </div>

              {/* BASIC CONTENT */}
              <div className="p-4">
                <p className="text-xs font-semibold text-blue-600 uppercase">
                  {c.category}
                </p>

                <h3 className="text-sm font-bold text-gray-900 mt-1">
                  {c.title}
                </h3>

                <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                  <img src={Icon} className="w-4 h-4" />
                  {c.enrolled}
                </div>
              </div>

              {/* ================= PREVIEW (TOP RIGHT) ================= */}
              <AnimatePresence>
                {hovered === i && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-2 right-2 w-[280px] bg-white shadow-2xl rounded-xl p-4 z-50"
                  >
                    <h3 className="text-sm font-bold text-gray-900">
                      {c.title}
                    </h3>

                    <div className="flex gap-3 text-xs text-gray-500 mt-1">
                      <span>{c.lessons}</span>
                      <span>{c.enrolled}</span>
                    </div>

                    <p className="text-xs text-gray-500 mt-2">{c.desc}</p>

                    <div className="mt-3 space-y-1 text-xs text-gray-600">
                      {c.bullets.map((b, idx) => (
                        <p key={idx}>• {b}</p>
                      ))}
                    </div>

                    <div className="mt-3 flex gap-2">
                      <button className="w-full bg-gray-900 text-white text-xs py-2 rounded-lg">
                        Course Details
                      </button>

                      {c.type === "dual" && (
                        <button className="w-full bg-blue-600 text-white text-xs py-2 rounded-lg">
                          Enroll
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                page === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
