import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../hooks/useAuth';


const ProtectedRoute = () => {
  const { authed } = useContext(authContext);
  const location = useLocation();

  if (!authed) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

};

export default ProtectedRoute;
