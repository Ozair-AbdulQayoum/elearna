import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import New1 from "../../assets/New-1.jpg";
import New2 from "../../assets/New-2.jpg";
import New3 from "../../assets/New-3.jpg";
import New4 from "../../assets/New-4.jpg";
import New5 from "../../assets/New-5.jpg";
import New6 from "../../assets/New-6.jpg";

import agent1 from "../../assets/agent-1.jpg";
import agent2 from "../../assets/agent-2.jpg";

export default function Hero() {
  const properties = [
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

    // 19 MORE PROPERTIES
    {
      image: New1,
      title: "New York",
      name: "Modern Apartment",
      beds: 3,
      baths: 2,
      sqft: 180,
      price: "$2,200",
      agent: "Sarah Johnson",
      agentImg: agent1,
    },
    {
      image: New2,
      title: "Miami",
      name: "Luxury Condo",
      beds: 4,
      baths: 3,
      sqft: 250,
      price: "$4,000",
      agent: "David Wilson",
      agentImg: agent2,
    },
    {
      image: New3,
      title: "Dallas",
      name: "Family House",
      beds: 4,
      baths: 2,
      sqft: 210,
      price: "$2,800",
      agent: "Sarah Johnson",
      agentImg: agent1,
    },
    {
      image: New4,
      title: "Seattle",
      name: "Green Villa",
      beds: 5,
      baths: 4,
      sqft: 320,
      price: "$5,200",
      agent: "David Wilson",
      agentImg: agent2,
    },
    {
      image: New5,
      title: "Boston",
      name: "City Loft",
      beds: 2,
      baths: 1,
      sqft: 120,
      price: "$1,500",
      agent: "Sarah Johnson",
      agentImg: agent1,
    },
    {
      image: New6,
      title: "Houston",
      name: "Modern House",
      beds: 3,
      baths: 2,
      sqft: 200,
      price: "$2,400",
      agent: "David Wilson",
      agentImg: agent2,
    },
    {
      image: New1,
      title: "Denver",
      name: "Mountain View Home",
      beds: 4,
      baths: 3,
      sqft: 280,
      price: "$3,600",
      agent: "Sarah Johnson",
      agentImg: agent1,
    },
    {
      image: New2,
      title: "San Diego",
      name: "Beachfront Condo",
      beds: 3,
      baths: 2,
      sqft: 190,
      price: "$3,000",
      agent: "David Wilson",
      agentImg: agent2,
    },
    {
      image: New3,
      title: "Phoenix",
      name: "Desert Villa",
      beds: 5,
      baths: 4,
      sqft: 350,
      price: "$4,800",
      agent: "Sarah Johnson",
      agentImg: agent1,
    },
    {
      image: New4,
      title: "Atlanta",
      name: "Urban House",
      beds: 3,
      baths: 2,
      sqft: 170,
      price: "$2,100",
      agent: "David Wilson",
      agentImg: agent2,
    },
    {
      image: New5,
      title: "Orlando",
      name: "Family Villa",
      beds: 4,
      baths: 3,
      sqft: 240,
      price: "$3,200",
      agent: "Sarah Johnson",
      agentImg: agent1,
    },
    {
      image: New6,
      title: "Las Vegas",
      name: "Luxury Penthouse",
      beds: 6,
      baths: 5,
      sqft: 400,
      price: "$6,500",
      agent: "David Wilson",
      agentImg: agent2,
    },
    {
      image: New1,
      title: "Portland",
      name: "Eco Home",
      beds: 3,
      baths: 2,
      sqft: 160,
      price: "$2,300",
      agent: "Sarah Johnson",
      agentImg: agent1,
    },
    {
      image: New2,
      title: "Austin",
      name: "Modern Loft",
      beds: 2,
      baths: 1,
      sqft: 140,
      price: "$1,800",
      agent: "David Wilson",
      agentImg: agent2,
    },
    {
      image: New3,
      title: "San Jose",
      name: "Tech Villa",
      beds: 4,
      baths: 3,
      sqft: 260,
      price: "$4,200",
      agent: "Sarah Johnson",
      agentImg: agent1,
    },
    {
      image: New4,
      title: "San Francisco",
      name: "Luxury Apartment",
      beds: 3,
      baths: 2,
      sqft: 200,
      price: "$5,000",
      agent: "David Wilson",
      agentImg: agent2,
    },
    {
      image: New5,
      title: "Nashville",
      name: "Country House",
      beds: 4,
      baths: 3,
      sqft: 230,
      price: "$2,700",
      agent: "Sarah Johnson",
      agentImg: agent1,
    },
    {
      image: New6,
      title: "Philadelphia",
      name: "Classic Home",
      beds: 3,
      baths: 2,
      sqft: 180,
      price: "$2,000",
      agent: "David Wilson",
      agentImg: agent2,
    },
    {
      image: New1,
      title: "San Antonio",
      name: "Suburban Villa",
      beds: 4,
      baths: 3,
      sqft: 250,
      price: "$3,400",
      agent: "Sarah Johnson",
      agentImg: agent1,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <h5 className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaRegDotCircle />
            Latest Properties
          </h5>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Fresh on the market
          </h2>

          <p className="text-gray-600 mt-4">
            Stay ahead of the curve with our newest listings — carefully
            selected homes and investments added recently to the market.
          </p>

          {/* INFO CARDS */}
          <div className="mt-8 border rounded-2xl shadow-sm p-6 space-y-6">
            {/* Explore */}
            <div>
              <h3 className="font-semibold mb-2">Explore: All</h3>
              <p className="text-sm text-gray-600">
                Browse our latest properties — from cozy family homes to luxury
                estates designed for every lifestyle and budget.
              </p>
            </div>

            {/* Type */}
            <div>
              <h3 className="font-semibold">Type</h3>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-black hover:text-white cursor-pointer transition">
                  All
                </span>
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-black hover:text-white cursor-pointer transition">
                  Sell
                </span>
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-black hover:text-white cursor-pointer transition">
                  Rent
                </span>
              </div>
            </div>

            {/* Category */}
            <div>
              <h3 className="font-semibold">Category</h3>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-black hover:text-white cursor-pointer transition">
                  Apartments
                </span>
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-black hover:text-white cursor-pointer transition">
                  Condos
                </span>
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-black hover:text-white cursor-pointer transition">
                  Houses
                </span>
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-black hover:text-white cursor-pointer transition">
                  Villas
                </span>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-semibold">Location</h3>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-black hover:text-white cursor-pointer transition">
                  Brooklyn
                </span>
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-black hover:text-white cursor-pointer transition">
                  Manhattan
                </span>
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-black hover:text-white cursor-pointer transition">
                  Queens
                </span>
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-black hover:text-white cursor-pointer transition">
                  Staten Island
                </span>
                <span className="px-3 py-1 border rounded-full text-sm hover:bg-black hover:text-white cursor-pointer transition">
                  The Bronx
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <h3 className="text-xl font-semibold">{item.name}</h3>

                  <div className="flex gap-4 text-sm text-gray-600 mt-2">
                    <span>🛏 {item.beds}</span>
                    <span>🛁 {item.baths}</span>
                    <span>📏 {item.sqft}m²</span>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <p className="font-bold text-lg">{item.price}</p>

                    <div className="flex items-center gap-2">
                      <img
                        src={item.agentImg}
                        alt={item.agent}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-600">
                        {item.agent}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
