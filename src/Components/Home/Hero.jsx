import React from "react";
import { MdStars } from "react-icons/md";
import { BiPlayCircle } from "react-icons/bi";
import Img1 from "../../assets/Img-1.png";
function Hero() {
  return (
    <section className="py-20">
      <div className="text-center">
        <p className="inline-flex items-center gap-2 border rounded-full px-4 py-2 mx-auto">
          <MdStars />
          Your trusted partner in real estate
        </p>

        <h1 className="text-5xl font-bold mt-6">
          Your dream home, just a step away
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          Discover handpicked properties that match your lifestyle, whether
          you're buying, selling, or investing.
        </p>
      </div>

      <div className="flex gap-5 justify-center items-center mt-8">
        <button className="px-6 py-3 bg-black text-white rounded-full">
          Explore Properties
        </button>

        <button className="px-6 py-3 border rounded-full">Book a Visit</button>
      </div>

      <div className="relative max-w-5xl mx-auto mt-12">
        <img
          src={Img1}
          alt="Real Estate"
          className="w-full h-auto rounded-3xl"
        />

        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-16 h-16 bg-white rounded-full flex items-center justify-center
          shadow-lg"
        >
          <BiPlayCircle />
        </button>
      </div>
    </section>
  );
}

export default Hero;
