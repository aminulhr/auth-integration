import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthProvider";

const PriveteRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    <span className="loading loading-spinner loading-lg mt-36"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PriveteRoute;
