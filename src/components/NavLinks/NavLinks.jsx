import NavLink from "../NavLink/NavLink";
import NavBtn from "../NavBtn/NavBtn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const NavLinks = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/KaizenClub/");
      console.log("Logout successful!");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return (
    <ul className="flex text-xl max-md:text-[1rem]  gap-8 justify-evenly items-center sticky ml-4">
      <NavLink text="Home" toLink={"/KaizenClub/home"} />
      <NavLink text="Members" toLink="/KaizenClub/members" />
      <NavLink text="Projects" toLink="/KaizenClub/projects" />
      <NavLink text="Join Us" toLink={"/KaizenClub/join-us"} />
      <NavBtn text="Log Out" handleFunc={handleLogout} />
    </ul>
  );
};

export default NavLinks;
