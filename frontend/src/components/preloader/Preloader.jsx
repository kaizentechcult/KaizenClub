import React, { useEffect } from "react";
import "./Preloader.css";

const Preloader = () => {
  //   useEffect(() => {
  //     preloaderAnim();
  //   });
  return (
    <div className="preloader">
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="text">Loading...</div>
      </div>
    </div>
  );
};

export default Preloader;
