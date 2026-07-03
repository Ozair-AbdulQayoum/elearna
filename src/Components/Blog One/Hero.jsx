import React from "react";
import { motion } from "framer-motion";

// ================= HERO DATA (INSIDE SAME FILE) =================

import bg from "../../assets/9- Blog One imgs/BlogHeroImage.webp";

const blogHeroData = {
  bg,
  tag: "News and Journals",
  title: "Planning to transition to a new career?",
};

// ================= COMPONENT =================

export default function Hero() {
  const { bg, tag, title } = blogHeroData;

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl text-left text-white"
        >
          <h4 className="text-blue-400 font-semibold mb-3">{tag}</h4>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {title}
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
