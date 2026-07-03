import React from "react";
import { motion } from "framer-motion";

import Member1 from "../../assets/8- Team imgs/TeamMember-1.webp";
import Member2 from "../../assets/8- Team imgs/TeamMember-2.webp";
import Member3 from "../../assets/8- Team imgs/TeamMember-3.webp";
import Member4 from "../../assets/8- Team imgs/TeamMember-4.webp";
import Member5 from "../../assets/8- Team imgs/TeamMember-5.webp";
import Member6 from "../../assets/8- Team imgs/TeamMember-6.webp";
import Member7 from "../../assets/8- Team imgs/TeamMember-7.webp";
import Member8 from "../../assets/8- Team imgs/TeamMember-8.webp";

export default function Member() {
  const members = [
    { img: Member1, name: "Leslie Upton", role: "Instructor" },
    { img: Member2, name: "Darnell Kuphal", role: "Instructor" },
    { img: Member3, name: "Steven Roob", role: "Instructor" },
    { img: Member4, name: "Wanda Abshire", role: "Instructor" },
    { img: Member5, name: "Lee Schmitt", role: "Instructor" },
    { img: Member6, name: "Jasmine Konopelski", role: "Instructor" },
    { img: Member7, name: "Tonya Flatley", role: "Instructor" },
    { img: Member8, name: "Colin Fay", role: "Instructor" },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-20 bg-gray-50">
      {/* TOP CENTER CONTACT TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h4 className="text-blue-600 font-semibold mb-2">Contact Us</h4>

        <h2 className="text-4xl font-bold mb-4">
          Know our expert team agents, they solve your questions
        </h2>

        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
          nam id
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden text-center"
          >
            {/* IMAGE */}
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-96 object-contain bg-gray-100"
            />

            {/* INFO */}
            <div className="p-6">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-500 mt-1">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
