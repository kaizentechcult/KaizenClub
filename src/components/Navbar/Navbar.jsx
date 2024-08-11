import React from "react";
import { NavLink } from "react-router-dom";
const navliks = [
  ["Home", "/KaizenClub/"],
  ["Team", "/KaizenClub/team"],
  ["Events", "/KaizenClub/events"],
  // ["Join Us", "https://forms.gle/dAGYv4SLC5wkFvxq9"],
];

const handleClick = () => {
  const navbar = document.querySelector(".navbar");
  const navlinks = document.querySelector(".navlinks");
  navbar.classList.toggle("h-[10rem]");
  navlinks.classList.toggle("hidden");
  navlinks.classList.toggle("flex");
};

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-[#1F2937] text-white flex md:flex-row flex-col justify-between md:px-64 px-4 h-[3.5rem] items-center navbar absolute top-0">
        <div className="flex justify-between w-full mt-4 md:mt-0">
          <div className="logo">
            <NavLink to="/KaizenClub/">
              <img src="LogoK.svg" alt="logo" className="h-6" />
            </NavLink>
          </div>

          <button className="md:hidden" onClick={handleClick}>
            ≣
          </button>
        </div>
        <div className="navlinks hidden flex-col md:flex md:flex-row md:gap-10 md:p-4 w-full md:w-auto">
          {navliks.map((link) => (
            <NavLink className="mb-3 md:mb-0" key={link} to={link[1]}>
              {link[0]}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
