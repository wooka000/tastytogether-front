import React, { useEffect } from 'react';
// import Map from 'react-kakao-maps-sdk';

// npm install react-kakao-maps-sdk
const MapContainer = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=''`;
        script.async = true;
        document.head.appendChild(script);
    
        script.onload = () => {
          const mapContainer = document.getElementById('map');
          const mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            // level: 3,
          };
    
          // 지도를 생성합니다
          const map = new window.kakao.maps.Map(mapContainer, mapOption);
    
          // 주소-좌표 변환 객체를 생성합니다
          const geocoder = new window.kakao.maps.services.Geocoder();
    
          // 주소로 좌표를 검색합니다
          geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function (
            result,
            status
          ) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
    
              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });
    
              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
              });
              infowindow.open(map, marker);
    
              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          });
        };
    
        return () => {
          document.head.removeChild(script);
        };
      }, []);
            // const [info, setInfo] = useState();

    // const handleSetInfo = () => {
    //     const map = mapRef.current;
    //     handleSetInfo 코드...
    // };
    
    return (
        <div id="map_container">
            <div id="map"
                style={{ width: "100%", height: "360px" }}
                // level={3}
                // ref={mapRef}
            >
                {/* <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                    <div style={{color:"#000"}}>Hello World!</div>
                </MapMarker> */}
                {/* <button onClick={handleSetInfo}>

                </button> */}
            </div>
        </div>
    ) // 지도가 그려질 영역을 나타내는 엘리먼트입니다.
}

export default MapContainer;