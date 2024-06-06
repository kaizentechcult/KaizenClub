import PropTypes from "prop-types";
import Slide from "../../components/Slider/slider";

const NavBtn = ({ text, handleFunc }) => {
  return (
      <li>
        <button
          type="submit"
          onClick={handleFunc}
          className=" transition duration-500 rounded-full p-1 h-12 hover:text-[#5d5dff] hover:bg-white text-white"
        >
          {text}
        </button>
      </li>
  );
};
NavBtn.propTypes = {
  text: PropTypes.string,
  handleFunc: PropTypes.func,
};

export default NavBtn;
