import React from "react";
import {
  FaRegDotCircle,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import { LuBed, LuSquare } from "react-icons/lu";
import { BiBath } from "react-icons/bi";

import New1 from "../../assets/New-1.jpg";
import New2 from "../../assets/New-2.jpg";
import New3 from "../../assets/New-3.jpg";
import New4 from "../../assets/New-4.jpg";
import New5 from "../../assets/New-5.jpg";
import New6 from "../../assets/New-6.jpg";

import agent1 from "../../assets/agent-1.jpg";
import agent2 from "../../assets/agent-2.jpg";

const Latest = () => {
  const properties = [
    {
      image: New1,
      title: "Staten Island",
      name: "South Sunlight Apartment",
      beds: 4,
      baths: 2,
      sqft: 160,
      price: "$1,200",
      agent: "Rachel Gray",
      agentImg: agent1,
    },
    {
      image: New2,
      title: "Brooklyn Heights",
      name: "Modern Family Home",
      beds: 3,
      baths: 2,
      sqft: 140,
      price: "$1,500",
      agent: "John Smith",
      agentImg: agent2,
    },
    {
      image: New3,
      title: "Manhattan",
      name: "Luxury Condo",
      beds: 2,
      baths: 1,
      sqft: 120,
      price: "$2,200",
      agent: "Emily Brown",
      agentImg: agent1,
    },
    {
      image: New4,
      title: "Queens",
      name: "City Apartment",
      beds: 3,
      baths: 2,
      sqft: 150,
      price: "$1,800",
      agent: "Michael Lee",
      agentImg: agent2,
    },
    {
      image: New5,
      title: "Los Angeles",
      name: "Beach Villa",
      beds: 5,
      baths: 3,
      sqft: 300,
      price: "$3,500",
      agent: "Sarah Johnson",
      agentImg: agent1,
    },
    {
      image: New6,
      title: "Chicago",
      name: "Urban Loft",
      beds: 2,
      baths: 1,
      sqft: 110,
      price: "$1,100",
      agent: "David Wilson",
      agentImg: agent2,
    },
  ];

  const Card = ({ item }) => (
    <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaMapMarkerAlt />
          {item.title}
        </div>

        <h3 className="text-lg font-semibold mt-1">{item.name}</h3>

        <div className="flex justify-between mt-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <LuBed />
            {item.beds}
          </div>

          <div className="flex items-center gap-1">
            <BiBath />
            {item.baths}
          </div>

          <div className="flex items-center gap-1">
            <LuSquare />
            {item.sqft} sqft
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center border-t pt-3 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <img
              src={item.agentImg}
              alt={item.agent}
              className="w-6 h-6 rounded-full object-cover"
            />
            {item.agent}
          </div>

          <div className="flex items-center gap-2 font-semibold text-black">
            <FaMoneyBillWave />
            {item.price}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
        <div>
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            Latest Properties
          </h5>

          <h2 className="text-4xl font-bold mt-3">Fresh on the market</h2>
        </div>

        <p className="max-w-md mt-4 md:mt-0 text-gray-600">
          Stay ahead of the curve with our newest listings — handpicked homes
          and investments recently added to the market.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-600 font-medium">
        <span className="text-black border-b-2 border-black cursor-pointer">
          View All
        </span>
        <span>Apartments</span>
        <span>Condos</span>
        <span>Houses</span>
        <span>Villas</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 px-4">
        {properties.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          View All Properties
        </button>
      </div>
    </section>
  );
};

export default Latest;
