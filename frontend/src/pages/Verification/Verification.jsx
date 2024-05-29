import React from "react";
import FormInput from "../../components/FormInput/FormInput";
import FormBtn from "../../components/FormBtn/FormBtn";

const Verification = () => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignIn({ ...signin, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { username, email, password } = signin;
      const response = await axios.post("http://localhost:5000/verification", {
        otp,
      });
      console.log("verification successful! Response data:", response.status);
      if (response.status === 200) {
        navigate("/kaizen-portfolio/home");
      } else {
        console.error("signin failed:", response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-md rounded-md">
        <form onSubmit={handleSubmit}>
          <FormInput
            textField={"OTP"}
            inpType={"number"}
            handleFunc={handleChange}
          />
          <FormBtn text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Verification;
