import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      // Redirect to login if not authenticated
      navigate("/kaizen-portfolio/login");
    }
  }, [user]); // Dependency array to trigger effect on user state change

  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
