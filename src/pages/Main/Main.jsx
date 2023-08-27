import React from 'react';
import Banner from '../../components/Banner/Banner';
import BoardAnime from '../../components/BoardAnime/BoardAnime';
import * as S from './style/Main.style';

export default function Main() {
    return (
        <S.Container>
            <Banner />
            <S.BoardContainer>
                <S.BoardTitle>
                    <S.Text>혼밥 메이트 게시판</S.Text>에 올라온 게시글
                </S.BoardTitle>
                <BoardAnime />
            </S.BoardContainer>
        </S.Container>
    );
}

// Banner랑 BoardAnime는 styled component로 꾸민 html 태그가 아니라 컴포넌트여서 S. 없음
