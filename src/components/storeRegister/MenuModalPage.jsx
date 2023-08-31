import { useState, useEffect, useRef } from 'react';
import * as S from './style/MenuModalPage.style'
import PropTypes from 'prop-types';


function MenuModalPage({ setModalOpen, setUpdatedMenus, setStoreInfo }){

    const [menu, setMenu] = useState([
        { name: '', price: '' },
        { name: '', price: '' },
        { name: '', price: '' },
    ]);

    const closeModal = () =>{
        setModalOpen(false);
    };
    // const modalRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef(null);

    useEffect(()=>{
        const handler = (event) => {
            if(modalRef.current && !modalRef.current.contains(event.target)){
                setModalOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);

        return () => {
            document.addEventListener('mousedown', handler);
        };
    }, [setModalOpen]);

    const handleMenuChange = (index, field, value) => {
        const updatedMenusCopy = [...menu];
        updatedMenusCopy[index][field] = value; 
        setMenu(updatedMenusCopy); 
    };

    const handleMenuRegister = () => {
        
        const updateMenus=[
            { name: menu[0].name, price: menu[0].price},
            { name: menu[1].name, price: menu[1].price},
            { name: menu[2].name, price: menu[2].price}
        ];

        if (
            (updateMenus[0].name.trim() !== '' && updateMenus[0].price.trim() !== '') ||
            (updateMenus[1].name.trim() !== '' && updateMenus[1].price.trim() !== '') ||
            (updateMenus[2].name.trim() !== '' && updateMenus[2].price.trim() !== '')
        ) {
            setUpdatedMenus(updateMenus);
            setStoreInfo(prevInfo => ({
                ...prevInfo,
                menuItems: [...updateMenus]
            }));
            closeModal();
        } else {
            console.log('메뉴를 순서대로 적어주세요');
        }
    }

    return(
        <S.MenuModal ref={ modalRef }>
            <div className="menu_title">
                <img src="/imgs/logo2.png" alt="" />
                <p>메뉴를 등록하세요</p>
            </div>
            <div className="form_div">
                <S.MenuForm>
                    <div className="menu_line">
                        <p id="item_menu">대표 메뉴</p>
                        <p id="item_price">가격</p>
                    </div>
                    <div className="menu_line">
                        <input id="name1" className="menu" type="text" onChange={(e) => handleMenuChange(0, 'name', e.target.value)} value={menu[0].name} required />
                        <div>
                            <input id="price1" className="price" type="number" onChange={(e) => handleMenuChange(0, 'price', e.target.value)} value={menu[0].price} required />
                            <p>원</p>
                        </div>
                    </div>
                    <div className="menu_line">
                        <input id="name2" className="menu" type="text" onChange={(e) => handleMenuChange(1, 'name', e.target.value)} value={menu[1].name} />
                        <div>
                            <input id="price2" className="price" type="number" onChange={(e) => handleMenuChange(1, 'price', e.target.value)} value={menu[1].price} />
                            <p>원</p>
                        </div>
                    </div>
                    <div className="menu_line">
                        <input id="name3" className="menu" type="text" onChange={(e) => handleMenuChange(2, 'name', e.target.value)} value={menu[2].name} />
                        <div>
                            <input id="price3" className="price" type="number" onChange={(e) => handleMenuChange(2, 'price', e.target.value)} value={menu[2].price} />
                            <p>원</p>
                        </div>
                    </div>
                </S.MenuForm>
            </div>
            <div id="button_div">
                <button type="submit" className="register_button" onClick={handleMenuRegister} >등록</button>
                <button type="button" className="close_button" onClick={closeModal}>x</button>
            </div>
        </S.MenuModal>

    )
}

MenuModalPage.propTypes = {
    setModalOpen: PropTypes.func.isRequired,
    setUpdatedMenus: PropTypes.func.isRequired,
    setStoreInfo: PropTypes.func.isRequired,
};

export default MenuModalPage;

