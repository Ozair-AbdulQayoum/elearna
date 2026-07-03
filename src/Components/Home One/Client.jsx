import React from "react";
import { motion } from "framer-motion";

// =====================
// Images
// =====================
import Client1 from "../../assets/1- Home One imgs/ClientsLogo.svg";
import Client2 from "../../assets/1- Home One imgs/ClientsLogo-2.svg";
import Client3 from "../../assets/1- Home One imgs/ClientsLogo-3.svg";
import Client4 from "../../assets/1- Home One imgs/ClientsLogo-4.svg";
import Client5 from "../../assets/1- Home One imgs/ClientsLogo-5.svg";
import Client6 from "../../assets/1- Home One imgs/ClientsLogo-6.svg";

// =====================
// Data
// =====================
const clientData = {
  heading: "Learn from 350+ leading universities and companies with us",
  logos: [Client1, Client2, Client3, Client4, Client5, Client6],
};

// =====================
// Animation
// =====================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// =====================
// Component
// =====================
export default function Client() {
  const { heading, logos } = clientData;

  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      {/* Heading */}
      <motion.div
        className="text-center mb-12 px-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-xl md:text-3xl font-semibold text-gray-800">
          {heading}
        </h2>
      </motion.div>

      {/* Slider */}
      <motion.div
        className="relative overflow-hidden"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex gap-16 w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Logos (first set) */}
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={logo}
                alt={`client-${index}`}
                className="h-14 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            </motion.div>
          ))}

          {/* Duplicate set for infinite loop */}
          {logos.map((logo, index) => (
            <motion.div
              key={`dup-${index}`}
              className="flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={logo}
                alt={`client-duplicate-${index}`}
                className="h-14 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
