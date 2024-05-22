import React from "react";

const NavLink = ({ text, link }) => {
  return (
    <li>
      <a href={link} className="hover:text-white text-2xl">
        {text}
      </a>
    </li>
  );
};

export default NavLink;
