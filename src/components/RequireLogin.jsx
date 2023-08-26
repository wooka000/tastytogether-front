// import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireLogin = ({ children }) => {
    const { auth } = useAuth();
    console.log(auth);
    if (!auth.accessToken) {
        alert('accessToken이 만료되었습니다.');
        return;
        // <Navigate to="/users/login" replace />;
    }
    return children;
};

export default RequireLogin;
