import React, { useState } from 'react';
import * as S from './style/DaumPost.style'
import PropTypes from 'prop-types';
import useDaumPostcodePopup from './useDaumPostcodePopup'; // useDaumPostcodePopup 함수 임포트
import CheckInfo from './CheckInfo';
import MyContext from './MyContext';
import MapContainer from './MapContainer';
import axios from 'axios'


function DaumPost({ setStoreInfo }){
  const [ addressObj, setAddressObj ] = useState({
    street: "",
    city: "",
    state: "",
    fullAddress: "",
    zipcode: "",
    name: "",
  });
  const [isAddressRegistered, setIsAddressRegistered] = useState(false);

    //클릭 시 수행될 팝업 생성 함수
  const postcodeScriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(postcodeScriptUrl);
    
  const handleComplete = (data) => {
      console.log(data)
      let street = data.street;
      let fullAddress = data.jibunAddress;
      let city = data.sido;
      let state = data.sigungu;
      let zipcode = data.zonecode;
      let name = data.buildingName;

      //조건 판단 완료 후 지역 주소 및 상세주소 state 수정
      setAddressObj({
        street: street,
        fullAddress: fullAddress,
        city: city,
        state: state,
        zipcode: zipcode,
        name: name,
      });
      //주소 검색이 완료된 후 결과를 매개변수로 전달
  }
    
  const handleClick = () => {
        open({onComplete: handleComplete});
  }
  const handleInfoChange = () => {
    // DB에서 가져온 데이터와 비교
    const apiUrl = 'http://localhost:3000/stores';
    axios.get(apiUrl)
      .then(response => {
        const isRegistered = response.data.some(store => {
          return (
            (store.street === addressObj.street || store.street === addressObj.fullAddress)
           && store.name === addressObj.name
      )});
        setIsAddressRegistered(isRegistered);
        setStoreInfo(prevInfo => ({
          ...prevInfo,
          address: {
            street: addressObj.street,
            city: addressObj.city,
            state: addressObj.state,
            fullAddress: addressObj.fullAddress,
            zipcode: addressObj.zipcode,
          },
          name: addressObj.name,
        }));
      })
      .catch(error => {
        console.error(error);
      });
  };



  return (
    <MyContext.Provider value={addressObj}>
      <CheckInfo isAddressRegistered={isAddressRegistered}/>
      <S.TableLine>
        <div className="table_title">
          <span>맛집명</span>
        </div>
        <div className="table_content">
          <input
            id="address"
            className="input"
            type="text"
            placeholder="등록하려는 맛집이 중복되는지 맛집이름을 확인하세요."
            value={addressObj.name ? addressObj.fullAddress : addressObj.street}
            readOnly
          />
          <button type="button" onClick={handleClick}>
            주소찾기
          </button>
        </div>
      </S.TableLine>
      <S.TableLine>
          <div className="table_title">
              <span>맛집 주소</span>
          </div>
          <div className="table_content">
          <input id="buildingName"
            className="input" 
            type="text" 
            placeholder="등록하려는 업체가 중복되는지 확인하세요." 
            value={addressObj.name}
            onChange={handleInfoChange}
            readOnly />
          </div>
      </S.TableLine>
      <S.Map id="mapDiv">
        <MapContainer addressObj={addressObj} setStoreInfo={setStoreInfo} />
      </S.Map>
    </MyContext.Provider>
  )
}
    
DaumPost.propTypes = {
  setStoreInfo: PropTypes.func.isRequired,
};

  export default DaumPost;