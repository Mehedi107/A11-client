import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location.pathname);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  if (user) return children;

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
