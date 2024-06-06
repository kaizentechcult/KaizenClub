import React from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to="/KaizenClub/" replace />;
  }
  return (
    <>
      <Navbar />
      <div className="md:pt-12 ">
        <Hero />
      </div>
    </>
  );
};

export default Home;
