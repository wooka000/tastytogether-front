import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 6%; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
`;

export const BoxContainer = styled.div`
    width: 1600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Box = styled.div`
    width: 1500px;
    border: 1px solid #ff914d;
    background-color: white;
    margin-bottom: 35px;
`;

export const Box1 = styled(Box)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 70px;

    input[type='date'],
    input[type='text'] {
        margin-left: 10px;
        width: 200px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #ff914d;
        text-align: center;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
    }
`;

export const Box2 = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 280px;
    input[type='file'] {
        display: none;
    }
`;

export const ImageUploadIcon = styled.div`
    font-size: 100px;
    color: black;
    cursor: pointer;
`;
export const Box3 = styled(Box)`
    height: 80px;
    textarea {
        width: 95%;
        height: 90%;
        border: none;
        resize: none;
        font-size: 20px;
        font-style: normal;
    }
`;

export const Box4 = styled(Box)`
    height: 380px;
    textarea {
        width: 95%;
        height: 90%;
        border: none;
        resize: none;
        font-size: 20px;
        font-style: normal;
    }
`;
export const Btn = styled.button`
    display: flex;
    justify-content: space-between;
    border: none;
`;

export const ButtonCancel = styled.button`
    width: 720px;
    height: 55px;
    margin-right: 50px;
    background-color: #d9d9d9;
    font-size: 20px;
    font-weight: 700;
    border: none;
`;
export const ButtonSubmit = styled.button`
    width: 720px;
    height: 55px;
    background-color: #ff914de5;
    font-size: 20px;
    font-weight: 700;
    border: none;
`;
