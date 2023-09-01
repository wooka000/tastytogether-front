import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
`;

export const Main = styled.div`
    flex: 3;
    height: auto;
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 44px 263px 25px 0px;
`;

// 리뷰 들어갈 자리 임시로 지정
export const Review = styled.div`
    height: 200vh;
`;
