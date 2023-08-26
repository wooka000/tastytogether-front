import styled from 'styled-components';

export const TypeModal = styled.form`
    width: 850px;
    height: 700px;
    z-index: 999;
    position: absolute;
    // 브라우저 기준으로 작동
    top: 50%;
    left: 50%;
    // 본인 크기 기준으로 작동
    transform: translate(-50%, -50%);
    background-color: #F8F9FA;
    border: 7px solid #FF9C5F;
    border-radius: 0px;
 
    .type_title{
        p{
            width: 700px;
            height: 93px;
            position: absolute;
            color: #636363;
            text-align: center;
            font-size: 33px;
            font-weight: bold;
            top: 75px;
            left: 9%
        }
    }

    .close_button_div{
        width: 5%;
        box-sizing: border-box;
        .close_button{
            width: 37px;
            height: 37px;
            position: absolute;
            right: 0;
            bottom: 0;
            background-color: #B0B0B0;
            opacity: 80%;
            color: #FFF;
            border:none;
            text-align: center;
            font-size: 25px;
            border-radius: 0;
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
            width: 100px;
            height: 140px;
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
                width: 110px;
                height: 110px;
                margin-bottom: 23px;
                &:hover{
                    transform: scale(1.1);
                }
            }
            p{
                width: 120px;
                text-align: center;
                font-size: 20px;
                color: #636363;
                font-weight: 1000;
            }
        }
    }
`