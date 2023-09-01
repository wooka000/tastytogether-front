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
    margin-right: 30px;
`;

export const MenuBtn = styled.button`
    color: ${(props) => (props.active == 'true' ? 'black' : 'white')};
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
