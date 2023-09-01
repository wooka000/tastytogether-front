import React, { useEffect, useState } from 'react';
import * as S from './style/MyReview.style';
import useAxios from '../../hooks/useAxios';

export default function MyReview() {
    const [reviews, setReviews] = useState();
    const { authRequiredAxios } = useAxios('application/json');
    useEffect(() => {
        const getData = async () => {
            const res = await authRequiredAxios({
                method: 'get',
                url: '/user/reviews',
            });
            const data = await res.data.reviewList;
            setReviews(data);
        };
        getData();
    }, []);
    return (
        <S.TabBox>
            {reviews &&
                reviews.map((review) => {
                    return (
                        <S.Box key={review._id}>
                            <S.Img src={review.photos[0]} />
                            <S.Text>
                                <S.TextHeader>
                                    <S.Date>{review.updatedAt.split('T')[0]}</S.Date>
                                    <S.Grade>⭐️{review.grade}</S.Grade>
                                </S.TextHeader>
                                <S.Content>{review.content}</S.Content>
                            </S.Text>
                        </S.Box>
                    );
                })}
        </S.TabBox>
    );
}
