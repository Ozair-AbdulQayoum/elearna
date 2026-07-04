import React, { useState } from "react";
import { motion } from "framer-motion";

import bg from "../../assets/19- Pricing Three imgs/AboutOneHero.webp";
import icon from "../../assets/19- Pricing Three imgs/PricingCheck.svg";

export default function Hero() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      title: "Basic",
      desc: "Lorem ipsum dolor sit amet consectetur erat ipsum non.",
      monthly: "$199/month",
      yearly: "$139/month",
      features: [
        "Access to 10+ top courses",
        "Certification prep",
        "Customizable content",
        "AI-powered coding exercises",
      ],
    },
    {
      title: "Standard",
      desc: "Lorem ipsum dolor sit amet consectetur erat ipsum non.",
      monthly: "$299/month",
      yearly: "$279/month",
      popular: true,
      features: [
        "Access to 30+ top courses",
        "Certification prep",
        "Customizable content",
        "AI-powered coding exercises",
      ],
    },
    {
      title: "Premium",
      desc: "Lorem ipsum dolor sit amet consectetur erat ipsum non.",
      monthly: "$699/month",
      yearly: "$659/month",
      features: [
        "Access to 50+ top courses",
        "Certification prep",
        "Customizable content",
        "AI-powered coding exercises",
        "Analytics and adoption reports",
      ],
    },
  ];

  return (
    <section className="relative w-full py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={bg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0F252A]/75"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Pricing
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-bold mt-3 max-w-3xl">
            Flexible pricing plan for everyone
          </h2>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-14"
        >
          <div className="bg-white rounded-full p-1 shadow-xl flex">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                billing === "monthly"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                billing === "yearly"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700"
              }`}
            >
              Yearly
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`rounded-3xl p-8 transition-all shadow-2xl ${
                plan.popular ? "bg-blue-600 text-white scale-105" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold">{plan.title}</h3>

              <p
                className={`mt-3 ${
                  plan.popular ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {plan.desc}
              </p>

              <h1 className="text-5xl font-bold mt-8">
                {billing === "monthly" ? plan.monthly : plan.yearly}
              </h1>

              <div className="space-y-4 mt-8">
                {plan.features.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img src={icon} alt="" className="w-5 h-5" />

                    <span
                      className={
                        plan.popular ? "text-blue-50" : "text-gray-700"
                      }
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 w-full py-4 rounded-xl font-semibold transition ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Subscribe this plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
