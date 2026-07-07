import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import img1 from "../../assets/11- Home Two Imgs/PotentialImage-1.webp";
import img2 from "../../assets/11- Home Two Imgs/PotentialImage-2.webp";
import img3 from "../../assets/11- Home Two Imgs/PotentialImage-3.webp";
import img4 from "../../assets/11- Home Two Imgs/PotentialImage-4.webp";

const cards = [
  {
    id: "01",
    title: "Flexibility and convenience",
    desc: "Learn anytime, anywhere with full control over your schedule and progress.",
    image: img1,
  },
  {
    id: "02",
    title: "Course accessibility",
    desc: "Access learning materials from desktop, tablet, or mobile anytime.",
    image: img2,
  },
  {
    id: "03",
    title: "Expert instructors",
    desc: "Learn directly from experienced professionals and industry experts.",
    image: img3,
  },
  {
    id: "04",
    title: "Career opportunities",
    desc: "Build practical skills that help you grow professionally and unlock new opportunities.",
    image: img4,
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Potential() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-24">
      {/* Soft Background Effects */}
      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-yellow-100/70 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[5px] text-[#4D6B7E]">
            Unlocking Potential
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-950 md:text-5xl">
            Discover the boundless advantages and transformative power of
            eLearning
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500">
            Explore flexible learning solutions designed to help you gain
            real-world skills, learn from experts, and grow your career.
          </p>
        </motion.div>

        {/* Desktop Cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden h-[460px] overflow-hidden rounded-[32px] shadow-2xl shadow-gray-200/80 lg:flex"
        >
          {cards.map((card, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setActive(index)}
                className="group relative min-w-0 cursor-pointer overflow-hidden"
                animate={{
                  flexGrow: isActive ? 4.2 : 1,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Image */}
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  animate={{
                    scale: isActive ? 1 : 1.12,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10"
                  animate={{
                    opacity: isActive ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Number */}
                <div className="absolute left-6 top-6 z-20">
                  <motion.span
                    animate={{
                      scale: isActive ? 1 : 0.92,
                      opacity: isActive ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-bold text-white/90"
                  >
                    {card.id}
                  </motion.span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 z-20 w-full p-7 text-white">
                  <motion.h3
                    animate={{
                      y: isActive ? 0 : 10,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="max-w-sm text-2xl font-bold leading-tight"
                  >
                    {card.title}
                  </motion.h3>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 25 }}
                        transition={{
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
                          {card.desc}
                        </p>

                        <button className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition duration-300 hover:bg-[#FFB606] hover:shadow-lg">
                          Learn More
                          <FaArrowRight className="text-xs" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
              className="group relative h-[330px] overflow-hidden rounded-3xl shadow-xl shadow-gray-200/80"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 left-0 z-10 w-full p-6 text-white">
                <span className="text-4xl font-bold text-white/90">
                  {card.id}
                </span>

                <h3 className="mt-4 text-xl font-bold leading-tight">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/80">
                  {card.desc}
                </p>

                <button className="mt-5 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-950 transition duration-300 hover:bg-[#FFB606]">
                  Learn More
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
