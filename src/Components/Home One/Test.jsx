import React, { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// =====================
// Images
// =====================
import Person1 from "../../assets/1- Home One imgs/TestimonialAuthorImage.avif";
import Person2 from "../../assets/1- Home One imgs/TestimonialAuthorImage-2.avif";
import bg from "../../assets/1- Home One imgs/TestimonialBackground.avif";

// =====================
// Data
// =====================
const testimonialData = {
  background: bg,

  header: {
    tag: "OUR TESTIMONIALS",
    title: "Trusted by our successful students",
  },

  stats: [
    {
      value: 70,
      suffix: "M",
      label: "SUCCESSFUL STUDENTS",
    },
    {
      value: 25,
      suffix: "K",
      label: "GLOBAL JOB PLACEMENTS",
    },
  ],

  testimonials: [
    {
      image: Person1,
      name: "Linda Grady",
      title: "Co-assistant manager",
      text: "“This platform helped me gain real-world skills and land my first job faster than expected.”",
    },
    {
      image: Person2,
      name: "Jim Adams",
      title: "Designer",
      text: "“The courses are practical, clear, and industry-focused. Highly recommended for beginners.”",
    },
  ],
};

// =====================
// Animated Number
// =====================
const AnimatedNumber = ({ value, suffix, trigger }) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.floor(v));

  React.useEffect(() => {
    if (trigger) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      });

      return controls.stop;
    }
  }, [trigger, value, motionValue]);

  return (
    <span className="inline-flex items-end gap-[2px] text-white">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

// =====================
// Component
// =====================
export default function Test() {
  const [current, setCurrent] = useState(0);
  const [startCount, setStartCount] = useState(false);

  const { background, header, stats, testimonials } = testimonialData;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      className="py-24 px-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER + STATS */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-10 mb-16 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setStartCount(true)}
          transition={{ duration: 0.7 }}
        >
          {/* TEXT */}
          <div>
            <p className="text-blue-300 font-semibold uppercase mb-3">
              {header.tag}
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {header.title}
            </h2>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:gap-16 items-center text-white">
            {stats.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold">
                  <AnimatedNumber
                    value={item.value}
                    suffix={item.suffix}
                    trigger={startCount}
                  />
                </h3>
                <p className="text-white/80 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TESTIMONIAL SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center text-white">
          {/* IMAGE */}
          <motion.div
            key={testimonials[current].image}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="rounded-3xl shadow-xl w-full max-w-md mx-auto"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white/90 text-lg mb-6">
              {testimonials[current].text}
            </p>

            <h3 className="text-2xl font-bold">{testimonials[current].name}</h3>

            <p className="text-blue-300 mt-2 mb-8">
              {testimonials[current].title}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaArrowLeft />
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
