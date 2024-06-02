import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import FormBtn from "../../components/FormBtn/FormBtn";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import Loader from "../../components/Loader/Loader";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(email, password);

      if (res) {
        console.log("user Added");
        // Clear form after successful registration
        console.log(user);
        // setUsername("");
        // setEmail("");
        // setPassword("");
        navigate("/kaizen-portfolio/home"); // Redirect to home
      }
    } catch (err) {
      if (error) {
        console.error(error);
      }
      // Handle specific errors (e.g., display error message to user)
      alert("Registration failed. Please check your details.");
      // Optionally: navigate to login page based on error type
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-md rounded-md">
          <h2 className="text-center text-3xl text-gray-200">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-outer flex flex-col gap-7">
              <FormInput
                Label={"Username"}
                textField={"username"}
                inpType={"text"}
                handleFunc={(e) => setUsername(e.target.value)}
                valuein={username}
              />
              <FormInput
                Label={"Email"}
                textField={"email"}
                inpType={"email"}
                handleFunc={(e) => setEmail(e.target.value)}
                valuein={email}
              />
              <FormInput
                Label={"Password"}
                textField={"password"}
                inpType={"password"}
                handleFunc={(e) => setPassword(e.target.value)}
                valuein={password}
              />
              <FormBtn text={"Sign Up"} />
            </div>
          </form>
          <p className="text-white">
            Already Have an Account?{" "}
            <Link className="text-blue-400" to={"/kaizen-portfolio/login"}>
              Login
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default SignIn;
