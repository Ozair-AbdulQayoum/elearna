import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// ================= IMAGES =================

import bg from "../../assets/2- About One imgs/AboutOneHero.webp";
import img1 from "../../assets/2- About One imgs/EmployImages.webp";
import img2 from "../../assets/2- About One imgs/Trusted ByImageInWhite.avif";

import icon1 from "../../assets/2- About One imgs/CircleIconsWhite.svg";
import icon2 from "../../assets/2- About One imgs/PenIconsWhite.svg";
import icon3 from "../../assets/2- About One imgs/UpdateWhiteIcons.svg";

// ================= DATA =================

const aboutData = {
  hero: {
    bg,
    tag: "About Us",
    title: "You're sincerely determined to grow",
  },

  story: {
    tag: "Our Story",
    title: "Limitless learning and get more possibilities",
    description:
      "Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames eu.",
  },

  stats: [
    { value: 1500, suffix: "+", label: "Finish Courses" },
    { value: 7800, suffix: "+", label: "Students Enrolled" },
    { value: 100, suffix: "%", label: "Job Placement" },
  ],

  images: {
    main: img1,
    side: img2,
  },
};

const features = [
  {
    id: 1,
    icon: icon1,
    title: "150+ Online Courses",
    desc: "Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Personalized Learning",
    desc: "Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Lifetime Update",
    desc: "Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut.",
  },
];

// ================= COUNTER =================

function SmoothCounter({ value, suffix = "" }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [value, motionValue]);

  return (
    <span className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

// ================= COMPONENT =================

export default function About() {
  const { hero, story, stats, images } = aboutData;

  return (
    <>
      {/* ================= HERO ================= */}

      <section
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${hero.bg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-blue-400 font-semibold uppercase mb-3">
            {hero.tag}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto">
            {hero.title}
          </h1>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="relative bg-white pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative -mt-32"
          >
            <div
              className="w-full h-[650px] rounded-3xl bg-cover bg-center shadow-2xl"
              style={{ backgroundImage: `url(${images.main})` }}
            ></div>

            <img
              src={images.side}
              alt=""
              className="absolute -bottom-10 right-8 w-52 rounded-2xl border-8 border-white shadow-xl transition-all duration-500 hover:scale-105"
            />
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-600 font-semibold uppercase mb-3">
              {story.tag}
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {story.title}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              {story.description}
            </p>

            {/* STATS */}

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t">
              {stats.map((item) => (
                <div key={item.label}>
                  <h3 className="text-3xl font-bold text-blue-600">
                    <SmoothCounter value={item.value} suffix={item.suffix} />
                  </h3>

                  <p className="text-gray-500 text-sm mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-[#0F252A] rounded-[32px] p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-5 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#F4B400]">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div>
                  <h3 className="text-white text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-300 leading-7">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
