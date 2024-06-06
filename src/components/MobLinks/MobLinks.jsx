import NavLink from "../NavLink/NavLink";
import NavBtn from "../NavBtn/NavBtn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const MobLinks = () => {
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
    <ul className="flex text-xl max-md:text-[1rem]  gap-0 justify-evenly items-center flex-col absolute bg-[#000000] h-[100vh] w-[100%] z-10 text-white left-0 top-0 p-0 m-0">
      <NavLink text="Home" toLink={"/KaizenClub/home"} />
      <NavLink text="Members" toLink="/KaizenClub/members" />
      <NavLink text="Projects" toLink="/KaizenClub/projects" />
      <NavLink text="Join Us" toLink={"/KaizenClub/join-us"} />
      <NavLink text="Profile" toLink={"/KaizenClub/Profile"} />
      <NavBtn text="Log Out" handleFunc={handleLogout} />
    </ul>
  );
};

export default MobLinks;
