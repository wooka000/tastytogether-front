import React, { useState, useEffect } from 'react';
import * as S from './style/DaumPost.style'
import PropTypes from 'prop-types';
import useDaumPostcodePopup from './useDaumPostcodePopup'; // useDaumPostcodePopup 함수 임포트
import CheckInfo from './CheckInfo';
import MyContext from './MyContext';
import axios from 'axios';

function DaumPost({ setStoreInfo }){
  
  const [ addressObj, setAddressObj ] = useState({
    street: "",
    city: "",
    state: "",
    fullAddress: "",
    zipcode: "",
    name: "",
    latitude: 0,
    longitude: 0
  });
  const [isAddressRegistered, setIsAddressRegistered] = useState(false);

    //클릭 시 수행될 팝업 생성 함수
  const postcodeScriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(postcodeScriptUrl);
    
  const handleComplete = (data) => {
    const { street, jibunAddress, sido, sigungu, zonecode, buildingName } = data;
      console.log(data)
      const fullAddress = jibunAddress;
      const city = sido;
      const state = sigungu;
      const zipcode = zonecode;
      const name = buildingName;

      //조건 판단 완료 후 지역 주소 및 상세주소 state 수정
      setAddressObj({
        street,
        fullAddress,
        city,
        state,
        zipcode,
        name,
        latitude: 0, // 위도 기본값 설정
        longitude: 0, // 경도 기본값 설정
      });
      //주소 검색이 완료된 후 결과를 매개변수로 전달
  }
    
  const handleClick = () => {
        open({onComplete: handleComplete});
  }
  // DB에서 가져온 데이터와 비교
  const handleInfoChange = () => {
    const apiUrl = 'http://localhost:3000/stores';
    axios.get(apiUrl)
      .then(response => {
        const isRegistered = response.data.some(store => {
          return (
            (store.street === addressObj.street || store.street === addressObj.fullAddress)
           && store.name === addressObj.name
          )
        });
        setIsAddressRegistered(isRegistered);
      })
      .catch(error => {
        console.error(error);
      });
    };

// Map

useEffect(() => {
  const script = document.createElement('script');
  script.type = 'text/javascript'
  /* eslint-disable */
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`;
  script.async = true;

  script.onload = () => {
      window.kakao.maps.load(() => {
          let LatLng = window.kakao.maps.LatLng
          const mapContainer = document.getElementById('map');
          const mapOption = {
              center: new LatLng(33.450701, 126.570667),
              level: 3,
          };
          const map = new window.kakao.maps.Map(mapContainer, mapOption); 
          const geocoder = new window.kakao.maps.services.Geocoder();
          
          // 주소를 변경할 때마다 지도와 마커를 업데이트
          const updateMapAndMarker = (newAddress) => {
              geocoder.addressSearch(newAddress, function (result, status) {
                  if (status === window.kakao.maps.services.Status.OK) {
                      const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

                      const marker = new window.kakao.maps.Marker({
                          map: map,
                          position: coords,
                      });

                      const infowindow = new window.kakao.maps.InfoWindow({
                          content: '<div style="width:150px;text-align:center;padding:6px 0;">마커표시해보기</div>',
                      });
                      infowindow.open(map, marker);

                      map.setCenter(coords);

                  }
              });
          };

          updateMapAndMarker(addressObj.fullAddress);

          // 주소 변경 시마다 업데이트
          const addressChangeHandler = (event) => {
              updateMapAndMarker(event.target.value);
          };

          // 주소 변경 이벤트 리스너 추가
          document.getElementById('addressInput').addEventListener('input', addressChangeHandler);
      });
  };

  script.addEventListener("load", script.onload);
  document.head.appendChild(script);

  return () => {
      document.head.removeChild(script);
  };
}, [addressObj]);

const handleSaveStoreInfo = () => {
  setStoreInfo(prevInfo => ({
    ...prevInfo,
    address: {
      street: addressObj.street,
      city: addressObj.city,
      state: addressObj.state,
      fullAddress: addressObj.fullAddress,
      zipcode: addressObj.zipcode,
      latitude: addressObj.latitude,
      longitude: addressObj.longitude,
    },
    name: addressObj.name,
  }));
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
            onChange={handleSaveStoreInfo}
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
        <S.MapContainer>
          <div
              id="map"
              style={{
                width: "100%",
                height: "450px",
              }}
          ></div>
        </S.MapContainer>
      </S.Map>
    </MyContext.Provider>
  )
}
    
DaumPost.propTypes = {
  setStoreInfo: PropTypes.func.isRequired,
};

export default DaumPost;
