import "./index.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import SignIn from "./pages/SignUp/SignUp.jsx";
import Home from "./pages/Home/Home";
import Members from "./pages/Members/Members.jsx";
import Projects from "./components/Projects/Projects.jsx";
import JoinUs from "./pages/JoinUs/JoinUs.jsx";
import Loader from "./components/Loader/Loader.jsx";

const App = () => {
  const [loading, user] = useAuthState(auth);

  return (
    <Router>
      <Routes>
        <Route
          path="/KaizenClub/"
          element={
            user ? <Navigate to="/KaizenClub/home" replace /> : <LogIn />
          }
        />
        <Route path="/KaizenClub/signup" element={<SignIn />} />
        <Route path="/KaizenClub/home" element={<Home />} />
        <Route path="/KaizenClub/members" element={<Members />} />
        <Route path="/KaizenClub/projects" element={<Projects />} />
        <Route path="/KaizenClub/join-us" element={<JoinUs />} />
        <Route path="*" element={<Navigate to="/KaizenClub" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
