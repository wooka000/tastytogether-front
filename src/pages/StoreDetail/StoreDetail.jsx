import React from 'react';
import * as S from './style/StoreDetail.style';
import TopDetail from './TopDetail';
import BottomDetail from './BottomDetail';
import LeftBanner from './LeftBanner';
// import { useNavigate } from 'react-router-dom';

export default function StoreDetail() {
    return (
        <>
            <S.Container>
                <S.Main>
                    <TopDetail></TopDetail>
                    <BottomDetail></BottomDetail>
                </S.Main>
                <LeftBanner></LeftBanner>
            </S.Container>
            <S.Review></S.Review>
        </>
    );
}
