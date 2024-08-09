import React from "react";

const navliks = [
  ["Home", "/KaizenClub/"],
  ["Members", "/KaizenClub/team"],
  ["Projects", "/projects"],
  // ["Join Us", "https://forms.gle/dAGYv4SLC5wkFvxq9"],
];

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-[#1F2937] text-white flex justify-between px-64">
        <div className="logo"></div>
        <div className="navliks flex gap-10 p-4">
          {navliks.map((link) => (
            <a key={link} href={link[1]}>
              {link[0]}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
