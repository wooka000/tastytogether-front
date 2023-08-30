// import * as S from './style/FilteredMap.style'; 
// import React, { useEffect, useState } from 'react';

// const FilteredMap = ({ map, setMap,keyword, info, setInfo, markers, setMarkers, currentPageItems }) => {
//     const [lat, setLat] = useState(37.566826);
//     const [lng, setLng] = useState(126.9786567);
//     const [mapLoaded, setMapLoaded] = useState(false);

//     // 위도, 경도, map 로딩 완료 시 실행
//     useEffect(() => {
//         if (mapLoaded && keyword && markers.length > 0) {
//             const newMarkers = currentPageItems.map(item => {
//                 const { address } = item;
//                 if (address && address.latitude && address.longitude) {
//                     return {
//                         position: {
//                             lat: address.latitude,
//                             lng: address.longitude,
//                         },
//                         content: item.name,
//                     };
//                 }
//                 return null;
//             }).filter(marker => marker !== null);

//             setMarkers(newMarkers);

//             if (newMarkers.length > 0) {
//                 const { lat: newLat, lng: newLng } = newMarkers[0].position;
//                 setLat(newLat);
//                 setLng(newLng);
//             }

//             const markerPosition = new window.kakao.maps.LatLng(lat, lng);
//             const marker = new window.kakao.maps.Marker({
//                 position: markerPosition,
//             });
//             marker.setMap(map);

//             const ps = new window.kakao.maps.services.Places();

//             ps.keywordSearch({ keyword }, (data, status) => {
//                 if (status === window.kakao.maps.services.Status.OK) {
//                     const bounds = new window.kakao.maps.LatLngBounds();
//                     const newMarkers = data.map(item => ({
//                         position: {
//                             lat: item.y,
//                             lng: item.x,
//                         },
//                         content: item.place_name,
//                     }));
//                     setMarkers(newMarkers);

//                     for (const item of data) {
//                         bounds.extend(new window.kakao.maps.LatLng(item.y, item.x));
//                     }
//                     map.setBounds(bounds);
//                 }
//             });
//         }
//     }, [mapLoaded, keyword, currentPageItems, lat, lng, markers, setMarkers]);

//     // Kakao 지도 스크립트 로딩
//     useEffect(() => {
//         const script = document.createElement('script');
//         script.type = 'text/javascript';
//         script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false&libraries=services`;
//         script.async = true;

//         script.onload = () => {
//             window.kakao.maps.load(() => {
//                 setMapLoaded(true);

//                 const mapContainer = document.getElementById('map');
//                 const mapOptions = {
//                     center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
//                     level: 3,
//                 };

//                 const newMap = new window.kakao.maps.Map(mapContainer, mapOptions);
//                 setMarkers([]); // 초기화
//                 setMap(newMap);
//             });
//         };

//         document.head.appendChild(script);
//         return () => {
//             document.head.removeChild(script);
//         };
//     }, [setMap]);

//     return (
//         <FilteredMap>
//             <S.Map
//                 id="map"
//                 center={{
//                     lat: 37.566826,
//                     lng: 126.9786567,
//                 }}
//                 style={{
//                     width: "100%",
//                     height: "350px",
//                 }}
//                 level={3}
//             >
//                 {markers.map((marker) => (
//                     <S.MapMarker
//                         key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
//                         position={marker.position}
//                         onClick={() => setInfo(marker)}
//                     >
//                         {info && info.content === marker.content && (
//                             <div style={{ color: "#000" }}>{marker.content}</div>
//                         )}
//                     </S.MapMarker>
//                 ))}
//             </S.Map>
//         </FilteredMap>
//     )
// }
// export default FilteredMap;
