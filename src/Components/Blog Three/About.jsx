import React from "react";
import img1 from "../../assets/20- Blog Three imgs/BlogPortraitThumbnail-1.webp";
import img2 from "../../assets/20- Blog Three imgs/BlogPortraitThumbnail-2.webp";
import img3 from "../../assets/20- Blog Three imgs/BlogPortraitThumbnail-3.webp";
import img4 from "../../assets/20- Blog Three imgs/BlogPortraitThumbnail-4.webp";
import img5 from "../../assets/20- Blog Three imgs/BlogPortraitThumbnail-5.webp";
import img6 from "../../assets/20- Blog Three imgs/BlogPortraitThumbnail-6.webp";
import img7 from "../../assets/20- Blog Three imgs/BlogPortraitThumbnail-7.webp";
import img8 from "../../assets/20- Blog Three imgs/BlogPortraitThumbnail-8.webp";

const blogs = [
  {
    image: img1,
    date: "4.10.2024",
    author: "Nina Leffler",
    title: "Improve knowledge retention with visual learning",
    desc: "Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames eu diam vulputate.",
  },
  {
    image: img2,
    date: "4.10.2024",
    author: "Samantha Dicki",
    title: "Master online learning with proven strategies",
    desc: "Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames eu diam vulputate.",
  },
  {
    image: img3,
    date: "3.10.2024",
    author: "Edwin Waters",
    title: "How to enhance your learning experience today",
    desc: "Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames eu diam vulputate.",
  },
  {
    image: img4,
    date: "17.9.2024",
    author: "Edward Braun",
    title: "The evolution of teaching tools in the 21st century",
    desc: "Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames eu diam vulputate.",
  },
  {
    image: img5,
    date: "16.9.2024",
    author: "Jesse Johnson",
    title: "The role of parental involvement in academic achievement",
    desc: "Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames eu diam vulputate.",
  },
  {
    image: img6,
    date: "14.9.2024",
    author: "Samantha Dicki",
    title: "The role of technology in modern classrooms",
    desc: "Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames eu diam vulputate.",
  },
  {
    image: img7,
    date: "13.9.2024",
    author: "Edwin Waters",
    title: "How globalization is shaping curriculum development",
    desc: "Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames eu diam vulputate.",
  },
  {
    image: img8,
    date: "12.9.2024",
    author: "Gerald Nienow",
    title: "How personalized learning is changing education",
    desc: "Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames eu diam vulputate.",
  },
  {
    image: img1,
    date: "11.9.2024",
    author: "Nina Leffler",
    title: "Empowering teachers with continuous professional development",
    desc: "Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames eu diam vulputate.",
  },
];

const groups = [];
for (let i = 0; i < blogs.length; i += 3) {
  groups.push(blogs.slice(i, i + 3));
}

export default function About() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="space-y-16">
          {groups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3"
            >
              {group.map((blog, index) => {
                const isBig = index === 0;

                return (
                  <article key={blog.title} className="group cursor-pointer">
                    <div
                      className={`w-full overflow-hidden rounded-2xl bg-gray-100 ${
                        isBig ? "h-[520px]" : "h-[300px]"
                      }`}
                    >
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="block h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="pt-5">
                      <div className="mb-3 flex items-center gap-3 text-sm font-medium text-gray-500">
                        <span>{blog.date}</span>
                        <span className="h-1 w-1 rounded-full bg-gray-400"></span>
                        <span>{blog.author}</span>
                      </div>

                      <h2
                        className={`font-bold leading-tight text-gray-900 transition group-hover:text-blue-700 ${
                          isBig ? "text-3xl lg:text-4xl" : "text-xl"
                        }`}
                      >
                        {blog.title}
                      </h2>

                      <p className="mt-4 text-base leading-7 text-gray-600">
                        {blog.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
