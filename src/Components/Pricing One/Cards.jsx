import React, { useState } from "react";
import { motion } from "framer-motion";

import icon from "../../assets/5- Pricing One/PricingCheck.svg";

export default function Cards() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      monthly: 199,
      yearly: 139,
      description: "Lorem ipsum dolor sit amet consectetur erat ipsum non.",
      features: [
        "Access to 10+ top courses",
        "Certification prep",
        "Customizable content",
        "AI-powered coding exercises",
      ],
    },
    {
      name: "Standard",
      monthly: 299,
      yearly: 279,
      description: "Lorem ipsum dolor sit amet consectetur erat ipsum non.",
      features: [
        "Access to 30+ top courses",
        "Certification prep",
        "Customizable content",
        "AI-powered coding exercises",
      ],
    },
    {
      name: "Premium",
      monthly: 699,
      yearly: 659,
      description: "Lorem ipsum dolor sit amet consectetur erat ipsum non.",
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
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-14"
        >
          <div className="bg-white p-2 rounded-full shadow-lg flex gap-2">
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

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition"
            >
              {/* Plan Name */}
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-8">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold text-blue-600">
                  ${billing === "monthly" ? plan.monthly : plan.yearly}
                </span>
                <span className="text-base text-gray-500 ml-2">/month</span>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img src={icon} alt="check" className="w-5 h-5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition">
                Subscribe this plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
