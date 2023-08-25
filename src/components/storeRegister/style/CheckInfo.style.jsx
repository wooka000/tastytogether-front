import styled from 'styled-components';

export const CheckDiv = styled.div`
    box-sizing: border-box;
    width: 1350px;
    height: 100px;
    border: 5px solid #FF9C5F;
    border-radius: 10px;
    padding: 25px 19px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    div {
        width: 50px;
        height: 50px;
        margin-right: 18px;
        box-sizing: border-box;
        img{
          width: 45px;
        }
    }
    p {
        text-align: center;
        font-size: 35px;
        font-weight: bold;
        color: #FF9C5F;
    }
`
