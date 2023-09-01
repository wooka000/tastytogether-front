import styled from 'styled-components';

export const TypeFilter = styled.div`
    margin-bottom: 20px;
`
export const TypeFilterTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    font-size: 1.3rem;
`
export const TypeFilterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const TypeLabel = styled.label`
    margin-bottom: 10px;
    &:hover{
        cursor: pointer;
    }
`
export const TypeFilterRadio = styled.input`
    margin-right: 10px;
    width: 20px;
    height: 20px;
`
export const TypeFilterSpan = styled.span`
    font-size: 1.1rem;
    font-weight: 600;
    &:hover{
        opacity: 70%;
        border-radius: 3px;
        background-color: var(--color-accent);
        color: white;
    }
`
export const Square = styled.div`
    width: 25px;
    height: 25px;
    margin-right: 10px;
    border: 5px solid var(--color-accent);
    transition: all 250ms ease-out;
    border-radius: 100%;
    &:hover {
        background-color: var(--color-accent);
        color: #f0f0f0;;
    }

`