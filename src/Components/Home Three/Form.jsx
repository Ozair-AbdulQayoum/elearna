import React from "react";
import { motion } from "framer-motion";

import bg from "../../assets/17- Home Three imgs/MainBg.webp";

import client1 from "../../assets/17- Home Three imgs/ClientsLogo.svg";
import client2 from "../../assets/17- Home Three imgs/ClientsLogo-2.svg";
import client3 from "../../assets/17- Home Three imgs/ClientsLogo-3.svg";
import client4 from "../../assets/17- Home Three imgs/ClientsLogo-4.svg";
import client5 from "../../assets/17- Home Three imgs/ClientsLogo-5.svg";

export default function Form() {
  const clients = [client1, client2, client3, client4, client5];

  return (
    <section className="relative w-full min-h-[750px] flex flex-col justify-between bg-[#050B14]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="bg"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* MAIN CONTENT (UNCHANGED) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        {/* LEFT */}
        <div className="text-white text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold">
            Get the courses by expert coach
          </h2>

          <p className="mt-3 text-gray-300 text-lg">Get started with us</p>

          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold">1.5K</h3>
              <p className="text-gray-400 mt-2 text-sm">Finish seasons</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">7.8K</h3>
              <p className="text-gray-400 mt-2 text-sm">Enrolled</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-gray-400 mt-2 text-sm">Job placement</p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-10 shadow-2xl">
          <h3 className="text-white text-xl font-bold mb-6">
            Course availability inquiry
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-blue-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-blue-400"
            />

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-blue-400"
            />

            <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg">
              Inquiry
            </button>
          </form>
        </div>
      </div>

      {/* ================= CLIENT SECTION (UPDATED) ================= */}
      <div className="relative z-10 w-full py-10">
        {/* 🔥 BACKGROUND WRAPPER FOR TEXT + LOGOS */}
        <div className="mx-auto max-w-6xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-6 px-6 overflow-hidden">
          {/* TEXT */}
          <p className="text-center text-white text-sm md:text-base mb-6">
            Learn from 350+ leading universities and companies with us
          </p>

          {/* ANIMATION */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-16 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear",
              }}
            >
              {[...clients, ...clients].map((logo, i) => (
                <motion.img
                  key={i}
                  src={logo}
                  alt="client"
                  className="h-10 md:h-12 opacity-80 hover:opacity-100 transition"
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
