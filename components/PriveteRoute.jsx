import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthProvider";

const PriveteRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return (
      <span className="loading loading-spinner loading-lg text-amber-300  "></span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PriveteRoute;
