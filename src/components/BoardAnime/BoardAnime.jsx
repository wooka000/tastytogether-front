import React, { useEffect, useState } from 'react';
import * as S from './style/BoardAnime.style';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

export default function BoardAnime() {
    const [boards, setBoards] = useState();
    const navigate = useNavigate();
    const { authRequiredAxios } = useAxios('application/json');
    useEffect(() => {
        async function featchData() {
            const res = await authRequiredAxios({
                method: 'get',
                url: '/posts/?countperpage=10&pageno=1',
            });
            const data = await res.data;
            setBoards(data.data);
        }
        featchData();
    }, []);

    return (
        <S.Container>
            <S.List>
                {boards &&
                    boards.map((board) => {
                        return (
                            <S.Item key={board._id} onClick={() => navigate(`/post/${board._id}`)}>
                                <S.Img src={board.image[0]} alt="photo" />
                                <S.Text>
                                    <S.Title>{board.title}</S.Title>
                                    <S.Description>{board.content}</S.Description>
                                </S.Text>
                            </S.Item>
                        );
                    })}
            </S.List>
        </S.Container>
    );
}
