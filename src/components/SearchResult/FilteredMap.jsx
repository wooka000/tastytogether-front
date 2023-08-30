import * as S from './style/FilteredMap.style'; 
import React, { useEffect } from 'react';

const FilteredMap = ({ stores }) => {
    
    useEffect(() => {
        window.kakao.maps.load(()=>{
            let mapContainer = document.getElementById('map'),
                mapOption = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            };

            let map = new window.kakao.maps.Map(mapContainer, mapOption);
            let positions = stores.map(store => ({
                title: store.name,
                latlng: new kakao.maps.LatLng(store.address.latitude, store.address.longitude)
              }));
            const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
            
            for(let i = 0; i <positions.length; i++){
                let imageSize = new kakao.maps.Size(24, 35);
                let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
                let marker = new kakao.maps.Marker({
                    map: map,
                    position: positions[i].latlng,
                    title: positions[i].title,
                    image: markerImage
                });
                marker.setMap(map);
            }
        });
    }, []);    

    return (
        <S.FilteredMap>
            <S.Map
                id="map"
                level={3}
            >
            </S.Map>
        </S.FilteredMap>
    )
}
export default FilteredMap;
