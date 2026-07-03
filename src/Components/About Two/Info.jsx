import React from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/12- About Two imgs/OfficeImage.webp";
import img2 from "../../assets/12- About Two imgs/GirlImage.webp";

export default function Info() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* IMG 1 (BACKGROUND - shifted right) */}
          <img
            src={img1}
            alt="Office"
            className="w-[440px] h-[520px] object-cover rounded-3xl translate-x-10"
          />

          {/* EXPERIENCE TEXT (RIGHT SIDE OF IMG1) */}
          <div className="absolute top-10 right-0 flex items-center gap-2 bg-white shadow-lg px-4 py-2 rounded-xl">
            <span className="text-2xl font-bold text-gray-900">25</span>
            <span className="text-sm text-gray-600 font-medium">
              Years Experience
            </span>
          </div>

          {/* IMG 2 (MAIN FRONT - bottom right) */}
          <img
            src={img2}
            alt="Girl"
            className="w-[280px] h-[380px] object-cover rounded-3xl absolute bottom-[-30px] right-[-20px] shadow-2xl z-20"
          />
        </motion.div>

        {/* RIGHT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            Our Story
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Limitless learning and get more possibilities
          </h2>

          <p className="mt-6 text-gray-600 leading-7">
            Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in
            maecenas scelerisque imperdiet nec. Pellentesque mauris amet ligula
            eget malesuada ullamcorper nibh. Etiam suspendisse pretium est
            elementum elementum rhoncus.
          </p>

          <p className="mt-4 text-gray-600 leading-7">
            Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in
            maecenas scelerisque imperdiet nec. Pellentesque mauris amet ligula
            eget malesuada ullamcorper nibh.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
