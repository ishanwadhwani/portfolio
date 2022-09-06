import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import About from "./components/About"
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact"
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <SocialLinks />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
