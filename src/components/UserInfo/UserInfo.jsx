import React from 'react';

import * as S from './style/UserInfo.style';
import useAuth from '../../hooks/useAuth';
import useLogout from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';

export default function UserInfo() {
    const { auth, isLogin } = useAuth();
    const { logout } = useLogout();
    const navigate = useNavigate();
    return (
        <S.User>
            {isLogin && (
                <>
                    <S.Img src={auth.profileImage} alt="profile-image" />
                    <S.Name>{auth.nickname}님</S.Name>
                </>
            )}
            {isLogin && <S.LoginBtn onClick={logout}>로그아웃</S.LoginBtn>}
            {!isLogin && (
                <S.LoginBtn
                    onClick={() => {
                        navigate('/users/login');
                    }}
                >
                    로그인
                </S.LoginBtn>
            )}
        </S.User>
    );
}
