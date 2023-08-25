import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function StoreDetail() {
    const navigate = useNavigate();
    return (
        <>
            <Container>
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
                        <ScoreInfo>
                            <StarAverage>4.5</StarAverage>
                            <StarAverageCount>(nn명의 평가) /</StarAverageCount>
                            <LikesSymbol src={'/imgs/heartOrangeIcon.png'} />
                            <LikesCount>(nnn)</LikesCount>
                            <ViewInfo>
                                <ViewIcon src={'/imgs/viewIcon.png'} />
                                <ViewText>nnn+명이 봤어요</ViewText>
                            </ViewInfo>
                            <DividerLine></DividerLine>
                        </ScoreInfo>
                        <TopBtns>
                            <TopBtn type="button">
                                <TopBtnIcon src={'/imgs/heartGrayIcon.png'} />
                                <TopBtnText>가고 싶다</TopBtnText>
                            </TopBtn>
                            <TopBtn type="button" onClick={() => navigate(`/review/1`)}>
                                <TopBtnIcon src={'/imgs/reviewIcon.png'} />
                                <TopBtnText>리뷰 쓰기</TopBtnText>
                            </TopBtn>
                            <TopBtn type="button" onClick={() => navigate(`/post/create`)}>
                                <TopBtnIcon src={'/imgs/mateIcon.png'} />
                                <TopBtnText>메이트 구하기</TopBtnText>
                            </TopBtn>
                        </TopBtns>
                    </TopDetail>
                    <BottomDetail>
                        <StoreDetailBox>
                            <AddressDetail>
                                <AddressTitle>주소</AddressTitle>
                                <Addresses>
                                    <AddressContent>서울특별시 마포구 독막로6길 14</AddressContent>
                                    <AddressStreets>
                                        <AddressStreetIcon>지번</AddressStreetIcon>
                                        <AddressStreet>서울시 마포구 합정동 361-1</AddressStreet>
                                    </AddressStreets>
                                </Addresses>
                            </AddressDetail>
                            <StoreDetailItem>
                                <StoreDetailTitle>전화번호</StoreDetailTitle>
                                <StoreDetailContent>02-1234-1234</StoreDetailContent>
                            </StoreDetailItem>
                            <StoreDetailItem>
                                <StoreDetailTitle>가격대</StoreDetailTitle>
                                <StoreDetailContent>2만원대</StoreDetailContent>
                            </StoreDetailItem>
                            <StoreDetailItem>
                                <StoreDetailTitle>주차</StoreDetailTitle>
                                <StoreDetailContent>무료주차 가능</StoreDetailContent>
                            </StoreDetailItem>
                            <StoreDetailItem>
                                <StoreDetailTitle>영업시간</StoreDetailTitle>
                                <StoreDetailContent>9:30~18:00</StoreDetailContent>
                            </StoreDetailItem>
                            <StoreDetailItem>
                                <StoreDetailTitle>휴무일</StoreDetailTitle>
                                <StoreDetailContent>일</StoreDetailContent>
                            </StoreDetailItem>
                            <StoreDetailItem>
                                <StoreDetailTitle>대표 메뉴</StoreDetailTitle>
                                <MenuItems>
                                    <MenuItem>
                                        <StoreDetailContent>냉면</StoreDetailContent>
                                        <StoreDetailContent>3,000원</StoreDetailContent>
                                    </MenuItem>
                                    <MenuDividerLine></MenuDividerLine>
                                    <MenuItem>
                                        <StoreDetailContent>떡볶이</StoreDetailContent>
                                        <StoreDetailContent>15,000원</StoreDetailContent>
                                    </MenuItem>
                                    <MenuDividerLine></MenuDividerLine>
                                    <MenuItem>
                                        <StoreDetailContent>마르게리따 피자</StoreDetailContent>
                                        <StoreDetailContent>130,000원</StoreDetailContent>
                                    </MenuItem>
                                    <MenuDividerLine></MenuDividerLine>
                                </MenuItems>
                            </StoreDetailItem>
                        </StoreDetailBox>
                        <div>
                            <StoreEditLink href="/stores/detail/edit">
                                정보 수정하기 &#62;
                            </StoreEditLink>
                        </div>
                    </BottomDetail>
                </Main>
                <LeftBanner>
                    <MiniMap>
                        <MapImage>카카오주소이미지</MapImage>
                        <MapInfoTitle>오레노라멘 본점</MapInfoTitle>
                        <Navi isMap={true} i>
                            <NaviText isMap={true}>맛집으로 길찾기 하고 싶다면?</NaviText>
                            <NaviBtn href="/">Go</NaviBtn>
                        </Navi>
                    </MiniMap>
                    <MatePost>
                        <MatePostTitle>8월 11일 오레노라멘 가실 분 구합니다!</MatePostTitle>
                        <TitleLine></TitleLine>
                        <MatePostCotent>
                            {`안녕하세요 ~ 8.18일에 저녁7시에 
                            명동칼국수 맛집가서 같이 식사하실분구합니다. 
                            제가 여자여서 같은 동성친구랑 맛집탐방하고 싶습니다.
                            같이 만나서 메뉴도 많이 시키고 많이많이 먹을수 있는 분 구합니다 구구절절`}
                        </MatePostCotent>
                        <Navi>
                            <NaviText>위의 메이트와 약속을 잡고 싶다면?</NaviText>
                            <NaviBtn href="/">Go</NaviBtn>
                        </Navi>
                    </MatePost>
                </LeftBanner>
            </Container>
            <Review></Review>
        </>
    );
}

