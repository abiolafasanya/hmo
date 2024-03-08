import React from "react";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      
      <Hero />
      <OurServices />
      <AboutUs />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
