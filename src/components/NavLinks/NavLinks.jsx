  import NavLink from "../NavLink/NavLink";
  import { useHref } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="flex text-xl max-md:text-[1rem]  gap-8 justify-evenly items-center sticky ml-4">
      <NavLink text="Home" toLink={"#home"} />
      <NavLink text="Members" useHref="#members" />
      <NavLink text="Projects" toLink="#projects" />
      <NavLink text="Join Us" toLink={"#join-us"} />
    </ul>
  );
};

export default NavLinks;
