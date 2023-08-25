import axios from '../utils/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refreshAccessToken = async () => {
        const response = await axios({
            url: '/auth/refreshtoken',
            method: 'post',
            withCredentials: true,
        });
        setAuth((prev) => {
            console.log(response.data);
            return {
                ...prev,
                accessToken: response.data.accessToken,
            };
        });
        return response.data.accessToken;
    };
    return { refreshAccessToken };
};

export default useRefreshToken;
