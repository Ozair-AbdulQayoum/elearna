import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/6- Career imgs/CareerPageImage.webp";
import img2 from "../../assets/6- Career imgs/CareerPageImag-2.webp";

export default function About() {
  const aboutData = {
    images: {
      img1,
      img2,
    },

    subtitle: "Why we are",

    title: "We help connectivity across the world",

    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusm tempor incididunt ut labore et dolore magna aliqua.",

    features: [
      {
        icon: "📡",
        title: "Full network visibility worldwide",
        description:
          "Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        icon: "📶",
        title: "Supported the use of fiber optic cable",
        description:
          "Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  };

  const { images, subtitle, title, description, features } = aboutData;

  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex gap-4 items-center"
        >
          <img
            src={images.img1}
            alt="Career"
            className="w-1/2 h-[350px] object-cover rounded-xl shadow-md"
          />

          <img
            src={images.img2}
            alt="Career"
            className="w-1/3 h-[260px] object-cover rounded-xl shadow-md mt-10"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-blue-600 font-semibold mb-2">{subtitle}</h4>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>

          <p className="text-gray-600 mb-6">{description}</p>

          {features.map((feature, index) => (
            <div
              key={index}
              className={index !== features.length - 1 ? "mb-4" : ""}
            >
              <h3 className="font-semibold">
                {feature.icon} {feature.title}
              </h3>

              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
