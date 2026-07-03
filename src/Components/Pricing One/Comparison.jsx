import React from "react";
import { motion } from "framer-motion";

import icon1 from "../../assets/5- Pricing One/BlackTick.svg";
import icon2 from "../../assets/5- Pricing One/BlackCross.svg";

import icon3 from "../../assets/5- Pricing One/YellowTick-2.svg";
import icon4 from "../../assets/5- Pricing One/YellowCrossIcon.svg";

export default function Comparison() {
  const features = [
    "Access to 30+ top courses",
    "Certification prep",
    "Customizable content",
    "AI-powered coding exercises",
    "Analytics and adoption reports",
    "24/7 customer support",
    "Instructor Q&A",
    "Skills assessments",
  ];

  const plans = [
    {
      name: "Basic Plan",
      price: "$199",
      allowed: [0, 1, 2, 3, 6],
      tick: icon1,
      cross: icon2,
    },
    {
      name: "Starter Plan",
      price: "$299",
      allowed: [0, 1, 2, 3, 6, 7],
      tick: icon3,
      cross: icon4,
    },
    {
      name: "Platinum Plan",
      price: "$399",
      allowed: [0, 1, 2, 3, 4, 5, 6, 7],
      tick: icon1,
      cross: icon2,
    },
  ];

  const renderIcon = (plan, index) => {
    const isAllowed = plan.allowed.includes(index);

    return (
      <img
        src={isAllowed ? plan.tick : plan.cross}
        alt="status"
        className="w-5 h-5 mx-auto"
      />
    );
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Pricing Comparison</h2>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden space-y-4">
          {/* Header */}
          <div className="grid grid-cols-4 text-center font-bold text-sm">
            <div></div>
            <div>Basic</div>
            <div>Starter</div>
            <div>Platinum</div>
          </div>

          {/* Rows */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-4 items-center text-center border rounded-lg p-3"
            >
              <div className="text-left text-xs font-medium">{feature}</div>

              <div>{renderIcon(plans[0], index)}</div>
              <div>{renderIcon(plans[1], index)}</div>
              <div>{renderIcon(plans[2], index)}</div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block overflow-x-auto mt-10">
          <div className="min-w-[900px] rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 bg-white">
              <div></div>

              {plans.map((plan, i) => (
                <div key={i} className="p-8 text-center">
                  <h3 className="text-4xl font-bold">{plan.price}</h3>
                  <p className="text-sm text-gray-500">/ month</p>
                  <h4 className="mt-4 font-semibold">{plan.name}</h4>
                </div>
              ))}
            </div>

            {/* Rows */}
            {features.map((feature, index) => (
              <div key={index} className="grid grid-cols-4 bg-gray-50">
                <div className="p-6 font-medium">{feature}</div>

                {plans.map((plan, i) => (
                  <div
                    key={i}
                    className="flex justify-center items-center py-6"
                  >
                    {renderIcon(plan, index)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
