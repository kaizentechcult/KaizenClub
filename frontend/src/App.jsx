import axios from "axios";
import "./index.css";
import SignIn from "./pages/SignUp/SignIn.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import Verification from "./pages/Verification/Verification.jsx";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  const [data, setData] = useState(null);
  const getData = async () => {
    const response = await axios.get("http://localhost:5000/getData");
    setData(response.data.message);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kaizen-portfolio/" element={<Home />} />
        <Route path="/kaizen-portfolio/signin" element={<SignIn />} />
        <Route path="/kaizen-portfolio/login" element={<LogIn />} />
        <Route
          path="/kaizen-portfolio/verification"
          element={<Verification />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
