import React from "react";
import Hero from "./Hero";
import Client from "./Client";
import Cate from "./Cate";
import Course from "./course";
import Offer from "./Offer";
import Test from "./Test";
import Programs from "./Programs";
import Footer from "./Footer";
export default function Home() {
  return (
    <div>
      <Hero />
      <Client />
      <Cate />
      <Course />
      <Offer />
      <Test />
      <Programs />
      <Footer />
    </div>
  );
}
