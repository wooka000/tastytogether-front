import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const Title = styled.p`
    color: #989797;
    font-size: 18px;
    font-weight: 700;
    width: 100px;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Input = styled.input`
    width: 70%;
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 10px;
    border: 1px solid lightgray;
    margin-right: 20px;
    margin-left: 12px;
    outline: none;
    color: gray;
`;

export const TypeButton = styled.button`
    color: white;
    background-color: var(--color-accent);
    font-size: 16px;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
    outline: none;

    &:hover {
        opacity: 0.8;
    }
`;
