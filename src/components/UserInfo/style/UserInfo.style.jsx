import styled from 'styled-components';

export const User = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`;

export const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    flex-shrink: 0;
`;

export const Name = styled.div`
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
    flex-shrink: 0;
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
    margin-left: 20px;
    flex-shrink: 0;
    &:hover {
        background-color: var(--color-accent);
        color: white;
    }
`;
