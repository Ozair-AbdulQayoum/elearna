import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="relative flex justify-center">
          {/* FIXED IMAGE PATH */}
          <img
            src="./footer.jpg"
            alt="Dream Home"
            className="w-full max-w-3xl h-80 object-cover rounded-3xl opacity-60"
          />

          <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to find your dream home?
            </h2>

            <p className="max-w-2xl mt-3 text-gray-200">
              Whether you’re buying, selling, or investing, our team is here to
              guide you every step of the way.
            </p>

            <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
              Schedule a consultation
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-16 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>123 Main Street</p>
          <p className="mt-2">(123) 456-7890</p>
          <p>info@findit.com</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Our Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li>All Properties</li>
            <li>Buy</li>
            <li>Rent</li>
            <li>Agents</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>About</li>
            <li>Contact</li>
            <li>News</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>

          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-2 rounded-md text-black"
          />

          <button className="mt-3 w-full bg-white text-black py-2 rounded-md font-medium">
            Subscribe
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>© 2025 Findit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
