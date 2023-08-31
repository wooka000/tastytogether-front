import axios from '../../utils/axios';
import React, { useState, useMemo, useEffect } from 'react';
import * as S from './style/SearchResult.style';
import TypeFilter from '../../components/SearchResult/TypeFilter';
import RegionFilter from '../../components/SearchResult/RegionFilter';
import SortFilter from '../../components/SearchResult/SortFilter';
import { useLocation, useNavigate } from 'react-router-dom';
import ResultNotice from '../../components/SearchResult/ResultNotice';
import SearchResultItem from '../../components/SearchResult/SearchResultItem';
import FilterResultItem from '../../components/SearchResult/FilterResultItem';
import FilteredMap from '../../components/SearchResult/FilteredMap';

export default function SearchResult() {
    const navigate = useNavigate();
    const location = useLocation();
    const keyword = location.state?.keyword || '';
    console.log(keyword)
    const [selectedType, setSelectedType] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedArea, setSelectedArea] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [stores, setStores]=useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`http://localhost:8080/stores/search?keyword=칼국수`);
            const data = await res.data;
            setStores(data);
        };
        getData();
    }, []);
    stores && console.log(stores);


 // item.name이나 item.type, item.city 등에 검색 키워드가 포함되어 있는지 확인
//  실행되면 에러발생
    // const checkKeywordMatch = (stores) => {
    //     const searchKeyword = keyword.toLowerCase();
    //     for(let store of stores){
    //         if( 
    //             (store.name && store.name.toLowerCase().includes(searchKeyword)) ||
    //             (store.type && store.type.toLowerCase().includes(searchKeyword)) ||
    //             (store.address &&
    //             store.address.city &&
    //             store.address.city.toLowerCase().includes(searchKeyword))
    //         ){return true;}
    //     }
    //     return false
    // };

    // 검색 + 정렬된 데이터
    const applySearchAndSort = useMemo(() => {
        let searchSortedItems = [];
        
            for(let store of stores){
                if (store) {
                    searchSortedItems.push(store);
                }
                if (selectedSort === '평점순') {
                    searchSortedItems = searchSortedItems.filter((item) => item.starRating !== undefined);
                    searchSortedItems.sort((a, b) => (b.starRating || 0) - (a.starRating || 0));
                } else if (selectedSort === '리뷰순') {
                    searchSortedItems = searchSortedItems.filter(
                        (item) => item.storeReviewCount !== undefined,
                    );
                    searchSortedItems.sort((a, b) => (b.storeReviewCount || 0) - (a.storeReviewCount || 0));
                } else if (selectedSort === '찜한순') {
                    searchSortedItems = searchSortedItems.filter(
                        (item) => item.storeLikeCount !== undefined,
                    );
                    searchSortedItems.sort((a, b) => (b.storeLikeCount || 0) - (a.storeLikeCount || 0));
                } else {
                    // 기본적으로 이름 순서로 정렬
                    searchSortedItems = searchSortedItems.filter((item) => item.name !== undefined);
                    searchSortedItems.sort((a, b) => a.name.localeCompare(b.name));
                }
            }
            return searchSortedItems;

        }, [stores]);
    // 필터+ 정렬된 데이터
    const applyFiltersAndSort = useMemo(() => {
        let filteredData = [...stores];

        // 필터링
        filteredData = filteredData.filter((item)=>{
            if(selectedType && item.type !== selectedType){
                return false
            }
            if (
                selectedCity &&
                selectedArea &&
                (item.address.state !== selectedArea || item.address.city !== selectedCity)
              ) {
                return false;
              }
            return true;
        });
        // 정렬
        let filteredSortedData;
            if (selectedSort === '평점순') {
                filteredSortedData = filteredData.filter((item) => item.starRating !== undefined);
                filteredSortedData.sort((a, b) => (b.starRating || 0) - (a.starRating || 0));
            } else if (selectedSort === '리뷰순') {
                filteredSortedData = filteredData.filter((item) => item.storeReviewCount !== undefined);
                filteredSortedData.sort((a, b) => (b.storeReviewCount || 0) - (a.storeReviewCount || 0));
            } else if (selectedSort === '찜한순') {
                filteredSortedData = filteredData.filter((item) => item.storeLikeCount !== undefined);
                filteredSortedData.sort((a, b) => (b.storeLikeCount || 0) - (a.storeLikeCount || 0));
            } else {
                // 기본적으로 이름 순서로 정렬
                filteredSortedData = filteredData.filter((item) => item.name !== undefined);
                filteredSortedData.sort((a, b) => a.name.localeCompare(b.name));
            }    
        return filteredSortedData;
    }, [stores, selectedType, selectedArea, selectedSort]);
