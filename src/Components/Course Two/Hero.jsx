import React, { useEffect, useState } from "react";
import img from "../../assets/13- Course Two imgs/CourseTwoHero.webp";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200); // small delay for smooth entrance

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto h-full flex items-center px-6">
        {/* RIGHT SIDE TEXT */}
        <div
          className={`ml-auto text-left text-white max-w-xl transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-sm uppercase tracking-widest mb-2 text-gray-300">
            Start With
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Professional Online Courses
          </h1>
        </div>
      </div>
    </section>
  );
}
