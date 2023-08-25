import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireLogin = ({ children }) => {
    const { auth } = useAuth();
    if (!auth.accessToken) {
        return <Navigate to="/users/login" replace />;
    }
    return children;
};

export default RequireLogin;
