import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserInfo from './UserInfo';

export default function MainHeader() {
    const [scrollY, setScrollY] = useState(0);
    const [active, setActive] = useState('false');
    const navigate = useNavigate();
    const [user, setUser] = useState(false);
    const handleClick = () => {
        setUser(!user);
        // navigate('/users/login');
    };

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
        <Container active={active}>
            <Logo to="/">
                <Img src="/imgs/logo1.png" alt="logo" />
            </Logo>
            <Right>
                <Menu>
                    <MenuBtn onClick={() => navigate('/post')} active={active}>
                        혼밥 메이트
                    </MenuBtn>
                    <MenuBtn onClick={() => navigate('/stores/register')} active={active}>
                        음식점 등록
                    </MenuBtn>
                </Menu>
                <User>
                    {user && <UserInfo photo={'/imgs/profile.png'} name={'김망고'} />}
                    {user && <LoginBtn onClick={handleClick}>로그아웃</LoginBtn>}
                    {!user && <LoginBtn onClick={handleClick}>로그인</LoginBtn>}
                </User>
            </Right>
        </Container>
    );
}

const Container = styled.header`
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 0px 25px;
    border-bottom: 1px solid ${(props) => (props.active == 'true' ? 'lightgrey' : 'transparent')};
    background-color: ${(props) => (props.active == 'true' ? 'white' : 'transparent')};
`;

const Logo = styled(Link)`
    flex-shrink: 0;
    margin-right: 20px;
`;

const Img = styled.img`
    width: 100%;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
`;

const Menu = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    position: absolute;
    right: 300px;
`;

const MenuBtn = styled.button`
    color: ${(props) => (props.active == 'true' ? 'black' : 'white')};
    font-weight: bold;
    background-color: transparent;
    border: none;
    font-size: 22px;
    flex-shrink: 0;

    &:hover {
        color: var(--color-accent);
    }
    &:nth-of-type(1) {
        margin-right: 40px;
    }
`;

const User = styled.div`
    display: flex;
    align-items: center;
`;

const LoginBtn = styled.button`
    border: 2px solid var(--color-accent);
    border-radius: 30px;
    background-color: transparent;
    color: var(--color-accent);
    font-size: 20px;
    font-weight: bold;
    padding: 8px 20px;
    min-width: 100px;
    transition: all 250ms ease-out;
    margin-left: 30px;
    flex-shrink: 0;
    &:hover {
        background-color: var(--color-accent);
        color: white;
    }
`;
