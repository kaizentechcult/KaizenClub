import React from "react";
import Navbar from "./components/Navbar/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";
import Members from "./pages/Members/Members";
import Projects from "./pages/Projects/Projects";
import Join_us from "./pages/Joinus/Joinus";
import Heading from "./components/Heading/Heading";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Members />
      <Heading text={"Projects"} />
      <Projects />
      <Heading text={"Join Us"} />
      <Join_us />
    </>
  );
};

export default App;
