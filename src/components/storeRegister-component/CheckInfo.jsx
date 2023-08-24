import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; // prop-types 임포트
import MyContext from './MyContext';

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
    <CheckDiv>
        <div>
          <img src="imgs/notice.png" alt="" />
        </div>
        <p>
          {textContent}
        </p>
    </CheckDiv>
  );
}

CheckInfo.propTypes = {
  isAddressRegistered: PropTypes.bool.isRequired,
};

export default CheckInfo;

const CheckDiv = styled.div`
    box-sizing: border-box;
    width: 1350px;
    height: 100px;
    border: 5px solid #FF9C5F;
    border-radius: 10px;
    padding: 25px 19px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    div {
        width: 50px;
        height: 50px;
        margin-right: 18px;
        box-sizing: border-box;
        img{
          width: 45px;
        }
    }
    p {
        text-align: center;
        font-size: 35px;
        font-weight: bold;
        color: #FF9C5F;
    }
`
