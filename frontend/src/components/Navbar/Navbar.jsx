import NavLinks from "../NavLinks/NavLinks";

const Navbar = () => {
  return (
    <div className="navbar flex mb-4 invisible lg:visible">
      <div className="logo">
        <img src="Logo.jpeg" alt="logo" className="h-[5rem] m-2" />
      </div>
      <NavLinks />
    </div>
  );
};

export default Navbar;
