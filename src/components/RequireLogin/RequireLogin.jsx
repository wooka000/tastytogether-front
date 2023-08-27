import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequireLogin = ({ children }) => {
    const { auth, isLogin } = useAuth();
    if (!isLogin || !auth.accessToken) {
        return <Navigate to="/users/login" replace={true} />;
    }
    return children;
};

export default RequireLogin;
