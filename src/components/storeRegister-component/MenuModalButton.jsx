import { useState } from 'react';
import styled from 'styled-components';
import MenuModalPage from './MenuModalPage';

function MenuModalButton(){
    const [ modalOpen, setModalOpen ] = useState(false);
    const [menus, setMenus] = useState([
        { menu1: '', price1: '' },
        { menu2: '', price2: '' },
        { menu3: '', price3: '' }
    ]);

    const showModal = () => {
        setModalOpen(true);
    };
    const handleMenuChange = (index, field, value) => {
        const updatedMenus = [...menus]
        updatedMenus[index][field] = value;
        setMenus(updatedMenus);
    }
    return(
        <>
        {menus.map((menu, index) => (
            <Menu key={index}>
                <input
                    id={`menu${index+1}`}
                    className="input" 
                    type="text" 
                    placeholder={`${index === 0? ('메뉴등록') : ''} `} 
                    value={menu[`menu${index+1}`]}
                    onChange={(e) => handleMenuChange(index, `menu${index + 1}`, e.target.value)}
                    required={index===0}
                 />
                 <input
                     id="price${index+1}" 
                     className="input" 
                     type="text"  
                     placeholder={`${index === 0? ('(필수입력)') : ''} `} 
                     value={menu[`price${index+1}`]}
                     onChange={(e) => handleMenuChange(index,  `price${index + 1}`, e.target.value)}
                     required={index===0}
                 />
            </Menu>
        ))}
            <button id="menu_modal_button" onClick={showModal}>메뉴작성</button>
            {modalOpen && <MenuModalPage setModalOpen={setModalOpen} setMenus={setMenus} />}
        </>
    )
}

export default MenuModalButton; 
const Menu = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 310px;
    input{
        width: 55px;
        height: 42px;
        border:none;
        font-size: 18px;
        text-align: center;
    }

    #menu_modal_button{
        width: 107px;
        height: 52px;
        border-radius: 5px;
        border: none;
        background-color: lightgray;
        font-size: 18px;
        color: white;
        margin-left: 20px;
        right: 20px;
        &:hover{
            background-color: #FF9C5F;
        }
        &:active {
            filter: brightness(70%);
          }
    }

`