import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useLogout = () => {
    const { setAuth, setIsLogin } = useAuth();
    const navigate = useNavigate();
    const logout = async () => {
        try {
            setAuth({});
            setIsLogin(false);
            localStorage.removeItem('accessToken');
            await axios({
                method: 'delete',
                url: 'auth/logout',
                withCredentials: true,
            });
            navigate('/');
        } catch (err) {
            alert('로그아웃을 다시 시도하세요.');
        }
    };

    return { logout };
};

export default useLogout;
