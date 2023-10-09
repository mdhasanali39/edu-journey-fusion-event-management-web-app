import { useContext } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[90vh]">
        <span className="loading loading-spinner loading-lg text-error"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PrivateRoute;
