import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

export default function History() {
  return (
    <section>
      <div className="text-center mb-12">
        <h5 className="inline-flex items-center gap-2 text-sm font-medium text-gray-600">
          <FaRegDotCircle />
          Our History{" "}
        </h5>

        <h2 className="text-4xl font-bold mt-3">
          A legacy of trust and growth
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          From a small vision to a trusted real estate partner, our journey has
          been defined by dedication, growth, and client success.
        </p>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-4xl font-bold">2005</h2>

              <h4 className="mt-3 text-xl font-semibold ">Founded</h4>

              <p className="mt-4 text-gray-600">
                Started with a mission to make real estate transparent and
                client-focused.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">2010</h2>

              <h4 className="mt-3 text-xl font-semibold ">
                Building Reputation
              </h4>

              <p className="mt-4 text-gray-600">
                Earned trust through successful transactions and expanded our
                residential and commercial services.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">2015</h2>

              <h4 className="mt-3 text-xl font-semibold ">
                Expanding Horizons
              </h4>

              <p className="mt-4 text-gray-600">
                Reached 250+ closed deals and introduced specialized support for
                investors and luxury buyers.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">2025</h2>

              <h4 className="mt-3 text-xl font-semibold ">Leading Today</h4>

              <p className="mt-4 text-gray-600">
                Achieved $150M+ in sales and served 500+ clients, becoming a
                trusted partner in every real estate journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
