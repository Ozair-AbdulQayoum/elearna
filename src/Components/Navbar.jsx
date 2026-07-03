import React, { useState } from "react";
import {
  FaShoppingCart,
  FaChevronDown,
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/1- Home One imgs/Elearna.svg";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="bg-[#0F252A] shadow-md sticky top-0 z-[9999]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 text-white">
            <img src={logo} alt="Elearna" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-black">
            <Dropdown
              title="Home"
              items={[
                { name: "Home One", link: "/home-one" },
                { name: "Home Two", link: "/home-two" },
                { name: "Home Three", link: "/home-three" },
              ]}
            />

            <MegaMenu />

            <Dropdown
              title="Pages"
              items={[
                { name: "About One", link: "/about-one" },
                { name: "About Two", link: "/about-two" },
                { name: "Course One", link: "/course-one" },
                { name: "Course Two", link: "/course-two" },
                { name: "Course Three", link: "/course-three" },
                { name: "FAQ", link: "/faq" },
                { name: "Pricing One", link: "/pricing-one" },
                { name: "Pricing Two", link: "/pricing-two" },
                { name: "Pricing Three", link: "/pricing-three" },
                { name: "Career", link: "/career" },
                { name: "Event", link: "/event" },
                { name: "Team", link: "/team" },
              ]}
            />

            <Dropdown
              title="Blog"
              items={[
                { name: "Blog One", link: "/blog-one" },
                { name: "Blog Two", link: "/blog-two" },
                { name: "Blog Three", link: "/blog-three" },
              ]}
            />

            <Dropdown
              title="Contact"
              items={[
                { name: "Contact One", link: "/contact-one" },
                { name: "Contact Two", link: "/contact-two" },
                { name: "Contact Three", link: "/contact-three" },
              ]}
            />
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-5 text-white">
            <Link to="/cart" className="text-xl hover:text-cyan-400 transition">
              <FaShoppingCart />
            </Link>

            <Link
              to="/login"
              className="font-medium hover:text-cyan-400 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-cyan-500 text-white px-5 py-2 rounded-full hover:bg-cyan-600 transition"
            >
              Register
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-2xl text-white"
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="lg:hidden pb-5 border-t border-white/10 text-white">
            <div className="flex flex-col gap-4 pt-4">
              <MobileDropdown
                title="Home"
                open={openMenu === "home"}
                onClick={() => toggleMenu("home")}
                items={[
                  { name: "Home One", link: "/home-one" },
                  { name: "Home Two", link: "/home-two" },
                  { name: "Home Three", link: "/home-three" },
                ]}
              />

              <MobileDropdown
                title="Courses"
                open={openMenu === "courses"}
                onClick={() => toggleMenu("courses")}
                items={[
                  { name: "Finance", link: "/courses/finance" },
                  { name: "Design", link: "/courses/design" },
                  { name: "Management", link: "/courses/management" },
                  { name: "Development", link: "/courses/development" },
                ]}
              />

              <MobileDropdown
                title="Pages"
                open={openMenu === "pages"}
                onClick={() => toggleMenu("pages")}
                items={[
                  { name: "About One", link: "/about-one" },
                  { name: "About Two", link: "/about-two" },
                  { name: "Course One", link: "/course-one" },
                  { name: "Course Two", link: "/course-two" },
                  { name: "Course Three", link: "/course-three" },
                  { name: "FAQ", link: "/faq" },
                  { name: "Pricing One", link: "/pricing-one" },
                  { name: "Pricing Two", link: "/pricing-two" },
                  { name: "Pricing Three", link: "/pricing-three" },
                  { name: "Career", link: "/career" },
                  { name: "Event", link: "/event" },
                  { name: "Team", link: "/team" },
                ]}
              />

              <MobileDropdown
                title="Blog"
                open={openMenu === "blog"}
                onClick={() => toggleMenu("blog")}
                items={[
                  { name: "Blog One", link: "/blog-one" },
                  { name: "Blog Two", link: "/blog-two" },
                  { name: "Blog Three", link: "/blog-three" },
                ]}
              />

              <MobileDropdown
                title="Contact"
                open={openMenu === "contact"}
                onClick={() => toggleMenu("contact")}
                items={[
                  { name: "Contact One", link: "/contact-one" },
                  { name: "Contact Two", link: "/contact-two" },
                  { name: "Contact Three", link: "/contact-three" },
                ]}
              />

              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

/* ================= MOBILE DROPDOWN ================= */

function MobileDropdown({ title, items, open, onClick }) {
  return (
    <div className="px-2">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-3 font-semibold"
      >
        {title}
        <FaChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="pl-3 space-y-2 text-gray-300">
          {items.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="block py-1 hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ================= DESKTOP DROPDOWN ================= */

function Dropdown({ title, items }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-2 font-medium text-white hover:text-cyan-400 transition">
        {title}
        <FaChevronDown className="text-xs" />
      </button>

      <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="block px-5 py-3 hover:bg-gray-100"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ================= MEGA MENU ================= */

function MegaMenu() {
  return (
    <div className="group relative">
      <button className="flex items-center gap-2 font-medium text-white hover:text-cyan-400 transition">
        Courses
        <FaChevronDown className="text-xs" />
      </button>

      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[900px] bg-white rounded-3xl shadow-2xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg">Free Courses</h3>
            <h3 className="font-bold mt-3 text-lg">Paid Courses</h3>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-5">
            <Link to="/courses/finance">Finance</Link>
            <Link to="/courses/design">Design</Link>
            <Link to="/courses/management">Management</Link>
            <Link to="/courses/development">Development</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
