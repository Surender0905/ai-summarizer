import React from "react";
import Hero from "../components/Hero";

import Demo from "../components/Demo";

const Home = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default Home;
