import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style/UserInfo.style';

export default function UserInfo({ photo, name }) {
    return (
        <S.User>
            {photo && <S.Img src={photo} alt="profile" />}
            {name && <S.Name>{name}님</S.Name>}
        </S.User>
    );
}

UserInfo.propTypes = {
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
