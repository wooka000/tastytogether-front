import React from 'react';
import PropTypes from 'prop-types';


const AddressInput = ({ address, setAddress }) => {
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    return (
        <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="주소를 입력하세요"
        />
    );
};

AddressInput.propTypes = {
    address: PropTypes.string.isRequired,
    setAddress: PropTypes.func.isRequired,
};

export default AddressInput;