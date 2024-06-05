import React, { createContext, useState, useContext } from "react";
import Loader from "../Loader/Loader";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, error] = useAuthState(auth); // Use inside component

  if (loading) {
    return <Loader />; // Handle loading state
  }

  if (error) {
    // Handle error (optional)
    console.error(error);
  }

  useEffect(() => {
    // Update user state based on auth state changes
    setUser(user); // Update only when user changes
  }, [user]); // Dependency array ensures update on user change

  const isAuthorized = () => {
    return user !== null;
  };

  const value = { user, isAuthorized };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

const Authoriser = ({ children }) => {
  const { isAuthorized } = useContext(AuthContext);

  return (
    <div>
      {isAuthorized() ? children : <Navigate to="/KaizenClub/" replace />}
    </div>
  );
};

export default Authoriser;
