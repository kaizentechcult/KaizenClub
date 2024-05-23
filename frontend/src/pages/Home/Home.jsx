import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Members from "../../components/Members/Members";
import Heading from "../../components/Heading/Heading";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Members />
      <Heading text={"Projects"} />
      <Projects />
    </>
  );
};

export default Home;
