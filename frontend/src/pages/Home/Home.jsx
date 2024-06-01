import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Members from "../Members/Members";
import Navbar from "../../components/Navbar/Navbar";
import JoinUs from "../JoinUs/JoinUs";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth); // Include loading state

  // Conditional rendering based on authentication status
  return (
    <>
      <Navbar />
      <Hero />
      <Members />
      <JoinUs />
      <Projects />
    </>
  );
};

export default Home;
