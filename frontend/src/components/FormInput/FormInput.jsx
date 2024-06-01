import PropTypes from "prop-types";

const FormInput = ({ textField, inpType, handleFunc, value, Label }) => {
  return (
    <div className="form-cont flex flex-col">
      <input
        className="block w-full px-3 py-2 text-gray-800 border-none focus:border-none rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-gray-500"
        type={inpType}
        name={textField}
        value={value}
        placeholder={Label}
        id={textField}
        onChange={handleFunc}
      />
    </div>
  );
};

FormInput.propTypes = {
  textField: PropTypes.string,
  Label: PropTypes.string,
  inpType: PropTypes.string,
  value: PropTypes.string,
  handleFunc: PropTypes.func,
};

export default FormInput;
