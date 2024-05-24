import PropTypes from "prop-types";

const NavBtn = ({ text, toLink }) => {
  return (
    <li>
      <button className=" transition duration-500 rounded-md p-1 hover:text-[#5d5dff] hover:bg-white text-white text-xl">
        <a href="/kaizen-portfolio ${toLink}"> {text}</a>
      </button>
    </li>
  );
};
NavBtn.propTypes = {
  text: PropTypes.string.isRequired,
  toLink: PropTypes.string.isRequired,
};

export default NavBtn;
