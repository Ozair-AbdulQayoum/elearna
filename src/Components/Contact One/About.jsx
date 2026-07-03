import React from "react";
import Signature from "../../assets/10- Contact One imgs/Signature.svg";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Content Wrapper */}
        <div className="max-w-2xl text-left">
          {/* Subtitle */}
          <h4 className="text-blue-600 font-semibold mb-3">Contact Us</h4>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Are you interested in online learning? <br />
            Contact us
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8">
            We are here to help you start your learning journey. Reach out to us
            for support, guidance, or more information about our online courses
            and programs.
          </p>

          {/* Signature Section */}
          <div className="flex items-center gap-4 mt-10">
            <img src={Signature} alt="Signature" className="h-10 w-auto" />

            <div>
              <h4 className="font-bold text-lg">Brayden Backham</h4>
              <p className="text-gray-500 text-sm">Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
