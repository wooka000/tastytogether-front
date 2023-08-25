import axios from 'axios';
import { useEffect } from 'react';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';

const useAxios = () => {
    const { refreshAccessToken } = useRefreshToken();
    const { auth } = useAuth();

    const baseURL = 'http://localhost:8080';
    const authRequiredAxios = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.accessToken} `,
        },
        withCredentials: true,
    });

    useEffect(() => {
        // const requestIntercept = authRequiredAxios.interceptors.request.use(
        //     (config) => {
        //         if (!config.headers['Authorization']) {
        //             config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
        //         }
        //         return config;
        //     },
        //     (error) => Promise.reject(error),
        // );

        const responseIntercept = authRequiredAxios.interceptors.response.use(
            (response) => {
                console.log(response);
                return response;
            },
            async (error) => {
                console.log(error);
                //originRequest axios config
                const originRequest = error.config;
                console.log(originRequest);
                if (!originRequest.sent) {
                    originRequest.sent = true;
                    const newAccessToken = await refreshAccessToken();
                    originRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return authRequiredAxios(originRequest);
                }
                return Promise.reject(error);
            },
        );

        return () => {
            // authRequiredAxios.interceptors.request.eject(requestIntercept);
            authRequiredAxios.interceptors.response.eject(responseIntercept);
        };
    }, [auth, refreshAccessToken]);

    return { authRequiredAxios };
};

export default useAxios;
