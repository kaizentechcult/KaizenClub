import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Team from "./pages/Team/Team.jsx";

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
                <Footer />
              </>
            }
          />
          <Route path="/KaizenClub/Team" element={<Team />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
