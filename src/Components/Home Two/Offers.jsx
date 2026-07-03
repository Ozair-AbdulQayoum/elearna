import React from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/11- Home Two Imgs/BoyUsingLaptopImage.webp";

import client1 from "../../assets/11- Home Two Imgs/ClientIconBlack.svg";
import client2 from "../../assets/11- Home Two Imgs/ClientIconBlack-2.svg";
import client3 from "../../assets/11- Home Two Imgs/ClientIconBlack-3.svg";
import client4 from "../../assets/11- Home Two Imgs/ClientIconBlack-4.svg";
import client5 from "../../assets/11- Home Two Imgs/ClientIconBlack-5.svg";
import client6 from "../../assets/11- Home Two Imgs/ClientIconBlack-6.svg";

const clients = [client1, client2, client3, client4, client5, client6];

export default function Offers() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          {/* IMAGE */}
          <img
            src={img1}
            alt="Offers"
            className="w-full h-[600px] object-cover rounded-3xl"
          />

          {/* LEFT TEXT */}
          <div className="absolute top-1/2 left-10 -translate-y-1/2 max-w-xl text-white">
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-300">
              What we offer
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Personalized learning for your ambitions
            </h2>

            <p className="mt-6 text-white/80 leading-7">
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
              mauris mus. Vitae diam dolor lacus amet integer ut.
            </p>

            <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold transition">
              Get Course
            </button>
          </div>

          {/* FLOATING CARD */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[92%] bg-white shadow-2xl rounded-3xl px-10 py-8">
            {/* TOP TEXT */}
            <div className="text-center mb-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Learn from 350+ leading universities and companies with us
              </h3>
            </div>

            {/* MARQUEE WRAPPER */}
            <div className="relative overflow-hidden">
              {/* LEFT FADE */}
              <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />

              {/* RIGHT FADE */}
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

              {/* ANIMATED ROW */}
              <motion.div
                className="flex gap-14 w-max items-center"
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
                    className="w-12 h-12 object-contain opacity-80 hover:opacity-100 hover:scale-110 transition"
                    whileHover={{ scale: 1.15 }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
