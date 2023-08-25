import { useEffect, useRef, useState } from 'react';
import * as S from './style/MenuModalPage.style'
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
        <S.MenuModal useRef={ modalRef }>
            <div className="menu_title">
                <img src="/imgs/logo2.png" alt="" />
                <p>메뉴를 등록하세요</p>
            </div>
            <div className="form_div">
                <S.MenuForm action="submit" menus={menus}>
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
                </S.MenuForm>
            </div>
            <div id="button_div">
                    <button type="submit" className="register_button" onClick={handleMenuRegister}>등록</button>
                    <button type="button" className="close_button" onClick={closeModal}>x</button>
            </div>
        </S.MenuModal>

    )
}

MenuModalPage.propTypes = {
    setModalOpen: PropTypes.func.isRequired, // prop 타입을 정의하고 필수로 표시합니다
  };

export default MenuModalPage;

