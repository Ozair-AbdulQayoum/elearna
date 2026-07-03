import React from "react";
import { motion } from "framer-motion";
import bg from "../../assets/5- Pricing One/PricingOneHero.webp";

export default function Hero() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-400 font-semibold uppercase tracking-wider mb-4"
        >
          Pricing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight"
        >
          Flexible pricing plan for everyone
        </motion.h1>
      </div>
    </section>
  );
}
