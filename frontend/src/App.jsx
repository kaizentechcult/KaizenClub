import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import SignIn from "./pages/SignUp/SignUp.jsx";
import Home from "./pages/Home/Home";
import Members from "./pages/Members/Members.jsx";
import Projects from "./components/Projects/Projects.jsx";
import JoinUs from "./pages/JoinUs/JoinUs.jsx";
// import { Navigate } from "react-router-dom";
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "./firebase/config.jsx";
// import LogIn from "./pages/LogIn/LogIn.jsx"; // Ensure correct paths
// import SignIn from "./pages/SignUp/SignUp.jsx";
// import Home from "./pages/Home/Home";
// import Members from "./pages/Members/Members.jsx";
// import Projects from "./components/Projects/Projects.jsx";
// import JoinUs from "./pages/JoinUs/JoinUs.jsx";

const App = () => {
  const [user] = useAuthState(auth);


  const handleLoginRedirect = async() => {
    return user ? "/kaizen-portfolio/home" : "/kaizen-portfolio/login"; // Redirect to appropriate route
  };

  return (
    <Router>
      <Routes>
        <Route path="/kaizen-portfolio/" element={<LogIn />} />
        <Route path="/kaizen-portfolio/signup" element={<SignIn />} />
        <Route path="/kaizen-portfolio/home" element={<Home />} />
        <Route path="/kaizen-portfolio/members" element={<Members />} />
        <Route path="/kaizen-portfolio/projects" element={<Projects />} />
        <Route path="/kaizen-portfolio/join-us" element={<JoinUs />} />
        {/* Optional redirect route for login */}

              </Routes>
    </Router>
  );
};

export default App;
