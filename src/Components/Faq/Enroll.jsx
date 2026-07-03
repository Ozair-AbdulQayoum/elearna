import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

// =====================
// Data
// =====================
const enrollData = {
  categories: [
    "Enrollment and Registration",
    "Technical Requirements",
    "Assessments and Grading",
    "Communication and Support",
    "Certificates and Degrees",
  ],

  faqs: [
    {
      question: "How do I enroll in a course?",
      answer:
        "You can enroll by selecting a course, clicking the enroll button, and completing the registration process.",
    },
    {
      question: "What technical requirements do I need?",
      answer:
        "A stable internet connection and a modern browser are recommended for the best learning experience.",
    },
    {
      question: "How are assessments graded?",
      answer:
        "Assessments are graded automatically or reviewed by instructors depending on the course type.",
    },
    {
      question: "Can I contact instructors directly?",
      answer:
        "Yes, students can communicate with instructors through course discussion boards and support channels.",
    },
    {
      question: "Will I receive a certificate after completion?",
      answer:
        "Yes, certificates are awarded after successfully completing all course requirements.",
    },
  ],
};

// =====================
// Component
// =====================
export default function Enroll() {
  const [activeIndex, setActiveIndex] = useState(null);

  const { categories, faqs } = enrollData;

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        {/* ================= LEFT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-5 hover:bg-blue-600 hover:text-white transition cursor-pointer shadow-sm"
            >
              <h3 className="font-semibold text-lg">{item}</h3>
            </div>
          ))}
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-2 space-y-5"
        >
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    {faq.question}
                  </h3>

                  <span className="text-blue-600 text-lg">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-40 opacity-100 pb-6 px-6"
                      : "max-h-0 opacity-0 px-6"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
