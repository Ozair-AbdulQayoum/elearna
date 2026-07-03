import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

// =====================
// Assets
// =====================
import bg2 from "../../assets/1- Home One imgs/FooterOneBackground3.avif";
import logo03 from "../../assets/1- Home One imgs/Elearna.svg";

// =====================
// Data
// =====================
const footerData = {
  logo03,
  description:
    "Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.",

  quickLinks: ["Home", "Events", "Career", "Instructor"],

  courses: ["Finance", "Management", "Design", "Web Development"],

  company: ["About", "Courses", "Blog", "Contact"],

  resources: ["License", "Pricing", "CMS", "Blog Details"],

  bottomText: {
    copyright: "© 2026 Elearna. All Rights Reserved.",
    credit: "Design by Radiant Templates | Powered by Webflow",
  },

  cta: {
    title: "Are you ready to start your journey?",
    desc: "Start learning today with expert courses and grow your skills faster.",
    btn1: "Browse Courses",
    btn2: "Become a Teacher",
  },
};

// =====================
// Component
// =====================
export default function Footer() {
  const {
    logo03,
    description,
    quickLinks,
    courses,
    company,
    resources,
    bottomText,
    cta,
  } = footerData;

  return (
    <footer
      className="relative bg-cover bg-center text-white mt-20"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        {/* CTA */}
        <div className="relative -top-16">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-3xl px-8 md:px-14 py-10 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl md:text-4xl font-bold mb-3">
                  {cta.title}
                </h2>
                <p className="text-blue-100 max-w-2xl">{cta.desc}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition">
                  {cta.btn1}
                </button>

                <button className="border border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition">
                  {cta.btn2}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 -mt-6">
          {/* Logo */}
          <div>
            <img src={logo03} alt="logo" className="h-14 mb-6 rounded-lg" />
            <p className="text-gray-300">{description}</p>

            <div className="flex gap-4 mt-6 text-white">
              <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-300 cursor-pointer" />
              <FaTwitter className="hover:text-sky-300 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              {quickLinks.map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Popular Courses</h3>
            <ul className="space-y-3 text-gray-300">
              {courses.map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-300">
              {company.map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 text-gray-300">
              {resources.map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>{bottomText.copyright}</p>
          <p className="mt-2">{bottomText.credit}</p>
        </div>
      </div>
    </footer>
  );
}
