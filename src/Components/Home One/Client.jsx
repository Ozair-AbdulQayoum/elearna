import React from "react";
import { motion } from "framer-motion";

// Images
import Client1 from "../../assets/1- Home One imgs/ClientsLogo.svg";
import Client2 from "../../assets/1- Home One imgs/ClientsLogo-2.svg";
import Client3 from "../../assets/1- Home One imgs/ClientsLogo-3.svg";
import Client4 from "../../assets/1- Home One imgs/ClientsLogo-4.svg";
import Client5 from "../../assets/1- Home One imgs/ClientsLogo-5.svg";
import Client6 from "../../assets/1- Home One imgs/ClientsLogo-6.svg";

const logos = [Client1, Client2, Client3, Client4, Client5, Client6];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Client() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20">
      {/* Soft Background */}
      <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-100/60 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#FFB606]/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-2xl font-bold leading-tight text-gray-900 md:text-4xl">
            Learn from 350+ leading universities and companies with us
          </h2>
        </motion.div>

        {/* Logo Slider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white py-8 shadow-xl shadow-gray-200/60"
        >
          {/* Fade sides */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent"></div>

          <motion.div
            className="flex w-max items-center gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ duration: 0.3 }}
                className="flex h-20 w-44 items-center justify-center rounded-2xl bg-gray-50 px-6 transition duration-300 hover:bg-white hover:shadow-lg"
              >
                <img
                  src={logo}
                  alt={`client-logo-${index}`}
                  className="h-12 w-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-14"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
