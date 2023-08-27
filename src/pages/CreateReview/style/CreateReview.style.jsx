import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
`;

export const ReviewCard = styled.div`
    background-color: white;
    width: 1150px;
    height: 650px;
    margin: 0 auto;
    margin-top: 150px;
    border-radius: 10px;
    padding: 50px;
`;

export const Title = styled.div`
    text-align: left;
    margin-bottom: 20px;
`;

export const Name = styled.span`
    font-size: 24px;
    color: var(--color-accent);
    font-weight: bold;
`;

export const Form = styled.form`
    display: flex;
    width: 100%;
    height: 500px;
    flex-direction: column;
    border: 2px solid lightgray;
    border-radius: 10px;
    padding: 30px;
`;

export const GradeList = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const GradeItem = styled.div`
    margin-right: 10px;
    opacity: ${(props) => (props.ischecked === 'yes' ? 1 : 0.4)};
    transition: all 250ms ease-out;

    &:hover {
        opacity: 1;
        transform: scale(1.1);
    }
`;

export const RadioBtn = styled.input`
    display: none;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LabelImg = styled.img`
    width: 50px;
    height: 50px;
    cursor: pointer;
`;

export const LabelText = styled.span`
    font-weight: bold;
    color: #ffc700;
    cursor: pointer;
`;

export const Content = styled.textarea`
    border: none;
    outline: none;
    font-size: 18px;
    padding: 0 10px;
    font-weight: bold;
`;

export const Files = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
`;

export const Preview = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 10px;
    background-color: black;
    position: relative;
    &:hover {
        button {
            display: block;
        }
        img {
            opacity: 0.5;
        }
    }
`;

export const PreviewImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
`;

export const RemoveBtn = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 26px;
    padding: 0 5px;
    display: none;
    color: white;
`;

export const ShowFile = styled.label`
    position: relative;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    background-color: transparent;
    border-radius: 10px;
    border: 1px dotted ${(props) => (props.count > 7 ? 'red' : 'gray')};
    cursor: pointer;
`;

export const ShowText = styled.div`
    font-size: 40px;
    color: ${(props) => (props.count > 7 ? 'red' : 'lightgray')};
`;

export const Count = styled.span`
    color: ${(props) => (props.count > 7 ? 'red' : 'gray')};
    position: absolute;
    top: 38px;
    right: -30px;
`;

export const File = styled.input`
    display: none;
`;

export const Btns = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const ResetBtn = styled.button`
    border: 2px solid lightgray;
    font-size: 20px;
    margin-right: 10px;
    padding: 10px 30px;
    border-radius: 30px;
    background-color: white;
    color: gray;
    transition: all 250ms ease-out;
    &:hover {
        border-color: grey;
        color: black;
    }
`;

export const SubmitBtn = styled.button`
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    color: white;
    background-color: gray;
    transition: all 250ms ease-out;
    &:hover {
        background-color: var(--color-accent);
        color: white;
    }
`;
