import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Slide from "../../components/Slider/slider";

const NavLink = ({ text, toLink }) => {
  return (
    <li>
      {" "}
      <Slide>
        <Link
          to={toLink}
          className="hover:text-white hover:bg-gray-600 p-3 rounded-full duration-500 "
        >
          {text}
        </Link>{" "}
      </Slide>
    </li>
  );
};
NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  toLink: PropTypes.string,
};

export default NavLink;
