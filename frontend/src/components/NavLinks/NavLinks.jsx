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
      navigate("/kaizen-portfolio/home"); // Redirect to home page after logout
    } catch (err) {
      console.error("Error signing out:", err);
      // Handle logout error (optional: display a message to the user)
    }
  };
  return (
    <ul className="flex text-xl gap-3 justify-center items-center sticky">
      <NavLink text="Home" toLink={"/kaizen-portfolio/home"} />
      <NavLink text="Members" toLink="/kaizen-portfolio/members" />
      <NavLink text="Projects" toLink="/kaizen-portfolio/projects" />
      <NavLink text="Join Us" toLink={"/kaizen-portfolio/join-us"} />
      {user ? (
        <NavBtn text="Log Out" onClick={handleLogout} />
      ) : (
        <>
          <NavBtn text="Log In" toLink="/login" />
          <NavBtn text="Sign Up" toLink="signup" />
        </>
      )}
    </ul>
  );
};

export default NavLinks;
