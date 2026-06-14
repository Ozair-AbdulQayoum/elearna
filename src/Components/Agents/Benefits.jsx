import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import Img1 from "../../assets/Img-2.jpg";

function Benefits() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={Img1}
            alt="Benefits"
            className="w-full object-cover rounded-3xl"
          />
        </div>

        <div>
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            Our Benefits
          </h5>

          <h2 className="text-4xl font-bold mt-3">
            Building dreams, one home at a time
          </h2>

          <p className="text-gray-600 mt-4">
            Our mission goes beyond real estate — it’s about guiding you through
            one of life’s biggest milestones with heart, expertise, and
            unwavering commitment.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">01. Buy a new home</h3>
              <p className="text-gray-600">
                Discover your dream home effortlessly. Explore diverse
                properties and expert guidance for a seamless buying experience.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">02. Rent a home</h3>
              <p className="text-gray-600">
                Discover your perfect rental effortlessly. Explore a diverse
                variety of listings tailored precisely to suit your unique
                lifestyle needs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">03. Sell a home</h3>
              <p className="text-gray-600">
                Sell confidently with expert guidance and effective strategies,
                showcasing your property's best features for a successful sale.
              </p>
            </div>
          </div>
          <button className="mt-5 bg-black text-white p-5 rounded-full">
            More about us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
