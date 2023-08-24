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
            </div>
            <div id="button_div">
                    <button type="submit" className="register_button" onClick={handleMenuRegister}>등록</button>
                    <button type="button" className="close_button" onClick={closeModal}>x</button>
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
const MenuForm = styled.form`
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


