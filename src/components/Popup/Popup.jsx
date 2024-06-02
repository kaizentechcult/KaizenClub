import React from "react";

const Popup = ({ isVisible, message }) => {
  return (
    <div
      className={`popup ${isVisible ? "show" : ""}`} // Toggle visibility based on isVisible state
    >
      <p>{message}</p> {/* Display the message passed as a prop */}
      <button onClick={() => setIsVisible(false)}>Close</button>{" "}
      {/* Close button */}
    </div>
  );
};

export default Popup;
