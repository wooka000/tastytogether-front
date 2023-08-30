import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style/UserLogin.style';
import axios from '../../utils/axios';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
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
            if (location.state.from === '/users/signup') {
                navigate('/');
                return;
            }
            navigate(-1);
        } catch (err) {
            setErrMsg(err.response.data.message);
        }
    };
    console.log(location?.state);
    return (
        <S.Container>
            <S.LoginBox>
                <S.Logo
                    src="https://tasty-together.s3.ap-northeast-2.amazonaws.com/main/default-profile-image.png"
                    alt="logo"
                />
                <h1>Login</h1>
                <S.Form onSubmit={login}>
                    <ul>
                        <li>
                            <input
                                name="email"
                                type="text"
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
                                type="password"
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
                <S.LinkToSignUp to="/users/signup">회원가입 페이지로 이동</S.LinkToSignUp>
                <S.ErrorMsg>{errMsg}</S.ErrorMsg>
            </S.LoginBox>
        </S.Container>
    );
}
