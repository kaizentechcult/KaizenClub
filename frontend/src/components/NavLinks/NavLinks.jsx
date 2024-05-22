import React from "react";
import NavLink from "../NavLink/NavLink";
import NavBtn from "../NavBtn/NavBtn";

const NavLinks = () => {
  return (
    <ul className="flex gap-20 m-5 absolute right-2 text-2xl text-[#5d5dff] ">
      <NavLink text="Home" />
      <NavLink text="Members" />
      <NavLink text="Projects" />
      <NavLink text="Join Us" />
      <NavBtn text="Log In" />
      <NavBtn text="Sign In" />
    </ul>
  );
};

export default NavLinks;
