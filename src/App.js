import React from "react";
import { Brand, CTA, Navbar } from "./components";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatSani0,
  Hero,
} from "./containers";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <div className="gradient_bg">
        <Navbar />
        <Hero />
      </div>
      <Brand />
      <WhatSani0 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
