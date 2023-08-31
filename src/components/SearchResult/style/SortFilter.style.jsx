import styled from 'styled-components';

export const Sort = styled.div`
    width: 985px;
    height: 70px;
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    justify-content: flex-start;
    align-items: center;
`
export const SortTitle = styled.div`
    display: flex;
    img{
        width: 30px;
        height: 30px;
        margin-right: 15px;
    }
    h4{
        font-size: 25px;
        margin-right: 50px;
    }
`
export const SortButton =styled.button`
    width: 120px;
    height: 50px;
    font-size: 15px;
    margin-right: 15px;
    box-sizing: border-box;
    border: 1px solid #f0f0f0;
    border-radius: 20px;
    background: white;
    font-size: 20px;
    font-weight: 600;
    border: none;
    background-color: #f0f0f0;
    transition: all 250ms ease-out;
    &:hover{
        background-color: var(--color-accent);
        color: white;
    }
`
