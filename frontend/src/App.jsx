import axios from "axios";
import "./index.css";
import SignIn from "./pages/SignUp/SignIn.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import React, { Suspense, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config.js";
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <Routes>
        <Route path="/kaizen-portfolio/" element={<Home />} />
        if (user) {<Route path="/kaizen-portfolio/home" element={<Home />} />}
        <Route path="/kaizen-portfolio/signup" element={<SignIn />} />
        <Route path="/kaizen-portfolio/login" element={<LogIn />} />
        <Route path="*" element={<Navigate to="/kaizen-portfolio/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
