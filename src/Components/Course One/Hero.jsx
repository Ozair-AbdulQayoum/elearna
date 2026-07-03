import React from "react";
import { motion } from "framer-motion";
import bg from "../../assets/3- Course One imgs/CourseOneHeroBackgorund.webp";

// icons
import Cat1 from "../../assets/3- Course One imgs/CategoryIcons.svg";
import Cat2 from "../../assets/3- Course One imgs/CategoryIcons-2.svg";
import Cat3 from "../../assets/3- Course One imgs/CategoryIcons-3.svg";
import Cat4 from "../../assets/3- Course One imgs/CategoryIcons-4.svg";
import Cat5 from "../../assets/3- Course One imgs/CategoryIcons-5.svg";
import Cat6 from "../../assets/3- Course One imgs/CategoryIcons-6.svg";

export default function Hero() {
  const categories = [
    {
      img: Cat1,
      title: "Web Design & Creative",
      courses: "8 Courses",
    },
    {
      img: Cat2,
      title: "Finance & Accounting",
      courses: "4 Courses",
    },
    {
      img: Cat3,
      title: "IT & Software",
      courses: "5 Courses",
    },
    {
      img: Cat4,
      title: "Digital Marketing",
      courses: "4 Courses",
    },
    {
      img: Cat5,
      title: "Web Development",
      courses: "8 Courses",
    },
    {
      img: Cat6,
      title: "Content & Language",
      courses: "3 Courses",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative h-[550px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 uppercase tracking-[4px] font-semibold mb-4">
            Start With
          </p>

          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto">
            Professional Online Courses
          </h1>
        </motion.div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="relative z-20 -mt-24 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6">
            {categories.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group w-full sm:w-[260px] lg:w-[180px] bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* ICON */}
                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-10 h-10 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-bold text-gray-900 leading-6">
                  {item.title}
                </h3>

                {/* COURSES */}
                <p className="text-gray-500 text-sm mt-2">{item.courses}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
