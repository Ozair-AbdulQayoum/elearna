import React from "react";
import { motion } from "framer-motion";

import MainImg from "../../assets/15- Blog Two Imgs/BlogThumbnail.webp";
import Cour1 from "../../assets/15- Blog Two Imgs/BlogThumbnail-1.webp";
import Cour2 from "../../assets/15- Blog Two Imgs/BlogThumbnail-2.webp";
import Cour3 from "../../assets/15- Blog Two Imgs/BlogThumbnail-3.webp";
import Cour4 from "../../assets/15- Blog Two Imgs/BlogThumbnail-4.webp";
import Cour5 from "../../assets/15- Blog Two Imgs/BlogThumbnail-5.webp";
import Cour6 from "../../assets/15- Blog Two Imgs/BlogThumbnail-6.webp";
import Cour7 from "../../assets/15- Blog Two Imgs/BlogThumbnail-7.webp";
import Cour8 from "../../assets/15- Blog Two Imgs/BlogThumbnail-8.webp";

const blogs = [
  {
    id: 1,
    image: Cour1,
    date: "10.4.2024",
    author: "Nina Leffler",
    title: "Improve knowledge retention with visual learning",
  },
  {
    id: 2,
    image: Cour2,
    date: "10.4.2024",
    author: "Nina Leffler",
    title: "Best strategies to boost online education",
  },
  {
    id: 3,
    image: Cour3,
    date: "10.4.2024",
    author: "Nina Leffler",
    title: "Learn faster using interactive videos",
  },
  {
    id: 4,
    image: Cour4,
    date: "10.4.2024",
    author: "Nina Leffler",
    title: "Top productivity hacks for students",
  },
  {
    id: 5,
    image: Cour5,
    date: "10.4.2024",
    author: "Nina Leffler",
    title: "How AI is changing education forever",
  },
  {
    id: 6,
    image: Cour6,
    date: "10.4.2024",
    author: "Nina Leffler",
    title: "Modern classroom experience explained",
  },
  {
    id: 7,
    image: Cour7,
    date: "10.4.2024",
    author: "Nina Leffler",
    title: "Future skills every student needs",
  },
  {
    id: 8,
    image: Cour8,
    date: "10.4.2024",
    author: "Nina Leffler",
    title: "Learning trends for the next decade",
  },
];

// Animation Variants
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        {/* LEFT SIDE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="overflow-hidden rounded-3xl">
            <img
              src={MainImg}
              alt=""
              className="w-full h-[520px] object-cover transition-all duration-700 hover:scale-110"
            />
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span>10.4.2024</span>
              <span>•</span>
              <span>Nina Leffler</span>
            </div>

            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Improve knowledge retention with visual learning
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat
              elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames
              eu. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={fadeUp}
              className="group cursor-pointer rounded-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.author}</span>
                </div>

                <h3 className="mt-3 text-lg font-semibold leading-7 transition-colors duration-300 group-hover:text-yellow-500">
                  {blog.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
