import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import hero1 from "../../assets/About-1.jpg";
import hero2 from "../../assets/About-2.jpg";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <FaRegDotCircle />
              About Us
            </h5>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 max-w-xl">
              Building dreams, one home at a time
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-600">
              We’re more than real estate agents — we’re your trusted partners,
              helping you find the right property with confidence and ease.
            </p>

            <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Contact Us
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <img
            src={hero1}
            alt="Modern House"
            className="w-full h-[400px] object-cover rounded-2xl"
          />

          <img
            src={hero2}
            alt="Luxury Property"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div className="md:pr-10 md:border-r border-gray-300">
            <h2 className="text-5xl font-bold">$150M+</h2>

            <h4 className="mt-3 text-xl font-semibold">Properties Sold</h4>

            <p className="text-gray-600 mt-4">
              Over $150M in sales, helping clients find homes and investments
              with ease and confidence.
            </p>
          </div>

          <div className="md:px-10 md:border-r border-gray-300">
            <h2 className="text-5xl font-bold">500+</h2>

            <h4 className="mt-3 text-xl font-semibold">Happy Clients</h4>

            <p className="text-gray-600 mt-4">
              More than 500 satisfied clients trust us to make their real estate
              journey smooth and successful.
            </p>
          </div>

          <div className="md:pl-10">
            <h2 className="text-5xl font-bold">20+</h2>

            <h4 className="mt-3 text-xl font-semibold">Years of Expertise</h4>

            <p className="text-gray-600 mt-4">
              Over 20 years of experience guiding clients with market insight
              and professional advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
