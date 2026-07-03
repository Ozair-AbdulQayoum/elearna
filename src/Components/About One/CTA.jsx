import React from "react";

import ctaBg from "../../assets/2- About One imgs/OfficeImage.webp";

const ctaData = {
  ctaImg: ctaBg,
  title: "Are you ready to start your journey?",
  btn1: "Browse Courses",
  btn2: "Become an Instructor",
};

export default function CTA() {
  const { ctaImg, title, btn1, btn2 } = ctaData;

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-6 -mb-20">
      <div
        className="relative rounded-3xl overflow-hidden bg-cover bg-center py-14 px-8 md:px-12 flex flex-col lg:flex-row justify-between items-center gap-8"
        style={{ backgroundImage: `url(${ctaImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {title}
          </h2>
        </div>

        {/* Buttons */}
        <div className="relative z-10 flex flex-wrap gap-4">
          <button className="bg-white text-black px-7 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
            {btn1}
          </button>

          <button className="border border-white text-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">
            {btn2}
          </button>
        </div>
      </div>
    </section>
  );
}
