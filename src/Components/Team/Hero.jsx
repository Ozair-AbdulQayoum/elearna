import React from "react";
import { motion } from "framer-motion";
import bg from "../../assets/8- Team imgs/TeamHeroImage.webp";

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          Our Experts
        </h1>
      </motion.div>
    </div>
  );
}
