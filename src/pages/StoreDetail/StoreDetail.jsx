// import React, { useEffect, useState, useLocation } from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './style/StoreDetail.style';
import TopDetail from './TopDetail';
import BottomDetail from './BottomDetail';
import LeftBanner from './LeftBanner';
import Reviews from '../../components/Reviews/Reviews';

export default function StoreDetail() {
    const [storeInfo, setStoreInfo] = useState({});
    const [storeReviewCount, setStoreReviewCount] = useState(0);
    const [storeLikeCount, setStoreLikeCount] = useState(0);
    const [storeReview, setStoreReview] = useState([]);
    // const location = useLocation();
    // const storeId = location.state.storeId;
    const id = '64e60a3f4433822fe34ace7a';
    //64ec68f97758e6fe3d7a771a 이미지 늘어나는 애들
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`http://localhost:8080/stores/${id}`);
            const data = res.data;
            setStoreInfo(data.storeInfo);
            setStoreLikeCount(data.storeLikeCount);
            setStoreReviewCount(data.storeReviewCount);
            setStoreReview(data.storeInfo.reviews);
        };
        getData();
    }, []);
    return (
        <>
            <S.Container>
                <S.Main>
                    <TopDetail
                        storeInfo={storeInfo}
                        storeLikeCount={storeLikeCount}
                        storeReviewCount={storeReviewCount}
                        storeReview={storeReview}
                    ></TopDetail>
                    <BottomDetail storeInfo={storeInfo}></BottomDetail>
                    <Reviews></Reviews>
                </S.Main>
                <LeftBanner
                    storeName={storeInfo.name}
                    storeAddress={storeInfo.address}
                ></LeftBanner>
            </S.Container>
        </>
    );
}
