import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
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

export const Logo = styled(Link)`
    flex-shrink: 0;
    margin-right: 20px;
`;

export const Img = styled.img`
    width: 100%;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
`;

export const Menu = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    position: absolute;
    right: 300px;
`;

export const MenuBtn = styled.button`
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
