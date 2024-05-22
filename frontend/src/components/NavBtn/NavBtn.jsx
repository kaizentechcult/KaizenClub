import React from "react";

const NavBtn = ({ text }) => {
  return (
    <li>
      <button className=" transition duration-500 border-2 border-[#5d5dff] rounded-md p-1 hover:bg-[#5d5dff] text-white text-xl">
        {text}
      </button>
    </li>
  );
};

export default NavBtn;
