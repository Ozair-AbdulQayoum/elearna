import React from "react";
import bg from "../../assets/5- Pricing One/NoisyBackground.webp";
import logo from "../../assets/5- Pricing One/Elearna.svg";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Logo */}
          <div>
            <img src={logo} alt="Elearna" className="h-14 rounded-lg mb-6" />

            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis
              eget amet ut tristique cras.
            </p>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-xl font-bold mb-6">Popular Courses</h3>

            <ul className="space-y-3 text-gray-300">
              <li>Finance</li>
              <li>Management</li>
              <li>Design</li>
              <li>Web Development</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>

            <ul className="space-y-3 text-gray-300">
              <li>About</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* License */}
          <div>
            <h3 className="text-xl font-bold mb-6">License</h3>

            <ul className="space-y-3 text-gray-300">
              <li>License</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* CMS */}
          <div>
            <h3 className="text-xl font-bold mb-6">CMS</h3>

            <ul className="space-y-3 text-gray-300">
              <li>Course Details</li>
              <li>Instructor Details</li>
              <li>Blog Details</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Need Help?</h3>

            <p className="text-gray-300 mb-6">(888) 123 4567</p>

            <h3 className="text-xl font-bold mb-3">Need Support?</h3>

            <p className="text-gray-300">info@example.com</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <p>Design by Radiant Templates</p>
          <p>Powered by Webflow</p>
        </div>
      </div>
    </footer>
  );
}
