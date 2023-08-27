import React from 'react';
import PropTypes from 'prop-types';

const PopupPostCode = ({ onClose, onAddressSelect }) => {
    // 이 곳에서 주소 검색 팝업 컴포넌트의 UI 및 동작을 구현할 수 있습니다.
    // 실제 Daum 주소 검색 팝업 API를 사용하여 UI를 구현할 수 있습니다.
    // 이 때, 주소를 선택한 경우 onAddressSelect 함수를 호출하여 선택한 주소 정보를 상위 컴포넌트로 전달해야 합니다.

    return (
        <div>
            <input type="text" placeholder="주소를 입력하세요." />
            <button onClick={() => onAddressSelect({ selectedAddress: '주소 정보' })}>선택</button>
            <button onClick={onClose}>닫기</button>
        </div>
    );
};

PopupPostCode.propTypes = {
    onClose: PropTypes.func.isRequired,
    onAddressSelect: PropTypes.func.isRequired,
};

export default PopupPostCode;
