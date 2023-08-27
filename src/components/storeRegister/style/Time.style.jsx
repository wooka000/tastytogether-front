import styled from 'styled-components';

export const TableLine = styled.div`
    width: 1360px;
    height: 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid #F0F0F0;
    border-bottom: 1px solid #F0F0F0;

    .table_title{
        width: 260px;
        height: 35px;
        font-size: 25px;
        text-align: center;
        font-weight: 600;

    }
    .table_content{
        width: 1082px;
        height: 35px;
        padding-left: 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: 25px;

        .input{
            flex: 1;
            margin-right: 10px;
            height: 52px;
            border: none;
            font-size: 25px;
            color: #FF9C5F;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        input{
            font-size: 25px;
            color: #FF9C5F;
            padding: 10px;
        }
        .time{
            width: 85px;
            height: 42px;
            border:none;
            border-bottom: 1px solid lightgray;
            margin: 0 20px 0 0;
            text-align: center;
        }
            span{
                font-size: 25px;
            }
        }
    }
`
