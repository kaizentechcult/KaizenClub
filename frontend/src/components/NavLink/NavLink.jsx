import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavLink = ({ text, toLink }) => {
  return (
    <li>
      <Link to={toLink}>{text}</Link>

    </li>
  );
};
NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  toLink: PropTypes.string.isRequired,
};

export default NavLink;
