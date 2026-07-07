import React, { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Images
import Person1 from "../../assets/1- Home One imgs/TestimonialAuthorImage.avif";
import Person2 from "../../assets/1- Home One imgs/TestimonialAuthorImage-2.avif";
import bg from "../../assets/1- Home One imgs/TestimonialBackground.avif";

// Data
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

// Animated Number
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
      className="relative overflow-hidden bg-cover bg-center px-4 py-24"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header + Stats */}
        <motion.div
          className="mb-16 flex flex-col items-center justify-between gap-10 text-center text-white lg:flex-row lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setStartCount(true)}
          transition={{ duration: 0.7 }}
        >
          {/* Text */}
          <div>
            <p className="mb-3 font-semibold uppercase tracking-wider text-blue-300">
              {header.tag}
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              {header.title}
            </h2>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-10 text-white lg:flex-nowrap lg:gap-16">
            {stats.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold">
                  <AnimatedNumber
                    value={item.value}
                    suffix={item.suffix}
                    trigger={startCount}
                  />
                </h3>

                <p className="mt-2 text-white/80">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <div className="grid items-center gap-12 text-white lg:grid-cols-2">
          {/* Image */}
          <motion.div
            key={testimonials[current].image}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="mx-auto w-full max-w-md rounded-3xl shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-6 text-lg leading-8 text-white/90">
              {testimonials[current].text}
            </p>

            <h3 className="text-2xl font-bold">{testimonials[current].name}</h3>

            <p className="mb-8 mt-2 text-blue-300">
              {testimonials[current].title}
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white text-white transition hover:bg-white hover:text-black"
              >
                <FaArrowLeft />
              </button>

              <button
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:bg-gray-200"
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
