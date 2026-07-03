import React from "react";
import Hero from "./Hero";
import Why from "./Why";
import Offer from "./Offer";
import Client from "../Home One/Client";
import Instructor from "./Instructor";
import Test from "./Test";
import CTA from "./CTA";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <Hero />
      <Why />
      <Offer />
      <Client />
      <Instructor />
      <Test />
      <CTA />
      <Footer />
    </div>
  );
}
