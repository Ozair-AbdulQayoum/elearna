import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/12- About Two imgs/AboutTwoEmployeImage-1.webp";
import img2 from "../../assets/12- About Two imgs/AboutTwoEmployeeImage-2.webp";

export default function Vission() {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  const [finishSeason, setFinishSeason] = useState(0);
  const [jobPlacement, setJobPlacement] = useState(0);

  // ✅ Trigger animation only when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ✅ Counters animation runs only when triggered
  useEffect(() => {
    if (!startAnimation) return;

    // ===== Finish Season =====
    let start1 = 0;
    const end1 = 1500;
    const duration = 1500;
    const step1 = end1 / (duration / 20);

    const timer1 = setInterval(() => {
      start1 += step1;

      if (start1 >= end1) {
        start1 = end1;
        clearInterval(timer1);
      }

      setFinishSeason(Math.floor(start1));
    }, 20);

    // ===== Job Placement =====
    let start2 = 0;
    const end2 = 100;
    const step2 = end2 / (duration / 20);

    const timer2 = setInterval(() => {
      start2 += step2;

      if (start2 >= end2) {
        start2 = end2;
        clearInterval(timer2);
      }

      setJobPlacement(Math.floor(start2));
    }, 20);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [startAnimation]);

  const formatK = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      {/* ================= LEFT SIDE ================= */}
      <div className="flex flex-col gap-6">
        {/* ROW 1 */}
        <div className="flex items-center gap-4">
          <img
            src={img1}
            alt="season"
            className="w-1/2 h-60 object-cover rounded-xl"
          />

          <div className="w-1/2 bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <h2 className="text-2xl font-bold">{formatK(finishSeason)}+</h2>
            <p className="text-gray-700">Finish Season</p>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex items-center gap-4">
          <div className="w-1/2 bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <h2 className="text-2xl font-bold">{jobPlacement}%</h2>
            <p className="text-gray-700">Job Placement</p>
          </div>

          <img
            src={img2}
            alt="placement"
            className="w-1/2 h-60 object-cover rounded-xl"
          />
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div>
        <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
          Our Vision
        </h4>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          75K+ Students Joined With Us To Achieve Their Goals
        </h2>

        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
          mus. Vitae diam dolor lacus amet integer ut.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>• Lorem ipsum dolor sit amet consectetur id quam mauris mus.</li>
          <li>• Lorem ipsum dolor sit amet consectetur id quam mauris mus.</li>
          <li>• Lorem ipsum dolor sit amet consectetur id quam mauris mus.</li>
        </ul>
      </div>
    </section>
  );
}
