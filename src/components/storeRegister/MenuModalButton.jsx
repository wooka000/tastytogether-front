import { useState } from 'react';
import * as S from './style/MenuModalButton.style'
import PropTypes from 'prop-types';
import MenuModalPage from './MenuModalPage';

function MenuModalButton({ setStoreInfo }){
    const [ modalOpen, setModalOpen ] = useState(false);
    const [updatedMenus, setUpdatedMenus] = useState([
        { name: '', price: '' },
        { name: '', price: '' },
        { name: '', price: '' }
    ]);

    const showModal = () => {
        setModalOpen(true);
    };
    const handleMenuChange = (index, field, value) => {
        updatedMenus[index][field] = value;
        setStoreInfo(prevInfo => ({
            ...prevInfo,
            menuItems:[ ...updatedMenus ]
        }));
    }
    return(
        <S.TableLine>
            <div className="table_title">
                <span>대표 메뉴</span>
            </div>
            <div className="table_content">
                {updatedMenus.map((menu, index) => (
                <S.Menu key={index}>
                    <input
                        id={`name${index+1}`}
                        className="input" 
                        type="text" 
                        placeholder={index === 0 ? '메뉴등록' : ''}
                        value={menu[`name${index+1}`]}
                        onChange={(e) => handleMenuChange(index, `name${index + 1}`, e.target.value)}
                        required={index===0}
                    />
                    <input
                        id={`price${index+1}`}
                        className="input" 
                        type="text"  
                        placeholder={`${index === 0? '(필수입력)' : ''} `} 
                        value={menu[`price${index+1}`]}
                        onChange={(e) => handleMenuChange(index, `price${index + 1}`, e.target.value)}
                        required={index===0}
                    />
                </S.Menu>
                ))}
                <button id="menu_modal_button" onClick={showModal}>메뉴작성</button>
                {modalOpen && <MenuModalPage setStoreInfo={setStoreInfo} setModalOpen={setModalOpen} setUpdatedMenus={setUpdatedMenus} />}
            </div>
        </S.TableLine>
    )
}

MenuModalButton.propTypes = {
        setStoreInfo: PropTypes.func.isRequired,
};
export default MenuModalButton; 
