import useAxios from '../../hooks/useAxios';
import React, { useEffect, useState } from 'react';
import * as S from './style/MyBoard.style';

export default function MyBoard() {
    const [boards, setBoards] = useState();

    const { authRequiredAxios } = useAxios('application/json');
    useEffect(() => {
        const getData = async () => {
            const res = await authRequiredAxios({
                method: 'get',
                url: '/user/boards',
            });
            const data = await res.data.boardList;
            setBoards(data);
        };
        getData();
    }, []);

    return (
        <S.TabBox>
            {boards &&
                boards.map((board) => {
                    return (
                        <S.Box key={board._id}>
                            <S.Img src={board.image[0]} />
                            <S.Text>
                                <S.Date>{board.createdAt.split('T')[0]}</S.Date>
                                <S.Area>{board.region}</S.Area>
                                <S.Title>{board.title}</S.Title>
                                <S.Content>{board.content}</S.Content>
                            </S.Text>
                        </S.Box>
                    );
                })}
        </S.TabBox>
    );
}
