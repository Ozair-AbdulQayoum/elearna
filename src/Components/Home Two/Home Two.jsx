import React from "react";
import Hero from "./Hero";
import Cate from "./Cate";
import Potential from "./Potential";
import Courses from "./Courses";
import Why from "./Why";
import Offers from "./Offers";
import Test from "../About One/Test";
import Blog from "./Blog";
import Footer from "../Pricing One/Footer";
export default function Home() {
  return (
    <div>
      <Hero />
      <Cate />
      <Potential />
      <Courses />
      <Why />
      <Offers />
      <Test />
      <Blog />
      <Footer />
    </div>
  );
}
