import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function MainHeader() {
    const [scrollY, setScrollY] = useState(0);
    const [isTransparent, setIsTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    useEffect(() => {
        if (scrollY > 80) {
            setIsTransparent(false);
        } else {
            setIsTransparent(true);
        }
    }, [scrollY]);

    return (
        <Container isTransparent={isTransparent}>
            <Link to="/">
                <Img src="/imgs/logo1.png" alt="logo" />
            </Link>
            <Btns>
                <Menu>
                    <Link to="/post">
                        <MenuBtn isTransparent={isTransparent}>혼밥 메이트</MenuBtn>
                    </Link>
                    <Link to="/stores/register">
                        <MenuBtn isTransparent={isTransparent}>음식점 등록</MenuBtn>
                    </Link>
                </Menu>
                <Link to="/users/login">
                    <Login>로그인</Login>
                </Link>
            </Btns>
        </Container>
    );
}

const Container = styled.header`
    z-index: 1;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 0px 25px;
    border-bottom: 1px solid ${(props) => (props.isTransparent ? 'transparent' : 'lightgrey')};
    background-color: ${(props) => (props.isTransparent ? 'transparent' : 'white')};
`;

const Img = styled.img`
    margin-right: 25px;
`;

const Menu = styled.nav`
    flex-shrink: 0;
`;

const Btns = styled.div`
    display: flex;
    align-items: center;
`;

const MenuBtn = styled.button`
    color: ${(props) => (props.isTransparent ? 'white' : 'black')};
    font-weight: bold;
    background-color: transparent;
    border: none;
    font-size: 20px;
    margin-right: 30px;

    &:hover {
        color: var(--color-accent);
    }
`;

const Login = styled.button`
    margin-left: 138px;
    border: 2px solid var(--color-accent);
    background-color: transparent;
    font-size: 20px;
    font-weight: bold;
    color: var(--color-accent);
    padding: 8px 20px;
    border-radius: 30px;
    min-width: 100px;
    transition: all 250ms ease-out;

    &:hover {
        background-color: var(--color-accent);
        color: white;
    }
`;
