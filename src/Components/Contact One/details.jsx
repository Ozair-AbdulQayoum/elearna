import React from "react";

import locationIcon from "../../assets/10- Contact One imgs/HomeIcon.svg";
import contactIcon from "../../assets/10- Contact One imgs/BooksIcon.svg";
import timeIcon from "../../assets/10- Contact One imgs/ClockIcons.svg";

export default function Details() {
  return (
    <section className="py-16 px-6 bg-white">
      {/* TITLE */}
      <div className="text-center mb-12">
        <h5 className="text-sm md:text-base text-gray-500 mb-2">
          Contact details
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold">Find our location</h2>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LOCATION */}
        <div className="flex items-start gap-4 p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <img src={locationIcon} alt="Location" className="w-10 h-10" />
          <div>
            <h4 className="font-bold mb-1">Area location</h4>
            <p className="text-gray-600">410 Sandtown, California 94001, USA</p>
          </div>
        </div>

        {/* CONTACT */}
        <div className="flex items-start gap-4 p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <img src={contactIcon} alt="Contact" className="w-10 h-10" />
          <div>
            <h4 className="font-bold mb-1">Contact details</h4>
            <p className="text-gray-600">888-123-4567</p>
            <p className="text-gray-600">info@example.com</p>
          </div>
        </div>

        {/* OPENING HOURS */}
        <div className="flex items-start gap-4 p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <img src={timeIcon} alt="Hours" className="w-10 h-10" />
          <div>
            <h4 className="font-bold mb-1">Opening hours</h4>
            <p className="text-gray-600">Monday - Friday</p>
            <p className="text-gray-600">10:30 a.m - 7:00 p.m</p>
          </div>
        </div>
      </div>
    </section>
  );
}
