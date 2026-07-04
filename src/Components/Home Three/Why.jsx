import React from "react";

import icon1 from "../../assets/17- Home Three imgs/BooksIcons.svg";
import icon2 from "../../assets/17- Home Three imgs/MoneyBagICon.svg";
import icon3 from "../../assets/17- Home Three imgs/CourseIcon.svg";
import icon4 from "../../assets/17- Home Three imgs/VerifiedIcon.svg";

export default function Why() {
  return (
    <section className="w-full">
      {/* ================= TOP CTA BAR ================= */}
      <div className="w-full bg-[#0F252A] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* LEFT TEXT */}
          <h2 className="text-white text-xl md:text-3xl font-bold">
            Are you ready to start your journey?
          </h2>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button className="bg-white text-[#0F252A] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Browse courses
            </button>

            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0F252A] transition">
              Become a teacher
            </button>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-blue-600 font-semibold">Why we are</h3>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Elevate your professional journey
          </h2>

          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </p>
        </div>

        {/* ================= FEATURES ================= */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* CARD 1 */}
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
            <img src={icon1} className="mx-auto w-12 h-12" />
            <h3 className="mt-4 font-bold text-lg">Learn anything</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet conse non quis id viverra id proin.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
            <img src={icon2} className="mx-auto w-12 h-12" />
            <h3 className="mt-4 font-bold text-lg">Save money</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet conse non quis id viverra id proin.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
            <img src={icon3} className="mx-auto w-12 h-12" />
            <h3 className="mt-4 font-bold text-lg">Flexible courses</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet conse non quis id viverra id proin.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
            <img src={icon4} className="mx-auto w-12 h-12" />
            <h3 className="mt-4 font-bold text-lg">Unlimited certificate</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet conse non quis id viverra id proin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
