import React, { useState } from "react";
import bg from "../../assets/14- Pricing Two Imgs/FooterOneBackground-3.avif";
import img1 from "../../assets/14- Pricing Two Imgs/GiftImage.svg";
import img2 from "../../assets/14- Pricing Two Imgs/Crown.svg";
import icon1 from "../../assets/14- Pricing Two Imgs/PricingBlueTick.svg";
import icon2 from "../../assets/14- Pricing Two Imgs/PricingBlueCross.svg";
import icon3 from "../../assets/14- Pricing Two Imgs/PricingGreyTick.svg";

export default function Hero() {
  const [plan, setPlan] = useState("monthly");
  const isMonthly = plan === "monthly";

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl w-full px-6 py-16">
        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[4px] text-gray-300">
            Pricing
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Flexible pricing plan for everyone
          </h2>

          {/* ===== TOGGLE BOX (ONE BORDER) ===== */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 border border-white/40 rounded-full p-1">
              <button
                onClick={() => setPlan("monthly")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  isMonthly ? "bg-white text-black" : "text-white"
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setPlan("yearly")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  !isMonthly ? "bg-white text-black" : "text-white"
                }`}
              >
                Yearly
              </button>

              <span className="px-4 text-green-400 font-semibold text-sm">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* ================= STARTER ================= */}
          <div className="bg-white text-black rounded-2xl p-8 shadow-xl">
            <img src={img1} className="w-12 mb-4" />

            <h3 className="text-2xl font-bold">Starter Plan</h3>

            <p className="text-gray-600 mt-2 mb-6">
              Lorem ipsum dolor sit amet consectetur. Eu vitae magna lacus ut.
            </p>

            {/* PRICE */}
            <div className="mb-6">
              {isMonthly ? (
                <>
                  <p className="text-gray-400 line-through">$199</p>
                  <p className="text-3xl font-bold">$149 / Monthly</p>
                </>
              ) : (
                <>
                  <p className="text-gray-400 line-through">$149</p>
                  <p className="text-3xl font-bold">$199 / Yearly</p>
                </>
              )}
            </div>

            {/* FEATURES */}
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <img src={icon1} className="w-4" />
                Access to 30+ top courses
              </li>

              <li className="flex items-center gap-2">
                <img src={icon1} className="w-4" />
                Certification prep
              </li>

              <li className="flex items-center gap-2">
                <img src={icon1} className="w-4" />
                Customizable content
              </li>

              <li className="flex items-center gap-2">
                <img src={icon1} className="w-4" />
                AI-powered coding exercises
              </li>

              <li className="flex items-center gap-2">
                <img src={icon2} className="w-4" />
                Analytics reports
              </li>
            </ul>

            <button className="mt-8 w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
              Subscribe This Plan
            </button>
          </div>

          {/* ================= PREMIUM ================= */}
          <div className="bg-white text-black rounded-2xl p-8 shadow-xl">
            <img src={img2} className="w-12 mb-4" />

            <h3 className="text-2xl font-bold">Premium Plan</h3>

            <p className="text-gray-600 mt-2 mb-6">
              Lorem ipsum dolor sit amet consectetur. Eu vitae magna lacus ut.
            </p>

            {/* PRICE */}
            <div className="mb-6">
              {isMonthly ? (
                <>
                  <p className="text-gray-400 line-through">$399</p>
                  <p className="text-3xl font-bold">$349 / Monthly</p>
                </>
              ) : (
                <>
                  <p className="text-gray-400 line-through">$349</p>
                  <p className="text-3xl font-bold">$399 / Yearly</p>
                </>
              )}
            </div>

            {/* FEATURES */}
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <img src={icon3} className="w-4" />
                Access to 50+ top courses
              </li>

              <li className="flex items-center gap-2">
                <img src={icon3} className="w-4" />
                Certification prep
              </li>

              <li className="flex items-center gap-2">
                <img src={icon3} className="w-4" />
                Customizable content
              </li>

              <li className="flex items-center gap-2">
                <img src={icon3} className="w-4" />
                AI-powered exercises
              </li>

              <li className="flex items-center gap-2">
                <img src={icon3} className="w-4" />
                Analytics reports
              </li>
            </ul>

            <button className="mt-8 w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
              Subscribe This Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
