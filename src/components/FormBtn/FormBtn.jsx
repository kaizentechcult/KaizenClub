import React from "react";
import PropTypes from "prop-types";

const FormBtn = ({ text, handlFunc }) => {
  return (
    <button
      type="submit"
      className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {text}
    </button>
  );
};
FormBtn.propTypes = {
  text: PropTypes.string.isRequired,
  handlFunc: PropTypes.string,
};

export default FormBtn;
