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
                <span>대표 메뉴*</span>
            </div>
            <div className="table_content">
            <div className="table_content">
            <S.Menu>
                <input
                    id="name1"
                    className="input"
                    type="text"
                    value={updatedMenus[0].name}
                    onChange={(e) => handleMenuChange(0, 'name', e.target.value)}
                    readOnly
                    required
                />
                <input
                    id="price1"
                    className="input"
                    type="text"
                    value={updatedMenus[0].price}
                    onChange={(e) => handleMenuChange(0, 'price', e.target.value)}
                    readOnly
                    required
                />
            </S.Menu>
            <S.Menu>
                <input
                    id="name2"
                    className="input"
                    type="text"
                    placeholder=""
                    value={updatedMenus[1].name}
                    onChange={(e) => handleMenuChange(1, 'name', e.target.value)}
                    readOnly
                />
                <input
                    id="price2"
                    className="input"
                    type="text"
                    placeholder=""
                    value={updatedMenus[1].price}
                    onChange={(e) => handleMenuChange(1, 'price', e.target.value)}
                    readOnly
                />
            </S.Menu>
            <S.Menu>
                <input
                    id="name3"
                    className="input"
                    type="text"
                    placeholder=""
                    value={updatedMenus[2].name}
                    onChange={(e) => handleMenuChange(2, 'name', e.target.value)}
                    readOnly
                />
                <input
                    id="price3"
                    className="input"
                    type="text"
                    placeholder=""
                    value={updatedMenus[2].price}
                    onChange={(e) => handleMenuChange(2, 'price', e.target.value)}
                    readOnly
                />
            </S.Menu>
        </div>
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
