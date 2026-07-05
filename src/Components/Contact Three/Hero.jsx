import React from "react";
import bg from "../../assets/21-Contact Three imgs/ContactThreeBackground.webp";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-10 text-white lg:px-16">
        {/* Top Text */}
        <div className="mx-auto max-w-3xl pt-20 text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">Contact</h1>

          <p className="text-base leading-8 text-gray-200 md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Est cras viverra pharetra
            tellus pulvinar amet aliquam. Vestibulum hac tincidunt.
          </p>
        </div>

        {/* Contact Info Only */}
        <div className="mx-auto w-full max-w-6xl py-16">
          <div className="flex flex-col items-center justify-center gap-4 text-center text-lg font-medium text-gray-200 md:flex-row md:gap-10">
            <p>info@example.com</p>
            <p>(888) 123 4567</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 border-t border-white/20 pt-8 text-sm text-gray-200 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-5">
            <span>Style guide</span>
            <span>Password protected</span>
            <span>404</span>
            <span>License</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <span>Design by Radiant Templates</span>
            <span>Powered by webflow</span>
          </div>
        </div>
      </div>
    </section>
  );
}
