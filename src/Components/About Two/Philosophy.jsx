import React from "react";

import img1 from "../../assets/12- About Two imgs/CategoryCardsImage-1.webp";
import img2 from "../../assets/12- About Two imgs/CategoryCardsImage-2.webp";
import img3 from "../../assets/12- About Two imgs/CategoryCardsImage-3.webp";
import img4 from "../../assets/12- About Two imgs/CategoryCardsImage-4.webp";

const cards = [
  { img: img1, title: "Web Design" },
  { img: img2, title: "Development" },
  { img: img3, title: "UI/UX Design" },
  { img: img4, title: "Marketing" },
];

export default function Philosophy() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP TEXT */}
        <div className="mb-12">
          <span className="text-sm uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            Our Philosophy
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Get instant access courses
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((item, i) => (
            <div
              key={i}
              className="relative group h-[320px] rounded-2xl overflow-hidden shadow-lg"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* DARK OVERLAY (optional soft effect) */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300" />

              {/* RIGHT DOOR PANEL */}
              <div
                className="
                absolute top-0 right-0 h-full w-1/2
                bg-white
                transform translate-x-full group-hover:translate-x-0
                origin-right
                transition-transform duration-500 ease-out
                flex items-center justify-center
              "
              >
                {/* TITLE ONLY */}
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
