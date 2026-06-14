import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About Us", path: "/about" },
    { id: 3, title: "Properties", path: "/properties" },
    { id: 4, title: "Agent", path: "/agent" },
    { id: 5, title: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 fixed top-0 left-0 z-50">
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className="text-gray-700 font-medium hover:text-black transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black hover:after:w-full after:transition-all"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT BUTTONS */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          <Link
            to="/contact"
            className="bg-black text-white px-6 py-2.5 rounded-xl hover:bg-gray-800 transition"
          >
            Contact Us
          </Link>

          <Link
            to="/submit-property"
            className="border border-black px-6 py-2.5 rounded-xl hover:bg-black hover:text-white transition"
          >
            Submit Property
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden ml-auto text-3xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-3 text-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 font-medium"
                >
                  {item.title}
                </Link>
              </li>
            ))}

            <div className="flex flex-col gap-3 mt-3">
              <Link
                to="/contact"
                className="bg-black text-white px-6 py-2.5 rounded-xl"
              >
                Contact Us
              </Link>

              <Link
                to="/submit-property"
                className="border border-black px-6 py-2.5 rounded-xl"
              >
                Submit Property
              </Link>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
