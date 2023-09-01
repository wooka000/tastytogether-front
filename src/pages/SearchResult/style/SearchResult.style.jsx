import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
    `;

export const ResultDiv = styled.div`
    position: relative;
    margin : auto;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
`;

export const ResultStores = styled.div``;
export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        margin: 20px;
        border:none;
        border-radius: 10px;
        width: 100px;
        height: 40px;
        background-color: #FF9C5F;
        color: #FFF;
        font-size: 15px;
    }
`;
export const Result = styled.div``;
export const Search = styled.div``;
