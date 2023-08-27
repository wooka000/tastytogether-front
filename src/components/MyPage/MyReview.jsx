import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as S from './style/MyReview.style';

export default function MyReview() {
    const [reviews, setReviews] = useState();

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('/data/myreview.json');
            const data = res.data;
            setReviews(data);
        };
        getData();
    }, []);
    return (
        <S.TabBox>
            {reviews &&
                reviews.map((review) => {
                    return (
                        <S.Box key={review.id}>
                            <S.Img src={review.photo} />
                            <S.Text>
                                <S.Date>{review.date}</S.Date>
                                <S.Grade>⭐️{review.grade}</S.Grade>
                                <S.Title>{review.title}</S.Title>
                                <S.Content>{review.content}</S.Content>
                            </S.Text>
                        </S.Box>
                    );
                })}
        </S.TabBox>
    );
}