const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
`;

const Main = styled.div`
    flex: 3;
    height: auto;
    background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 44px 263px 25px 0px;
`;

const TopDetail = styled.section`
    width: 661px;
    height: 515px;
    border-radius: 10px;
    background: #fff;
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

const ScoreInfo = styled.div`
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
    margin-top: 8.99 px;
    width: 577 px;
    height: 1px;
    background: #d9d9d9;
`;

const MenuDividerLine = styled.div`
    margin-top: 2px;
    width: 212px;
    height: 1px;
    background: #d9d9d9;
`;

const TopBtns = styled.div`
    height: 58.01px;
    display: flex;
`;

const TopBtn = styled.button`
    height: 36px;
    margin-top: 20px;
    padding: 12px 16px 12px 16px;
    border-radius: 20px;
    border: 1px solid #989797;
    background: #ffffff;
    display: flex;
    gap: 7px;
    & + & {
        margin-left: 19px;
    }
    & + & + & {
        margin-left: 257px;
    }
`;

const TopBtnIcon = styled.img`
    width: 15px;
    height: 15px;
    margin-top: -2px;
`;

const TopBtnText = styled.p`
    color: #989797;
    font-size: 10px;
    font-weight: 400;
`;

const BottomDetail = styled.section`
    width: 661px;
    height: 321px;
    margin-top: 19px;
    border-radius: 10px;
    background: #fff;
    padding: 25px 32px 29px 32px;
    display: flex;
    justify-content: space-between;
`;

const StoreDetailBox = styled.div`
    height: 259px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    > div {
        display: grid;
        grid-template-columns: 66px auto;
    }
`;

const StoreEditLink = styled.a`
    color: #c0c0c0;
    font-size: 12px;
    font-weight: 700;
`;

const Addresses = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
`;

const AddressDetail = styled.div`
    height: 34px;
    display: flex;
    flex-direction: column;
`;

const AddressTitle = styled.p`
    width: 47px;
    line-height: 15px;
    color: #989797;
    font-size: 13px;
    font-weight: 700;
`;

const AddressContent = styled.p`
    color: #100f0f;
    font-size: 13px;
    font-weight: 700;
`;

const AddressStreets = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const AddressStreetIcon = styled.p`
    width: 25px;
    line-height: 15px;
    border-radius: 5px;
    border: 1px solid #989797;
    background: #fff;
    color: #989797;
    font-size: 8px;
    font-weight: 700;
    text-align: center;
`;

const AddressStreet = styled.p`
    color: #989797;
    font-size: 11px;
    font-weight: 700;
    line-height: 15px;
`;

const StoreDetailItem = styled.div`
    display: flex;
`;

const StoreDetailTitle = styled.p`
    width: 47px;
    line-height: 15px;
    color: #989797;
    font-size: 12px;
    font-weight: 700;
`;

const StoreDetailContent = styled.p`
    line-height: 15px;
    color: #100f0f;
    font-size: 13px;
    font-weight: 700;
`;

const MenuItems = styled.div`
    display: flex;
    flex-direction: column;
`;

const MenuItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LeftBanner = styled.div`
    flex: 1;
    height: auto;
    background: black;
    display: flex;
    flex-direction: column;
    padding: 44px 46px 346px 215px;
`;

const MiniMap = styled.div`
    width: 255px;
    height: 312px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 32px 19.5px 21px 19.5px;
`;

const MapImage = styled.div`
    width: 216px;
    height: 207px;
    border-radius: 5px;
    background: green;
`;

const MapInfoTitle = styled.h4`
    margin-top: 14px;
    width: 206px;
    line-height: 17px;
    color: #000;
    font-size: 14px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Navi = styled.div`
    display: flex;
    margin-top: ${(props) => (props.isMap ? '6px' : '25px')};
    gap: 6px;
`;

const NaviText = styled.p`
    color: #000;
    font-size: ${(props) => (props.isMap ? '12px' : '11px')};
    font-weight: 400;
`;

const NaviBtn = styled.a`
    width: 28px;
    height: 15px;
    border-radius: 5px;
    background: rgba(255, 145, 77, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 9px;
    font-weight: 400;
    text-align: center;
`;

const MatePost = styled.div`
    width: 255px;
    height: 204px;
    background: #fff;
    border-radius: 10px;
    margin-top: 18px;
    padding: 31px 20px 24px 20px;
    display: flex;
    flex-direction: column;
`;

const MatePostTitle = styled.h5`
    width: 195px;
    line-height: 15px;
    color: #000;
    font-size: 12px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    align-self: center;
`;

const TitleLine = styled.div`
    width: 214px;
    height: 1px;
    background: #ff914d;
    margin-top: 10px;
`;

const MatePostCotent = styled.p`
    color: #989797;
    width: 212px;
    height: 72px;
    font-size: 10px;
    white-space: normal;
    overflow: hidden;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    margin-top: 12px;
`;

// 리뷰 들어갈 자리 임시로 지정
const Review = styled.div`
    height: 200vh;
`;
