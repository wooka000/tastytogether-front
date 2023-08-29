import useAxios from '../../hooks/useAxios';
import React, { useEffect, useState } from 'react';
import * as S from './style/MyBookmark.style';

export default function MyBookmark() {
    const [bookmarks, setBookmarks] = useState();
    const { authRequiredAxios } = useAxios('application/json');
    useEffect(() => {
        const getData = async () => {
            const res = await authRequiredAxios({
                method: 'get',
                url: '/user/storelikes',
            });
            const data = await res.data.storeLikeList;
            setBookmarks(data);
        };
        getData();
    }, []);
    return (
        <S.TabBox>
            {bookmarks &&
                bookmarks.map((bookmark) => {
                    return (
                        <S.Box key={bookmark.id}>
                            <S.Img src={bookmark.photo} />
                            <S.Text>
                                <S.Grade>⭐️{bookmark.grade}</S.Grade>
                                <S.Name>{bookmark.name}</S.Name>
                                <S.Category>#{bookmark.category}</S.Category>
                                <S.Address>{bookmark.address}</S.Address>
                            </S.Text>
                        </S.Box>
                    );
                })}
        </S.TabBox>
    );
}
