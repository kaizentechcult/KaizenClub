import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormInput from "../../components/FormInput/FormInput";
import NavBtn from "../../components/NavBtn/NavBtn";
import FormBtn from "../../components/FormBtn/FormBtn";

const SignIn = () => {
  const [signin, setSignIn] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignIn({ ...signin, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { username, email, password } = signin;
      const response = await axios.post("http://localhost:5000/signin", {
        username,
        email,
        password,
      });
      console.log("Signin successful! Response data:", response.status);
      if (response.status === 200) {
        navigate("/kaizen-portfolio/verification");
      } else {
        console.error("Login failed:", response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };
  console.log(signin);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-md rounded-md">
        <h2 className="text-center text-3xl">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-outer flex flex-col gap-7">
            <FormInput
              textField={"username"}
              inpType={"text"}
              handleFunc={handleChange}
            />
            <FormInput
              textField={"email"}
              inpType={"email"}
              handleFunc={handleChange}
            />
            <FormInput
              textField={"password"}
              inpType={"password"}
              handleFunc={handleChange}
            />
            <FormBtn text={"Signin"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
