import React from "react";
import { motion } from "framer-motion";

import bg from "../../assets/17- Home Three imgs/HomeThreeBackground.webp";
import img1 from "../../assets/17- Home Three imgs/HomeThreeHeroManImage.webp";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0F2227]">
      {/* Background */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Light Overlay (Background is clearly visible) */}
      <div className="absolute inset-0 bg-[#0F2227]/30"></div>

      {/* Soft Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2227]/25 via-[#0F2227]/15 to-[#0F2227]/45"></div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end justify-center px-6 sm:px-8 lg:px-12">
        <div className="relative flex w-full items-end justify-center">
          {/* Personal (Behind Image) */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 top-8 -translate-x-1/2 whitespace-nowrap font-black uppercase leading-none text-white/10
              text-[55px]
              sm:text-[85px]
              md:text-[130px]
              lg:text-[180px]
              xl:text-[230px]
              2xl:text-[260px]"
          >
            Personal
          </motion.h1>

          {/* Hero Image */}
          <motion.img
            src={img1}
            alt="Personal Coach"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-10
              w-[280px]
              sm:w-[360px]
              md:w-[470px]
              lg:w-[580px]
              xl:w-[690px]
              2xl:w-[770px]"
          />

          {/* Coach (On Image) */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute left-1/2 top-[34%] z-20 -translate-x-1/2 whitespace-nowrap font-black uppercase leading-none text-[#FFB606]
              text-[50px]
              sm:text-[75px]
              md:text-[115px]
              lg:text-[155px]
              xl:text-[195px]
              2xl:text-[220px]"
          >
            Coach
          </motion.h1>

          {/* Bottom Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute bottom-8 left-1/2 z-30 w-full -translate-x-1/2 px-4 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[6px] text-[#FFB606] sm:text-sm md:text-base">
              Online Learning
            </p>

            <h2
              className="mt-4 font-bold leading-tight text-white
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl"
            >
              Digital Learning
              <br />
              Empowerment Hub
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
