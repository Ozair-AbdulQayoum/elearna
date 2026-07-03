import React, { useState } from "react";
import img1 from "../../assets/5- Pricing One/FAQIcons.svg";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Frequently() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "How do I enroll in a Online course?",
      a: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
    },
    {
      q: "Are there any prerequisites fro enrolling in online courses?",
      a: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
    },
    {
      q: "What are the technical requirements for online learning?",
      a: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
    },
    {
      q: "What if I ebcounter technical deffculties?",
      a: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
    },
    {
      q: "Are there live classes,or can I learn at my own pace?",
      a: "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION (IMAGE + TEXT SIDE BY SIDE) */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          {/* IMAGE LEFT */}
          <div className="flex justify-center">
            <img
              src={img1}
              alt="FAQ"
              className="w-[300px] md:w-[380px] object-contain"
            />
          </div>

          {/* TEXT RIGHT */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
              Contact Us
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
              Frequently asked questions
            </h3>

            <p className="text-gray-500 mt-3">
              Find answers to the most common questions below.
            </p>
          </div>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-sm transition"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <h3 className="font-semibold text-gray-900">{item.q}</h3>

                <span className="text-blue-600">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`px-5 pb-5 text-gray-600 transition-all duration-300 overflow-hidden ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
