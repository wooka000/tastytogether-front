import styled from 'styled-components';

export const TableLine = styled.div`
    width: 1360px;
    height: 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-top: 1px solid #F0F0F0;
    border-bottom: 1px solid #F0F0F0;
    font-weight: 600;

    .table_title{
        width: 260px;
        height: 35px;
        font-size: 25px;
        padding: 20px;
        text-align: center;
    }
    .table_content{
        width: 1082px;
        height: 35px;
        padding: 12px 0 0 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        line-height: 18px;
        font-size: 25px;

        .input{
            flex: 1;
            margin-right: 10px;
            height: 52px;
            border: none;
            font-size: 25px;
            color: #FF9C5F;
            padding: 10px;
        } 
        button{
            width: 107px;
            height: 52px;
            border-radius: 5px;
            border: none;
            background-color: lightgray;
            font-size: 18px;
            color: white;
            font-weight: 600;
            &:hover{
                background-color: #FF9C5F;
            }
            &:active {
                filter: brightness(70%);
            }
        }
    }
 `
 export const TypeButton = styled.div`
    width: 107px;
    height: 52px;
    border-radius: 5px;
    border: none;
    background-color: lightgray;
    font-size: 18px;
    color: white;
    margin-left: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #FF9C5F;
    }
    &:active {
        filter: brightness(70%);
    }
 `
