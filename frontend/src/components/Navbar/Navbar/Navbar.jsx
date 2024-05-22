import React from "react";
import NavLinks from "../../NavLinks/NavLinks";

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
      <NavLinks />
    </div>
  );
};

export default Navbar;
