import React from "react";
import { motion } from "framer-motion";

import icon1 from "../../assets/17- Home Three imgs/CircleIconOne.svg";
import icon2 from "../../assets/17- Home Three imgs/CircleIconTwo.svg";
import icon3 from "../../assets/17- Home Three imgs/CircleIconThree.svg";

import img1 from "../../assets/17- Home Three imgs/CategoryImage.webp";
import img2 from "../../assets/17- Home Three imgs/CategoryImage-2.webp";
import img3 from "../../assets/17- Home Three imgs/CategoryImage-3.webp";
import img4 from "../../assets/17- Home Three imgs/CategoryImage-4.webp";

export default function Cate() {
  return (
    <section className="w-full bg-white py-16">
      {/* TOP FEATURE CARD (WHITE BACKGROUND) */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 rounded-2xl bg-white p-6 shadow-xl sm:grid-cols-3"
        >
          {/* Item 1 */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100"
            >
              <img src={icon1} alt="icon" className="h-8 w-8" />
            </motion.div>

            <div>
              <h3 className="text-base font-semibold text-[#0F2227]">
                150+ online courses
              </h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100"
            >
              <img src={icon2} alt="icon" className="h-8 w-8" />
            </motion.div>

            <div>
              <h3 className="text-base font-semibold text-[#0F2227]">
                Personalized learning
              </h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100"
            >
              <img src={icon3} alt="icon" className="h-8 w-8" />
            </motion.div>

            <div>
              <h3 className="text-base font-semibold text-[#0F2227]">
                Lifetime update
              </h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* TITLE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto mt-20 max-w-3xl px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-[#0F2227] sm:text-4xl">
          Top Categories
        </h2>

        <h3 className="mt-2 text-xl font-semibold text-gray-700">
          Discover leading categories
        </h3>

        <p className="mt-4 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus
          malesuada morbi in quam donec a pellentesque risus.
        </p>
      </motion.div>

      {/* CATEGORY GRID */}
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {[
          { img: img1, title: "Web design and creative" },
          { img: img2, title: "Finance and accounting" },
          { img: img3, title: "Technology and software" },
          { img: img4, title: "Digital Marketing" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="group relative overflow-hidden rounded-xl"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
