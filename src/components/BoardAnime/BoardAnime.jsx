import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as S from './style/BoardAnime.style';

export default function BoardAnime() {
    const [boards, setBoards] = useState();

    useEffect(() => {
        async function featchData() {
            const res = await axios.get('/data/board.json');
            const data = await res.data;
            setBoards(data.slice(0, 10));
        }
        featchData();
    }, []);

    return (
        <S.Container>
            <S.List>
                {boards &&
                    boards.map((board) => {
                        return (
                            <S.Item key={board.id}>
                                <S.Img src={board.photo} alt="photo" />
                                <S.Text>
                                    <S.Title>
                                        {board.id} {board.title}
                                    </S.Title>
                                    <S.Description>{board.description}</S.Description>
                                </S.Text>
                            </S.Item>
                        );
                    })}
            </S.List>
        </S.Container>
    );
}
