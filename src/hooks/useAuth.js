import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';

const useAuth = () => {
    const { auth, setAuth, isLogin, setIsLogin } = useContext(AuthContext);
    return { auth, setAuth, isLogin, setIsLogin };
};

export default useAuth;
