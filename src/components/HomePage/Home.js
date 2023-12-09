import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home;
