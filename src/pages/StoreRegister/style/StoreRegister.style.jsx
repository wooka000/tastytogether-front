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
    max-width: 804px;
    margin: 0 auto;
    height: 50%;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
    padding: 30px 14px 14px 14px;
    display: flex;
    flex-direction: column;
`;

export const EditDaumBox = styled.div`
    background-color: purple;
`;

export const EditContentBox = styled.div`
    background-color: red;
    display: flex;
    margin-top: 10px;
`;

export const EditTitle = styled.div`
    background-color: green;
`;

export const InputBox = styled.input`
    background-color: blue;
`;

export const SelectBox = styled.div`
    display: flex;
`;

export const InputLabel = styled.label``;

export const RadioDesign = styled.div``;

export const RadioInput = styled.input``;

export const TimeInput = styled.input``;

export const ClosedDayDesign = styled.div``;

export const ClosedDayInput = styled.input``;

export const MenuNameChart = styled.table``;

export const ChartHead = styled.th``;

export const ChartContent = styled.td``;

export const ChartInput = styled.input``;

export const DividerLine = styled.div``;

export const EditFormBtn = styled.button``;

export const EditFormBtns = styled.div``;
