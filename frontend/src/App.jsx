import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import SignIn from "./pages/SignUp/SignUp.jsx";
import Home from "./pages/Home/Home";
import Members from "./pages/Members/Members.jsx";
import Projects from "./components/Projects/Projects.jsx";
import JoinUs from "./pages/JoinUs/JoinUs.jsx";

const App = () => {
  const [user] = useAuthState(auth);
  // console.log(user.email)
  return (
      <Router>
        <Routes>
          <Route path="/kaizen-portfolio/home" element={<Home />} />
          <Route path="/kaizen-portfolio/members" element={<Members />} />
          <Route path="/kaizen-portfolio/projects" element={<Projects />} />
          <Route path="/kaizen-portfolio/join-us" element={<JoinUs />} />
          <Route path="/kaizen-portfolio/signup" element={<SignIn />} />
          <Route path="/kaizen-portfolio/login" element={<LogIn />} />
        </Routes>
      </Router>
  );
};

export default App;
