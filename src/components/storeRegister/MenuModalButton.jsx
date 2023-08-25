import { useState } from 'react';
import * as S from './style/MenuModalButton.style'
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
        <S.TableLine>
            <div className="table_title">
                <span>대표 메뉴</span>
            </div>
            <div className="table_content">
                {menus.map((menu, index) => (
                <S.Menu key={index}>
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
                </S.Menu>
                ))}
                <button id="menu_modal_button" onClick={showModal}>메뉴작성</button>
                {modalOpen && <MenuModalPage setModalOpen={setModalOpen} setMenus={setMenus} />}
            </div>
        </S.TableLine>
    )
}

export default MenuModalButton; 
