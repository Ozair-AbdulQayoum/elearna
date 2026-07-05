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
    <nav className="sticky top-0 z-[9999] bg-[#0F252A]/95 shadow-md backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Elearna" className="h-8 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-7 lg:flex">
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
          <div className="hidden items-center gap-5 text-white lg:flex">
            <Link to="/cart" className="text-lg transition hover:text-cyan-400">
              <FaShoppingCart />
            </Link>

            <Link
              to="/login"
              className="text-sm font-medium transition hover:text-cyan-400"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Register
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-2xl text-white lg:hidden"
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden border-t border-white/10 text-white transition-all duration-500 lg:hidden ${
            mobileMenu ? "max-h-[800px] pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-4">
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

            <Link className="px-2 py-2 text-sm hover:text-cyan-400" to="/login">
              Login
            </Link>

            <Link
              className="mx-2 mt-2 rounded-full bg-cyan-500 px-5 py-2 text-center text-sm font-semibold"
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
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
        className="flex w-full items-center justify-between py-2.5 text-sm font-semibold"
      >
        {title}
        <FaChevronDown
          className={`text-xs transition-transform duration-300 ${
            open ? "rotate-180 text-cyan-400" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 pb-2 pl-3 text-sm text-gray-300">
          {items.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="block rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= DESKTOP DROPDOWN ================= */

function Dropdown({ title, items }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-2 text-sm font-medium text-white transition hover:text-cyan-400">
        {title}
        <FaChevronDown className="text-[10px] transition duration-300 group-hover:rotate-180" />
      </button>

      <div className="invisible absolute left-0 top-full mt-4 w-64 translate-y-4 rounded-2xl border border-gray-100 bg-white p-2 opacity-0 shadow-2xl shadow-black/20 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 transition duration-300 hover:bg-cyan-50 hover:pl-5 hover:text-cyan-600"
          >
            {item.name}
            <FaArrowRight className="text-xs opacity-0 transition group-hover:opacity-100" />
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
      <button className="flex items-center gap-2 text-sm font-medium text-white transition hover:text-cyan-400">
        Courses
        <FaChevronDown className="text-[10px] transition duration-300 group-hover:rotate-180" />
      </button>

      <div className="invisible absolute left-1/2 top-full mt-4 w-[760px] -translate-x-1/2 translate-y-4 rounded-3xl border border-gray-100 bg-white p-6 opacity-0 shadow-2xl shadow-black/20 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="grid grid-cols-3 gap-6">
          <div className="rounded-2xl bg-[#0F252A] p-5 text-white">
            <h3 className="text-lg font-bold">Explore Courses</h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Choose free and paid courses for your learning journey.
            </p>

            <Link
              to="/course-one"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
            >
              View all courses <FaArrowRight />
            </Link>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-900">
              Free Courses
            </h3>

            <div className="space-y-1">
              <MegaLink name="Finance" link="/courses/finance" />
              <MegaLink name="Design" link="/courses/design" />
              <MegaLink name="Management" link="/courses/management" />
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-900">
              Paid Courses
            </h3>

            <div className="space-y-1">
              <MegaLink name="Development" link="/courses/development" />
              <MegaLink name="Marketing" link="/courses/marketing" />
              <MegaLink name="Business" link="/courses/business" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MegaLink({ name, link }) {
  return (
    <Link
      to={link}
      className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 transition duration-300 hover:bg-cyan-50 hover:pl-5 hover:text-cyan-600"
    >
      {name}
      <FaArrowRight className="text-xs opacity-0 transition duration-300 group-hover:opacity-100" />
    </Link>
  );
}
