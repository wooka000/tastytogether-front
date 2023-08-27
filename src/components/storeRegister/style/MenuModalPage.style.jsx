import styled from 'styled-components';

export const MenuModal = styled.div`
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
    .menu_title{
        img{
            display: none;
        }
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
    .form_div{
        display: flex;
        justify-content: center;
        position: relative;
        bottom: -70px;
        left: 70px;
        margin-right: 100px;
    }
    #button_div{
        width: 5%;
        box-sizing: border-box;
        position: position;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;

        .register_button{
            width: 100px;
            height: 50px;
            position: absolute;
            right: 150px;
            top: 60px;
            background-color: none;
            color: #FFF;
            border:none;
            text-align: center;
            font-size: 25px;
            &:hover {
                filter: brightness(100%);
            }
            &:active {
                filter: brightness(70%);
            }
        }
        .close_button{
            width: 37px;
            height: 37px;
            position: absolute;
            right: 0;
            bottom: 0;
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
export const MenuForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 130px;
    #item_menu{
        width: 400px;
        height: 40px;
        border: none;
        padding: 10px;
        text-align: center;
        margin: 5px;
        font-weight: 700;
        font-size: 25px;
        color: #636363;
    }
    #item_price{
        width: 200px;
        height: 40px;
        border: none;
        padding: 10px;
        text-align: center;
        margin: 5px;
        font-weight: 700;
        font-size: 25px;
        color: #636363;
    }
    .menu_line{
        display: flex;
        margin-bottom: 10px;
        align-items: center;
        .menu{
            width: 450px;
            height: 70px;
            border: none;
            padding: 10px;
            text-align: center;
            margin: 5px;
            font-size: 25px;
            border-radius: 10px;
        }
        div{
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 70px;

            .price{
                width: 200px;
                height: 70px;
                border: none;
                padding: 10px;
                text-align: center;
                margin: 5px;
                font-size: 25px;
                border-radius: 10px;
            }
            p{
                padding: 10px;
                text-align: right;
                margin: 5px;
                font-size: 25px;
                color: #636363;
            }
        }
    }
`