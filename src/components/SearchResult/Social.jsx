// import React, { useState, useEffect, useMemo } from 'react';
// import { useLocation } from 'react-router-dom';
// import * as S from './style/SearchResult.style'
// import TypeFilter from '../../components/SearchResult/TypeFilter';
// import RegionFilter from '../../components/SearchResult/RegionFilter';
// import SortFilter from '../../components/SearchResult/SortFilter';
// import Social from '../../components/SearchResult/Social';
// import ResultNotice from '../../components/SearchResult/ResultNotice';
// import SearchResultItem from '../../components/SearchResult/SearchResultItem';
// import FilteredMap from '../../components/SearchResult/FilteredMap';
// import axios from '../../utils/axios';

// export default function SearchResult() {
    
//     const location = useLocation();
//     // const navigate = useNavigate();
//     // 입력한 검색키워드, 필터타입 변수 선언
//     const keyword = location.state?.keyword || '';
//     const [ loading, setLoading ] = useState(false);
//     // 검색결과 받아오기
//     // const [ searchResults, setSearchResults ] = useState([]);
//     // 필터결과 받아오기
//     // const [ filteredData, setFilteredData ] = useState([]);
//     const [ selectedType, setSelectedType ] = useState('');
//     const [ selectedCity, setSelectedCity ] = useState('');
//     const [ selectedArea, setSelectedArea ] = useState('');
//     const [ selectedSort, setSelectedSort ] = useState('');

//     // 검색 및 필터에 따른 지도가져오기
//     const [info, setInfo] = useState([]);
//     const [markers, setMarkers] = useState([]);

//     // 페이지 상태저장(한 페이지당 10개)
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 10;


// // storeInfo 초기값 설정    
//   // fetchData 함수와 storeInfo 상태(state)
//   // 받아온 storeInfo를 각 검색결과에 주입
//     const [storeInfo, setStoreInfo] = useState({
//         name: "",
//         address: {
//             city: "",
//             state: "",
//             street: "",
//             fullAddress: "",
//             zipCode: "",
//             latitude: "",
//             longitude: "",
//         },
//         menuItems: [],
//         type: "",
//         phone: "",
//         priceRange: "",
//         parkingInfo: "",
//         businessHours: [],
//         closedDays: [],
//         banners: [],

//     });
//     console.log("API Response:", keyword);
//     const [storeReviewCount, setStoreReviewCount] = useState(0);
//     const [storeLikeCount, setStoreLikeCount] = useState(0);
//     const [storeReview, setStoreReview] = useState([]);
//     // const storeId = location.state.storeId;

//    useEffect(() => {
//        const getData = async () => {
//            const res = await axios.get(`/stores/search?keyword=${keyword}`);
//            const data = res.data;
//                setStoreInfo(data.storeInfo);
//                setStoreLikeCount(data.storeLikeCount);
//                setStoreReviewCount(data.storeReviewCount);
//                setStoreReview(data.storeInfo.reviews);
//        };
//        getData();
//     setLoading(true)

//    }, []);
//         console.log(storeInfo)
//         console.log(storeReviewCount)
//         console.log(storeLikeCount)
//         console.log(storeReview)
//     // 검색어 검색조건(아래 로직에 적용하는 함수)
//     const checkKeywordMatch = (storeInfo) => {
//         const searchKeyword = keyword.toLowerCase();
      
//         // item.name이나 item.type, item.city 등에 검색 키워드가 포함되어 있는지 확인
//         return (
//             (storeInfo.name && storeInfo.name.toLowerCase().includes(searchKeyword)) ||
//             (storeInfo.type && storeInfo.type.toLowerCase().includes(searchKeyword)) ||
//             (storeInfo.address && storeInfo.address.city && storeInfo.address.city.toLowerCase().includes(searchKeyword))
//           );
//         };


//     // 검색 + 정렬
//     const applySearchAndSort = useMemo(() => {
//         const searchSortedItems = Object.keys(storeInfo)
//           .filter(key => {
//             const item = storeInfo[key];
//             const keywordMatch = checkKeywordMatch(item, keyword);
//             return keywordMatch;
//           })
//           .map(key => storeInfo[key])
//           .sort((a, b) => a.name.localeCompare(b.name));
      
//         return searchSortedItems;
//       }, [storeInfo, keyword]);
//     // 필터 + 정렬
//     const applyFiltersAndSort = useMemo(() => {
//         let filterdSortedData = [...storeInfo];
        
//         if (selectedType) {
//             filterdSortedData = filterdSortedData.filter(item => item.type === selectedType);
//         }
//         if (selectedCity && selectedArea) {
//             filterdSortedData = filterdSortedData.filter(item => item.state === selectedArea && item.city === selectedCity);
//         }
//         if (selectedType && selectedCity && selectedArea) {
//             filterdSortedData = filterdSortedData.filter(item => item.type === selectedType && item.state === selectedArea && item.city === selectedCity);
//         }
//         // 필터가 지정되지 않으면 기존 데이터 유지
//         if (!selectedType && !selectedCity && !selectedArea) {
//             filterdSortedData = [...storeInfo]; 
//         }
        
