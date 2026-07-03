import React, { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";

import img1 from "../../assets/11- Home Two Imgs/Videoposter.jpg";
import img2 from "../../assets/11- Home Two Imgs/WomanImage.webp";

const stats = [
  {
    end: 1.5,
    decimals: 1,
    suffix: "K",
    title: "Finished Seasons",
  },
  {
    end: 7.8,
    decimals: 1,
    suffix: "K",
    title: "Enrolled",
  },
  {
    end: 100,
    decimals: 0,
    suffix: "%",
    title: "Job Placement",
  },
];

// Counter (starts only when visible)
function Counter({ end, decimals = 0, suffix = "", trigger }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    const controls = animate(0, end, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(v) {
        setValue(v);
      },
    });

    return () => controls.stop();
  }, [trigger, end]);

  return (
    <span>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Why() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 py-24">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-yellow-500 uppercase tracking-[0.25em] text-sm font-semibold">
          Why we are
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          World-class learning from anywhere
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-end gap-6"
        >
          <div className="w-[38%]">
            <img
              src={img1}
              alt="Video Poster"
              className="w-full h-[340px] rounded-3xl object-cover shadow-xl"
            />
          </div>

          <div className="w-[62%]">
            <img
              src={img2}
              alt="Student"
              className="w-full h-[500px] rounded-3xl object-cover shadow-xl"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 leading-8">
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </p>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            {stats.map((item) => (
              <div key={item.title}>
                <h3 className="text-5xl font-bold text-gray-900">
                  <Counter
                    end={item.end}
                    decimals={item.decimals}
                    suffix={item.suffix}
                    trigger={isInView}
                  />
                </h3>

                <p className="mt-3 text-gray-500">{item.title}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Still have questions?
              </h3>

              <p className="mt-3 text-gray-600 leading-7 max-w-md">
                Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.
              </p>
            </div>

            <button className="bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-full font-semibold text-gray-900 shrink-0">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
