// import { useState } from 'react';
import * as S from './style/TypeModalPage.style'

import PropTypes from 'prop-types';


function TypeModalPage({ setModalOpen, setCategory }) { // Fixed the prop name
    // eslint-disable-next-line no-unused-vars
    
    const handleCategorySelect = (category) => {
        setCategory(category); 
        setModalOpen(false);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };
    
    return(
        <S.TypeModal>
            <div className="type_title">
                <img src="/imgs/logo2.png" alt="" />
                <p>업종을 선택하세요</p>
            </div>
            <S.TypeButtons>
                <div className="button_line">
                    <div className="type_button" onClick={() => handleCategorySelect('한식')}>
                        <img src="/imgs/korea.png" alt="한식" />
                        <p>한식</p>
                    </div>
                    <div className="type_button" onClick={() => handleCategorySelect('양식')}>
                        <img src="/imgs/western.png" alt="양식" />
                        <p>양식</p>
                    </div>
                    <div className="type_button" onClick={() => handleCategorySelect('중식')}>
                        <img src="/imgs/china.png" alt="중식" />
                        <p>중식</p>
                    </div>
                </div>
                <div className="button_line">
                    <div className="type_button" onClick={() => handleCategorySelect('일식')}>
                        <img src="/imgs/japan.png" alt="일식" />
                        <p>일식</p>
                    </div>
                    <div className="type_button" onClick={() => handleCategorySelect('아시안')}>
                        <img src="/imgs/asia.png" alt="아시안" />
                        <p>아시안</p>
                    </div>
                    <div className="type_button" onClick={() => handleCategorySelect('카페.디저트')}>
                        <img src="/imgs/cafe.png" alt="카페.디저트" />
                        <p>카페.디저트</p>
                    </div>
                </div>
            </S.TypeButtons>
            <div className="close_button_div">
                <button type="button" className="close_button" onClick={handleModalClose}>x</button>
            </div>
        </S.TypeModal>
    )
}

TypeModalPage.propTypes = {
    setModalOpen: PropTypes.func.isRequired, // prop 타입을 정의하고 필수로 표시합니다
    setCategory: PropTypes.func.isRequired,
};

export default TypeModalPage;
