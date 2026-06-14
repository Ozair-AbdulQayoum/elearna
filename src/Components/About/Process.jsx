import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import Img1 from "../../assets/About-3.jpg";

function Process() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            Our Process
          </h5>

          <h2 className="text-4xl font-bold mt-3">
            Simple steps to your dream home
          </h2>

          <p className="text-gray-600 mt-4">
            We make buying, selling, or investing in property effortless. Here’s
            how we guide you every step of the way.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">01. Discover</h3>
              <p className="text-gray-600">
                We start by understanding your goals and lifestyle, then curate
                properties that match.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">02. Experience</h3>
              <p className="text-gray-600">
                Guided viewings and expert insights help you explore the best
                options with confidence.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">03. Secure</h3>
              <p className="text-gray-600">
                From negotiation to closing, we ensure a seamless, stress-free
                transaction.
              </p>
            </div>
          </div>
          <button className="mt-5 bg-black text-white p-5 rounded-full">
            Start your journey
          </button>
        </div>
        <div>
          <img
            src={Img1}
            alt="Benefits"
            className="w-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Process;
