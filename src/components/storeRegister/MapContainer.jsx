import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './style/MapContainer.style'

//import Map from 'react-kakao-maps-sdk';

// npm install react-kakao-maps-sdk
const MapContainer = ({ addressObj, setStoreInfo }) => { 

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=e60c72145803dce71a8cfdf73846c212&autoload=false`;
    script.async = true;

    script.onload = () => {
        window.kakao.maps.load(() => {
            const mapContainer = document.getElementById('map');
            const mapOption = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
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
                            content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
                        });
                        infowindow.open(map, marker);

                        map.setCenter(coords);

                        setStoreInfo(prevInfo => ({
                            ...prevInfo,
                            address: {
                                ...prevInfo.address,
                                latitude: coords.getLat(),
                                longitude: coords.getLng(),
                            },
                        }));
                    }
                });
            };

            updateMapAndMarker(addressObj.street);

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

    return (


        <S.MapContainer>
            <div 
              id="map"
              style={{ width: "100%", height: "360px" }}
            ></div>
                {/* <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                    <div style={{color:"#000"}}>Hello World!</div>
                </MapMarker> */}
            <input id="addressInput" type="text" value={addressObj.street} />
        </S.MapContainer>
    ) // 지도가 그려질 영역을 나타내는 엘리먼트입니다.
}

export default MapContainer;

MapContainer.propTypes = {
  addressObj: PropTypes.object.isRequired,
  setStoreInfo: PropTypes.func.isRequired,
};