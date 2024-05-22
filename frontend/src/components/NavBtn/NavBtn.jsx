import React from "react";

const NavBtn = ({ text }) => {
  return (
    <li>
      <button className=" transition duration-500 rounded-md p-1 hover:text-[#5d5dff] hover:bg-white text-white text-xl">
        {text}
      </button>
    </li>
  );
};

export default NavBtn;
