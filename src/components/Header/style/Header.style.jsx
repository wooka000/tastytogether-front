import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    z-index: 3;
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

export const Logo = styled(Link)`
    flex-shrink: 0;
    margin-right: 20px;
`;

export const Img = styled.img`
    width: 100%;
`;

export const Form = styled.form`
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

export const SubmitBtn = styled.button`
    border: none;
    outline: none;
    font-size: 24px;
    background-color: transparent;
    color: grey;
`;

export const SearchInput = styled.input`
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

export const Menu = styled.nav`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    position: absolute;
    right: 300px;
`;

export const MenuBtn = styled.button`
    font-weight: bold;
    background-color: transparent;
    border: none;
    font-size: 22px;
    flex-shrink: 0;
    &:nth-of-type(2) {
        margin: 0 30px;
    }
    &:hover {
        color: var(--color-accent);
    }
`;

export const User = styled.div`
    display: flex;
    align-items: center;
`;

export const LoginBtn = styled.button`
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
