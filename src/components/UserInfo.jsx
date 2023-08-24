import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function UserInfo({ photo, name }) {
    return (
        <User>
            {photo && <Img src={photo} alt="profile" />}
            {name && <Name>{name}님</Name>}
        </User>
    );
}

UserInfo.propTypes = {
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

const User = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`;

const Img = styled.img`
    width: 40px;
    height: 40px;
    flex-shrink: 0;
`;

const Name = styled.span`
    font-size: 18px;
    font-weight: bold;
    flex-shrink: 0;
`;
