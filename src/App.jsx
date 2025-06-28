import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
