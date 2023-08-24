import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function MenuModalPage({ setModalOpen }){
    // const menus = useContext(MyContext);
    const [ menus, setMenus ] = useState([
        { menu1: '', price1: ''},
        { menu2: '', price2: ''},
        { menu3: '', price3: ''}
    ])

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

    const handleMenuRegister = () => {
        const menu1 = document.querySelector('#menu1').value;
        const menu2 = document.querySelector('#menu2').value;
        const menu3 = document.querySelector('#menu3').value;
        const price1 = document.querySelector('#price1').value;
        const price2 = document.querySelector('#price2').value;
        const price3 = document.querySelector('#price3').value;
        setMenus([
            { menu1: menu1, price1: price1},
            { menu2: menu2, price2: price2},
            { menu3: menu3, price3: price3}
        ])
        closeModal();
    }

    return(
        <MenuModal useRef={ modalRef }>
            <div className="menu_title">
                <img src="/imgs/logo2.png" alt="" />
                <p>메뉴를 등록하세요</p>
            </div>
            <div className="form_div">
                <MenuForm action="submit" menus={menus}>
                    <div className="menu_line">
                        <p id="item_menu">대표 메뉴</p>
                        <p id="item_price">가격</p>
                    </div>
                    <div className="menu_line">
                        <input id="menu1" className="menu" type="text" placeholder="-" />
                        <div>
                            <input id="price1" className="price" type="number" />
                            <p>원</p>
                        </div>
                    </div>
                    <div className="menu_line">
                        <input id="menu2" className="menu" type="text" placeholder="-" />
                        <div>
                            <input id="price2" className="price" type="number" />
                            <p>원</p>
                        </div>
                    </div>
                    <div className="menu_line">
                        <input id="menu3" className="menu" type="text"placeholder="-" />
                        <div>
                            <input id="price3" className="price" type="number" />
                            <p>원</p>
                        </div>
                    </div>
                </MenuForm>
                <ButtonDiv>
                    <button type="submit" className="register_button" onClick={handleMenuRegister}>메뉴등록</button>
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
    #item_menu{
        width: 600px;
        height: 40px;
        border: none;
        padding: 10px;
        text-align: center;
        margin: 5px;
        font-weight: 700;
        font-size: 35px;
    }
    #item_price{
        width: 200px;
        height: 40px;
        border: none;
        padding: 10px;
        text-align: center;
        margin: 5px;
        font-weight: 700;
        font-size: 35px;
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
                font-size: 30px;
            }
            p{
                padding: 10px;
                text-align: right;
                margin: 5px;
                font-size: 30px;

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
