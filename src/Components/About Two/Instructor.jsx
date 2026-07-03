import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/12- About Two imgs/InstructorImageWithLogo.webp";
import img2 from "../../assets/12- About Two imgs/ReviewPopup.webp";

export default function Instructor() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 px-6">
      {/* SMALL CENTER CARD */}
      <div
        ref={ref}
        className={`max-w-5xl mx-auto rounded-2xl p-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ backgroundColor: "#10252A" }}
      >
        {/* ================= LEFT SIDE ================= */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
            Become an Instructor
          </h2>

          <p className="text-gray-300 mb-5 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </p>

          <button className="bg-white text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition text-sm">
            Start Teaching Today
          </button>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative flex justify-center">
          {/* MAIN IMAGE */}
          <img
            src={img1}
            alt="instructor"
            className={`w-[70%] rounded-xl object-cover transition-all duration-700
              ${show ? "opacity-100 -translate-y-3" : "opacity-0 translate-y-5"}`}
          />

          {/* FLOATING IMAGE */}
          <img
            src={img2}
            alt="overlay"
            className={`absolute left-2 top-1/2 -translate-y-1/2 w-28 rounded-lg border-4 border-[#10252A] shadow-md transition-all duration-700
              ${show ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          />
        </div>
      </div>
    </section>
  );
}
