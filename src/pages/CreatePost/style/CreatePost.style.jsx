import styled ,{css} from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    margin-top: 6%;
`;

export const BoxContainer = styled.div`
    width: 1600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Box = styled.div`
    width: 700px;
    border: 1px solid #ff914d;
    background-color: white;
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
    height: 350px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    textarea {
        width: 95%;
        height: 90%;
        border: none;
        resize: none;
        font-size: 20px;
        font-style: normal;
        display:flex;
        outline:none;
    }
`;

export const Box4 = styled(Box)`
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    textarea {
        width: 95%;
        height: 90%;
        border: none;
        resize: none;
        font-size: 20px;
        font-style: normal;
        outline:none;
    }
`;
export const Btn = styled.button`
    display: flex;
    justify-content: space-between;
    border: none;
`;

const buttonStyles = css`
    width: 350px;
    height: 55px;
    font-size: 20px;
    font-weight: 700;
    border: none;
    transition: background-color 0.3s ease; 
`;

export const ButtonCancel = styled.button`
    ${buttonStyles}
    background-color: #ccc7c7;

    &:active { 
        background-color: #b0abab;
    }
`;

export const ButtonSubmit = styled.button`
    ${buttonStyles}
    background-color: #ff914d;
    opacity: 90%;

    &:active { 
        background-color: #e57f42;
    }
`;
