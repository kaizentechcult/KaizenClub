import NavLinks from "../NavLinks/NavLinks";

const Navbar = () => {
  return (
      <div className="bg-[#242d5e9c] h-14 mt-8 p-2 flex justify-center items-center rounded-full sticky">
        <NavLinks />
      </div>
  );
};

export default Navbar;
