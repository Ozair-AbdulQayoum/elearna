import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

import city1 from "../../assets/city-1.jpg";
import city2 from "../../assets/city-2.jpg";
import city3 from "../../assets/city-3.jpg";
import city4 from "../../assets/city-4.jpg";
import city5 from "../../assets/city-5.jpg";

const Explore = () => {
  const cities = [
    { image: city1, name: "Brooklyn", amount: "3 Properties" },
    { image: city2, name: "Manhattan", amount: "4 Properties" },
    { image: city3, name: "Queens", amount: "6 Properties" },
    { image: city4, name: "Staten Island", amount: "4 Properties" },
    { image: city5, name: "The Bronx", amount: "4 Properties" },
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h5 className="inline-flex items-center gap-2 text-sm font-medium text-gray-600">
          <FaRegDotCircle />
          Explore Cities
        </h5>

        <h2 className="text-4xl font-bold mt-3">Our Locations For You</h2>

        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          Each neighborhood has its own story. Discover the areas that match
          your lifestyle.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cities.slice(0, 3).map((city, index) => (
          <div key={index} className="text-center">
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-72 object-cover rounded-3xl"
            />

            <h3 className="text-xl font-semibold mt-3">{city.name}</h3>

            <p className="text-gray-500">{city.amount}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {cities.slice(3).map((city, index) => (
          <div key={index} className="text-center">
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-72 object-cover rounded-3xl"
            />

            <h3 className="text-xl font-semibold mt-3">{city.name}</h3>

            <p className="text-gray-500">{city.amount}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
