import React, { useState, useEffect, useContext } from 'react';
import * as S from './style/CheckInfo.style'
import PropTypes from 'prop-types'; // prop-types 임포트
import MyContext from './MyContext';

//, addressObj
function CheckInfo({ isAddressRegistered }) {
  const [textContent, setTextContent] = useState('');
  const addressObj = useContext(MyContext);

  useEffect(() => {
    if (!addressObj.street && !addressObj.fullAddress) {
      setTextContent('새롭게 등록하려는 맛집이 등록되어 있는지 확인해주세요.');
    } else if (isAddressRegistered) {
      setTextContent('이미 등록되어있는 맛집입니다.');
    } else {
      setTextContent('새로운 맛집입니다! 나머지 정보를 입력해주세요.');
    }
  }, [addressObj, isAddressRegistered]);

  return (
    <S.CheckDiv>
        <div className="title_line">
          <div className="register_title">
            <p>맛집 등록 페이지</p>
          </div>
          <div className="title_text">
            <p>{textContent}</p>
          </div>
        </div>
    </S.CheckDiv>
  );
}

CheckInfo.propTypes = {
  isAddressRegistered: PropTypes.bool.isRequired,
};

export default CheckInfo;