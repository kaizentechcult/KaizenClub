import React from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../../components/Loader/Loader";
import { Navigate } from "react-router-dom";
const Home = () => {
  const [user] = useAuthState(auth);
  if (!user) {
    <Navigate to={"/KaizenClub/login"} />;
  }
  return (
    <div className="flex flex-col justify-center items-center">
      {!user ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
        </>
      )}
    </div>
  );
};

export default Home;
