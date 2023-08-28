import React, { useEffect } from 'react';
import * as S from './style/LeftBanner.style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function StoreDetail({ storeName, storeAddress }) {
    const navigate = useNavigate();
    const region = `${storeAddress.city} ${storeAddress.state}`;
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`http://localhost:8080/regionSearch?value=${region}`);
            const data = res.data;
            console.log(data)
        };
        getPost();
    }, []);

    return (
        <S.LeftBannerWrapper>
            <S.MiniMap>
                <S.MapImage>카카오주소이미지</S.MapImage>
                <S.MapInfoTitle>{storeName}</S.MapInfoTitle>
                <S.Navi isMap={true}>
                    <S.NaviText isMap={true}>맛집으로 길찾기 하고 싶다면?</S.NaviText>
                    <S.NaviBtn onClick={() => navigate(`/`)}>Go</S.NaviBtn>
                </S.Navi>
            </S.MiniMap>
            <S.MatePost>
                <S.MatePostTitle>8월 11일 오레노라멘 가실 분 구합니다!</S.MatePostTitle>
                <S.TitleLine></S.TitleLine>
                <S.MatePostCotent>
                    안녕하세요 ~ 8.18일에 저녁7시에
                    <br />
                    명동칼국수 맛집가서 같이 식사하실분구합니다. <br />
                    제가 여자여서 같은 동성친구랑 맛집탐방하고 싶습니다. 같이 만나서 메뉴도 많이
                    시키고 많이많이 먹을수 있는 분
                    구합니다ㄹ라ㅏ랄라ㅏ라라ㅏ랄라ㅏ라라라라ㅏ라라ㅏ랄라라라ㅏ라라ㅏ라라ㅏㄹ라ㅏ라라라라라라ㅏㄹㄹ라라라ㅏㄹ
                </S.MatePostCotent>
                <S.Navi>
                    <S.NaviText>위의 메이트와 약속을 잡고 싶다면?</S.NaviText>
                    <S.NaviBtn onClick={() => navigate(`/`)}>Go</S.NaviBtn>
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
