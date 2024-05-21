import React from "react";

const Navbar = () => {
  return (
    <div className="navbar flex">
      <div className="logo">
        <img
          src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png"
          alt="logo"
          className="h-10 rounded-full m-4"
        />
      </div>
      <ul className="flex gap-20 m-5 absolute right-2 text-2xl text-[#5d5dff] ">
        <li>
          <a href="#" className="hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Members
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Join Us
          </a>
        </li>
        <li>
          <button className="border-2 border-[#5d5dff] rounded-md p-1 hover:bg-[#5d5dff] text-white">
            Log In
          </button>
        </li>
        <li>
          <button className="border-2 border-[#5d5dff] rounded-md p-1 hover:bg-[#5d5dff] text-white">
            Sign In
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
