import React from "react";

const ErrorPop = ({errmsg}) => {
  return (
    <div className=" errmsg text-red-500 text-center p-4 bg-gray-800 rounded-lg absolute top-0 transition-all duration-300 m-4">
      <p className="error-message">
     Error : {errmsg}
      </p>
    </div>
  );
};

export default ErrorPop;
