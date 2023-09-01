import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    margin-top: 100px;
`;

export const Form = styled.form`
    width: 800px;
    margin: 140px auto 40px;
    border-radius: 10px;
    background: white;
    padding: 40px;
    display: flex;
    flex-direction: column;
`;

export const ContentBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const GridBox = styled.div`
    display: grid;
    width: 100%;
    margin: 10px 0px;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 1fr;
    grid-template-columns: 100px auto;
    align-items: center;
`;

export const Title = styled.div`
    color: #989797;
    font-size: 18px;
    font-weight: 700;
    width: 100px;
`;

export const InputBox = styled.input`
    width: 71%;
    border: 1px solid gray;
    border-radius: 10px;
    font-size: 16px;
    padding: 10px 15px;
    &:focus {
        outline: 2px solid var(--color-accent);
    }
    &::placeholder {
        color: #989797;
        font-size: 16px;
    }
    &::-webkit-inner-spin-button {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }
`;

export const InputLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 11px;
    color: #989797;
    font-weight: 400;
    cursor: pointer;
`;

export const RadioDesign = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RadioInput = styled.input`
    display: none;
    &:checked + div {
        &::after {
            content: '';
            display: block;
            border-radius: 50%;
            width: 14px;
            height: 14px;
            background-color: var(--color-accent);
        }
    }
`;

export const TimeInput = styled.input`
    border: none;
    outline: none;
    border-bottom: 1px solid #989797;
    text-align: center;
    font-size: 16px;
    color: var(--color-accent);
    width: 50px;
    margin: 0px 5px;
    padding-bottom: 4px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &::placeholder {
        color: #989797;
        font-size: 16px;
    }
`;

export const ClosedDayDesign = styled.div`
    width: 22px;
    height: 22px;
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
            color: var(--color-accent);
        }
    }
`;

export const MenuNameChart = styled.table`
    width: 300px;
    height: 144px;
    border: 1px solid var(--color-accent);
    border-collapse: collapse;
`;

export const ChartHead = styled.th`
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    background-color: var(--color-accent);
    height: 36px;
`;

export const ChartContent = styled.td`
    border: 1px solid #989797;
    text-align: center;
    color: #989797;
    font-size: 16px;
    font-weight: 700;

    &:first-child {
        border-top: none;
    }
`;

export const ChartInput = styled.input`
    border: none;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    outline: none;
    &::placeholder {
        color: #989797;
        font-size: 16px;
        text-align: center;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const DividerLine = styled.div`
    width: 100%;
    height: 1px;
    margin-top: 30px;
    background: #d9d9d9;
`;

export const EditFormBtns = styled.div`
    margin-top: 30px;
    padding-top: 30px;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid lightgray;
`;

export const EditFormBtn = styled.button`
    text-align: center;
    border: none;
    width: 30%;
    height: 100%;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
    &:first-child {
        border: 1px solid lightgrey;
        background-color: #fff;
        color: gray;
        transition: all 250ms ease-out;
        &:hover {
            background-color: lightgrey;
            color: white;
        }
    }
    &:last-child {
        background-color: var(--color-accent);
        color: white;
        transition: all 250ms ease-out;
        &:hover {
            color: var(--color-accent);
            background-color: white;
            border: 1px solid var(--color-accent);
        }
    }
`;
