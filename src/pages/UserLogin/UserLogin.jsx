import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../utils/axios';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setAuth, setIsLogin } = useAuth();
    const location = useLocation();

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
            navigate('/', { replace: true });
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    return (
        <Container>
            <h2>tasty Together</h2>
            <h1>Login</h1>
            <Form onSubmit={login}>
                <ul>
                    <li>
                        <input
                            name="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder={location.state?.email}
                            value={email}
                        />
                    </li>
                    <li>
                        <input
                            name="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                        />
                    </li>
                </ul>
                <button type="submit">로그인</button>
            </Form>
            <Link to="/users/signup" replace={true}>
                회원가입 페이지로 이동
            </Link>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
