import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import img1 from "../../assets/11- Home Two Imgs/PotentialImage-1.webp";
import img2 from "../../assets/11- Home Two Imgs/PotentialImage-2.webp";
import img3 from "../../assets/11- Home Two Imgs/PotentialImage-3.webp";
import img4 from "../../assets/11- Home Two Imgs/PotentialImage-4.webp";

const data = [
  {
    id: "1",
    title: "Flexibility and convenience",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    img: img1,
  },
  {
    id: "2",
    title: "Course accessibility",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    img: img2,
  },
  {
    id: "3",
    title: "Cost-effectiveness",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    img: img3,
  },
  {
    id: "4",
    title: "Personalized learning",
    desc: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
    img: img4,
  },
];

const cardVariants = {
  initial: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  hover: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const numberVariants = {
  initial: {
    opacity: 0.85,
    scale: 1,
  },
  hover: {
    opacity: 1,
    scale: 1.06,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function LearningSection() {
  const [activeImg, setActiveImg] = useState(data[0].img);

  return (
    <section className="w-full overflow-hidden bg-[#eef3f5]">
      <div
        className="
          relative
          min-h-[760px]
          overflow-hidden
          sm:min-h-[820px]
          md:min-h-[580px]
          lg:min-h-[650px]
          xl:min-h-[720px]
        "
      >
        {/* Animated background */}
        <AnimatePresence mode="sync">
          <motion.div
            key={activeImg}
            initial={{
              opacity: 0,
              scale: 1.06,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              opacity: {
                duration: 0.55,
                ease: "easeInOut",
              },
              scale: {
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${activeImg})`,
            }}
          />
        </AnimatePresence>

        {/* Main background overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-b
            from-black/25
            via-black/35
            to-black/90
            md:from-black/20
            md:via-black/25
            md:to-black/85
          "
        />

        <div
          className="
            absolute
            inset-0
            grid
            grid-cols-1
            grid-rows-4
            md:grid-cols-4
            md:grid-rows-1
          "
        >
          {data.map((item) => (
            <motion.div
              key={item.id}
              initial="initial"
              animate="initial"
              whileHover="hover"
              variants={cardVariants}
              onHoverStart={() => setActiveImg(item.img)}
              onFocus={() => setActiveImg(item.img)}
              onClick={() => setActiveImg(item.img)}
              tabIndex={0}
              role="button"
              className="
                group
                relative
                flex
                cursor-pointer
                flex-col
                justify-end
                overflow-hidden
                border-b
                border-white/20
                px-5
                py-6
                outline-none
                transition-colors
                duration-500
                focus-visible:bg-black/25
                sm:px-7
                sm:py-7
                md:border-b-0
                md:border-r
                md:px-5
                md:py-7
                lg:px-7
                lg:py-9
                xl:px-9
                xl:py-10
                [&:last-child]:border-b-0
                md:[&:last-child]:border-r-0
              "
            >
              {/* Card gradient overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-black/35
                  via-black/10
                  to-transparent
                  opacity-100
                  transition-opacity
                  duration-500
                  md:bg-gradient-to-t
                  md:from-black/65
                  md:via-black/15
                  md:to-transparent
                  md:opacity-0
                  md:group-hover:opacity-100
                  md:group-focus-visible:opacity-100
                "
              />

              {/* Content */}
              <div
                className="
                  relative
                  z-10
                  flex
                  max-w-xl
                  items-end
                  gap-5
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  sm:gap-7
                  md:block
                  md:max-w-none
                  md:translate-y-[108px]
                  md:group-hover:translate-y-0
                  md:group-focus-visible:translate-y-0
                  lg:translate-y-[120px]
                  xl:translate-y-[128px]
                "
              >
                <motion.span
                  variants={numberVariants}
                  className="
                    block
                    shrink-0
                    text-3xl
                    font-bold
                    leading-none
                    text-white
                    sm:text-4xl
                    md:text-4xl
                    lg:text-5xl
                    xl:text-6xl
                  "
                >
                  {item.id.padStart(2, "0")}
                </motion.span>

                <div className="min-w-0 flex-1 md:mt-5">
                  <h2
                    className="
                      max-w-xs
                      text-lg
                      font-semibold
                      leading-snug
                      text-white
                      sm:text-xl
                      md:text-lg
                      lg:text-xl
                      xl:text-2xl
                    "
                  >
                    {item.title}
                  </h2>

                  <p
                    className="
                      mt-2
                      max-w-lg
                      text-xs
                      leading-5
                      text-white/75
                      sm:mt-3
                      sm:text-sm
                      sm:leading-6
                      md:mt-4
                      md:max-h-0
                      md:translate-y-4
                      md:overflow-hidden
                      md:text-sm
                      md:leading-6
                      md:opacity-0
                      md:transition-all
                      md:duration-500
                      md:ease-out
                      md:group-hover:max-h-40
                      md:group-hover:translate-y-0
                      md:group-hover:opacity-100
                      md:group-focus-visible:max-h-40
                      md:group-focus-visible:translate-y-0
                      md:group-focus-visible:opacity-100
                      lg:text-[15px]
                      lg:leading-7
                      xl:text-base
                      xl:leading-8
                    "
                  >
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom active indicator */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-0
                  bg-white
                  transition-all
                  duration-500
                  ease-out
                  group-hover:w-full
                  group-focus-visible:w-full
                  md:h-1
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
