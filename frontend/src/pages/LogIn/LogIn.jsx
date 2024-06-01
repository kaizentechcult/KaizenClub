import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Remove if not used
import FormInput from "../../components/FormInput/FormInput";
import FormBtn from "../../components/FormBtn/FormBtn";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        console.log({ res });
        // setLogIn({ email: "", password: "" }); // Clear form after successful login
        navigate("/kaizen-portfolio/home"); // Replace with your desired route after login
      }
    } catch (e) {
      console.error(e);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-md rounded-md">
        <h2 className="text-center text-3xl">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-outer flex flex-col gap-7">
            <FormInput
              textField={"email"}
              inpType={"text"}
              handleFunc={(e) => setEmail(e.target.value)}
              valuein={email}
              // handleChange={handleChange}
              />
            <FormInput
              textField={"password"}
              inpType={"password"}
              handleFunc={(e) => setPassword(e.target.value)}
              valuein={password}
              // handleChange={handleChange}
            />
            <FormBtn text={"Login"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
