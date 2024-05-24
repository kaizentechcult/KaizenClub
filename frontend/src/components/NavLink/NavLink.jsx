import PropTypes from "prop-types";

const NavLink = ({ text }) => {
  return (
    <li>
      <a href="#" className="hover:text-white text-2xl">
        {text}
      </a>
    </li>
  );
};
NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  // toLink: PropTypes.string.isRequired,
};

export default NavLink;
