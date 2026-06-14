import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import Agent1 from "../../assets/Agent1.jpg";
import Agent2 from "../../assets/Agent2.jpg";
import Agent3 from "../../assets/Agent3.jpg";

export default function Hero() {
  const members = [
    {
      img: Agent1,
      name: "Steve Parker",
      title: "steveparker@example.com",
    },
    {
      img: Agent2,
      name: "Ingrid Vulk",
      title: "ingridvulk@example.com",
    },
    {
      img: Agent3,
      name: "Rachel Gray",
      title: "rachelgray@example.com",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <FaRegDotCircle />
              Our Agents
            </h5>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 max-w-xl">
              Meet the experts behind your real estate journey
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-600">
              Our agents combine local knowledge, market expertise, and a
              passion for helping clients find the right property.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500 mt-1">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
