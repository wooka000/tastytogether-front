import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
`;
export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FindText = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    width: 600px;
    height: 44px;
    color: #000;
    font-family: Inter;
    font-size: 50px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;

export const BannerBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 100%;
    height: 200px;
    background-color: #ff914d;
    position: relative;
    & img {
        display: block;
        margin: auto;
        max-width: 100%;
        max-height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    & button {
        margin-right: 20px;
        padding: 10px 30px;
        border-radius: 30px;
        background-color: transparent;
        color: #ffff;
        font-weight: 600;
        cursor: pointer;
        border: 2px solid #ffff;
        outline: none;
        font-size: 20px;
        position: absolute;
        bottom: 20px;
        right: 20px;
        transition: all 250ms ease-out;
        &:hover {
            background-color: #ffff;
            color: orange;
        }
    }
`;
export const SearchForm = styled.form`
    margin-left: 300px;
    align-self: flex-start;
    border-radius: 30px;
    background-color: #ffff;
    width: 250px;
    height: 50px;
    margin-top: 20px;
`;
export const SubmitBtn = styled.button`
    border: none;
    outline: none;
    font-size: 24px;
    background-color: transparent;
    color: grey;
`;
export const SearchInput = styled.input`
    font-size: 20px;
    padding: 10px;
    width: 70%;
    border: none;
    outline: none;
    background-color: transparent;
    &::placeholder {
        font-weight: bold;
    }
`;

export const StyledBoxImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    cursor: pointer;
`;

export const StyledBoxImage = styled.img`
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-out;
`;

export const PostInfo = styled.div`
    width: 100%;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
`;

export const PostInfoText = styled.p`
    margin: 4px 0;
    font-size: 14px;
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const PageNumber = styled.div`
    margin: 0 5px;
    padding: 5px 10px;
    background-color: ${({ selected }) => (selected ? '#FF914D' : '#FFF')};
    color: ${({ selected }) => (selected ? '#FFF' : '#000')};
    border-radius: 5px;
    cursor: pointer;
`;

export const StyledBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 1550px;
    height: 600px;
    margin: 30px 90px 206px;
    border-radius: 30px;
    background: #fff;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
export const StyledBox = styled.div`
    width: 260px;
    height: 40%;
    border-radius: 30px;
`;
