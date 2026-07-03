import React from "react";
import { motion } from "framer-motion";

/* =======================
   ASSETS (IMPORTS)
======================= */
import bg1 from "../../assets/2- About One imgs/NoisyBackground.webp";
import logo1 from "../../assets/2- About One imgs/Elearna.svg";

/* =======================
   FOOTER COMPONENT
======================= */
export default function Footer() {
  const footerData = {
    bg1,
    logo1,

    description:
      "Empowering students worldwide with industry-leading online courses and practical skills for the future.",

    columns: [
      {
        title: "Popular Courses",
        items: ["Finance", "Management", "UI/UX Design", "Web Development"],
      },
      {
        title: "Company",
        items: ["About Us", "Courses", "Blog", "Pricing", "Contact"],
      },
      {
        title: "Resources",
        items: ["Course Details", "Instructor", "Help Center", "FAQs"],
      },
    ],

    contact: {
      title: "Need Help?",
      phoneLabel: "Call Us",
      phone: "(888) 123 4567",
      emailLabel: "Email Us",
      email: "info@elearna.com",
    },

    bottomText: "© 2026 Elearna. All Rights Reserved.",
  };

  return (
    <footer
      className="relative bg-cover bg-center text-white pt-32 pb-8 px-6"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-10">
          {/* LOGO */}
          <div>
            <img src={logo1} alt="logo" className="w-36 mb-5" />
            <p className="text-gray-300 leading-7">{footerData.description}</p>
          </div>

          {/* COLUMNS */}
          {footerData.columns.map((column, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-5">{column.title}</h3>

              <ul className="space-y-3">
                {column.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-300 hover:text-white cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              {footerData.contact.title}
            </h3>

            <div className="space-y-5">
              <div>
                <p className="text-gray-400">{footerData.contact.phoneLabel}</p>
                <p className="font-semibold">{footerData.contact.phone}</p>
              </div>

              <div>
                <p className="text-gray-400">{footerData.contact.emailLabel}</p>
                <p className="font-semibold">{footerData.contact.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-700 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>{footerData.bottomText}</p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
