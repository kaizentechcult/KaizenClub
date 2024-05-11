import React, { useState, useEffect } from "react";
import "./App.css";
import Preloader from "./components/preloader/Preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Initially show the preloader

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false); // Hide the preloader after 3 seconds
    }, 4000);

    return () => clearTimeout(timeoutId); // Cleanup function to prevent memory leaks
  }, []);

  return (
    <>
      {isLoading && <Preloader />}  {/* Conditionally render the preloader */}
      <h1>hello</h1>
    </>
  );
};

export default App;
