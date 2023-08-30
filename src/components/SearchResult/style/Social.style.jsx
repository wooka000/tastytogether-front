import styled from 'styled-components';


export const Social = styled.div`
    width: 260px;
    height: 125px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    margin-bottom: 30px;
`

export const MyFilterTitle = styled.div`
    font-size: 1.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
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
export const MyFilterContent = styled.div`
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 10px;
        &:hover{
            cursor: pointer;
        }
        img{
            width: 20px;
            margin-right: 10px;
        }
        h3{
            font-size: 1.1rem;
            &:hover{
                background-color: var(--color-accent);
                color: white;
                border-radius: 3px;
            }
        }
    }
`