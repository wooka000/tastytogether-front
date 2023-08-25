import React, { useState, useEffect, useContext } from 'react';
import * as S from './style/CheckInfo.style'
import PropTypes from 'prop-types'; // prop-types 임포트
import MyContext from './MyContext';

//, addressObj
function CheckInfo({isAddressRegistered}) {
  const [textContent, setTextContent] = useState('새롭게 등록하려는 맛집이 테이스티투게더에 등록되어 있는지 확인해주세요.');
  const addressObj = useContext(MyContext);

  useEffect(() => {
    if (!addressObj.street && !addressObj.jibunAddress) {
      setTextContent('새롭게 등록하려는 맛집이 테이스티투게더에 등록되어 있는지 확인해주세요.');
    } else if (isAddressRegistered) {
      setTextContent('이미 등록되어있는 맛집입니다.');
    } else {
      setTextContent('새로운 맛집입니다! 나머지 정보를 입력해주세요.');
    }
  }, [addressObj]);

  return (
    <S.CheckDiv>
        <div>
          <img src="imgs/notice.png" alt="" />
        </div>
        <p>
          {textContent}
        </p>
    </S.CheckDiv>
  );
}

CheckInfo.propTypes = {
  isAddressRegistered: PropTypes.bool.isRequired,
  // addressObj: PropTypes.shape({
  //   street: PropTypes.string,
  //   fullAddress: PropTypes.string,
  // }).isRequired,
};

export default CheckInfo;