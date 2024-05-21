import React from "react";
import Navbar from "./components/Navbar/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";
import Members from "./pages/Members/Members";
import Projects from "./pages/Projects/Projects";
import Join_us from "./pages/Joinus/Joinus";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Members />
      <Projects />
      <Join_us />
    </>
  );
};

export default App;
