import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Slide from "../../components/Slider/slider";

const NavLink = ({ text, toLink }) => {
  return (
    <li>
      {" "}
        <Link
          to={toLink}
          className="hover:text-white   duration-500 "
        >
          {text}
        </Link>{" "}
    </li>
  );
};
NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  toLink: PropTypes.string,
};

export default NavLink;
