import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/12- About Two imgs/AboutTwoHero.webp";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center">
      {/* IMAGE */}
      <img
        src={img1}
        alt="About Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* TEXT CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-yellow-300 font-semibold">
            About us
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            You’re sincerely determined to grow
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
