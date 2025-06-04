import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import BackgroundEffects from "../components/BackgroundEffects";

const Home = () => {
  return (
    <div>
      <BackgroundEffects />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
