import React from "react";
import { motion } from "framer-motion";

import img from "../../assets/11- Home Two Imgs/Hero.webp";
import icon1 from "../../assets/11- Home Two Imgs/CircleIconOne.svg";
import icon2 from "../../assets/11- Home Two Imgs/CircleIconTwo.svg";
import icon3 from "../../assets/11- Home Two Imgs/CircleIconThree.svg";

export default function Hero() {
  return (
    <div className="relative">
      <section className="relative w-full min-h-screen bg-black overflow-visible">
        {/* BACKGROUND */}
        <img
          src={img}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* ================= TOP TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute left-6 md:left-12 top-10 md:top-1/2 md:-translate-y-1/2 z-20"
        >
          <h1 className="text-white text-[42px] md:text-[90px] font-bold leading-none">
            PERSONAL
          </h1>

          <h1 className="text-[#4D6B7E] text-[42px] md:text-[90px] font-bold leading-none mt-2">
            COACH
          </h1>
        </motion.div>

        {/* ================= BOTTOM TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute bottom-28 md:bottom-24 right-4 md:right-10 text-left text-white z-20 px-4 max-w-xs md:max-w-2xl"
        >
          <p className="text-lg md:text-2xl text-gray-200 mb-2">
            Online learning
          </p>

          <h1 className="text-2xl md:text-6xl font-bold leading-tight">
            Transform learning with flexible online education
          </h1>
        </motion.div>

        {/* ================= FLOATING CARD (FIXED) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="
            absolute left-1/2 -bottom-16 -translate-x-1/2
            w-[95%] md:w-[90%] max-w-6xl
            bg-white rounded-2xl shadow-2xl p-6 md:p-8 z-40
          "
        >
          {/* MOBILE: 2 COL | DESKTOP: 3 COL */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* ITEM 1 */}
            <div className="flex items-start gap-3 md:gap-4">
              <img src={icon1} alt="icon" className="w-8 md:w-10 h-8 md:h-10" />
              <div>
                <h3 className="font-semibold text-sm md:text-lg">
                  150+ Online Courses
                </h3>
                <p className="text-gray-500 text-xs md:text-sm">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-start gap-3 md:gap-4">
              <img src={icon2} alt="icon" className="w-8 md:w-10 h-8 md:h-10" />
              <div>
                <h3 className="font-semibold text-sm md:text-lg">
                  Personalized Learning
                </h3>
                <p className="text-gray-500 text-xs md:text-sm">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-start gap-3 md:gap-4 col-span-2 md:col-span-1">
              <img src={icon3} alt="icon" className="w-8 md:w-10 h-8 md:h-10" />
              <div>
                <h3 className="font-semibold text-sm md:text-lg">
                  Lifetime Updates
                </h3>
                <p className="text-gray-500 text-xs md:text-sm">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
