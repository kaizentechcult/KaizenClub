import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Members from "./pages/Members/Members.jsx";
import Projects from "./components/Projects/Projects.jsx";
import JoinUs from "./pages/JoinUs/JoinUs.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/KaizenClub"
          element={
            <>
              <Home />
              <Members />
              <Projects />
              <JoinUs />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
