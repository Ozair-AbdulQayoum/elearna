import React from "react";
import bg from "../../assets/20- Blog Three imgs/BlogHeroImage.webp";

export default function Hero() {
  return (
    <section
      className="relative h-[500px] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 flex h-full items-start">
        <div className="container mx-auto px-6 pt-24 lg:px-16">
          <div className="max-w-3xl text-left text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-200">
              News and journals
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Planning to transition to a new career?
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
