import React from "react";

import img1 from "../../assets/11- Home Two Imgs/BlogThumbnail-1.webp";
import img2 from "../../assets/11- Home Two Imgs/BlogThumbnail-2.webp";
import img3 from "../../assets/11- Home Two Imgs/BlogThumbnail-3.webp";

const blogs = [
  {
    img: img1,
    category: "Career",
    title: "Improve knowledge retention with visual learning",
    date: "October 4, 2024",
  },
  {
    img: img2,
    category: "Development",
    title: "Master online learning with proven strategies",
    date: "October 4, 2024",
  },
  {
    img: img3,
    category: "Teaching",
    title: "How to enhance your learning experience today",
    date: "October 3, 2024",
  },
];

export default function Blog() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-yellow-500 uppercase tracking-[0.3em] text-sm font-semibold">
            Education Blog
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Our news and ideas
          </h2>

          <p className="mt-6 text-gray-600 leading-7">
            Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus
            facilisis scelerisque vitae consectetur vitae. Amet faucibus
            venenatis donec mattis.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <span className="text-sm text-yellow-600 font-semibold uppercase">
                  {blog.category}
                </span>

                <h3 className="mt-3 text-lg font-semibold text-gray-900 leading-snug group-hover:text-yellow-500 transition">
                  {blog.title}
                </h3>

                <p className="mt-4 text-sm text-gray-500">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
