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
        font-size: 20px;
        .store_check{
            width: 107px;
            height: 52px;
            border-radius: 5px;
            background: #FF9C5F;
            font-size: 20px;
        }
        .input{
            flex: 1;
            margin-right: 10px;
            height: 52px;
            border: none;
            font-size: 22px;
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

export const TypeModal = styled.div`
    width: 1400px;
    height: 700px;
    z-index: 999;
    position: absolute;
    // 브라우저 기준으로 작동
    top: 50%;
    left: 50%;
    // 본인 크기 기준으로 작동
    transform: translate(-50%, -50%);
    background-color: #F8F9FA;
    border: 8px solid #FF9C5F;
    border-radius: 8px;

    .type_title{
        img{
            width: 100px;
            height: 93px;
            position: absolute;
            left: 25px;
            top: 25px;
        }
        p{
            width: 740px;
            height: 93px;
            position: absolute;
            color: #636363;
            left: 22%;
            text-align: center;
            font-size: 50px;
            font-weight: bold;
            top: 40px;
        }
    }

    .close_button_div{
        width: 10%;
        box-sizing: border-box;
        .close_button{
            width: 50px;
            height: 50px;
            position: absolute;
            right: 3%;
            top: 5%;
            background-color: #B0B0B0;
            color: #FFF;
            border:none;
            text-align: center;
            font-size: 36px;
            &:active {
                filter: brightness(70%);
            }
        }
    }
`
export const TypeButtons = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 170px;

    .button_line{
        display: flex;
        flex-direction: row;
        
        .type_button{
            width: 150px;
            height: 150px;
            margin: 40px 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &:active {
                    transform: scale(1.1);
                    filter: brightness(70%);
            }  
            img{
                width: 140px;
                height: 140px;
                margin-bottom: 20px;
                &:hover{
                    transform: scale(1.1);
                }
            }
            p{
                width: 140px;
                text-align: center;
                font-size: 25px;
                color: #636363;
                font-weight: 1000;
            }
        }
    }
`