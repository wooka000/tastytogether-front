import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
// import { useNavigate } from 'react-router-dom';

export default function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();
    const { auth, setAuth } = useAuth();
    const { authRequiredAxios } = useAxios();
    const [result, setResult] = useState();
    const getUser = async () => {
        try {
            const response = await authRequiredAxios({ method: 'get', url: 'auth/user' });
            console.log(response.data);
            setResult(response.data[0].name);
        } catch (err) {
            console.log(err);
        }
    };

    const login = async (e) => {
        e.preventDefault();
        const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/auth/login',
            data: {
                email,
                password,
            },
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        });
        console.log(response.data);
        setAuth({ ...response.data });
        // navigate('/');
    };
    return (
        <Container>
            <h2>tasty Together</h2>
            <h1>Login</h1>
            <form onSubmit={login}>
                <ul>
                    <li>
                        <input
                            name="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
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
            </form>
            <div>{auth.accessToken}</div>
            <button></button>
            <div>
                <button onClick={getUser}>사용자 정보 요청</button>
                <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>
                    {result}
                </div>
            </div>
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
