import React, { useState, useEffect } from 'react';
import * as S from './style/DaumPost.style';
import useDaumPostcodePopup from './useDaumPostcodePopup';
import CheckInfo from './CheckInfo';
import MyContext from './MyContext';
import axios from '../../utils/axios';

export default function DaumPost({
    setAddress,
    address,
    setName,
    isAddressRegistered,
    setIsAddressRegistered,
}) {
    //클릭 시 수행될 팝업 생성 함수
    const postcodeScriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    const open = useDaumPostcodePopup(postcodeScriptUrl);

    const handleComplete = (data) => {
        const {
            roadAddress: street,
            jibunAddress: fullAddress,
            sido: city,
            sigungu: state,
            zonecode: zipCode,
            buildingName: name,
            latitude,
            longitude,
        } = data;

        setAddress({
            street,
            fullAddress,
            city,
            state,
            zipCode,
            name,
            latitude,
            longitude,
        });
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
        setIsAddressRegistered(false);
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        /* eslint-disable */
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false&libraries=services`;
        script.async = true;

        script.onload = () => {
            window.kakao.maps.load(() => {
                let LatLng = window.kakao.maps.LatLng;
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
                                content: `<div style="width:250px;text-align:center;padding:20px 0;">${address.name}</div>`,
                            });
                            infowindow.open(map, marker);

                            setAddress((prev) => ({
                                ...prev,
                                latitude: coords.getLat(),
                                longitude: coords.getLng(),
                            }));
                            map.setCenter(coords);
                        }
                    });
                };
                updateMapAndMarker(address.street);

                // 주소 변경 시마다 업데이트
                const addressChangeHandler = (event) => {
                    updateMapAndMarker(event.target.value);
                };

                // 주소 변경 이벤트 리스너 추가
                document
                    .getElementById('addressInput')
                    .addEventListener('input', addressChangeHandler);
            });
        };

        script.addEventListener('load', script.onload);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [address.street]);

    const handleSaveStoreInfo = async () => {
        const res = await axios.get(`/stores?name=${address.name}&street=${address.street}`);
        if (res.data === '중복된 가게가 존재합니다.') {
            setIsAddressRegistered(true);
            return;
        }
        if (res.data === '"가게 확인 완료"') {
            setIsAddressRegistered(false);
        }
        setAddress((prevInfo) => ({
            ...prevInfo,
            address: {
                ...prevInfo.address,
                street: address.street,
                city: address.city,
                state: address.state,
                fullAddress: address.fullAddress,
                zipCode: address.zipCode,
                latitude: address.latitude,
                longitude: address.longitude,
            },
        }));
        setName(address.name);
    };

    return (
        <MyContext.Provider value={address}>
            <CheckInfo isAddressRegistered={isAddressRegistered} />
            <S.TableLine>
                <div className="table_title">
                    <span>맛집주소*</span>
                </div>
                <div className="table_content">
                    <input
                        id="address"
                        className="input"
                        type="text"
                        placeholder="등록하려는 맛집이 중복되는지 맛집이름을 확인하세요."
                        value={address.name ? address.street : address.fullAddress}
                        onChange={handleSaveStoreInfo}
                        readOnly
                        required
                    />
                    <button type="button" onClick={handleClick}>
                        주소찾기
                    </button>
                </div>
            </S.TableLine>
            <S.TableLine>
                <div className="table_title">
                    <span>맛집이름*</span>
                </div>
                <div className="table_content">
                    <input
                        id="buildingName"
                        className="input"
                        type="text"
                        placeholder="등록된 업체인지 확인하세요."
                        value={address.name}
                        readOnly
                        required
                    />
                </div>
            </S.TableLine>
            <S.Map id="mapDiv">
                <S.MapContainer>
                    <div
                        id="map"
                        style={{
                            width: '100%',
                            height: '450px',
                        }}
                    ></div>
                    <S.AddressInput id="addressInput" type="text" />
                </S.MapContainer>
            </S.Map>
            <button type="button" onClick={handleSaveStoreInfo}>
                저장하기
            </button>
        </MyContext.Provider>
    );
}
