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
    e.preventDefault();
    try {
      const { username, password } = login;
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      console.log("Login successful! Response data:", response.data);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/kaizen-portfolio/protected");
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
        <h2 className="text-center text-3xl">Log In</h2>
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
            <FormBtn text={"Log In"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
