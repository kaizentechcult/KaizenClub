import PropTypes from "prop-types";

const Input = ({ textField, inpType, handleFunc }) => {
  return (
    <div className="form-cont flex flex-col">
      {/* <label
        htmlFor={textField}
        className="block text-sm font-medium text-gray-300"
      >
        {textField}
      </label> */}
      <input
        className="block w-full px-3 py-2 text-gray-800 border-none focus:border-none rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        type={inpType}
        name={textField}
        placeholder={textField}
        id={textField}
        onChange={handleFunc}
      />
    </div>
  );
};

Input.propTypes = {
  textField: PropTypes.string,
  inpType: PropTypes.string,
  handleFunc: PropTypes.func,
};

export default Input;
