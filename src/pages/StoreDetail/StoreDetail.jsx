import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function StoreDetail() {
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <LeftBanner>
                    <MiniMap>
                        <MapImage></MapImage>
                        <MapInfo>신전 떡볶이 교대점</MapInfo>
                        <MapNavi>맛집으로 길찾기 하고 싶다면?</MapNavi>
                        <MapNaviBtn>
                            <NaviBtnText>Go</NaviBtnText>
                        </MapNaviBtn>
                    </MiniMap>
                    <MatePost></MatePost>
                </LeftBanner>
                <Main>
                    <TopDetail>
                        <StoreBanners>
                            <StoreLeftImgs>
                                <StoreLeftTopImg src={'/imgs/food6.jpg'} />
                                <StoreLeftBottomImgs>
                                    {new Array(3).fill(null).map((_, idx) => (
                                        <GridImg key={idx} src={'/imgs/food6.jpg'} alt="storeImg" />
                                    ))}
                                </StoreLeftBottomImgs>
                            </StoreLeftImgs>
                            <StoreRightImgs>
                                {new Array(4).fill(null).map((_, idx) => (
                                    <GridImg key={idx} src={'/imgs/food6.jpg'} alt="storeImg" />
                                ))}
                            </StoreRightImgs>
                        </StoreBanners>
                        <StoreName>오레노라멘 본점</StoreName>
                        <StoreRegionAndType>
                            <StoreRegion>마포구</StoreRegion>
                            <StoreRegionBar>|</StoreRegionBar>
                            <StoreType>일식</StoreType>
                        </StoreRegionAndType>
                        <AverageAndLikesAndView>
                            <StarAverage>4.5</StarAverage>
                            <StarAverageCount>(nn명의 평가) /</StarAverageCount>
                            <LikesSymbol src={'/imgs/heartOrangeIcon.png'} />
                            <LikesCount>(nnn)</LikesCount>
                            <ViewInfo>
                                <ViewIcon src={'/imgs/viewIcon.png'} />
                                <ViewText>nnn+명이 봤어요</ViewText>
                            </ViewInfo>
                            <DividerLine></DividerLine>
                        </AverageAndLikesAndView>
                        <TopBtns>
                            <LikesBtn type="button">
                                <LikesIcon src={'/imgs/heartGrayIcon.png'} />
                                <LikesText>가고 싶다</LikesText>
                            </LikesBtn>
                            <ReviewBtn type="button" onClick={() => navigate(`/review/1`)}>
                                <ReviewIcon src={'/imgs/reviewIcon.png'} />
                                <ReviewLink>리뷰 쓰기</ReviewLink>
                            </ReviewBtn>
                            <MateBtn type="button" onClick={() => navigate(`/post/create`)}>
                                <MateIcon src={'/imgs/mateIcon.png'} />
                                <MateLink>메이트 구하기</MateLink>
                            </MateBtn>
                        </TopBtns>
                    </TopDetail>
                    <BottomDetail></BottomDetail>
                </Main>
            </Container>
            <Review></Review>
        </>
    );
}

const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const Main = styled.div`
    flex: 2;
    height: auto;
    background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 44px 263px 25px 0px;
`;

const TopDetail = styled.div`
    width: 661px;
    height: 515px;
    border-radius: 10px;
    background: #fff;
    margin-top: 44px;
    padding: 30px 44px 42px 42px;
    display: flex;
    flex-direction: column;
`;

const StoreBanners = styled.div`
    width: 574px;
    height: 249px;
    display: flex;
    border-radius: 5px;
`;

const StoreLeftImgs = styled.div`
    width: 287.26px;
    height: 249px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    > :first-child {
        border-top-left-radius: 5px;
    }
`;

const GridImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const StoreLeftTopImg = styled(GridImg)`
    width: 287.26px;
    height: 155.398px;
`;

const StoreLeftBottomImgs = styled.div`
    width: 287.26px;
    height: 93.602px;
    display: grid;
    grid-template-columns: repeat(3, calc(100% / 3));
    > :first-child {
        border-bottom-left-radius: 5px;
    }
`;

const StoreRightImgs = styled.div`
    width: 287.26px;
    height: 249px;
    display: grid;
    grid-template-columns: repeat(2, calc(100% / 2));
    grid-template-rows: repeat(2, calc(100% / 2));
    > :nth-child(2) {
        border-top-right-radius: 5px;
    }
    > :nth-child(4) {
        border-bottom-right-radius: 5px;
    }
`;

const StoreName = styled.h1`
    margin-top: 25px;
    color: #000;
    font-size: 25px;
    font-weight: 700;
`;

const StoreRegionAndType = styled.div`
    height: 19px;
    display: flex;
    margin-top: 14px;
`;

