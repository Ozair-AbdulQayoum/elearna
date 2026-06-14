import React from "react";
import BgImg from "../../assets/bg.jpg";
import { FaRegDotCircle } from "react-icons/fa";

function Process() {
  return (
    <section
      className="py-20 bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="max-w-xl ml-10 bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-lg">
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
        </div>

        <div className="mt-10 space-y-8">
          <div>
            <h3 className="text-xl font-semibold">01. Discover</h3>
            <p className="text-gray-600 mt-1">
              We start by understanding your goals and lifestyle, then curate
              properties that match
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">02. Experience</h3>
            <p className="text-gray-600 mt-1">
              Guided viewings and expert insights help you explore the best
              options with confidence.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">03. Secure</h3>
            <p className="text-gray-600 mt-1">
              From negotiation to closing, we ensure a seamless, stress-free
              transaction.
            </p>
          </div>
        </div>
        <button className="px-8 py-3 bg-black text-white rounded-full">
          Start your journey
        </button>
      </div>
    </section>
  );
}

export default Process;
