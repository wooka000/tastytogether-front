import React from 'react';
import styled from 'styled-components';

export default function NotFound() {
    return <Container>Page NotFound😅</Container>;
}

const Container = styled.div`
    height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
`;
