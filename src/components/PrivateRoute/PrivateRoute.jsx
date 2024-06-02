import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const [user] = useAuthState(auth);

  return (
    <Route {...rest}>
      {user ? (
        <Element /> // Render the Element component if user is authenticated
      ) : (
        <Navigate
          to="/kaizen-portfolio/login"
          state={{ from: rest.pathname }}
          replace
        />
        // Redirect to login and preserve intended route in state
      )}
    </Route>
  );
};

export default PrivateRoute;
