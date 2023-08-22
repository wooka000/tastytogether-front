import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';

export default function Header() {
    return (
        <Container>
            <Link to="/">
                <Img src="/imgs/logo1.png" alt="logo" />
            </Link>
            <Form>
                <Label htmlFor="search">
                    <FiSearch />
                </Label>
                <Input type="search" name="search" id="search" placeholder="지역,식당 또는 음식" />
                <ResetBtn type="reset">CLEAR</ResetBtn>
            </Form>
            <Menu>
                <Link to="/post">
                    <MenuBtn>혼밥 메이트</MenuBtn>
                </Link>
                <Link to="/stores/register">
                    <MenuBtn>음식점 등록</MenuBtn>
                </Link>
            </Menu>
            <Link to="/users/login">
                <Login>로그인</Login>
            </Link>
        </Container>
    );
}

const Container = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 0px 25px;
    border-bottom: 1px solid lightgray;
    background-color: white;
    z-index: 1;
`;

const Img = styled.img`
    margin-right: 25px;
`;

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 600px;
`;

const Label = styled.label`
    font-size: 24px;
    color: gray;
`;

const Input = styled.input`
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    width: 100%;
    border: none;
    outline: none;
`;

const ResetBtn = styled.button`
    border: none;
    background-color: transparent;
    font-size: 20px;
    color: gray;
    visibility: hidden;
`;

const Menu = styled.nav`
    flex-shrink: 0;
`;

const MenuBtn = styled.button`
    cursor: pointer;
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
    cursor: pointer;
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
