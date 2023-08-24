import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';
import UserInfo from './UserInfo';

export default function Header() {
    const [text, setText] = useState('');
    const [user, setUser] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setUser(!user);
        navigate('/users/login');
    };
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/stores/search', { state: { keyword: text } });
    };
    return (
        <Container>
            <Logo to="/">
                <Img src="/imgs/logo1.png" alt="logo" />
            </Logo>
            <Form onSubmit={handleSubmit}>
                <SubmitBtn>
                    <FiSearch />
                </SubmitBtn>
                <SearchInput
                    type="search"
                    name="search"
                    id="search"
                    placeholder="지역,식당 또는 음식"
                    value={text}
                    onChange={handleChange}
                />
            </Form>
            <Menu>
                <MenuBtn onClick={() => navigate('/post')}>혼밥 메이트</MenuBtn>
                <MenuBtn onClick={() => navigate('/stores/register')}>음식점 등록</MenuBtn>
            </Menu>
            <User>
                {user && <UserInfo photo={'/imgs/profile.png'} name={'김망고'} />}
                {user && <LoginBtn onClick={handleClick}>로그아웃</LoginBtn>}
                {!user && <LoginBtn onClick={handleClick}>로그인</LoginBtn>}
            </User>
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
    border-bottom: 1px solid lightgray;
    background-color: white;
`;

const Logo = styled(Link)`
    flex-shrink: 0;
    margin-right: 20px;
`;

const Img = styled.img`
    width: 100%;
`;

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 600px;
    position: absolute;
    top: 27px;
    left: 262px;
    background-color: transparent;
`;

const SubmitBtn = styled.button`
    border: none;
    outline: none;
    font-size: 24px;
    background-color: transparent;
    color: grey;
`;

const SearchInput = styled.input`
    font-size: 20px;
    padding: 10px;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    &::placeholder {
        font-weight: bold;
    }
`;

const Menu = styled.nav`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    position: absolute;
    right: 300px;
`;

const MenuBtn = styled.button`
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
