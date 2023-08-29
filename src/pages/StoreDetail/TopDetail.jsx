import React from 'react';
import * as S from './style/TopDetail.style';
import { useNavigate } from 'react-router-dom';

export default function TopDetail({ storeInfo, storeReviewCount, storeLikeCount, storeReview }) {
    const navigate = useNavigate();
    const { name, type, starRating, address, banners } = storeInfo;
    const bottomPhotoList = banners && banners.slice(1);
    const reviewPhotos = storeReview && storeReview.map((el) => el.photos);
    const reviewPhotoList = [].concat(...reviewPhotos);

    return (
        <S.TopDetailWrap>
            <S.StoreBanners>
                <S.StoreLeftImgs>
                    <S.StoreLeftTopImg src={banners && banners[0]} />
                    <S.StoreLeftBottomImgs>
                        {banners &&
                            new Array(3).fill(null).map((_, idx) => {
                                const photoIndex = idx % bottomPhotoList.length;
                                const bottomPhoto = bottomPhotoList[photoIndex];
                                return <S.GridImg key={idx} src={bottomPhoto} alt="storeImg" />;
                            })}
                    </S.StoreLeftBottomImgs>
                </S.StoreLeftImgs>
                <S.StoreRightImgs>
                    {storeReview &&
                        new Array(4).fill(null).map((_, idx) => {
                            const photoIndex = idx % reviewPhotoList.length;
                            const reviewPhoto = reviewPhotoList[photoIndex];
                            return (
                                <S.GridImg
                                    isRight={true}
                                    key={idx}
                                    src={reviewPhoto}
                                    alt="storeImg"
                                />
                            );
                        })}
                </S.StoreRightImgs>
            </S.StoreBanners>
            <S.StoreName>{name}</S.StoreName>
            <S.StoreRegionAndType>
                <S.StoreRegion>{address && address.state}</S.StoreRegion>
                <S.StoreRegionBar>|</S.StoreRegionBar>
                <S.StoreType>{type}</S.StoreType>
            </S.StoreRegionAndType>
            <S.ScoreInfo>
                <S.ScoreLeft>
                    <S.StarAverage>{starRating}</S.StarAverage>
                    <S.StarAverageCount>{`(${storeReviewCount}명의 평가)`} /</S.StarAverageCount>
                    <S.LikesSymbol src={'/imgs/orageBookmarkIcon.png'} />
                    <S.LikesCount>{`(${storeLikeCount})`}</S.LikesCount>
                </S.ScoreLeft>
                <S.ViewInfo>
                    <S.ViewIcon src={'/imgs/viewIcon.png'} />
                    <S.ViewText>{`${storeInfo.viewCount}명이 봤어요`}</S.ViewText>
                </S.ViewInfo>
                <S.DividerLine></S.DividerLine>
            </S.ScoreInfo>
            <S.TopBtns>
                <S.TopBtn type="button" isBook={true}>
                    <S.TopBtnIcon src={'/imgs/bookmarkIcon.png'} isBook={true} />
                    <S.TopBtnText isBook={true}>북마크 추가</S.TopBtnText>
                </S.TopBtn>
                <S.TopBtn
                    type="button"
                    onClick={() =>
                        navigate(`/review/${storeInfo._id}`, { state: { name: storeInfo.name } })
                    }
                >
                    <S.TopBtnIcon src={'/imgs/reviewIcon.png'} />
                    <S.TopBtnText>리뷰 쓰기</S.TopBtnText>
                </S.TopBtn>
                <S.TopBtn type="button" onClick={() => navigate(`/post/create`)}>
                    <S.TopBtnIcon src={'/imgs/mateIcon.png'} />
                    <S.TopBtnText>메이트 구하기</S.TopBtnText>
                </S.TopBtn>
            </S.TopBtns>
        </S.TopDetailWrap>
    );
}

// 북마크 버튼 이미 가고싶다 누른 사람이면 북마크 채워져 있어야 함
// 그리고 모든 버튼들 누르면 주황색으로 잠깐 변했다 돌아와야 함
