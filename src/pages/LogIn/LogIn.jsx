import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import FormBtn from "../../components/FormBtn/FormBtn";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import Loader from "../../components/Loader/Loader";
import Slide from "../../components/Slider/slider";
import Logo from "../../components/Logo/Logo";
import ErrorPop from "../../components/ErrorPop/ErrorPop";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  const Data = [
    {
      Label: "Email",
      textField: "email",
      inpType: "text",
      handleFunc: (e) => setEmail(e.target.value),
      valuein: email,
    },
    {
      Label: "Password",
      textField: "password",
      inpType: "password",
      handleFunc: (e) => setPassword(e.target.value),
      valuein: password,
    },
  ];

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (password.length < 6) {
  //     setError("Password Must be atleast 6 characters long");
  //     return;
  //   }
  //   try {
  //     const res = await signInWithEmailAndPassword(email, password);
  //     console.log(email, password);
  //     if(!res){
  //       setError("Please check your credentials and try again");
  //     }else (res) => {
  //       console.log(res.user);
  //       navigate("/KaizenClub/home");
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Basic input validation (optional, replace with more robust validation)
  //   if (password.length < 6) {
  //     setError("Password must be at least 6 characters long");
  //     return;
  //   }

  //   try {
  //     const result = await signInWithEmailAndPassword(email, password);
  //     if (result.user) {
  //       console.log("Login successful!");
  //       navigate("/KaizenClub/home"); // Redirect on successful login
  //     } else {
  //       setError("An unexpected error occurred. Please try again.");
  //     }
  //   } catch (err) {
  //     setError(err.message); // Set the error state for display
  //     console.error("Login failed:", err); // Log the error for debugging
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password.length < 6){
      setError("Password must be at least 6 characters long");
      return;
    }
    try {
      const res = await signInWithEmailAndPassword(email, password);
      navigate("/KaizenClub/home");
      console.log(res)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        {error && <ErrorPop errmsg={error} />}
        {loading ? (
          <Loader />
        ) : (
          <Slide>
            <div className=" w-[27rem] max-md:w-[20rem] max-md:h-auto bg-gray-800 h-[34rem] p-8 space-y-6  shadow-md rounded-lg flex flex-col justify-center items-center">
              <Logo />
              <form onSubmit={handleSubmit}>
                <div className="form-outer flex flex-col gap-7">
                  <FormInput
                    Label={"Email"}
                    textField={"email"}
                    inpType={"text"}
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
                  <FormBtn text={"Login"} />
                </div>
              </form>
              <p className="text-white">
                Don't Have an Account?{" "}
                <Link className="text-blue-400" to={"/KaizenClub/signup"}>
                  Sign Up
                </Link>
              </p>
            </div>
          </Slide>
        )}
      </div>
    </>
  );
};

export default Login;
