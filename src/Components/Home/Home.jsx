import React from "react";
import Hero from "./Hero";
import Properties from "./Properties";
import Benefits from "./Benefits";
import Explore from "./Explore";
import Process from "./Process";
import Latest from "./Latest";
import Clients from "./Clients";
import Insights from "./Insights";
export default function Home() {
  return (
    <div>
      <Hero />
      <Properties />
      <Benefits />
      <Explore />
      <Process />
      <Latest />
      <Clients />
      <Insights />
    </div>
  );
}
