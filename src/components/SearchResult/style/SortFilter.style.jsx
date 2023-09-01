import styled from 'styled-components';

export const Sort = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;
    width: 985px;
    height: 70px;
`
export const SortTitle = styled.div`
    display: flex;
    img{
        margin-right: 15px;
        width: 30px;
        height: 30px;
    }
    h4{
        margin-right: 50px;
        font-size: 25px;
    }
`
export const SortButton =styled.button`
    margin-right: 15px;
    box-sizing: border-box;
    border: 1px solid #f0f0f0;
    border-radius: 20px;
    background: white;
    font-size: 20px;
    font-weight: 600;
    background-color: #f0f0f0;
    width: 120px;
    height: 50px;
    font-size: 15px;
    transition: all 250ms ease-out;
    &:hover{
        background-color: var(--color-accent);
        color: white;
    }
`
