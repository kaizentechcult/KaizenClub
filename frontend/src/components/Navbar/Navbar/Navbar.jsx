import React from "react";
import NavLinks from "../../NavLinks/NavLinks";

const Navbar = () => {
  return (
    <div className="navbar flex mb-4">
      <div className="logo">
        <img
          src="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/437762641_1607660733317776_5873685063825134871_n.jpg?ccb=11-4&oh=01_Q5AaIFtngZ_CMpuOC6Q3x8X7LX5A-HQaIZt-_jX3CHgrI_Rb&oe=6659BD75&_nc_sid=e6ed6c&_nc_cat=107"
          alt="logo"
          className="h-10 rounded-full m-4"
        />
      </div>
      <NavLinks />
    </div>
  );
};

export default Navbar;
