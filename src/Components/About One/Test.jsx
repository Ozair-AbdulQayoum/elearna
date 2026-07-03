import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import quoteIcon from "../../assets/2- About One imgs/QuoteIcons.svg";

const testimonialData = {
  items: [
    {
      text: "Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.",
      name: "Linda Grady",
      role: "Co-assistant Manager",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis.",
      name: "Jim Adams",
      role: "Designer",
    },
    {
      text: "Learning with Elearna has completely transformed my career path. The courses are easy to follow and the instructors are excellent.",
      name: "Sarah Johnson",
      role: "Software Developer",
    },
  ],
};

export default function Test() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialData.items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonialData.items.length) %
        testimonialData.items.length,
    );
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonialData.items[currentIndex];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* QUOTE ICON */}
        <motion.img
          src={quoteIcon}
          alt="Quote"
          className="w-16 mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* TEXT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {current.text}
            </p>

            <h3 className="text-xl font-bold text-gray-900">{current.name}</h3>

            <p className="text-gray-500 mt-2">{current.role}</p>
          </motion.div>
        </AnimatePresence>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
