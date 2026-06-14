import React from "react";
import footerImg from "../assets/footer.jpg";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="relative flex justify-center">
          <img
            src={footerImg}
            alt="Dream Home"
            className="w-full max-w-3xl h-80 object-cover rounded-3xl opacity-60"
          />

          <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to find your dream home?
            </h2>

            <p className="max-w-2xl mt-3 text-gray-200">
              Whether you’re buying, selling, or investing, our team is here to
              guide you every step of the way. Let’s make your next move simple
              and successful.
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
          <p>123 Main Street, Suite 456, Cityville, ST 78901</p>
          <p className="mt-2">(123) 456-7890</p>
          <p>(987) 654-3210</p>
          <p className="mt-2">info@findit.com</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Our Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li>All Properties</li>
            <li>Property for Buy</li>
            <li>Property for Rent</li>
            <li>Our Agents</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Latest News</li>
            <li>404</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
          <p className="text-gray-300 mb-3">
            Sign up for updates on our latest news.
          </p>

          <input
            type="email"
            placeholder="Enter your e-mail"
            className="w-full p-2 rounded-md text-black"
          />

          <button className="mt-3 w-full bg-white text-black py-2 rounded-md font-medium">
            Subscribe
          </button>

          <p className="text-xs text-gray-400 mt-3">
            By clicking subscribe, you agree to the Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>Copyright © 2025 - Findit by Marcframe. All rights reserved.</p>

        <div className="flex gap-4 mt-3 md:mt-0">
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Youtube</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
