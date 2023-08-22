import React, { useEffect, useState } from 'react';
import { keyframes, styled } from 'styled-components';

export default function BoardAnime() {
    const [boards, setBoards] = useState();

    useEffect(() => {
        async function featchData() {
            const res = await fetch('/data/board.json');
            const data = await res.json();
            setBoards(Object.values(data));
        }
        featchData();
    }, []);

    return (
        <Container>
            <List>
                {boards &&
                    boards.map((board, index) => {
                        if (index <= 10) {
                            return (
                                <Item key={board.id}>
                                    <Img src={board.photo} alt="photo" />
                                    <Text>
                                        <Title>{board.title}</Title>
                                        <Description>{board.description}</Description>
                                    </Text>
                                </Item>
                            );
                        }
                        return;
                    })}
            </List>
        </Container>
    );
}

const Container = styled.div`
    text-align: center;
    max-width: 1480px;
    margin: auto;
    background-color: white;
    padding: 40px;
    border-radius: 20px;
`;

const List = styled.ul`
    display: flex;
    justify-content: center;
    flex-grow: wrap;
    overflow: hidden;
`;

const moveRight = keyframes`
0% {
    transform: translateX(0);
}

100% {
    transform: translateX(-100%);
}
`;

const Item = styled.li`
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
    animation: ${moveRight} 6s linear infinite;
`;

const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
`;

const Text = styled.div`
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

const Title = styled.p`
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

const Description = styled.p`
    font-size: 12px;
`;
