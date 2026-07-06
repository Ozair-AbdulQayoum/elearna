import React from "react";
import bg from "../assets/22- login imgs/MembershipBackground.webp";
import logo from "../assets/22- login imgs/Elearna.svg";

export default function Login() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-6 pb-56"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <img
          src={logo}
          alt="Elearna Logo"
          className="w-36 md:w-40 cursor-pointer"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-md">
        {/* Heading (Outside Form) */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">Log In</h1>

          <p className="text-lg text-gray-300 leading-relaxed max-w-sm mx-auto">
            More than{" "}
            <span className="font-semibold text-white">50k students</span> have
            joined Elearna already.
          </p>
        </div>

        {/* Login Form */}
        <div className="rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-8">
          {/* Email */}
          <div className="mb-5">
            <label className="block text-white mb-2">Email address</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-14 rounded-xl bg-white/10 border border-white/20 px-4 text-white placeholder:text-gray-400 outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-white mb-2">Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-14 rounded-xl bg-white/10 border border-white/20 px-4 text-white placeholder:text-gray-400 outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Login Button */}
          <button className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold text-lg">
            Log In
          </button>

          {/* Signup */}
          <p className="text-center text-gray-300 mt-6">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Content (Outside Form) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full px-6">
        <div className="flex flex-col items-center text-center">
          {/* Test Login */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Test login
            </h3>

            <p className="text-gray-300">
              <span className="text-white font-medium">Test user:</span>{" "}
              elearnatest@gmail.com
            </p>

            <p className="text-gray-300">
              <span className="text-white font-medium">Password:</span>{" "}
              Elearna1234
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mb-5">
            <a href="#" className="hover:text-white transition">
              Style guide
            </a>

            <a href="#" className="hover:text-white transition">
              Password protected
            </a>

            <a href="#" className="hover:text-white transition">
              404
            </a>

            <a href="#" className="hover:text-white transition">
              License
            </a>
          </div>

          {/* Credits */}
          <p className="text-sm text-gray-400">
            Design by{" "}
            <span className="text-white font-medium">Radiant Templates</span>
          </p>

          <p className="text-sm text-gray-400 mt-1">
            Powered by <span className="text-white font-medium">Webflow</span>
          </p>
        </div>
      </div>
    </section>
  );
}
