import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
    padding: 40px 0px;
    display: flex;
    justify-content: center;
    background-color: orange;
`;

export const DetailEditForm = styled.form`
    width: calc(100% - 20px);
    max-width: 800px;
    margin: 0 auto;
    /* height:  */
    border-radius: 10px;
    background: #fff;
    padding: 30px 20px 20px 20px;
    display: flex;
    flex-direction: column;
`;

export const EditDaumBox = styled.div`
    background-color: purple;
    height: 500px;
`;

export const GridBox = styled.div`
    display: grid;
    width: 100%;
    height: 30%;
    margin: 10px 0px;
    background-color: skyblue;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 1fr 1.5fr;
    grid-template-columns: 100px auto;
    row-gap: 5px;
    column-gap: 5px;
    /* justify-items: center; */
    align-items: center;
`;

export const EditContentBox = styled.div`
    display: flex;
    width: 95%;
    background-color: red;
    span {
        background-color: yellow;
    }
`;

export const EditTitle = styled.div`
    background-color: green;
`;

export const InputBox = styled.input`
    background-color: blue;
    width: 95%;
`;

export const InputLabel = styled.label`
    width: 50%;
    display: flex;
`;

export const RadioDesign = styled.div``;

export const RadioInput = styled.input``;

export const TimeInput = styled.input`
    width: 80px;
`;

export const ClosedDayDesign = styled.div``;

export const ClosedDayInput = styled.input``;

export const MenuNameChart = styled.table``;

export const ChartHead = styled.th``;

export const ChartContent = styled.td``;

export const ChartInput = styled.input``;

export const DividerLine = styled.div``;

export const EditFormBtns = styled.div`
    background-color: brown;
    height: 50px;
`;

export const EditFormBtn = styled.button``;
