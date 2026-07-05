import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Images
import bgImg from "../../assets/1- Home One imgs/FooterOneBackground3.avif";
import girlImg from "../../assets/1- Home One imgs/BannerGirl.webp";
import img1 from "../../assets/1- Home One imgs/Achievements.webp";
import img2 from "../../assets/1- Home One imgs/TrustedByImage.avif";

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "70px"]);

  return (
    <section ref={heroRef} className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <motion.img
        src={bgImg}
        alt="background"
        style={{ y: bgY }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0 h-[115%] w-full object-cover"
      />

      {/* Low Opacity Color Overlay */}
      <div className="absolute inset-0 bg-[#061316]/45"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#061316]/70 via-[#061316]/35 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#061316]/60 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col-reverse items-center px-6 lg:flex-row">
        {/* Left Image */}
        <div className="relative mt-8 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
          <motion.img
            src={girlImg}
            alt="girl"
            initial={{ opacity: 0, scale: 0.85, y: 70 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="z-20 w-[230px] drop-shadow-2xl sm:w-[300px] md:w-[380px] lg:w-[430px]"
          />

          <motion.img
            src={img1}
            alt="achievement"
            initial={{ x: -100, opacity: 0, rotate: -8 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
            className="absolute left-4 top-1/2 z-30 w-20 -translate-y-1/2 rounded-2xl shadow-2xl sm:left-16 sm:w-28 md:w-32"
          />

          <motion.img
            src={img2}
            alt="trusted"
            initial={{ x: 100, opacity: 0, rotate: 8 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            animate={{ y: [0, 14, 0] }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              y: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
            className="absolute bottom-8 right-4 z-30 w-20 rounded-2xl shadow-2xl sm:right-16 sm:w-28 md:w-32"
          />
        </div>

        {/* Right Text */}
        <motion.div
          style={{ y: textY }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.16 }}
          className="w-full text-center text-white lg:w-1/2 lg:text-left"
        >
          <motion.h5
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-cyan-400"
          >
            Online learning
          </motion.h5>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.75 }}
            className="text-4xl font-bold leading-tight md:text-5xl lg:text-7xl"
          >
            More than <span className="text-[#FFB606]">25000+</span> courses
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75 }}
            className="mx-auto mt-6 max-w-md text-base leading-8 text-gray-200 lg:mx-0"
          >
            Learn modern skills with structured courses designed to improve your
            career and real-world knowledge.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-500 px-7 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-600"
          >
            Get Started
            <FaArrowRight className="text-sm" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
