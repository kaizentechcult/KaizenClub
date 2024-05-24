import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBtn = ({ text, toLink }) => {
  return (
    <li>
      <button className=" transition duration-500 rounded-md p-1 hover:text-[#5d5dff] hover:bg-white text-white text-xl">
        <Link to={toLink}>{text}</Link>
      </button>
    </li>
  );
};
NavBtn.propTypes = {
  text: PropTypes.string.isRequired,
  toLink: PropTypes.string.isRequired,
};

export default NavBtn;
