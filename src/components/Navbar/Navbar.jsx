import MobLinks from "../MobLinks/MobLinks";
import NavLinks from "../NavLinks/NavLinks";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleMenu = () => {
    document.querySelector(".MobMenu").classList.toggle("hidden");
  };

  const handleClose = () => {
    document.querySelector(".close").style.display = "none";
  };

  return (
    <>
      <div className="bg-[#1e1f42c3] backdrop-blur-[10px] gap-4 p-4 fixed h-16 items-center w-full z-50 hidden md:flex">
        {" "}
        <button onClick={() => <Link to="KaizenClub/home" />}>
          <img
            className="w-10 h-10 bg-white p-1  rounded-full"
            src={"Logo2.svg"}
          />
        </button>
        <NavLinks />
      </div>
      <div className="p-4">
        <div className="NavMenu md:hidden  w-full h-12 bg-white rounded-xl flex  justify-center items-center">
          <button onClick={handleMenu} className="z-13">
            <MenuIcon />
          </button>
          <div className="MobMenu hidden">
            <div className="close ">
              <button onClick={handleClose}>
                <CloseIcon />
              </button>
            </div>
            <MobLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
