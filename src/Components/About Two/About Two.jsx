import React from "react";
import Hero from "./Hero";
import Info from "./Info";
import Philosophy from "./Philosophy";
import Potential from "../Home Two/Potential";
import Client from "../Home One/Client";
import Vission from "./Vission";
import Instructor from "./Instructor";
import Blog from "../Home Two/Blog";
import Footer from "../Pricing One/Footer";
export default function About() {
  return (
    <div>
      <Hero />
      <Info />
      <Philosophy />
      <Potential />
      <Client />
      <Vission />
      <Instructor />
      <Blog />
      <Footer />
    </div>
  );
}
