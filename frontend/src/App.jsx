import React, { Suspense, useEffect, useState } from "react";
import SignIn from "./pages/SignUp/SignUp.jsx";
import "./index.css";
import LogIn from "./pages/LogIn/LogIn.jsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config.jsx";
import Home from "./pages/Home/Home";
import { useNavigate } from "react-router-dom";
import JoinUs from "./pages/JoinUs/JoinUs.jsx";
import Members from "./pages/Members/Members.jsx";
import Projects from "./components/Projects/Projects.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <Suspense>
      <Router>
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
    </Suspense>
  );
};

export default App;
