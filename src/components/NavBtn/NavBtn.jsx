import PropTypes from "prop-types";
import Slide from "../../components/Slider/slider";

const NavBtn = ({ text, handleFunc }) => {
  return (
    <Slide>
      <li>
        <button
          type="submit"
          onClick={handleFunc}
          className=" transition duration-500 rounded-md p-1 hover:text-[#5d5dff] hover:bg-white text-white"
        >
          {text}
        </button>
      </li>
    </Slide>
  );
};
NavBtn.propTypes = {
  text: PropTypes.string,
  handleFunc: PropTypes.func,
};

export default NavBtn;
