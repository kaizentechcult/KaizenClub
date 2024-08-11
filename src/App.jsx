import "./index.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="h-12"></div>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
