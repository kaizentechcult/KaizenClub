import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormInput from "../../components/FormInput/FormInput";
import FormBtn from "../../components/FormBtn/FormBtn";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e) => {
    // const res = await axios.get("https://kaizen-portfolio.onrender.com/");
    // console.log(res);
    e.preventDefault();
    try {
      const { username, password } = login;
      console.log(username, password);
      const response = await axios.post(
        "https://kaizen-portfolio.onrender.com/login",
        {
          username,
          password,
        }
      );
      console.log("Login successful! Response data:", response.status);
      if (response.status === 200) {
        // Handle successful login (e.g., store token in local storage or state)
        const token = response.data.token; // Assuming the response contains a token
        localStorage.setItem("userToken", token);
        navigate("/kaizen-portfolio/dashboard"); // Redirect to protected route
      } else {
        console.error("Login failed:", response.status);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-md rounded-md">
        <h2 className="text-center text-3xl">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-outer flex flex-col gap-7">
            <FormInput
              textField={"username"}
              inpType={"text"}
              handleFunc={handleChange}
            />
            <FormInput
              textField={"password"}
              inpType={"password"}
              handleFunc={handleChange}
            />
            <FormBtn text={"Login"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
