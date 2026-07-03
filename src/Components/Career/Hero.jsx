import React from "react";
import { motion } from "framer-motion";
import bg from "../../assets/6- Career imgs/PricingOneHero.webp";

export default function Hero() {
  const heroData = {
    bg,
    title: "We are hiring",
    subtitle: "Begin your journey as an instructor",
  };

  return (
    <section
      className="relative h-[80vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${heroData.bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 flex h-full max-w-2xl flex-col justify-center px-6 md:px-20 text-white"
      >
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          {heroData.title}
        </h1>

        <p className="text-lg text-gray-200 md:text-2xl">{heroData.subtitle}</p>
      </motion.div>
    </section>
  );
}
