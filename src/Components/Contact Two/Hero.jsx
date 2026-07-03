import React from "react";
import { motion } from "framer-motion";
import bg from "../../assets/16- Contact Two imgs/ContactUsOne-2.webp";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[420px] md:h-[520px] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
            Contact Us
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
