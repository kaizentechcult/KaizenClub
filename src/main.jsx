import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);
