import React from "react";
import LandingNav from "../components/Navbar/LandingNav";
import Hero from "../components/Hero";
import Animals from "../components/Animal/Animals";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <LandingNav />
      <Hero />
      <Animals />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
