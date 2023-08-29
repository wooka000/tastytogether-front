import React from 'react';
// import { Link } from 'react-router-dom';
import * as S from './SearchResult.styles';

export function StoreReview({ item, index }) {
    if (item.reviews.length !== 0) {
        return (
            <S.StoreReview key={index}>
                <S.ReviewContent>{item.reviews[0].content}</S.ReviewContent>
                <S.ReviewId>by.{item.reviews[0].userId}</S.ReviewId>
            </S.StoreReview>
        );
    } else {
        return (
            <S.StoreReview>
                <S.ReviewContent>아직 첫 리뷰가 없습니다.</S.ReviewContent>
            </S.StoreReview>
        );
    }
}