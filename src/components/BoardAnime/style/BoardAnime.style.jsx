import { keyframes, styled } from 'styled-components';

export const Container = styled.div`
    background-color: white;
    width: 1480px;
    height: 280px;
    text-align: center;
    margin: auto;
    overflow: hidden;
    position: relative;
    border-radius: 20px;
    display: flex;
    align-items: center;
    &::before,
    &::after {
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        content: '';
        width: 50px;
        height: 280px;
        position: absolute;
        z-index: 1;
    }
    &::after {
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
    }

    &::before {
        left: 0;
        top: 0;
    }
`;

export const moveRight = keyframes`
0% {
    transform: translateX(0);
}

100% {
    transform: translateX(calc(-200px * 5));
}
`;

export const List = styled.ul`
    animation: ${moveRight} 20s linear infinite;
    display: flex;
    width: calc(200px * 10);
    padding: 0 50px;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 200px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    background-color: black;
    margin: 0 20px;
    position: relative;
    cursor: pointer;
`;

export const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
`;

export const Text = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    opacity: 0;
    background-color: black;
    &:hover {
        opacity: 0.9;
    }
`;

export const Title = styled.p`
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 16px;
    color: var(--color-accent);
    &::after {
        display: block;
        content: '';
        transform: translate(50%, 5px);
        width: 50%;
        height: 2px;
        background-color: white;
        opacity: 1;
    }
`;

export const Description = styled.p`
    font-size: 12px;
`;
