import NavLink from "../NavLink/NavLink";
import NavBtn from "../NavBtn/NavBtn";

const NavLinks = () => {
  return (
    <ul className="flex gap-20 m-5 absolute right-2 text-2xl text-[#2f8fc6] ">
      <NavLink text="Home" />
      <NavLink text="Members" toLink="#Members" />
      <NavLink text="Projects" />
      <NavLink text="Join Us" />
      <NavBtn text="Log Out" toLink="/logout" />
      <NavBtn text="Log In" toLink="/login" />
      <NavBtn text="Sign Up" toLink="signup" />
    </ul>
  );
};

export default NavLinks;
