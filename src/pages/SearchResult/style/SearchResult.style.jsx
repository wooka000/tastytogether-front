import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
`;

export const Nav = styled.div`
    width: 320px;
    height: 600px;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 140px;
    left: 70px;
    border-radius: 10px;
`;

export const ResultDiv = styled.div`
    position: absolute;
    top: 140px;
    left: 420px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
`;

export const ResultStores = styled.div``;
export const Pagination = styled.div``;
export const Result = styled.div``;
export const Search = styled.div``;
