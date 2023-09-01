import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import useRefreshToken from '../../hooks/useRefreshToken';
import jwt_decode from 'jwt-decode';

const KeepLogin = ({ children }) => {
    const { auth, isLogin, setAuth, setIsLogin, exp } = useAuth();
    const { refreshAccessToken } = useRefreshToken();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //새로고침으로 isLogin false된 경우
        if (!isLogin) {
            const accessToken = localStorage.getItem('accessToken');
            //accessToken이 있다면
            if (accessToken) {
                const { _id, nickname, profileImage } = jwt_decode(accessToken);
                setIsLogin(true);
                setAuth(() => {
                    return { userId: _id, nickname, profileImage, accessToken };
                });
                //시간이 만료되었다면 재발행
                const currentTime = Math.round(Date.now() / 1000);
                if (exp < currentTime) {
                    const newAccessToken = refreshAccessToken();
                    localStorage.setItem('accessToken', newAccessToken);
                }
            }
        }

        return () => {
            setIsLoading(false);
        };
    }, []);

    return <>{isLoading ? <p>...Loading</p> : children}</>;
};

export default KeepLogin;
