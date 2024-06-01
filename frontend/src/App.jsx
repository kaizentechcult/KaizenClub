// import axios from "axios";
import "./index.css";
import SignIn from "./pages/SignUp/SignIn.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import React, { Suspense, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config.jsx";
import Home from "./pages/Home/Home";
import JoinUs from "./pages/JoinUs/JoinUs.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Members from "./pages/Members/Members.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
{
  /* <Route path="/kaizen-portfolio/projects" element={<Projects />} /> */
}
{
}
{
  /* if (user) {<Route path="/kaizen-portfolio/home" element={<Home />} />} */
}
const App = () => {
  const [user] = useAuthState(auth);
  // const variable =
  // console.log(variable);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/kaizen-portfolio/home" element={<Home />} />
        <Route path="/kaizen-portfolio/members" element={<Members />} />
        <Route path="/kaizen-portfolio/projects" element={<Projects />} />
        <Route path="/kaizen-portfolio/join-us" element={<JoinUs />} />
        <Route path="/kaizen-portfolio/signup" element={<SignIn />} />
        <Route path="/kaizen-portfolio/login" element={<LogIn />} />
        <Route path="*" element={<Navigate to="/kaizen-portfolio/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
