import React from "react";
import Navbar from "./components/Navbar/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div
        class="b1"
        className="h-80 w-80 bg-blue-400 rounded-full blur-[200px] mx-120"
      ></div>
      <div
        class="b2"
        className="h-80 w-80 bg-blue-600 rounded-full blur-[150px] "
      ></div>
    </>
  );
};

export default App;
