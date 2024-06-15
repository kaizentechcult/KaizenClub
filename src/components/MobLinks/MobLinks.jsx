import NavLink from "../NavLink/NavLink";

const MobLinks = () => {
  return (
    <ul className="flex text-xl max-md:text-[1rem]  gap-0 justify-evenly items-center flex-col absolute bg-[#000000] h-[100vh] w-[100%] z-10 text-white left-0 top-0 p-0 m-0">
      <NavLink text="Home" toLink={"#home"} />
      <NavLink text="Members" toLink="#members" />
      <NavLink text="Projects" toLink="#projects" />
      <NavLink text="Join Us" toLink={"#join-us"} />
      <NavLink text="Profile" toLink={"#Profile"} />
    </ul>
  );
};

export default MobLinks;
