import { styled } from 'styled-components';

export const Container = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 112vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Modal = styled.div`
    width: 700px;
    height: 600px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const ModalHeader = styled.div`
    width: 100%;
`;

export const CancellBtn = styled.button`
    float: right;
    background-color: transparent;
    font-size: 24px;
    font-weight: bold;
    border: none;
    padding: 5px 10px;
    color: lightgray;
    transition: all 250ms ease-out;
    &:hover {
        color: gray;
    }
`;

export const Form = styled.form`
    padding: 0 40px;
`;

export const FieldFile = styled.div`
    margin: 0 auto;
    width: 70%;
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 60px;
`;

export const FileLabel = styled.label`
    background-color: whitesmoke;
    color: gray;
    padding: 10px 30px;
    border-radius: 10px;
    font-weight: bold;
    display: block;
    height: 38px;
    cursor: pointer;
    transition: all 250ms ease-out;

    &:hover {
        color: black;
    }
`;

export const BgFileLabel = styled.label`
    background-color: whitesmoke;
    color: gray;
    padding: 10px 30px;
    border-radius: 10px;
    font-weight: bold;
    display: block;
    height: 38px;
    cursor: pointer;
    transition: all 250ms ease-out;

    &:hover {
        color: black;
    }
`;

export const FileInput = styled.input`
    display: none;
`;

export const BgFileInput = styled.input`
    display: none;
`;

export const PreviewImgs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    text-align: center;
    margin: 0 auto 15px;
`;

export const PreviewImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 80px;
    width: 70%;
    position: relative;
`;

export const CheckBtn = styled.button`
    border: none;
    border-radius: 10px;
    color: gray;
    font-weight: bold;
    padding: 10px;
    position: absolute;
    top: 20px;
    right: -80px;
    transition: all 250ms ease-out;

    &:hover {
        color: black;
    }
`;

export const Label = styled.label`
    color: gray;
    font-weight: bold;
`;

export const Input = styled.input`
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: whitesmoke;
    color: black;
`;

export const CheckText = styled.span`
    visibility: ${(props) => (props.check == '' ? 'hidden' : 'visible')};
    color: ${(props) => (props.check == '통과' ? 'green' : 'red')};
    font-size: 12px;
    padding-top: 5px;
`;

export const SubmitBtn = styled.button`
    display: block;
    background-color: lightskyblue;
    color: white;
    width: 70%;
    margin: 15px auto;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 20px;
    opacity: 0.5;
    transition: all 250ms ease-out;

    &:hover {
        opacity: 0.8;
    }
`;
