import PropTypes from "prop-types";

const Heading = ({ text }) => {
  return (
    <h1 className="text-white font-bold text-5xl text-center mt-64 mb-32">
      {text}
    </h1>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
