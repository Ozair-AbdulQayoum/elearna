import React from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/7- Events imgs/EventImage.webp";
import img3 from "../../assets/7- Events imgs/EventImage-3.webp";
import img4 from "../../assets/7- Events imgs/EventImage-4.webp";
import img2 from "../../assets/7- Events imgs/EventImage-2.webp";
import img5 from "../../assets/7- Events imgs/EventImage-5.webp";
import img6 from "../../assets/7- Events imgs/EventImage-6.webp";

export default function About() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      {/* TOP CENTER TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h4 className="text-blue-600 font-semibold mb-2">Our event</h4>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Professional online events
        </h2>

        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Congue sit pellentesque eu
          scelerisque urna a porttitor. Massa nec ipsum sed etiam et facilisis
          bibendum.
        </p>
      </motion.div>

      {/* IMAGE GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
          >
            <img
              src={img}
              alt={`event-${index}`}
              className="w-full h-64 object-cover hover:scale-110 transition duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
