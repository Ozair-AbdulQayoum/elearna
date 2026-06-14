import React from "react";
import { motion } from "framer-motion";
import { FaRegDotCircle, FaStar } from "react-icons/fa";

import clients1 from "../../assets/clients-1.jpg";
import clients2 from "../../assets/clients-2.jpg";
import clients3 from "../../assets/clients-3.webp";
import clients4 from "../../assets/clients-4.png";
import clients5 from "../../assets/clients-5.webp";
import clients6 from "../../assets/clients-6.webp";
import clients7 from "../../assets/clients-7.jpg";

const Clients = () => {
  const testimonials = [
    {
      name: "Mia F.",
      image: clients1,
      title: "Support You Can Rely On",
    },
    {
      name: "David S.",
      image: clients2,
      title: "Exceptional Service",
    },
    {
      name: "Olivia C.",
      image: clients3,
      title: "Stress-Free Experience",
    },
    {
      name: "Peter R.",
      image: clients4,
      title: "Above and Beyond",
    },
    {
      name: "Sophia M.",
      image: clients5,
      title: "Expert Negotiation",
    },
    {
      name: "James P.",
      image: clients6,
      title: "Exceptional Experience",
    },
    {
      name: "Emily T.",
      image: clients7,
      title: "Professional Guidance",
    },
    {
      name: "John D.",
      image: clients1,
      title: "Confident Decisions",
    },
  ];

  const firstRow = testimonials.slice(0, 4);
  const secondRow = testimonials.slice(4, 8);

  const Card = ({ item }) => (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl h-[260px] flex flex-col"
    >
      <div className="flex gap-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={14} />
        ))}
      </div>

      <h3 className="font-semibold text-lg mt-4">{item.title}</h3>

      <p className="text-gray-500 text-sm mt-3 leading-relaxed flex-1">
        Their guidance made the entire process simple and stress-free. We felt
        confident every step of the way and couldn't be happier with the
        outcome.
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover"
        />

        <span className="font-medium text-gray-700">{item.name}</span>
      </div>
    </motion.div>
  );

  const Row = ({ items, reverse = false }) => {
    const duplicatedItems = [...items, ...items];

    return (
      <div className="overflow-hidden py-3">
        <motion.div
          className="flex gap-6 w-max"
          animate={{
            x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="w-[320px] flex-shrink-0">
              <Card item={item} />
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <>
      <section className="py-20 bg-gray-100 overflow-hidden">
        <div className="text-center mb-12">
          <h5 className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 uppercase">
            <FaRegDotCircle />
            Testimonials
          </h5>

          <h2 className="text-5xl font-bold mt-4">What our clients say</h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Real stories from homeowners and investors who trusted us to guide
            their real estate journey.
          </p>
        </div>

        <div
          className="relative mt-16"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <Row items={firstRow} />
          <Row items={secondRow} reverse />
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-4 text-center">
          <div className="md:border-r border-gray-700 pr-6">
            <h2 className="text-5xl font-bold">$150M+</h2>

            <h4 className="mt-3 text-xl font-semibold">Properties Sold</h4>

            <p className="text-gray-400 mt-4">
              Over $150M in sales, helping clients find homes and investments
              with ease and confidence.
            </p>
          </div>

          <div className="md:border-r border-gray-700 px-6">
            <h2 className="text-5xl font-bold">500+</h2>

            <h4 className="mt-3 text-xl font-semibold">Happy Clients</h4>

            <p className="text-gray-400 mt-4">
              More than 500 satisfied clients trust us to make their real estate
              journey smooth and successful.
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">20+</h2>

            <h4 className="mt-3 text-xl font-semibold">Years of Expertise</h4>

            <p className="text-gray-400 mt-4">
              Over 20 years of experience guiding clients with market insight
              and professional advice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
