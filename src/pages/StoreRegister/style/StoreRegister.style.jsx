import styled from 'styled-components';

export const Container = styled.div`
min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
height: 1900px;
`;
export const Article = styled.div`
position: relative;
top: 101px;
width: 1440px;
background-color: #FFFF;
padding: 17px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: auto;
border-radius: 10px;
`
export const RegisterForm = styled.form`
box-sizing: border-box;
width: 1404px;
padding: 30px;
border: none;
margin-bottom: 20px;
`

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
        font-size: 20px;
        font-weight: 600;

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
            font-size: 20px;
            color: #FF9C5F;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        input{
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
            margin-left: 20px;
            right: 20px;
            &:hover{
                background-color: #FF9C5F;
            }
            &:active {
                filter: brightness(70%);
            }
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
        #img_div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            aligh-items: center;
            #store_img{

            }
        }

        #file-upload-button{
            width: 107px;
            height: 52px;
            border-radius: 5px;
            border: none;
            background-color: lightgray;
            font-size: 18px;
            color: white;
            margin-left: 20px;
            &:hover{
                background-color: #FF9C5F;
            }
            &:active {
                filter: brightness(70%);
            }
        }
    }
`

export const RegisterButton = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    height: 150px;
    margin-top: 100px;
    border:none;
    background-color: #fff;
    button{
        width: 400px;
        height: 90px;
        background-color: #FF9C5F;
        border-radius: 8px;
        border: none;
        color: #fff;
        font-size: 36px;
    }
    &:active {
        filter: brightness(70%);
    }
`

