import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style/SearchResult.style'
import TypeFilter from '../../components/SearchResult/TypeFilter';
import RegionFilter from '../../components/SearchResult/RegionFilter';
import SortFilter from '../../components/SearchResult/SortFilter';
// import Social from '../../components/SearchResult/Social';
import ResultNotice from '../../components/SearchResult/ResultNotice';
import SearchResultItem from '../../components/SearchResult/SearchResultItem';
import FilterResultItem from '../../components/SearchResult/FilterResultItem';
import FilteredMap from '../../components/SearchResult/FilteredMap';
import axios from '../../utils/axios';

export default function SearchResult() {
    
    const location = useLocation();
    const navigate = useNavigate();
    // 입력한 검색키워드, 필터타입 변수 선언
    const keyword = location.state?.keyword || '';
    const [ loading, setLoading ] = useState(false);
    // 검색결과 받아오기
    // const [ searchResults, setSearchResults ] = useState([]);
    // 필터결과 받아오기
    // const [ filteredData, setFilteredData ] = useState([]);
    const [ selectedType, setSelectedType ] = useState('');
    const [ selectedCity, setSelectedCity ] = useState('');
    const [ selectedArea, setSelectedArea ] = useState('');
    const [ selectedSort, setSelectedSort ] = useState('');

    // 검색 및 필터에 따른 지도가져오기
    const [info, setInfo] = useState([]);
    const [markers, setMarkers] = useState([]);

    // 페이지 상태저장(한 페이지당 10개)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;


    // storeInfo 초기값 설정    
    // fetchData 함수와 storeInfo 상태(state)
    // 받아온 storeInfo를 각 검색결과에 주입
    const [storeInfo, setStoreInfo] = useState({
        _id:"",
        name: "",
        address: {
            city: "",
            state: "",
            street: "",
            fullAddress: "",
            zipCode: "",
            latitude: "",
            longitude: "",
        },
        menuItems: [],
        type: "",
        phone: "",
        priceRange: "",
        parkingInfo: "",
        businessHours: [],
        closedDays: [],
        banners: [],
        reviews:[],
        starRating:0

    });
    console.log("API Response:", keyword);
    const [storeReviewCount, setStoreReviewCount] = useState(0);
    const [storeLikeCount, setStoreLikeCount] = useState(0);
    const [storeReview, setStoreReview] = useState([]);
    // const storeId = location.state.storeId;

   useEffect(() => {
        const getData = async () => {
             const res = await axios.get(`/stores/search?keyword=${keyword}`);
             const data = res.data;
                setStoreInfo(data.storeInfo);
                setStoreLikeCount(data.storeLikeCount);
                setStoreReviewCount(data.storeReviewCount);
                if (data.storeInfo && data.storeInfo.reviews) {
                    setStoreReview(data.storeInfo.reviews);
                  }
        };
        getData();
        setLoading(true)
   }, []);
    console.log(storeInfo)
    console.log(storeReviewCount)
    console.log(storeLikeCount)
    console.log(storeReview)
    // 검색어 검색조건(아래 로직에 적용하는 함수)
    const checkKeywordMatch = (storeInfo) => {
        const searchKeyword = keyword.toLowerCase();
      
        // item.name이나 item.type, item.city 등에 검색 키워드가 포함되어 있는지 확인
        return (
            (storeInfo.name && storeInfo.name.toLowerCase().includes(searchKeyword)) ||
            (storeInfo.type && storeInfo.type.toLowerCase().includes(searchKeyword)) ||
            (storeInfo.address && storeInfo.address.city && storeInfo.address.city.toLowerCase().includes(searchKeyword))
        );
    };

    // 검색 + 정렬(객체를 배열로 만들어 검사)
    const applySearchAndSort = useMemo(() => {
        let searchSortedItems = [];
        
        if (storeInfo && Object.keys(storeInfo).length > 0) {
            searchSortedItems.push(storeInfo);
          }

        if (storeLikeCount && storeReviewCount) {
          searchSortedItems.push({ storeLikeCount, storeReviewCount });
        }
      
        if (selectedSort === '평점순') {
          searchSortedItems = searchSortedItems.filter(item => item.starRating !== undefined);
          searchSortedItems.sort((a, b) => (b.starRating || 0) - (a.starRating || 0));
        } else if (selectedSort === '리뷰순') {
          searchSortedItems = searchSortedItems.filter(item => item.storeReviewCount !== undefined);
          searchSortedItems.sort((a, b) => (b.storeReviewCount || 0) - (a.storeReviewCount || 0));
        } else if (selectedSort === '찜한순') {
          searchSortedItems = searchSortedItems.filter(item => item.storeLikeCount !== undefined);
          searchSortedItems.sort((a, b) => (b.storeLikeCount || 0) - (a.storeLikeCount || 0));
        } else { // 기본적으로 이름 순서로 정렬
          searchSortedItems = searchSortedItems.filter(item => item.name !== undefined);
          searchSortedItems.sort((a, b) => a.name.localeCompare(b.name));
        }
        return searchSortedItems;
    }, [storeInfo]);

    const applyFiltersAndSort = useMemo(() => {
        let filteredData = [];
      
        if (storeInfo && Object.keys(storeInfo).length > 0) {
          filteredData.push(storeInfo);
          
          filteredData = filteredData.filter(item => {
            if (selectedType && item.type !== selectedType) {
              return false;
            }
            if (selectedCity && selectedArea && (item.address.state !== selectedArea || item.address.city !== selectedCity)) {
              return false;
            }
            return true;
          });
      
          let sortedData;
      
          if (selectedSort === '평점순') {
            sortedData = filteredData.filter(item => item.starRating !== undefined);
            sortedData.sort((a, b) => (b.starRating || 0) - (a.starRating || 0));
          } else if (selectedSort === '리뷰순') {
            sortedData = filteredData.filter(item => item.storeReviewCount !== undefined);
            sortedData.sort((a, b) => (b.storeReviewCount || 0) - (a.storeReviewCount || 0));
          } else if (selectedSort === '찜한순') {
            sortedData = filteredData.filter(item => item.storeLikeCount !== undefined);
            sortedData.sort((a, b) => (b.storeLikeCount || 0) - (a.storeLikeCount || 0));
          } else { // 기본적으로 이름 순서로 정렬
            sortedData = filteredData.filter(item => item.name !== undefined);
            sortedData.sort((a, b) => a.name.localeCompare(b.name));
          }
           const dataWithCounts = [...sortedData];
           if(storeLikeCount!==undefined&&storeReviewCount!==undefined){
               dataWithCounts.push({ storeLikeCount, storeReviewCount });
           }
           return dataWithCounts;
         }
         return [];
      }, [storeInfo, storeLikeCount, storeReviewCount, selectedType, selectedCity, selectedArea ,selectedSort]);
      //페이지네이션
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageItems = useMemo(() => {
        let items =[];
        if (keyword && storeInfo) {
          // 검색 결과가 있을 경우 검색된 아이템 사용
          items = applySearchAndSort;
        }
        if(selectedType || selectedCity || selectedArea) {
          // 검색 결과가 없을 경우 필터링 및 정렬된 아이템 사용
          items = applyFiltersAndSort;
        }
        return items.slice(startIndex, endIndex);
      }, [applySearchAndSort, applyFiltersAndSort, startIndex, endIndex]);

    // 검색&필터 적용시 링크
    let region
    const getLinkToPath = (storeInfo, keyword, isFilter) => {
        region = `${storeInfo.city}/${storeInfo.state}`;
        if (isFilter) {
            return {
                pathname: `/stores/filter`,
                state: {
                    type: selectedType,
                    region: region
                }
            };
        } else {
            return {
                pathname: `/stores/search`,
                state: {keyword:keyword}
            };
        }
    };
    const handleItemClick = (storeInfo_id) => {
        navigate(`/stores/detail/${storeInfo_id}`, { state: { storeInfo_id } });
    }
    return(
        <S.Container>
            <S.Search>
                <S.Nav>
                    <TypeFilter setSelectedType={setSelectedType} />
                    <RegionFilter 
                        selectedCity={selectedCity} 
                        selectedArea={selectedArea} 
                        setSelectedCity={setSelectedCity} 
                        setSelectedArea={setSelectedArea} 
                    />
                </S.Nav>
                <S.ResultDiv>
                    <SortFilter setSelectedSort={setSelectedSort} />
                    {/* 지도 - 1페이지당 나타나는 아이템들을 지도 위에 매핑 */}
                    {currentPageItems.map((item, index) => (
                        <FilteredMap
                            key={index}
                            latitude={item.address.latitude}
                            longitude={item.address.longitude}
                            name={item.name}
                            markers={markers}
                            info={info}
                            setInfo={setInfo}
                            setMarkers={setMarkers}
                        />
                        ))}

                    {loading && <p>검색중</p>}
                    
                    <ResultNotice
                        selectedType={selectedType}
                        selectedArea={selectedArea}
                        selectedCity={selectedCity}
                        keyword={keyword}
                        storeInfo={storeInfo}
                        applyFiltersAndSort={applyFiltersAndSort}
                        applySearchAndSort={applySearchAndSort}

                    />
                    {(storeInfo || keyword.trim() === '' || applyFiltersAndSort.length > 0) && (
                        <S.ResultStores>
                            <S.Result>
                                {/* 검색 결과 아이템들 */}
                                {keyword.trim() !== '' && applySearchAndSort.map((item, index) => (
                                    <SearchResultItem
                                        key={item._id}
                                        item={item}
                                        index={index}
                                        keyword={keyword}
                                        linkTo={getLinkToPath(item, keyword, false)}
                                        keywordMatch={checkKeywordMatch(item, keyword)}
                                        onClick={() => handleItemClick(item._id)}
                                    />
                                ))}

                                {/* 필터 결과 아이템들 */}
                                {selectedType || (selectedCity && selectedArea) || selectedSort ? (applyFiltersAndSort.map((item, index) => (
                                    <FilterResultItem
                                        key={item._id}
                                        item={item}
                                        index={index}
                                        linkTo={getLinkToPath(item, region, true)}
                                        onClick={() => handleItemClick(item._id)}
                                    />
                                ))) : null}

                                {/* 페이지별 결과 아이템들 */}
                                {currentPageItems.map((item, index) => {
                                    if (keyword.trim() !== '') {
                                        // 검색 결과인 경우
                                        return (
                                        <SearchResultItem
                                            key={item.id}
                                            item={item}
                                            index={index}
                                            keyword={keyword}
                                            linkTo={getLinkToPath(item, '', true)}
                                            keywordMatch={checkKeywordMatch(item, keyword)}
                                            storeInfo={storeInfo}
                                            onClick={() => handleItemClick(item._id)}
                                        />
                                        );
                                    }else if(selectedType || selectedCity || selectedArea) {
                                        // 필터 결과인 경우
                                        return (
                                        <FilterResultItem
                                            key={item._id}
                                            item={item}
                                            index={index}
                                            linkTo={getLinkToPath(item, region, true)}
                                            onClick={() => handleItemClick(item._id)}

                                        />
                                        );
                                    } else {
                                        return null; // 추가적인 조건이 없는 경우 null 반환 (렌더링하지 않음)
                                      }
                                    })}
                                </S.Result>
                            {/* 페이지 네비게이션 */}
                            <S.Pagination>
                                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                                이전 페이지
                                </button>
                                <span>현재 페이지: {currentPage}</span>
                                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPageItems.length < itemsPerPage}>
                                다음 페이지
                                </button>
                            </S.Pagination>
                        </S.ResultStores>
                    )}
                </S.ResultDiv>
            </S.Search>
        </S.Container>
    )
}