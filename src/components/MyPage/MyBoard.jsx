import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as S from './style/MyBoard.style';

export default function MyBoard() {
    const [boards, setBoards] = useState();

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('/data/myboard.json');
            const data = res.data;
            setBoards(data);
        };
        getData();
    }, []);

    return (
        <S.TabBox>
            {boards &&
                boards.map((board) => {
                    return (
                        <S.Box key={board.id}>
                            <S.Img src={board.photo} />
                            <S.Text>
                                <S.Date>{board.date}</S.Date>
                                <S.Area>{board.area}</S.Area>
                                <S.Title>{board.title}</S.Title>
                                <S.Content>{board.content}</S.Content>
                            </S.Text>
                        </S.Box>
                    );
                })}
        </S.TabBox>
    );
}
