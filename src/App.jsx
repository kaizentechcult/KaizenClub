import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/KaizenClub"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
