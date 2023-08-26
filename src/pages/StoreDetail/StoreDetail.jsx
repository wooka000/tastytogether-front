import React from 'react';
import * as S from './style/StoreDetail.style';
import TopDetail from './TopDetail';
import BottomDetail from './BottomDetail';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';

export default function StoreDetail() {
    return (
        <>
            <S.Container>
                <S.Main>
                    <TopDetail></TopDetail>
                    <BottomDetail></BottomDetail>
                </S.Main>
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
                            안녕하세요 ~ 8.18일에 저녁7시에
                            <br />
                            명동칼국수 맛집가서 같이 식사하실분구합니다. <br />
                            제가 여자여서 같은 동성친구랑 맛집탐방하고 싶습니다. 같이 만나서 메뉴도
                            많이 시키고 많이많이 먹을수 있는 분
                            구합니다ㄹ라ㅏ랄라ㅏ라라ㅏ랄라ㅏ라라라라ㅏ라라ㅏ랄라라라ㅏ라라ㅏ라라ㅏㄹ라ㅏ라라라라라라ㅏㄹㄹ라라라ㅏㄹ
                        </MatePostCotent>
                        <Navi>
                            <NaviText>위의 메이트와 약속을 잡고 싶다면?</NaviText>
                            <NaviBtn href="/">Go</NaviBtn>
                        </Navi>
                    </MatePost>
                </LeftBanner>
            </S.Container>
            <Review></Review>
        </>
    );
}

const LeftBanner = styled.div`
    flex: 1;
    height: auto;
    background: #f0f0f0;
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
    margin-top: ${(props) => (props.isMap ? '6px' : '13px')};
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
    padding: 31px 20px 23px 20px;
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
    height: 82px;
    font-size: 10px;
    font-weight: 400;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    text-align: left;
    margin-top: 12px;
`;

// 리뷰 들어갈 자리 임시로 지정
const Review = styled.div`
    height: 200vh;
`;