const StoreRegion = styled.p`
    color: #636363;
    font-size: 15px;
    font-weight: 400;
`;

const StoreRegionBar = styled.p`
    color: #636363;
    font-size: 15px;
    font-weight: 400;
    margin-left: 6px;
`;

const StoreType = styled.p`
    color: #636363;
    font-size: 15px;
    font-weight: 400;
    margin-left: 9px;
`;

const AverageAndLikesAndView = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 18px;
`;

const StarAverage = styled.p`
    margin-top: -3px;
    color: #ff914d;
    font-size: 20px;
    font-weight: 700;
`;

const StarAverageCount = styled.p`
    margin-left: 2px;
    color: #989797;
    font-size: 15px;
    font-weight: 400;
`;

const LikesSymbol = styled.img`
    margin-top: 2px;
    margin-left: 5px;
    width: 15px;
    height: 15px;
`;

const LikesCount = styled.p`
    margin-left: 5px;
    color: #989797;
    font-size: 15px;
    font-weight: 400;
`;

const ViewInfo = styled.div`
    width: 91px;
    height: 12px;
    display: flex;
    margin-top: 6px;
    margin-left: 297px;
`;

const ViewIcon = styled.img`
    width: 15px;
    height: 11px;
`;

const ViewText = styled.p`
    color: #989797;
    font-size: 10px;
    font-weight: 400;
    margin-left: 2px;
`;

const DividerLine = styled.div`
    margin-top: 8.99px;
    width: 577px;
    height: 1px;
    background: #d9d9d9;
`;

const TopBtns = styled.div`
    width: 577px;
    height: 58.01px;
    display: flex;
`;

const LikesBtn = styled.button`
    width: 94px;
    height: 36px;
    margin-top: 20.04px;
    border-radius: 20px;
    border: 1px solid #989797;
    background: #ffffff;
    display: flex;
`;

const LikesIcon = styled.img`
    width: 15px;
    height: 15px;
    margin-top: 10px;
    margin-left: 15px;
`;

const LikesText = styled.p`
    width: 40px;
    color: #989797;
    font-size: 10px;
    font-weight: 400;
    margin-top: 12px;
    margin-left: 8px;
`;

const ReviewBtn = styled.button`
    width: 94px;
    height: 36px;
    margin-top: 20.04px;
    margin-left: 19px;
    border-radius: 20px;
    border: 1px solid #989797;
    background: #ffffff;
    display: flex;
`;

const ReviewIcon = styled.img`
    width: 15px;
    height: 15px;
    margin-top: 9.96px;
    margin-left: 17.87px;
`;

const ReviewLink = styled.p`
    width: 40px;
    color: #989797;
    font-size: 10px;
    font-weight: 400;
    margin-top: 12px;
    margin-left: 4.59px;
`;

const MateBtn = styled.button`
    width: 111px;
    height: 36px;
    margin-top: 20.04px;
    margin-left: 257px;
    border-radius: 20px;
    display: flex;
    border: 1px solid #989797;
    background: #fff;
`;

const MateIcon = styled.img`
    width: 15px;
    height: 15px;
    margin-top: 11px;
    margin-left: 16px;
`;

const MateLink = styled.p`
    color: #989797;
    font-size: 10px;
    font-weight: 400;
    margin-top: 12px;
    margin-left: 7px;
`;

const BottomDetail = styled.div`
    width: 661px;
    height: 321px;
    margin-top: 19px;
    border-radius: 10px;
    background: #fff;
`;

const LeftBanner = styled.div`
    flex: 1;
    height: auto;
    background: black;
    display: flex;
    flex-direction: column;
`;

const MiniMap = styled.div`
    width: 255px;
    height: 312px;
    background: #fff;
    border-radius: 10px;
    left: 215px;
    margin-top: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MapImage = styled.div`
    width: 216px;
    height: 207px;
    border-radius: 5px;
    background: green;
    margin-top: 32px;
`;

const MapInfo = styled.div`
    width: 216px;
    height: 17px;
    color: #000;
    top: 253px;
    left: 23px;
    font-size: 14px;
    font-weight: 700;
`;

const MapNavi = styled.p`
    width: 149px;
    height: 15px;
    color: #000;
    font-size: 12px;
    font-weight: 400;
`;

const MapNaviBtn = styled.a`
    width: 28px;
    height: 15px;
    border-radius: 5px;
    background: rgba(255, 145, 77, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NaviBtnText = styled.p`
    color: #fff;
    font-size: 9px;
    font-weight: 400;
`;

const MatePost = styled.div`
    width: 255px;
    height: 204px;
    background: #fff;
    border-radius: 10px;
    margin-top: 18px;
`;

//리뷰 들어갈 자리 임시로 지정
const Review = styled.div`
    height: 200vh;
`;
