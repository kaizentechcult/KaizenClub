import axios from "axios";
import "./index.css";
import SignIn from "./pages/SignUp/SignIn.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import React, { Suspense, useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

const isAuthenticated = () => {
  // This function should return true if the user is authenticated, otherwise false
  // For example, check if a token exists in localStorage
  return !!localStorage.getItem("token");
};

// Protected Route component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? (
    element
  ) : (
    <Navigate to="/kaizen-portfolio/login" />
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/kaizen-portfolio/" element={<Home />} />
        <Route path="/kaizen-portfolio/signup" element={<SignIn />} />
        <Route path="/kaizen-portfolio/login" element={<LogIn />} />
        <Route
          path="/kaizen-portfolio/protected"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route path="*" element={<Navigate to="/kaizen-portfolio/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
