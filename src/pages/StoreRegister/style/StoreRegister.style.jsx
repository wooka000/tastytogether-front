import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
    padding: 40px 0px;
    display: flex;
    justify-content: center;
`;

export const DetailEditForm = styled.form`
    width: calc(100% - 20px);
    max-width: 804px;
    margin: 0 auto;
    border-radius: 10px;
    background: #fff;
    padding: 30px 20px 20px 20px;
    display: flex;
    flex-direction: column;
`;

//

export const EditDaumBox = styled.div`
    background-color: purple;
    height: 650px;
`;
//

export const GridBox = styled.div`
    display: grid;
    width: 100%;
    height: 30%;
    margin: 10px 0px;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 1fr 1fr;
    grid-template-columns: 100px auto;
    align-items: center;
`;

export const EditTitle = styled.div`
    color: #989797;
    font-size: 15px;
    font-weight: 700;
    height: 100%;
    display: flex;
    align-items: center;
    width: 100px;
    position: relative;

    /* &:not(.menu)::before {
        content: '';
        width: 90%;
        height: 1px;
        position: absolute;
        bottom: 0px;
        background-color: #989797;
    }
    &::after {
        content: '';
        width: 1px;
        height: 110%;
        position: absolute;
        right: -5px;
        background-color: #989797;
    } */
`;
export const InputBox = styled.input`
    width: 95%;
    height: 32px;
    margin-left: 20px;
    border: 1px solid #989797;
    border-radius: 5px;
    text-indent: 12px;
    border-bottom: 1px solid #989797;
    &:focus {
        outline: 2px solid rgba(255, 145, 77, 0.6);
    }
    &::placeholder {
        color: #989797;
        font-size: 13px;
        text-indent: 12px;
    }
`;

export const EditContentBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    span {
        font-size: 20px;
        color: #989797;
    }
`;

export const InputLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 11px;
    color: #989797;
    font-weight: 400;
`;

export const RadioDesign = styled.div`
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background: #d9d9d9;
`;

export const RadioInput = styled.input`
    display: none;
    &:checked + div {
        &::after {
            content: '';
            display: block;
            margin: 3px;
            border-radius: 50%;
            width: 13px;
            height: 13px;
            background-color: #ff914d;
        }
    }
`;

export const TimeInput = styled.input`
    width: 42px;
    height: 29px;
    border: none;
    border-bottom: 1px solid #989797;
    margin-top: -6px;
    text-align: center;
    font-size: 15px;
    color: #ff9c5f;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #989797;
        font-size: 15px;
    }
    width: 50px;
    margin: 0px 5px;
`;

export const ClosedDayDesign = styled.div`
    width: 21px;
    height: 21px;
    border-radius: 5px;
    border: 1px solid #989797;
`;

export const ClosedDayInput = styled.input`
    display: none;
    margin-top: -6px;
    &:checked + div {
        &::after {
            content: '✔';
            display: block;
            text-align: center;
            color: #ff914d;
        }
    }
`;

export const MenuNameChart = styled.table`
    width: 300px;
    height: 144px;
    border-collapse: collapse;
`;

export const ChartHead = styled.th`
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    background-color: #ff914d;

    border-top-left-radius: ${(props) => (props.isLeft ? '5px' : '0px')};
    border-top-right-radius: ${(props) => (props.isLeft ? '0px' : '5px')};
    height: 36px;
`;

export const ChartContent = styled.td`
    border: 1px solid #989797;
    text-align: center;
    color: #989797;
    font-size: 13px;
    font-weight: 700;

    &:first-child {
        border-top: none;
    }
`;

export const ChartInput = styled.input`
    height: 18px;
    border: none;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    &::placeholder {
        color: #989797;
        font-size: 14px;
        text-align: center;
    }
    &:focus {
        outline: none;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const DividerLine = styled.div`
    width: 776px;
    height: 1px;
    margin-top: 140px;
    background: #d9d9d9;
`;

export const EditFormBtns = styled.div`
    width: 166px;
    height: 40px;
    border-radius: 5px;
    /* border: 1px solid ${(props) => (props.isOrange ? '#ff914d' : ' #989797')};
    background: ${(props) => (props.isOrange ? '#ff914d' : '#FFF')}; */
    text-align: center;
    /* color: ${(props) => (props.isOrange ? '#fff' : '#989797')}; */
    font-size: 17px;
    font-weight: 400;
`;

export const EditFormBtn = styled.button`
    display: flex;
    padding-left: 200px;
    padding-right: 200px;
    justify-content: space-between;
    margin-top: 40px;
`;
