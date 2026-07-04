import React from "react";
import { motion } from "framer-motion";

export default function Potential() {
  return (
    <section className="w-full bg-white py-20">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-[#0F2227] sm:text-4xl">
          Unlocking Potential
        </h2>

        <p className="mt-4 text-sm text-gray-500 sm:text-base">
          Discover the boundless advantages and transformative power of
          eLearning for personal and professional growth in the digital age
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {/* Card 1 */}
        <div className="group relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-xl">
          <h3 className="text-xl font-bold text-[#0F2227]">01</h3>

          <h4 className="mt-2 text-lg font-semibold text-gray-800">
            Flexibility and convenience
          </h4>

          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus
            malesuada morbi in quam donec a pellentesque risus.
          </p>

          {/* Hover Button */}
          <button className="mt-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 rounded-md bg-[#FFB606] px-4 py-2 text-sm font-semibold text-black">
            Learn More
          </button>
        </div>

        {/* Card 2 */}
        <div className="group relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-xl">
          <h3 className="text-xl font-bold text-[#0F2227]">02</h3>

          <h4 className="mt-2 text-lg font-semibold text-gray-800">
            Course accessibility
          </h4>

          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus
            malesuada morbi in quam donec a pellentesque risus.
          </p>

          {/* Hover Button */}
          <button className="mt-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 rounded-md bg-[#FFB606] px-4 py-2 text-sm font-semibold text-black">
            Learn More
          </button>
        </div>

        {/* Card 3 */}
        <div className="group relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-xl">
          <h3 className="text-xl font-bold text-[#0F2227]">03</h3>

          <h4 className="mt-2 text-lg font-semibold text-gray-800">
            Cost-effectiveness
          </h4>

          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus
            malesuada morbi in quam donec a pellentesque risus.
          </p>

          {/* Hover Button */}
          <button className="mt-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 rounded-md bg-[#FFB606] px-4 py-2 text-sm font-semibold text-black">
            Learn More
          </button>
        </div>

        {/* Card 4 */}
        <div className="group relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-xl">
          <h3 className="text-xl font-bold text-[#0F2227]">04</h3>

          <h4 className="mt-2 text-lg font-semibold text-gray-800">
            Personalized learning
          </h4>

          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus
            malesuada morbi in quam donec a pellentesque risus.
          </p>

          {/* Hover Button */}
          <button className="mt-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 rounded-md bg-[#FFB606] px-4 py-2 text-sm font-semibold text-black">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
