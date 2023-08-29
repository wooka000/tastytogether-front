import React, { useState, useEffect } from 'react';
// import React from 'react';
import * as S from './style/LeftBanner.style';
import { useNavigate } from 'react-router-dom';
import KakaoMap from './KakaoMap';
import axios from '../../utils/axios';

export default function LeftBanner({ storeName, storeAddress }) {
    const navigate = useNavigate();
    const { latitude, longitude, city, state } = storeAddress;
    const [board, setBoard] = useState([]);
    const keyword = `${city} ${state}`;

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`regionSearch?value=${keyword}`);
            const data = res.data;
            setBoard(data[0]);
        };
        getPost();
    }, []);
    return (
        <S.LeftBannerWrapper>
            <S.MiniMap>
                <S.MapImage>
                    <KakaoMap
                        storeName={storeName && storeName}
                        latitude={latitude}
                        longitude={longitude}
                    ></KakaoMap>
                </S.MapImage>
                <S.MapInfoTitle>{storeName}</S.MapInfoTitle>
                <S.Navi isMap={true}>
                    <S.NaviText isMap={true}>맛집으로 길찾기 하고 싶다면?</S.NaviText>
                    <S.NaviBtn
                        onClick={() =>
                            window.open(`https://map.kakao.com/link/to/${storeName},${latitude}
,${longitude}`)
                        }
                    >
                        Go
                    </S.NaviBtn>
                </S.Navi>
            </S.MiniMap>
            <S.MatePost>
                <S.MatePostTitle>{board && board.title}</S.MatePostTitle>
                <S.TitleLine></S.TitleLine>
                <S.MatePostCotent>{board && board.content}</S.MatePostCotent>
                <S.Navi>
                    <S.NaviText>위의 메이트와 약속을 잡고 싶다면?</S.NaviText>
                    <S.NaviBtn onClick={() => navigate(`/post/${board._id}`)}>Go</S.NaviBtn>
                </S.Navi>
            </S.MatePost>
        </S.LeftBannerWrapper>
    );
}

// 메이트 글 없을 때
// 해당되는 식당의 메이트 게시글이 없습니다 로 내용 바껴야 함 (폰트사이즈 15px로)
// 없습니다 옆에 아이콘 추가되어야 함
// 위의 메이트 -> 메이트( margin-left 11추가)
// Title Line 위치 -> margin-top 95px 추가
