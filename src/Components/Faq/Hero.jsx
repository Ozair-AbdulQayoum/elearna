import React from "react";
import { motion } from "framer-motion";

// =====================
// Assets
// =====================
import heroBg from "../../assets/4- FAQ/FAQHero.webp";

// =====================
// Data
// =====================
const faqHeroData = {
  bg: heroBg,
  title: "Frequently Asked Questions",
  description:
    "Find answers to the most common questions about our courses, enrollment process, and learning platform.",
};

// =====================
// Component
// =====================
export default function Faq() {
  const { bg, title, description } = faqHeroData;

  return (
    <section
      className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg text-gray-200 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
}