//         if (selectedSort === '평점순') {
//             filterdSortedData.sort((a, b) => b.rating - a.rating);
//         } else if (selectedSort === '리뷰순') {
//             filterdSortedData.sort((a, b) => b.reviews.length - a.reviews.length);
//         } else if (selectedSort === '찜한순') {
//             filterdSortedData.sort((a, b) => b.likes.length - a.likes.length);
//         } else { //기본적으로 이름 순서로 정렬
//             filterdSortedData.sort((a, b) => a.name.localeCompare(b.name));
//         }
//         return filterdSortedData;
//     }, [storeInfo, selectedType,  selectedCity, selectedArea, selectedSort]);


//     // 현재 페이지에 해당하는 아이템들만 가져오기
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const currentPageItems = applyFiltersAndSort.slice(startIndex, endIndex);

//     // 검색&필터 적용시 링크
//     const getLinkToPath = (storeInfo, keyword, isFilter) => {
//         if (isFilter) {
//             return {
//                 pathname: `/stores/filter`,
//                 state: {
//                     type: selectedType,
//                     region: storeInfo.city/storeInfo.state
//                 }
//             };
//         } else {
//             return {
//                 pathname: `/stores/search`,
//                 state: { keyword: keyword }
//             };
//         }
//     };

//     return(
//         <S.Container>
//             <S.Search>
//                 <S.Nav>
//                     <Social />
//                     <TypeFilter setSelectedType={setSelectedType} />
//                     <RegionFilter 
//                         selectedCity={selectedCity} 
//                         selectedArea={selectedArea} 
//                         setSelectedCity={setSelectedCity} 
//                         setSelectedArea={setSelectedArea} 
//                     />
//                 </S.Nav>
//                 <S.ResultDiv>
//                     <SortFilter setSelectedSort={setSelectedSort} />
//                     {/* 지도 - 1페이지당 나타나는 아이템들을 지도 위에 매핑 */}
//                     {currentPageItems.map((item, index) => (
//                         <FilteredMap
//                             key={index}
//                             latitude={item.address.latitude}
//                             longitude={item.address.longitude}
//                             name={item.name}
//                             markers={markers}
//                             info={info}
//                             setInfo={setInfo}
//                             setMarkers={setMarkers}
//                         />
//                         ))}

//                     {loading && <p>검색중</p>}
                    
//                     <ResultNotice
//                         selectedType={selectedType}
//                         selectedArea={selectedArea}
//                         selectedCity={selectedCity}
//                         keyword={keyword}
//                         storeInfo={storeInfo}
//                         applyFiltersAndSort={applyFiltersAndSort}
//                     />
//                     {(storeInfo.length > 0 || keyword.trim() === '' || applyFiltersAndSort.length > 0) && (
//                         <S.ResultStores>
//                             <S.Result>
//                                 {/* 검색 결과 아이템들 */}
//                                 {keyword.trim() !== '' && applySearchAndSort.map((item, index) => (
//                                     <SearchResultItem
//                                         key={item.id}
//                                         item={item}
//                                         index={index}
//                                         keyword={keyword}
//                                         linkTo={getLinkToPath(item, keyword, false)}
//                                         keywordMatch={checkKeywordMatch(item, keyword)}
//                                         storeInfo={storeInfo}

//                                     />
//                                 ))}

//                                 {/* 필터 결과 아이템들 */}
//                                 {selectedType || (selectedCity && selectedArea) || selectedSort ? (
//                                     applyFiltersAndSort.map((item, index) => (
//                                         <SearchResultItem
//                                             key={item.id}
//                                             item={item}
//                                             index={index}
//                                             keyword={keyword}
//                                             keywordMatch={checkKeywordMatch(item, keyword)}
//                                             storeInfo={storeInfo}
//                                         />
//                                     ))
//                                 ) : null}

//                                 {/* 페이지별 결과 아이템들 */}
//                                 {currentPageItems.map((item, index) => (
//                                     <SearchResultItem
//                                         key={item.id}
//                                         item={item}
//                                         index={index}
//                                         keyword={keyword}
//                                         linkTo={getLinkToPath(item, '', true)}
//                                         keywordMatch={checkKeywordMatch(item, keyword)}
//                                         storeInfo={storeInfo}
//                                     />
//                                 ))}
//                             </S.Result>
//                             {/* 페이지 네비게이션 */}
//                             <S.Pagination>
//                                 <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
//                                 이전 페이지
//                                 </button>
//                                 <span>현재 페이지: {currentPage}</span>
//                                 <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPageItems.length < itemsPerPage}>
//                                 다음 페이지
//                                 </button>
//                             </S.Pagination>
//                         </S.ResultStores>
//                     )}
//                 </S.ResultDiv>
//             </S.Search>
//         </S.Container>
//     )
// }