// 배열값을 그냥 변수처럼 넣어서 빈배열만 전달되었음.
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageItems = useMemo(() => {
        let pageItems = [];
        if (keyword && stores) {
          pageItems.push(...applySearchAndSort);
        } else if (selectedType || selectedArea) {
          pageItems.push(...applyFiltersAndSort);
        } else {
          pageItems.push(...stores);
        }
        return pageItems.length >10 ? pageItems.slice(startIndex, endIndex) : pageItems
    },  [ applyFiltersAndSort, keyword, stores, selectedType, selectedArea, startIndex, endIndex]);

    let region;
    const getLinkToPath = (selectedCity, selectedState, keyword, isFilter) => {
        if (isFilter) {
            region = `${selectedCity}/${selectedState}`;
            return {
                pathname: `/stores/filter`,
                state: {
                    type: selectedType,
                    region: region,
                },
            };
        } else {
            return {
                pathname: `/stores/search`,
                state: { keyword: keyword },
            };
        }
    };

    // 가게 클릭 시 가게 상세페이지로 이동
    const [clickedStore, setClickedStore] = useState(null)

    useEffect(()=>{
        if(clickedStore){
            navigate(`/stores/detail/${clickedStore._id}`, {state : {storeId: clickedStore._id}})
        }
    }, [clickedStore]);
 

    return (
        <S.Container>
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
                <FilteredMap currentPageItems={currentPageItems} />
                <ResultNotice
                    selectedType={selectedType}
                    selectedArea={selectedArea}
                    selectedCity={selectedCity}
                    keyword={keyword}
                    stores={stores}
                    applyFiltersAndSort={applyFiltersAndSort}
                    applySearchAndSort={applySearchAndSort}
                />
                {/* {(stores || keyword.trim() === '' || applyFiltersAndSort.length > 0) && ( */}
                {(stores.length > 0) && (
                    <S.ResultStores>
                        <S.Result>
                            {keyword.trim() !== '' &&
                                applySearchAndSort.map((item, index) => (
                                    <SearchResultItem
                                        key={index}
                                        item={item}
                                        index={index}
                                        keyword={keyword}
                                        linkTo={getLinkToPath(item, keyword, false)}
                                        // keywordMatch={checkKeywordMatch(item, keyword)}
                                        setClickedStore={setClickedStore}
                                    />
                                ))}
                            {stores &&
                                stores.map((store) => {
                                    return <div key={store._id}>{store.name}</div>;
                                })}

                            {selectedType || (selectedCity && selectedArea) || selectedSort
                                ? applyFiltersAndSort.map((item, index) => (
                                      <FilterResultItem
                                          key={index}
                                          item={item}
                                          index={index}
                                          linkTo={getLinkToPath(item, region, true)}
                                          setClickedStore={setClickedStore}
                                      />
                                  ))
                                : null}

                            {currentPageItems.map((item, index) => {
                                if (keyword.trim() !== '') {
                                    return (
                                        <SearchResultItem
                                            key={index}
                                            item={item}
                                            index={index}
                                            keyword={keyword}
                                            linkTo={getLinkToPath(item, '', true)}
                                            stores={stores}
                                            setClickedStore={setClickedStore}
                                        />
                                    );
                                } else if (selectedType || selectedCity || selectedArea) {
                                    return (
                                        <FilterResultItem
                                            key={index}
                                            item={item}
                                            index={index}
                                            linkTo={getLinkToPath(item, region, true)}
                                            setClickedStore={setClickedStore}
                                        />
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </S.Result>
                        <S.Pagination>
                            <button
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                이전 페이지
                            </button>
                            <span>현재 페이지: {currentPage}</span>
                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                disabled={currentPageItems.length < itemsPerPage}
                            >
                                다음 페이지
                            </button>
                        </S.Pagination>
                    </S.ResultStores>
                )}
            </S.ResultDiv>
        </S.Container>
    );
}
