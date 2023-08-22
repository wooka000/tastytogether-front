import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import minilogo from './minilogo.png';

// import PropTypes from 'prop-types';


// 모달창 크기
const MenuModal = styled.div`
    width: 1400px;
    height: 700px;
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #F8F9FA;
    border: 8px solid #FF9C5F;
    border-radius: 8px;

    .menu_title{
        img{
            width: 100px;
            height: 93px;
            position: relative;
            left: 25px;
            top: 25px;
        }
        p{
            width: 740px;
            height: 93px;
            position: absolute;
            color: #636363;
            left: 230px;
            text-align: center;
            font-size: 30px;
            font-weight: bold;
            top: 40px;
        }
    }
    .form_div{
        display: flex;
        justify-content: center;
        position: relative;
        bottom: -70px;
        left: 100px;
        margin-right: 100px;
    }

`
const MenuForm = styled.form`
    width: 1000px;
    height: 245px;
    margin-right: 100x;
    font-size: 24px;
    .menu_line{
        display: flex;
        margin-bottom: 10px;
        .menu0{
            width: 600px;
            height: 40px;
            border: none;
            padding: 10px;
            text-align: center;
            margin: 5px;
            font-weight: 700;
        }
        .price0{
            width: 200px;
            height: 40px;
            border: none;
            padding: 10px;
            text-align: center;
            margin: 5px;
            font-weight: 700;
        }
        .menu{
            width: 600px;
            height: 60px;
            border: none;
            padding: 10px;
            text-align: center;
            margin: 5px;
            font-size: 32px;
        }
        div{
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .price{
                width: 200px;
                height: 60px;
                border: none;
                padding: 10px;
                text-align: center;
                margin: 5px;
                font-size: 32px;
            }
            p{
                padding: 10px;
                text-align: right;
                margin: 5px;
            }
    
        }
    }
`

const ButtonDiv = styled.div`
    width: 400px;
    height: 245px;
    right: 80px;
    top: 150px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .register_button{
        width: 194px;
        height: 90px;
        background-color: #B0B0B0;
        color: #FFF;
        border:none;
        text-align: center;
        font-size: 36px;
        margin-bottom: 20px;
        &:active {
            filter: brightness(70%);
        }
    }
    .close_button{
        width: 194px;
        height: 90px;
        right: 10%;
        top: 45%;
        background-color: #B0B0B0;
        color: #FFF;
        border:none;
        text-align: center;
        font-size: 36px;
        &:active {
            filter: brightness(70%);
        }
    }
`



function MenuModalPage({ setModalOpen }){
    const closeModal = () =>{
        setModalOpen(false);
    };
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const handler = (event) => {
            if(modalRef.current && !modalRef.current.contains(event.target)){
                setModalOpen(false);
            }
        }
        return () => {
            document.addEventListener('mounedown', handler);
        };
    });
    return(
        <MenuModal useRef={ modalRef }>
            <div className="menu_title">
                <img src={ minilogo } alt="" />
                <p>메뉴를 등록하세요</p>
            </div>
            <div className="form_div">
                <MenuForm action="submit">
                    <div className="menu_line">
                        <p className="menu0" id="item_menu">대표 메뉴</p>
                        <p className="price0" id="item_price">가격</p>
                    </div>
                    <div className="menu_line">
                        <input className="menu" type="text" placeholder="-" />
                        <div>
                            <input className="price" type="number" />
                            <p>원</p>
                        </div>
                    </div>
                    <div className="menu_line">
                        <input className="menu" type="text" placeholder="-" />
                        <div>
                            <input className="price" type="number" />
                            <p>원</p>
                        </div>
                    </div>
                    <div className="menu_line">
                        <input className="menu" type="text"placeholder="-" />
                        <div>
                            <input className="price" type="number" />
                            <p>원</p>
                        </div>
                    </div>
                </MenuForm>
                <ButtonDiv>
                    <button type="submit" className="register_button" >메뉴등록</button>
                    <button type="button" className="close_button" onClick={closeModal}>취소</button>
                </ButtonDiv>
            </div>
        </MenuModal>

    )
}

MenuModalPage.propTypes = {
    setModalOpen: PropTypes.func.isRequired, // prop 타입을 정의하고 필수로 표시합니다
  };

export default MenuModalPage;