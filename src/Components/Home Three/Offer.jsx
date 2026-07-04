import React from "react";
import { motion } from "framer-motion";

import img from "../../assets/17- Home Three imgs/HomeOneVideoposter.jpg";
import img1 from "../../assets/17- Home Three imgs/FreeCourse.avif";

export default function Offer() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* ================= LEFT IMAGE ================= */}
        <div className="relative w-full">
          {/* MAIN IMAGE */}
          <img
            src={img}
            alt="main"
            className="w-full h-[460px] object-cover rounded-2xl"
          />

          {/* SMALL IMAGE ANIMATION (FROM LEFT) */}
          <motion.img
            src={img1}
            alt="small"
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute top-5 -left-10 w-56 h-32"
          />

          {/* BADGE ANIMATION (FROM RIGHT) */}
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute bottom-5 right-5 bg-white px-5 py-3 rounded-xl shadow-md"
          >
            <p className="text-sm font-semibold text-gray-700">
              25 Years of experience
            </p>
          </motion.div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div>
          <h3 className="text-blue-600 font-semibold">What we Offer</h3>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Personalized learning for your ambitions
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6 text-gray-700 font-medium">
            <p>• Skill-based instruction</p>
            <p>• Analytics and insights</p>
            <p>• Global certification</p>
            <p>• Customizable courses</p>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-gray-900">
                Still have questions?
              </h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
