import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="logo"></div>
      <ul className="flex gap-20 m-5 absolute right-2 text-2xl">
        <li>Home</li>
        <li>Members</li>
        <li>Projects</li>
        <li>Join Us</li>
      </ul>
    </>
  );
};

export default Navbar;
