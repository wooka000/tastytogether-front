import axios from 'axios';
import useAuth from './useAuth';

const url = 'http://localhost:8080/auth/refreshtoken';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refreshAccessToken = async () => {
        const response = await axios({ url, method: 'post', withCredentials: true });
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
