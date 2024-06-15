// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import FormInput from "../../components/FormInput/FormInput";
// import FormBtn from "../../components/FormBtn/FormBtn";
// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase/config";
// import Loader from "../../components/Loader/Loader";
// import Logo from "../../components/Logo/Logo";
// import ErrorPop from "../../components/ErrorPop/ErrorPop";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const [signInWithEmailAndPassword, user, loading] =
//     useSignInWithEmailAndPassword(auth);

//   const Data = [
//     {
//       Label: "Email",
//       textField: "email",
//       inpType: "text",
//       handleFunc: (e) => setEmail(e.target.value),
//       valuein: email,
//     },
//     {
//       Label: "Password",
//       textField: "password",
//       inpType: "password",
//       handleFunc: (e) => setPassword(e.target.value),
//       valuein: password,
//     },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters long");
//       return;
//     }
//     try {
//       await signInWithEmailAndPassword(email, password);
//       const user = auth.currentUser;
//       if (!user) {
//         setError("Either email or password is wrong");
//         navigate("/KaizenClub/");
//       } else {
//         navigate("/KaizenClub/home");
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <>
//       <div className="flex items-center justify-center min-h-screen">
//         {error && <ErrorPop errmsg={error} />}
//         {loading ? (
//           <Loader />
//         ) : (
//           <div className=" w-[27rem] max-md:w-[20rem] max-md:h-auto bg-gray-800 h-[34rem] p-8 space-y-6  shadow-md rounded-lg flex flex-col justify-center items-center">
//             <Logo />
//             <form onSubmit={handleSubmit}>
//               <div className="form-outer flex flex-col gap-7">
//                 <FormInput
//                   Label={"Email"}
//                   textField={"email"}
//                   inpType={"text"}
//                   handleFunc={(e) => setEmail(e.target.value)}
//                   valuein={email}
//                 />
//                 <FormInput
//                   Label={"Password"}
//                   textField={"password"}
//                   inpType={"password"}
//                   handleFunc={(e) => setPassword(e.target.value)}
//                   valuein={password}
//                 />
//                 <FormBtn text={"Login"} />
//               </div>
//             </form>
//             <p className="text-white">
//               Don't Have an Account?{" "}
//               <Link className="text-blue-400" to={"/KaizenClub/signup"}>
//                 Sign Up
//               </Link>
//             </p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Login;
