import axios from 'axios';
// import baseURL from '../../utils/axios'
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './style/SearchResult.style'
import TypeFilter from '../../components/SearchResult/TypeFilter';
import RegionFilter from '../../components/SearchResult/RegionFilter';
import SortFilter from '../../components/SearchResult/SortFilter';
import SearchResultItem from '../../components/SearchResult/SearchResultItem';


export default function SearchResult() {
    const location = useLocation();
    const keyword = location.state.keyword ? location.state.keyword : '';
    const type = location.state.type ? location.state.type : '';

    const navigate = useNavigate();

    const [ loading, setLoading ] = useState(false);
    const [ searchResults, setSearchResults ] = useState([]);
    const [ filteredData, setFilteredData ] = useState([]);
    const [ selectedType, setSelectedType ] = useState();
    const [ selectedCity, setSelectedCity ] = useState('');
    const [ selectedArea, setSelectedArea ] = useState('');
    const [ selectedSort, setSelectedSort ] = useState('');


    const fetchData = async () => {
        try {
            setLoading(true);

            let response;
            if (keyword) {
                response = await axios.get(`/stores/search?keyword=${keyword}`);
                navigate(`/stores/search?keyword=${keyword}`);
            } else {
                response = await axios.get(
                    `/stores/filter?type=${selectedType}&region=${selectedCity}/${selectedArea}`
                );
                navigate(
                    `/stores/filter?type=${selectedType}&region=${selectedCity}/${selectedArea}`
                );
            }

            const responseData = response.data;
            console.log("API Response:", responseData);

            setSearchResults(responseData.data);
            setFilteredData(responseData.data);

            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    // 검색어 검색조건
    const checkKeywordMatch = (item, keyword) => {
        return (
            (item.city.includes(keyword) && keyword.length >= 2) ||
            (item.state.includes(keyword) && keyword.length >= 2) ||
            (item.name.includes(keyword) && keyword.length >= 1) ||
            item.menuItems.some(menuItem => menuItem.name.includes(keyword) && keyword.length >= 1)
        );
    };

    // 검색 + 정렬
    const applySearchAndSort = useMemo(() => {
        return filteredData
            .filter(item => {
                const keywordMatch = checkKeywordMatch(item, keyword);
                return keywordMatch;
            })
            .sort((a, b) => a.name.localeCompare(b.name));
    }, [filteredData, keyword]);

    // 필터 + 정렬
    const applyFiltersAndSort = useMemo(() => {
        let filteSortdData = [...filteredData];
        
        if (selectedType) {
            filteSortdData = filteredData.filter(item => item.type === selectedType);
        }
        if (selectedCity && selectedArea) {
            filteSortdData = filteredData.filter(item => item.state === selectedArea && item.city === selectedCity);
        }
        if (selectedType && selectedCity && selectedArea) {
            filteSortdData = filteredData.filter(item => item.type === selectedType && item.state === selectedArea && item.city === selectedCity);
        }
        // 필터가 지정되지 않으면 기존 데이터 유지
        if (!selectedType && !selectedCity && !selectedArea) {
            filteSortdData = [...filteredData]; 
        }
        
        if (selectedSort === '평점순') {
            filteSortdData.sort((a, b) => b.rating - a.rating);
        } else if (selectedSort === '리뷰순') {
            filteSortdData.sort((a, b) => b.reviews.length - a.reviews.length);
        } else if (selectedSort === '찜한순') {
            filteSortdData.sort((a, b) => b.likes.length - a.likes.length);
        } else {
            filteSortdData.sort((a, b) => a.name.localeCompare(b.name));
        }
        return filteSortdData;
    }, [filteredData, selectedType, selectedCity, selectedArea, selectedSort]);
    
    useEffect(() => {
        fetchData();
    }, [selectedType, selectedCity, selectedArea, selectedSort, keyword]);

    // 소셜필터 페이지 이동 기능
      const handleLikedStoresClick = () =>{
        navigate('/user/store/likes');
      }
      const handleReviewedStoresClick = () =>{
        navigate('/user/reviews');
      }
      // 검색&필터 적용시 링크
      const getLinkToPath = (item, keyword, isFilter) => {
        if (isFilter) {
            return {
                pathname: `/stores/filter`,
                state: {
                    type: type,
                    region: `${item.city}/${item.state}`
                }
            };
        } else {
            return {
                pathname: `/stores/search`,
                state: { keyword: keyword }
            };
        }
    };



    // // 지도 가져오기
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.type = 'text/javascript'
    //     /* eslint-disable */
    //     script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false&libraries=services`;
    //     script.async = true;
      
    //     script.onload = () => {
    //         window.kakao.maps.load(() => {
    //             let LatLng = window.kakao.maps.LatLng
    //             const mapContainer = document.getElementById('map');
    //             const mapOption = {
    //                 center: new LatLng(33.450701, 126.570667),
    //                 level: 3,
    //             };
    //             const map = new window.kakao.maps.Map(mapContainer, mapOption); 
    //             const geocoder = new window.kakao.maps.services.Geocoder();
                
    //             // 주소를 변경할 때마다 지도와 마커를 업데이트
    //             const updateMapAndMarker = (newAddress) => {
    //                 geocoder.addressSearch(newAddress, function (result, status) {
    //                     if (status === window.kakao.maps.services.Status.OK) {
    //                         const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
    //                         const marker = new window.kakao.maps.Marker({
    //                             map: map,
    //                             position: coords,
    //                         });
    //                         const infowindow = new window.kakao.maps.InfoWindow({
    //                             content: `<div style="width:250px;text-align:center;padding:20px 0;">${addressObj.name}</div>`,
    //                         });
    //                         infowindow.open(map, marker);
    //                           //주소를 좌표로 변환한 위도와 경도를 state에 저장
    //                           setAddressObj((prevAddressObj)=>({
    //                             ...prevAddressObj,
    //                             latitude: coords.getLat(),
    //                             longitude: coords.getLng(),
    //                           }));
    //                         map.setCenter(coords);
    //                     }
    //                 });
    //             };
    //             updateMapAndMarker(addressObj.street);
                
    //             // 주소 변경 시마다 업데이트
    //             const addressChangeHandler = (event) => {
    //                 updateMapAndMarker(event.target.value);
    //             };
      
    //             // 주소 변경 이벤트 리스너 추가
    //             document.getElementById('addressInput').addEventListener('input', addressChangeHandler);
    //         });
    //     };
    // })








    return(
        <S.Container>
            <S.Search>
                <S.Nav>
                    <S.Social>
                        <S.MyFilterTitle>
                            <S.Square></S.Square>
                            <h2>소셜</h2>
                        </S.MyFilterTitle>
                        <S.MyFilterContent>
                            <div onClick={handleLikedStoresClick}>
                                <img src="/imgs/add.png" alt="" />
                                <h3>내가 찜한 가게</h3>
                            </div>
                            <div onClick={handleReviewedStoresClick}>
                                <img src="/imgs/add.png" alt="" />
                                <h3>내가 리뷰한 가게</h3>
                            </div>
                        </S.MyFilterContent>
                    </S.Social>
                    <TypeFilter setSelectedType={setSelectedType} 
                    />
                    <RegionFilter 
                        selectedCity={selectedCity} 
                        selectedArea={selectedArea} 
                        setSelectedCity={setSelectedCity} 
                        setSelectedArea={setSelectedArea} 
                    />
                </S.Nav>

                <S.ResultDiv>
                    <SortFilter setSelectedSort={setSelectedSort} />
                    











                    
                    <S.FilteredMap>
                        <S.MapContainer>
                            <div
                                id="map"
                                style={{
                                    width: "100%",
                                    height: "450px",
                                }}
                            ></div>
                        <S.AddressInput id="addressInput" type="text" />
                        </S.MapContainer>

                    </S.FilteredMap>

                    {loading && <p>검색중</p>}
 
                    {(searchResults.length > 0 || keyword.trim() === '' || applyFiltersAndSort.length > 0) && (
                        <div>
                            <S.ResultNotice>
                                <S.Keyword>
                                    {keyword.trim() === '' && applyFiltersAndSort.length === 0
                                        ? '검색어나 필터를 입력해주세요.'
                                        : `${applyFiltersAndSort.length > 0 ? '검색과 ' : ''}${keyword.trim() === '' ? '필터' : '키워드'}에 대한 검색결과입니다.`}
                                </S.Keyword>
                            </S.ResultNotice>
                            <div>
                                {applySearchAndSort.map((item, index) => (
                                    <SearchResultItem
                                        key={item.id}
                                        item={item}
                                        index={index}
                                        keyword={keyword}
                                        linkTo={getLinkToPath(item, keyword, false)}
                                        keywordMatch={checkKeywordMatch(item, keyword)}
                                    />
                                ))}
                                {applyFiltersAndSort.map((item, index) => (
                                    <SearchResultItem
                                        key={item.id}
                                        item={item}
                                        index={index}
                                        keyword={keyword}
                                        keywordMatch={checkKeywordMatch(item, keyword)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </S.ResultDiv>
            </S.Search>
        </S.Container>
    )
}