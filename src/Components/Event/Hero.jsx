import React from "react";
import { motion } from "framer-motion";
import bg from "../../assets/7- Events imgs/EventsBanner.webp";

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex justify-start px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-lg text-left text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Enjoy with us</h2>

          <p className="text-lg md:text-2xl text-gray-200">
            Great upcoming events for our institute
          </p>
        </motion.div>
      </div>
    </div>
  );
}
