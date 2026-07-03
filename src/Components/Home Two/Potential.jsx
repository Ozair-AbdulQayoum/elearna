import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    desc: "Learn directly from experienced professionals.",
    image: img3,
  },
  {
    id: "04",
    title: "Career opportunities",
    desc: "Build practical skills that help you grow professionally.",
    image: img4,
  },
];

export default function Potential() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-16 px-4">
      {/* Heading */}
      <div className="max-w-2xl mx-auto text-center mb-10">
        <span className="uppercase tracking-[4px] text-gray-500 text-xs">
          Unlocking Potential
        </span>

        <h2 className="mt-4 text-2xl md:text-4xl font-bold leading-snug">
          Discover the boundless advantages and transformative power of
          eLearning
        </h2>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex h-[420px] rounded-2xl overflow-hidden">
        {cards.map((card, index) => {
          const isActive = active === index;

          return (
            <motion.div
              key={card.id}
              onMouseEnter={() => setActive(index)}
              className="relative flex-1 min-w-0 overflow-hidden cursor-pointer"
              animate={{
                flexGrow: isActive ? 4 : 1,
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
                className="absolute inset-0 w-full h-full object-cover"
                animate={{
                  scale: isActive ? 1 : 1.08,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                animate={{
                  opacity: isActive ? 1 : 0.85,
                }}
                transition={{ duration: 0.6 }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <motion.h2
                  animate={{
                    fontSize: isActive ? "38px" : "30px",
                    y: isActive ? 0 : 5,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-bold leading-none"
                >
                  {card.id}
                </motion.h2>

                <motion.h3
                  animate={{
                    y: isActive ? 0 : 10,
                    opacity: isActive ? 1 : 0.9,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-3 text-xl font-semibold"
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
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <p className="mt-3 text-sm text-white/80">{card.desc}</p>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-5 px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-yellow-400 transition"
                      >
                        Learn More
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="relative h-[300px] rounded-2xl overflow-hidden"
          >
            <motion.img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-5 text-white">
              <h2 className="text-3xl font-bold">{card.id}</h2>

              <h3 className="mt-2 text-lg font-semibold">{card.title}</h3>

              <p className="mt-2 text-xs text-white/80">{card.desc}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-yellow-400 transition"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
