import { useState } from 'react';
import MenuModalPage from './MenuModalPage';

function MenuModalButton(){
    const [ modalOpen, setModalOpen ] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    };

    return(
        <>
            <input id="menu1" className="input" type="text" placeholder="메뉴를 추가하세요." required />
            <input id="menu2" type="text" />
            <input id="menu3" type="text" />
            <button onClick={showModal}>메뉴작성</button>
            {modalOpen && <MenuModalPage setModalOpen={setModalOpen} />}
        </>
    )
}

export default MenuModalButton; 