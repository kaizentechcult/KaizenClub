"use client";
import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

interface NavLink {
  label: string;
  to: string;
}
const navlinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Team", to: "/team" },
  { label: "Events", to: "/events" },
  // { label: "Join Us", to: "https://forms.gle/dAGYv4SLC5wkFvxq9" },
];

const Navbar = () => {
  return (
    <>
      <div className="z-50 w-full bg-[#1F2937] text-white flex md:flex-row flex-col justify-between md:px-64 px-4 h-[3.5rem] items-center navbar absolute top-0">
        <div className="flex justify-between w-full mt-4 md:mt-0">
          <div className="logo">
            <Link href="/">
              <img src="LogoK.svg" alt="logo" className="h-6" />
            </Link>
          </div>
          {/* 
          <button className="md:hidden" onClick={handleClick}>
            ≣
          </button> */}
        </div>
        <div className="navlinks hidden flex-col md:flex md:flex-row md:gap-10 md:p-4 w-full md:w-auto">
          {navlinks.map((link: any, index: number) => (
            <NavLinks
              text={link.label}
              className="mb-3 md:mb-0"
              key={index}
              to={link.to}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
