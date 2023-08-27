// import React, { useEffect, useState } from 'react';
import React from 'react';
// import axios from 'axios';
import * as S from './style/StoreDetail.style';
import TopDetail from './TopDetail';
import BottomDetail from './BottomDetail';
import LeftBanner from './LeftBanner';

export default function StoreDetail() {
    // const [storeInfo, setStoreInfo] = useState({});
    // useEffect(() => {
    //     getStoreInfo();
    // }, []);

    // const getStoreInfo = async () => {
    //     const res = await axios.get(`https://localhost:8080/stores/${storeId}`);
    // };
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
