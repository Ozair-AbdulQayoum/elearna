import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// ================= BLOG DATA (INSIDE SAME FILE) =================

import tum1 from "../../assets/9- Blog One imgs/BlogThumbnail-1.webp";
import tum2 from "../../assets/9- Blog One imgs/BlogThumbnail-2.webp";
import tum3 from "../../assets/9- Blog One imgs/BlogThumbnail-3.webp";
import tum4 from "../../assets/9- Blog One imgs/BlogThumbnail-4.webp";
import tum5 from "../../assets/9- Blog One imgs/BlogThumbnail-5.webp";
import tum6 from "../../assets/9- Blog One imgs/BlogThumbnail-6.webp";
import tum7 from "../../assets/9- Blog One imgs/BlogThumbnail-7.webp";
import tum8 from "../../assets/9- Blog One imgs/BlogThumbnail-8.webp";
import tum9 from "../../assets/9- Blog One imgs/BlogThumbnail-9.webp";
import tum10 from "../../assets/9- Blog One imgs/BlogThumbnail-10.webp";
import tum11 from "../../assets/9- Blog One imgs/BlogThumbnail-11.webp";
import tum12 from "../../assets/9- Blog One imgs/BlogThumbnail-12.webp";

const blogData = {
  posts: [
    {
      img: tum1,
      title: "Improve knowledge retention with visual learning",
      date: "October 4, 2024",
    },
    {
      img: tum2,
      title: "Master modern design skills quickly",
      date: "October 5, 2024",
    },
    {
      img: tum3,
      title: "How to become a better developer",
      date: "October 6, 2024",
    },
    { img: tum4, title: "Future of online education", date: "October 7, 2024" },
    {
      img: tum5,
      title: "Top learning strategies for students",
      date: "October 8, 2024",
    },
    {
      img: tum6,
      title: "Boost your productivity with tech",
      date: "October 9, 2024",
    },
    {
      img: tum7,
      title: "AI impact on education system",
      date: "October 10, 2024",
    },
    {
      img: tum8,
      title: "Best practices for web development",
      date: "October 11, 2024",
    },
    { img: tum9, title: "UI/UX trends in 2026", date: "October 12, 2024" },
    {
      img: tum10,
      title: "Start your tech career today",
      date: "October 13, 2024",
    },
    {
      img: tum11,
      title: "Learning roadmap for beginners",
      date: "October 14, 2024",
    },
    {
      img: tum12,
      title: "How to stay consistent in learning",
      date: "October 15, 2024",
    },
  ],
};

// ================= COMPONENT =================

export default function Blog() {
  const [page, setPage] = useState(1);

  const postsPerPage = 6;
  const startIndex = (page - 1) * postsPerPage;

  const currentPosts = blogData.posts.slice(
    startIndex,
    startIndex + postsPerPage,
  );

  const nextPage = () => {
    if (page < 2) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {currentPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={post.img}
              alt="blog"
              className="w-full h-60 object-cover"
            />

            <div className="p-5">
              <p className="text-blue-600 font-semibold text-sm">Career</p>
              <h3 className="font-bold text-lg mt-2">{post.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{post.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-6 mt-12">
        <button
          onClick={prevPage}
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition"
        >
          <FaArrowLeft />
        </button>

        <span className="font-semibold">Page {page} / 2</span>

        <button
          onClick={nextPage}
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
