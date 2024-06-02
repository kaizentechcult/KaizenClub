import MobLinks from "../MobLinks/MobLinks";
import NavLinks from "../NavLinks/NavLinks";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const handleMenu = () => {
    document.querySelector(".MobMenu").classList.toggle("hidden");
  };
  const handleClose = () => {
    document.querySelector(".close").style.display = "none";
  };
  return (
    <>
      <div className="bg-[#242d5e9c] h-14 mt-8 p-2 flex justify-center items-center rounded-full sticky max-md:hidden">
        <NavLinks />
      </div>
      <div className="NavMenu min-md:hidden w-[90%] m-4">
        <button onClick={handleMenu} className="z-13">
          <MenuIcon />
        </button>
        <div className="MobMenu hidden">
          <div className="close">
            <button onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>
          <MobLinks />
        </div>
      </div>
    </>
  );
};

export default Navbar;

// max-md:m-0 max-md:rounded-none max-md:text-[0.5rem] max-md:w-[100%] max-md:justify-evenly max-md:flex-col
