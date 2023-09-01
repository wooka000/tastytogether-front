import React, { useEffect } from 'react';

export default function KakaoMap({ latitude, longitude }) {
    useEffect(() => {
        window.kakao.maps.load(() => {
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(latitude, longitude),
                level: 3,
            };
            const map = new window.kakao.maps.Map(container, options);
            const markerPosition = new kakao.maps.LatLng(latitude, longitude);
            const marker = new kakao.maps.Marker({
                position: markerPosition,
            });
            marker.setMap(map);
        });
    }, []);
    return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
}
