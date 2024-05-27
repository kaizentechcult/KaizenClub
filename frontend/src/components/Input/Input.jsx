import PropTypes from "prop-types";

const Input = ({ textField, handleFunc }) => {
  return (
    <div className="mt-1">
      <input
        id={textField}
        name={textField}
        type="text"
        autoComplete="none"
        required
        className="block w-full px-3 py-2 text-gray-800 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={handleFunc}
      />
    </div>
  );
};

Input.propTypes = {
  textField: PropTypes.string.isRequired,
  handleFunc: PropTypes.func.isRequired,
};

export default Input;
