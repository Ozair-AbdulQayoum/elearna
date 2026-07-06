import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Components/Navbar";

import Home from "./Components/Home One/Home One";
import HomeTwo from "./Components/Home Two/Home Two";
import HomeThree from "./Components/Home Three/Home Three";

import About from "./Components/About One/About One";
import AboutTwo from "./Components/About Two/About Two";

import Course from "./Components/Course One/Course One";
import CourseTwo from "./Components/Course Two/Course Two";
import CourseThree from "./Components/Course Three/Course Three";

import Faq from "./Components/Faq/Faq";

import Pricing from "./Components/Pricing One/Pricing One";
import PricingTwo from "./Components/Pricing Two/Pricing Two";
import PricingThree from "./Components/Pricing Three/Pricing Three";

import Career from "./Components/Career/Career";
import Event from "./Components/Event/Event";
import Team from "./Components/Team/Team";

import Blog from "./Components/Blog One/Blog One";
import BlogTwo from "./Components/Blog Two/Blog Two";
import BlogThree from "./Components/Blog Three/Blog Three";

import Contact from "./Components/Contact One/Contact One";
import ContactTwo from "./Components/Contact Two/Contact Two";
import ContactThree from "./Components/Contact Three/Contact Three";

import Login from "./Components/Login";
import Register from "./Components/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-one" element={<Home />} />
        <Route path="/home-two" element={<HomeTwo />} />
        <Route path="/home-three" element={<HomeThree />} />

        <Route path="/about-one" element={<About />} />
        <Route path="/about-two" element={<AboutTwo />} />

        <Route path="/course-one" element={<Course />} />
        <Route path="/course-two" element={<CourseTwo />} />
        <Route path="/course-three" element={<CourseThree />} />

        <Route path="/faq" element={<Faq />} />

        <Route path="/pricing-one" element={<Pricing />} />
        <Route path="/pricing-two" element={<PricingTwo />} />
        <Route path="/pricing-three" element={<PricingThree />} />

        <Route path="/career" element={<Career />} />
        <Route path="/event" element={<Event />} />
        <Route path="/team" element={<Team />} />

        <Route path="/blog-one" element={<Blog />} />
        <Route path="/blog-two" element={<BlogTwo />} />
        <Route path="/blog-three" element={<BlogThree />} />

        <Route path="/contact-one" element={<Contact />} />
        <Route path="/contact-two" element={<ContactTwo />} />
        <Route path="/contact-three" element={<ContactThree />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
