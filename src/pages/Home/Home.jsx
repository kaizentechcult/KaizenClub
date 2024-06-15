import React from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="home" className="md:pt-12">
        <Hero />
      </div>
    </>
  );
};

export default Home;
