import React, { useEffect, useState } from 'react';
import Review from './Review';
import * as S from './style/Reviews.style';
import axios from 'axios';

export default function Reviews() {
    const [reviews, setReviews] = useState();

    useEffect(() => {
        const getReview = async () => {
            const res = await axios.get('/data/myreview.json');
            const data = await res.data;
            setReviews(data);
        };
        getReview();
    }, []);

    return (
        <S.ReviewItems>
            {reviews &&
                reviews.map((review) => {
                    return <Review key={review.id} review={review} />;
                })}
        </S.ReviewItems>
    );
}
