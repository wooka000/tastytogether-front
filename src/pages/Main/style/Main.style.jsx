import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
`;

export const BoardContainer = styled.div`
    transform: translateY(450px);
    text-align: center;
    margin: 0 auto;
    color: black;
`;

export const BoardTitle = styled.h3`
    font-size: 24px;
    margin-bottom: 30px;
`;

export const Text = styled.span`
    color: var(--color-accent);
    font-size: 30px;
`;
