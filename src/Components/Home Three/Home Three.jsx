import React from "react";
import Hero from "./Hero";
import Cate from "./Cate";
import Potential from "./Potential";
import Course from "./Course";
import Learing from "./Learing";
import Form from "./Form";
import Offer from "./Offer";
import Test from "../About One/Test";
import Why from "./Why";
import Footer from "../Pricing One/Footer";
export default function Home() {
  return (
    <div>
      <Hero />
      <Cate />
      <Potential />
      <Course />
      <Learing />
      <Form />
      <Offer />
      <Test />
      <Why />
      <Footer />
    </div>
  );
}
