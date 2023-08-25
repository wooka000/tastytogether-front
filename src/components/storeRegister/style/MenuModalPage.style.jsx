import styled from 'styled-components';

export const MenuModal = styled.div`
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
    .menu_title{
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
    .form_div{
        display: flex;
        justify-content: center;
        position: relative;
        bottom: -70px;
        left: 70px;
        margin-right: 100px;
    }
    #button_div{
        width: 10%;
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
            right: 100px;
            top: 40px;
            background-color: #B0B0B0;
            color: #FFF;
            border:none;
            text-align: center;
            font-size: 36px;
            &:active {
                filter: brightness(70%);
            }
        }
        .close_button{
            width: 50px;
            height: 50px;
            position: absolute;
            right: 40px;
            top: 40px;
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
export const MenuForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 130px;
    #item_menu{
        width: 600px;
        height: 40px;
        border: none;
        padding: 10px;
        text-align: center;
        margin: 5px;
        font-weight: 700;
        font-size: 30px;
        color: #636363;
    }
    #item_price{
        width: 300px;
        height: 40px;
        border: none;
        padding: 10px;
        text-align: center;
        margin: 5px;
        font-weight: 700;
        font-size: 30px;
        color: #636363;
    }
    .menu_line{
        display: flex;
        margin-bottom: 10px;
        align-items: center;
        .menu{
            width: 600px;
            height: 70px;
            border: none;
            padding: 10px;
            text-align: center;
            margin: 5px;
            font-size: 30px;
            border-radius: 10px;
        }
        div{
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 70px;

            .price{
                width: 300px;
                height: 70px;
                border: none;
                padding: 10px;
                text-align: center;
                margin: 5px;
                font-size: 30px;
                border-radius: 10px;
            }
            p{
                padding: 10px;
                text-align: right;
                margin: 5px;
                font-size: 30px;
                color: #636363;
            }
        }
    }
`