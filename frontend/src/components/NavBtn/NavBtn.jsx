import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Slide from "../../components/Slider/slider";

const NavBtn = ({ text, toLink }) => {
  return (
    <Slide>
      <li>
        <button className=" transition duration-500 rounded-md p-1 hover:text-[#5d5dff] hover:bg-white text-white text-xl">
          <Link to={toLink}>{text}</Link>
        </button>
      </li>
    </Slide>
  );
};
NavBtn.propTypes = {
  text: PropTypes.string,
  toLink: PropTypes.string,
};

export default NavBtn;
