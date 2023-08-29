import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';
import * as S from './style/MainHeader.style';
import useAuth from '../../hooks/useAuth';

export default function MainHeader() {
    const [scrollY, setScrollY] = useState(0);
    const [active, setActive] = useState('false');
    const navigate = useNavigate();
    const { auth } = useAuth();

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    useEffect(() => {
        if (scrollY > 80) {
            setActive('true');
        } else {
            setActive('false');
        }
    }, [scrollY]);

    return (
        <S.Container active={active}>
            <S.Logo to="/">
                <S.Img src="/imgs/logo1.png" alt="logo" />
            </S.Logo>
            <S.Right>
                <S.Menu>
                    <S.MenuBtn onClick={() => navigate('/post')} active={active}>
                        혼밥 메이트
                    </S.MenuBtn>
                    <S.MenuBtn onClick={() => navigate('/stores/register')} active={active}>
                        음식점 등록
                    </S.MenuBtn>
                    <S.MenuBtn onClick={() => navigate(`/mypage/${auth.userId}`)} active={active}>
                        마이페이지
                    </S.MenuBtn>
                </S.Menu>
                <UserInfo active={active} />
            </S.Right>
        </S.Container>
    );
}
