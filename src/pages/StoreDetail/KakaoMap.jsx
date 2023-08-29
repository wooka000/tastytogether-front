import React, { useEffect } from 'react';
// import * as S from './style/KakaoMap.style';

export default function KakaoMap() {
    useEffect(() => {
        window.kakao.maps.load(() => {
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            };
            /* eslint-disable */
            const map = new window.kakao.maps.Map(container, options);
        });
    }, []);
    return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
}
