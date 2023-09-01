import React, { useEffect, useState } from 'react';
import Review from './Review';
import * as S from './style/Reviews.style';

export default function Reviews({ reviews }) {
    return (
        <S.ReviewItems>
            {reviews &&
                reviews
                    .map((review) => {
                        return <Review key={review._id} review={review} />;
                    })
                    .reverse()}
        </S.ReviewItems>
    );
}
