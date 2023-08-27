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

        label{
            display: flex;
            justify-content: center;
            align-items: center;
        }

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
        .day{
            margin-right: 50px;
            line-height: 18px;
            display:flex;
            padding-top:20px;
            align-items: center;
            input{
                width: 25px;
                height: 25px;
                margin-right: 15px;
        }
            span{
                font-size: 25px;
            }
        }
    }
`

