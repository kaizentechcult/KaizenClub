import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer.jsx";
import Team from "./pages/Team/Team.jsx";
import { useEffect } from "react";

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
