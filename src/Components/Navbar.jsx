import React, { useEffect, useState } from "react";
import {
  FaShoppingCart,
  FaChevronDown,
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../assets/1- Home One imgs/Elearna.svg";

const homeLinks = [
  { name: "Home One", link: "/home-one" },
  { name: "Home Two", link: "/home-two" },
  { name: "Home Three", link: "/home-three" },
];

const mobileCourseLinks = [
  { name: "Finance", link: "/courses/finance" },
  { name: "Design", link: "/courses/design" },
  { name: "Management", link: "/courses/management" },
  { name: "Development", link: "/courses/development" },
  { name: "Marketing", link: "/courses/marketing" },
  { name: "Business", link: "/courses/business" },
];

const pageLinks = [
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
];

const blogLinks = [
  { name: "Blog One", link: "/blog-one" },
  { name: "Blog Two", link: "/blog-two" },
  { name: "Blog Three", link: "/blog-three" },
];

const contactLinks = [
  { name: "Contact One", link: "/contact-one" },
  { name: "Contact Two", link: "/contact-two" },
  { name: "Contact Three", link: "/contact-three" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  const toggleMobileDropdown = (menuName) => {
    setOpenMobileMenu((currentMenu) =>
      currentMenu === menuName ? null : menuName,
    );
  };

  const toggleMobileMenu = () => {
    setMobileMenu((currentValue) => !currentValue);
    setOpenMobileMenu(null);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setOpenMobileMenu(null);
  };

  const showNavbarBackground = isScrolled || mobileMenu;

  return (
    <nav
      className={`
        fixed
        inset-x-0
        top-0
        z-[9999]
        w-full
        transition-all
        duration-500
        ${
          showNavbarBackground
            ? "bg-[#0F252A]/95 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            : "bg-transparent shadow-none"
        }
      `}
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div
          className={`
            flex
            items-center
            justify-between
            transition-all
            duration-500
            ${isScrolled ? "h-[70px]" : "h-[84px]"}
          `}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            aria-label="Go to homepage"
            className="relative z-20 flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Elearna"
              className={`
                w-auto
                object-contain
                transition-all
                duration-500
                ${isScrolled ? "h-8" : "h-9"}
              `}
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            <Dropdown title="Home" items={homeLinks} />

            <MegaMenu />

            <Dropdown title="Pages" items={pageLinks} />

            <Dropdown title="Blog" items={blogLinks} />

            <Dropdown title="Contact" items={contactLinks} />
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-5 lg:flex">
            <Link
              to="/cart"
              aria-label="Open shopping cart"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/5
                text-base
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-cyan-300/60
                hover:bg-white/10
                hover:text-cyan-300
              "
            >
              <FaShoppingCart />
            </Link>

            <Link
              to="/login"
              className="
                text-sm
                font-medium
                text-white
                transition-colors
                duration-300
                hover:text-cyan-300
              "
            >
              Login
            </Link>

            <Link
              to="/register"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-cyan-500
                px-6
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-[0_10px_30px_rgba(6,182,212,0.22)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-cyan-400
                hover:shadow-[0_14px_38px_rgba(6,182,212,0.35)]
              "
            >
              Register
            </Link>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
            className="
              relative
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              text-xl
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-white/35
              hover:bg-white/20
              lg:hidden
            "
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            overflow-hidden
            text-white
            transition-all
            duration-500
            ease-out
            lg:hidden
            ${
              mobileMenu
                ? "max-h-[calc(100vh-70px)] border-t border-white/10 pb-6 opacity-100"
                : "max-h-0 border-transparent pb-0 opacity-0"
            }
          `}
        >
          <div className="max-h-[calc(100vh-100px)] overflow-y-auto pb-2 pt-4">
            <MobileDropdown
              title="Home"
              items={homeLinks}
              open={openMobileMenu === "home"}
              onToggle={() => toggleMobileDropdown("home")}
              onNavigate={closeMobileMenu}
            />

            <MobileDropdown
              title="Courses"
              items={mobileCourseLinks}
              open={openMobileMenu === "courses"}
              onToggle={() => toggleMobileDropdown("courses")}
              onNavigate={closeMobileMenu}
            />

            <MobileDropdown
              title="Pages"
              items={pageLinks}
              open={openMobileMenu === "pages"}
              onToggle={() => toggleMobileDropdown("pages")}
              onNavigate={closeMobileMenu}
            />

            <MobileDropdown
              title="Blog"
              items={blogLinks}
              open={openMobileMenu === "blog"}
              onToggle={() => toggleMobileDropdown("blog")}
              onNavigate={closeMobileMenu}
            />

            <MobileDropdown
              title="Contact"
              items={contactLinks}
              open={openMobileMenu === "contact"}
              onToggle={() => toggleMobileDropdown("contact")}
              onNavigate={closeMobileMenu}
            />

            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
              <Link
                to="/login"
                onClick={closeMobileMenu}
                className="
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={closeMobileMenu}
                className="
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-cyan-500
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-cyan-400
                "
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ================= MOBILE DROPDOWN ================= */

function MobileDropdown({ title, items, open, onToggle, onNavigate }) {
  return (
    <div className="border-b border-white/5 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="
          flex
          w-full
          items-center
          justify-between
          rounded-xl
          px-3
          py-3.5
          text-left
          text-sm
          font-semibold
          text-white
          transition-colors
          duration-300
          hover:bg-white/10
        "
      >
        <span>{title}</span>

        <FaChevronDown
          className={`
            text-[10px]
            transition-all
            duration-300
            ${open ? "rotate-180 text-cyan-300" : "rotate-0 text-white/60"}
          `}
        />
      </button>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ease-out
          ${open ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="space-y-1 px-2 pb-4">
          {items.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              onClick={onNavigate}
              className="
                block
                rounded-xl
                px-4
                py-2.5
                text-sm
                text-white/70
                transition-all
                duration-300
                hover:bg-white/10
                hover:pl-5
                hover:text-cyan-300
              "
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
      <button
        type="button"
        className="
          flex
          items-center
          gap-2
          py-7
          text-sm
          font-medium
          text-white
          transition-colors
          duration-300
          hover:text-cyan-300
        "
      >
        <span>{title}</span>

        <FaChevronDown className="text-[9px] transition-transform duration-300 group-hover:rotate-180" />
      </button>

      <div
        className="
          invisible
          absolute
          left-0
          top-full
          w-64
          translate-y-4
          rounded-2xl
          border
          border-slate-200/80
          bg-white
          p-2
          opacity-0
          shadow-[0_25px_70px_rgba(0,0,0,0.2)]
          transition-all
          duration-300
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        {items.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            className="
              group/item
              flex
              items-center
              justify-between
              rounded-xl
              px-4
              py-2.5
              text-sm
              font-medium
              text-slate-700
              transition-all
              duration-300
              hover:bg-cyan-50
              hover:pl-5
              hover:text-cyan-700
            "
          >
            <span>{item.name}</span>

            <FaArrowRight className="translate-x-2 text-[10px] opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
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
      <button
        type="button"
        className="
          flex
          items-center
          gap-2
          py-7
          text-sm
          font-medium
          text-white
          transition-colors
          duration-300
          hover:text-cyan-300
        "
      >
        <span>Courses</span>

        <FaChevronDown className="text-[9px] transition-transform duration-300 group-hover:rotate-180" />
      </button>

      <div
        className="
          invisible
          absolute
          left-1/2
          top-full
          w-[760px]
          -translate-x-1/2
          translate-y-4
          rounded-3xl
          border
          border-slate-200/80
          bg-white
          p-6
          opacity-0
          shadow-[0_30px_80px_rgba(0,0,0,0.22)]
          transition-all
          duration-300
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <div className="grid grid-cols-3 gap-6">
          {/* Featured card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#0F252A] p-6 text-white">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/15 blur-2xl" />
            <div className="absolute -bottom-14 -left-12 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Start learning
              </p>

              <h3 className="mt-3 text-xl font-bold">Explore Courses</h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Choose free and paid courses for your learning journey.
              </p>

              <Link
                to="/course-one"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-cyan-300
                  transition-all
                  duration-300
                  hover:gap-3
                  hover:text-cyan-200
                "
              >
                View all courses
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          {/* Free courses */}
          <div>
            <h3 className="mb-3 px-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-900">
              Free Courses
            </h3>

            <div className="space-y-1">
              <MegaLink name="Finance" link="/courses/finance" />
              <MegaLink name="Design" link="/courses/design" />
              <MegaLink name="Management" link="/courses/management" />
            </div>
          </div>

          {/* Paid courses */}
          <div>
            <h3 className="mb-3 px-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-900">
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

/* ================= MEGA MENU LINK ================= */

function MegaLink({ name, link }) {
  return (
    <Link
      to={link}
      className="
        group/link
        flex
        items-center
        justify-between
        rounded-xl
        px-4
        py-3
        text-sm
        font-medium
        text-slate-700
        transition-all
        duration-300
        hover:bg-cyan-50
        hover:pl-5
        hover:text-cyan-700
      "
    >
      <span>{name}</span>

      <FaArrowRight className="translate-x-2 text-[10px] opacity-0 transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100" />
    </Link>
  );
}
