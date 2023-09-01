/* global kakao */
import * as S from './style/FilteredMap.style';
import React, { useEffect } from 'react';

// currentPageItems 값 전달되는 것 확인! 렌더링이 안된다.
const FilteredMap = ({ currentPageItems }) => {
    useEffect(() => {
        if (currentPageItems.length === 0) return;
        const initMap = () => {
            window.kakao.maps.load(() => {
                const mapContainer = document.getElementById('map');
                const mapOptions = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                };

                const map = new window.kakao.maps.Map(mapContainer, mapOptions);

                for (let i = 0; i < currentPageItems.length; i++) {
                    const store = currentPageItems[i];
                    const position = new window.kakao.maps.LatLng(
                        store.address.latitude,
                        store.address.longitude,
                    );
                    const imageSrc =
                        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';
                    const imageSize = new window.kakao.maps.Size(24, 35);
                    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
                    const markerOptions = {
                        map: map,
                        position: position,
                        title: store.name,
                        image: markerImage,
                        level: 3,
                    };

                    // 마커 생성
                    const marker = new window.kakao.maps.Marker(markerOptions);

                    // 생성된 마커를 kakapmap.current 배열에 추가
                    //kakaoMap.current.push(marker);
                }

                // 지도 객체와 마커들을 저장한 배열을 참조할 수 있도록 설정
                // setKakaoMap(map);
            });
        };
        // Kakako Maps API 스크립트 로드 완료 후 실행
        initMap();
    }, [currentPageItems]);

    return (
        <S.FilteredMap>
            <S.Map id="map" />
        </S.FilteredMap>
    );
};

export default FilteredMap;