import PropTypes from "prop-types";

const Heading = ({ text, extra }) => {
  return (
    <h1 className={`text-[#004263] font-bold text-5xl text-center mb-[6rem] ${extra} `}>
      {text}
    </h1>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  extra: PropTypes.string,
};

export default Heading;
