import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style/UserLogin.style';
import axios from '../../utils/axios';
import useAuth from '../../hooks/useAuth';
// import { useNavigate } from 'react-router-dom';
// import useAxios from '../../hooks/useAxios';

export default function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate()
    const { setAuth, setIsLogin } = useAuth();
    const location = useLocation();
    const [errMsg, setErrMsg] = useState('');

    const login = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            const response = await axios({
                method: 'post',
                url: '/auth/login',
                data: {
                    email,
                    password,
                },
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });

            setAuth(() => {
                return { ...response.data };
            });
            setIsLogin(true);
            // navigate('/', { replace: true });
        } catch (err) {
            setErrMsg(err.response.data.message);
        }
    };

    //axios test
    // const { authRequiredAxios } = useAxios('application/json');
    // const { authRequiredAxios: authRequiredAxiosForImage } = useAxios('multipart/form-data');

    // const formData = new FormData();
    // formData.append('email', 'hello');
    // formData.append('name', 'Jin');

    // const testAxiosForImage = async () => {
    //     const response = await authRequiredAxiosForImage({
    //         method: 'post',
    //         url: 'auth/user',
    //         data: { formData },
    //     });
    //     console.log(response);
    // };

    // const testAxios = async () => {
    //     const response = await authRequiredAxios({ method: 'get', url: 'auth/user' });
    //     console.log(response);
    // };

    return (
        <S.Container>
            <S.LoginBox>
                <S.Logo
                    src="https://tasty-together.s3.ap-northeast-2.amazonaws.com/main/default-profile-image.png"
                    alt="logo"
                ></S.Logo>

                <h1>Login</h1>
                <S.Form onSubmit={login}>
                    <ul>
                        <li>
                            <input
                                name="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder={location.state?.email || '이메일(ID)'}
                                value={email}
                            />
                        </li>
                        <li>
                            <input
                                name="password"
                                placeholder="비밀번호"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                value={password}
                            />
                        </li>
                    </ul>
                    <button type="submit">로그인</button>
                </S.Form>
                <S.LinkToSignUp to="/users/signup" replace={true}>
                    회원가입
                </S.LinkToSignUp>
                <S.ErrorMsg>{errMsg}</S.ErrorMsg>
                {/* <button onClick={testAxios}>JSON LoginRequiredAxios 테스트</button>
                <button onClick={testAxiosForImage}>MultiForm LoginRequiredAxios 테스트</button> */}
            </S.LoginBox>
        </S.Container>
    );
}
