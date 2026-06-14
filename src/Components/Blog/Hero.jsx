import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import Update1 from "../../assets/Updates-1.jpg";
import Update2 from "../../assets/Updates-2.jpg";
import Update3 from "../../assets/Updates-3.jpg";

const Insights = () => {
  const properties = [
    {
      image: Update1,
      name: "The Power of Natural Light in Architectural Design",

      text: "Natural light plays a crucial role in shaping architectural design, offering both aesthetic and func",
    },
    {
      image: Update2,
      name: "Photography: Capturing the Essence of Buildings",
      text: "Architectural photography goes beyond simply documenting structures; it captures the soul of a build",
    },
    {
      image: Update3,
      name: "The Future of Smart Homes: Innovative Interior Design",
      text: "The rise of smart homes is transforming the way we live, blending cutting-edge technology with innov",
    },
    {
      image: Update1,
      name: "The Power of Natural Light in Architectural Design",

      text: "Natural light plays a crucial role in shaping architectural design, offering both aesthetic and func",
    },
    {
      image: Update2,
      name: "Photography: Capturing the Essence of Buildings",
      text: "Architectural photography goes beyond simply documenting structures; it captures the soul of a build",
    },
    {
      image: Update3,
      name: "The Future of Smart Homes: Innovative Interior Design",
      text: "The rise of smart homes is transforming the way we live, blending cutting-edge technology with innov",
    },
    {
      image: Update1,
      name: "The Power of Natural Light in Architectural Design",

      text: "Natural light plays a crucial role in shaping architectural design, offering both aesthetic and func",
    },
    {
      image: Update2,
      name: "Photography: Capturing the Essence of Buildings",
      text: "Architectural photography goes beyond simply documenting structures; it captures the soul of a build",
    },
    {
      image: Update3,
      name: "The Future of Smart Homes: Innovative Interior Design",
      text: "The rise of smart homes is transforming the way we live, blending cutting-edge technology with innov",
    },
    {
      image: Update1,
      name: "The Power of Natural Light in Architectural Design",

      text: "Natural light plays a crucial role in shaping architectural design, offering both aesthetic and func",
    },
    {
      image: Update2,
      name: "Photography: Capturing the Essence of Buildings",
      text: "Architectural photography goes beyond simply documenting structures; it captures the soul of a build",
    },
    {
      image: Update3,
      name: "The Future of Smart Homes: Innovative Interior Design",
      text: "The rise of smart homes is transforming the way we live, blending cutting-edge technology with innov",
    },
  ];

  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
        <div>
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            Latest New
          </h5>

          <h2 className="text-4xl font-bold mt-3">Insights & Updates</h2>
        </div>

        <p className="max-w-md mt-4 md:mt-0 text-gray-600">
          Stay informed with expert tips, market trends, and property advice to
          guide your real estate journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 px-4">
        {properties.map((item, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 object-cover rounded-3xl"
            />

            <h3 className="text-xl font-semibold mt-3">{item.name}</h3>
            <p className="text-gray-600 mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insights;
