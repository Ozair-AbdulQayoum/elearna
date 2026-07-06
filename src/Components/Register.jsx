import React from "react";
import bg from "../assets/22- login imgs/MembershipBackground.webp";
import logo from "../assets/22- login imgs/Elearna.svg";

export default function Register() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-6 pb-40"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <img src={logo} alt="Elearna" className="w-36 md:w-40 cursor-pointer" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-md">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">Sign Up</h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            More than{" "}
            <span className="font-semibold text-white">50k students</span> join
            with us!
          </p>
        </div>

        {/* Register Form */}
        <div className="rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-8">
          {/* Name */}
          <div className="mb-5">
            <label className="block text-white mb-2">Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full h-14 rounded-xl bg-white/10 border border-white/20 px-4 text-white placeholder:text-gray-400 outline-none focus:border-blue-500 transition"
            />
          </div>

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

          {/* Privacy */}
          <div className="flex items-start gap-3 mb-4">
            <input type="checkbox" className="mt-1 accent-blue-600" />

            <label className="text-sm text-gray-300 leading-relaxed">
              By creating an account, I agree to this website's{" "}
              <a href="#" className="text-blue-400 hover:underline">
                privacy policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-400 hover:underline">
                terms of service
              </a>
              .
            </label>
          </div>

          {/* Marketing */}
          <div className="flex items-start gap-3 mb-8">
            <input type="checkbox" className="mt-1 accent-blue-600" />

            <label className="text-sm text-gray-300">
              I consent to receive marketing emails.
            </label>
          </div>

          {/* Button */}
          <button className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold text-lg">
            Create Account
          </button>

          {/* Login */}
          <p className="text-center text-gray-300 mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              Log In
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-center w-full px-6">
        <div className="flex justify-center gap-6 flex-wrap text-sm text-gray-300 mb-4">
          <a href="#" className="hover:text-white transition">
            404 Error
          </a>

          <a href="#" className="hover:text-white transition">
            License
          </a>
        </div>

        <p className="text-sm text-gray-400">
          Design by{" "}
          <span className="text-white font-medium">Radiant Templates</span>
        </p>

        <p className="text-sm text-gray-400 mt-1">
          Powered by <span className="text-white font-medium">Webflow</span>
        </p>
      </div>
    </section>
  );
}
