import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PopupPostCode from './PopupPostCode'; // 주소 검색 팝업 컴포넌트를 임포트

const AddressSearchButton = ({ setAddress }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div>
            <button type="button" onClick={handleOpenPopup}>주소 검색</button>
            {isPopupOpen && <PopupPostCode onClose={handleClosePopup} setAddress={setAddress} />}
        </div>
    );
};

AddressSearchButton.propTypes = {
    setAddress: PropTypes.func.isRequired,
};

export default AddressSearchButton;
