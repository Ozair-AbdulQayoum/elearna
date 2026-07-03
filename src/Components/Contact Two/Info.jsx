import React from "react";
import { motion } from "framer-motion";
import bg from "../../assets/16- Contact Two imgs/ContactBackground-2.webp";

export default function Info() {
  return (
    <section className="relative pt-44 pb-24 overflow-hidden">
      {/* MARQUEE (OUTSIDE + MOVED DOWN) */}
      <div className="absolute top-8 left-0 w-full overflow-hidden z-20 pointer-events-none">
        <motion.div
          className="whitespace-nowrap text-[60px] md:text-[100px] font-bold text-gray-200 leading-none"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Get in touch with me today • Get in touch with me today •
        </motion.div>
      </div>

      {/* Background */}
      <div
        className="relative w-full min-h-[700px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0F252A]/80" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      {/* FLOATING FORM */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-20 right-6 lg:right-20 xl:right-32 z-30 w-full max-w-[540px]"
      >
        <div className="bg-white rounded-[32px] shadow-2xl p-10">
          <h3 className="text-3xl font-bold">Fill out for contact</h3>

          <p className="mt-3 mb-8 text-gray-500">
            Lorem ipsum dolor sit amet consectetur libero donec.
          </p>

          <form className="space-y-5">
            <input
              className="w-full p-4 border rounded-xl"
              placeholder="Your name *"
            />
            <input
              className="w-full p-4 border rounded-xl"
              placeholder="Your email *"
            />
            <input
              className="w-full p-4 border rounded-xl"
              placeholder="Subject"
            />
            <textarea
              className="w-full p-4 border rounded-xl"
              rows="5"
              placeholder="Your message *"
            />

            <label className="flex items-center gap-3 text-sm text-gray-600">
              <input type="checkbox" />
              Save information for next time
            </label>

            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
