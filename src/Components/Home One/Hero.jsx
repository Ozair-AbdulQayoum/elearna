import React from "react";
import { motion } from "framer-motion";

// =====================
// Images
// =====================
import bgImg from "../../assets/1- Home One imgs/FooterOneBackground3.avif";
import girlImg from "../../assets/1- Home One imgs/BannerGirl.webp";
import img1 from "../../assets/1- Home One imgs/Achievements.webp";
import img2 from "../../assets/1- Home One imgs/TrustedByImage.avif";

// =====================
// Data
// =====================
const heroData = {
  bgImg,
  girlImg,
  img1,
  img2,
  titleSmall: "Online learning",
  titleMain: "More than 25000+ courses",
  description:
    "Learn modern skills with structured courses designed to improve your career and real-world knowledge.",
  buttonText: "Get Started",
};

// =====================
// Component
// =====================
export default function Hero() {
  const {
    bgImg,
    girlImg,
    img1,
    img2,
    titleSmall,
    titleMain,
    description,
    buttonText,
  } = heroData;

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background */}
      <img
        src={bgImg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#12292E]/85"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col-reverse lg:flex-row items-center px-6">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-10 lg:mt-0">
          {/* Main Image */}
          <motion.img
            src={girlImg}
            alt="girl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-[240px] sm:w-[300px] md:w-[380px] lg:w-[420px] drop-shadow-2xl z-20"
          />

          {/* Left floating image */}
          <motion.img
            src={img1}
            alt="decor-1"
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute left-10 sm:left-20 top-1/2 -translate-y-1/2 w-16 sm:w-24 md:w-28 rounded-xl shadow-xl z-30"
          />

          {/* Right floating image */}
          <motion.img
            src={img2}
            alt="decor-2"
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute right-10 sm:right-20 bottom-10 w-16 sm:w-24 md:w-28 rounded-xl shadow-xl z-30"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-cyan-400 mb-3"
          >
            {titleSmall}
          </motion.h5>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            {titleMain}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-5 text-gray-200 max-w-md mx-auto lg:mx-0"
          >
            {description}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full transition hover:scale-105"
          >
            {buttonText}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
