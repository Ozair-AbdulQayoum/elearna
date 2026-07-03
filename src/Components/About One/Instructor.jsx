import React from "react";
import { motion } from "framer-motion";

import img01 from "../../assets/2- About One imgs/GirlWithLogo.webp";
import img02 from "../../assets/2- About One imgs/ReviewPopup.webp";

const instructorData = {
  content: {
    title: "Become an instructor",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed ultricies fames scelerisque urna quis semper amet. Nisl tincidunt tortor nullam est nec commodo orci dictum in. Lorem consectetur donec purus sagittis.",
  },

  images: {
    main: img01,
    popup: img02,
  },
};

export default function Instructor() {
  const { content, images } = instructorData;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {content.title}
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            {content.description}
          </p>
        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* MAIN IMAGE */}
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            src={images.main}
            alt="main"
            className="w-[420px] h-[520px] object-cover rounded-3xl shadow-xl"
          />

          {/* FLOATING IMAGE */}
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={images.popup}
            alt="popup"
            className="absolute -top-6 -left-6 w-56 object-contain rounded-2xl shadow-lg border-4 border-white bg-white p-2"
          />
        </motion.div>
      </div>
    </section>
  );
}
