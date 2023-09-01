import axios from '../../utils/axios';
import React, { useState, useMemo, useEffect } from 'react';
import * as S from './style/SearchResult.style';
import TypeFilter from '../../components/SearchResult/TypeFilter';
import RegionFilter from '../../components/SearchResult/RegionFilter';
import SortFilter from '../../components/SearchResult/SortFilter';
import { useLocation, useNavigate } from 'react-router-dom';
import ResultNotice from '../../components/SearchResult/ResultNotice';
import FilterResultItem from '../../components/SearchResult/FilterResultItem';
import SearchResultItem from '../../components/SearchResult/SearchResultItem';
import FilteredMap from '../../components/SearchResult/FilteredMap';

export default function SearchResult() {
    
    const navigate = useNavigate();
    const keyword = window.location.search.split('=')[1];
    // const keyword = location.state?.keyword || '';

    console.log(keyword)

    const [selectedType, setSelectedType] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedArea, setSelectedArea] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // 서버에서 정렬된 검색데이터
    const [stores, setStores] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`/stores/search?keyword=${keyword}`);
            const data = res.data;
            setStores(data);
        };
        getData();
    }, [keyword]);
    stores && console.log(stores);

    //filter 데이터 받아오기(서버에서 필터링 된 데이터)
    const [filterData, setFilterData] = useState([])
    // useEffect(() => {
    //     const getData = async () => {
    //         const res = await axios.get(`http://localhost:8080/stores/filter?type=${selectedType}&city={selectedCity}&state=${selectedArea}`);
    //         const data = await res.data;
    //         setFilterData(data);
    //     };
    //     getData();
    // }, [selectedType, selectedCity, selectedArea]);

    const dataSave = async () => {
        // let typeParam = '';
        // let cityParam = '';
        // let areaParam = '';

        // if (selectedType === '기본') {
        //   typeParam = 'type=';
        // } else if (selectedType !== '') {
        //   typeParam = `type=${selectedType}`;
        // }
      
        // if (selectedCity && selectedArea) {
        //   cityParam = `city=${selectedCity}`;
        //   areaParam = `state=${selectedArea}`;
        // } else {
        //   cityParam = 'city=';
        //   areaParam = 'state=';
        // }
        // console.log(typeParam)
        // console.log(cityParam)
        // console.log(areaParam)
        // const res = await axios.get('/stores/filter?type=${selectedType}&city=${selectedCity}&state=${selectedArea}');
        // const data = res.data;
        // setFilterData(data);
      };

    filterData && console.log(filterData);

const applySearchAndSort = useMemo(() => {
        let searchData = [...stores]
        // 정렬버튼 클릭 시 정렬됨.
        if (selectedSort === '평점순') {
            searchData.filter((item) => item.starRating !== undefined);
            return searchData.sort((a, b) => (b.starRating || 0) - (a.starRating || 0));
          } else if (selectedSort === '리뷰순') {
            searchData.filter((item) => item.storeReviewCount !== undefined);
            return searchData.sort((a, b) => (b.storeReviewCount || 0) - (a.storeReviewCount || 0));
          } else if (selectedSort === '찜한순') {
            searchData.filter((item) => item.storeLikeCount !== undefined);
            return searchData.sort((a, b) => (b.storeLikeCount || 0) - (a.storeLikeCount || 0));
          } else {
            return searchData;
        };
    },[stores, selectedType, selectedArea, selectedSort])
    // 필터 데이터 정렬시키기
    const applyFiltersAndSort = useMemo(() => {
        let filteredData = [...filterData];
        // 정렬버튼 클릭 시 정렬됨.
        if (selectedSort === '평점순') {
            filteredData = filteredData.filter((item) => item.starRating !== undefined);
            return filteredData.sort((a, b) => (b.starRating || 0) - (a.starRating || 0));
        } else if (selectedSort === '리뷰순') {
            filteredData = filteredData.filter((item) => item.storeReviewCount !== undefined);
            return filteredData.sort((a, b) => (b.storeReviewCount || 0) - (a.storeReviewCount || 0));
        } else if (selectedSort === '찜한순') {
            filteredData = filteredData.filter((item) => item.storeLikeCount !== undefined);
            return filteredData.sort((a, b) => (b.storeLikeCount || 0) - (a.storeLikeCount || 0));
        } else {
            return filteredData
        }
    }, [filterData, selectedType, selectedArea, selectedSort]);
    

    //페이지 별로 결과 출력
    const pageItems = useMemo(() => {
        if (keyword.trim() !== '') {
            return applySearchAndSort;
        } else if (filterData) {
            return applyFiltersAndSort;
        } else {
            return stores;
        }
    }, [applySearchAndSort, applyFiltersAndSort, keyword.trim(), selectedType, selectedCity, selectedArea, stores]);

    const itemsPerPage = 5;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageItems = pageItems.slice(startIndex, endIndex);
    const pageCount = Math.ceil(pageItems.length / itemsPerPage);
      

    const getLinkToPath = (selectedType,selectedCity, selectedArea, keyword, isFilter) => {
        if (isFilter) {
            return {
                pathname: '/stores/filter',
                state: {
                    type: selectedType,
                    city: selectedCity,
                    state: selectedArea,
                },
            };
        } else {
            return {
                pathname: '/stores/search',
                state: { keyword: keyword },
            };
        }
    };
    // 가게 클릭 시 가게 상세페이지로 이동
    const [clickedStore, setClickedStore] = useState(null)



    console.log(currentPageItems)
    return(
        <S.Container>
            <S.Search>
                <S.Nav>
                    <TypeFilter
                    setSelectedType={setSelectedType}
                    dataSave={dataSave}
                    />
                    <RegionFilter 
                        selectedCity={selectedCity} 
                        selectedArea={selectedArea} 
                        setSelectedCity={setSelectedCity} 
                        setSelectedArea={setSelectedArea} 
                        dataSave={dataSave}
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
                        applyFiltersAndSort={applyFiltersAndSort}
                        applySearchAndSort={applySearchAndSort}
                    />
                        <S.ResultStores>
                            <S.Result>
                                {/* 검색 결과 아이템들 */}
                                {currentPageItems.map((item, index) => {
                                    if (keyword.trim() !== '') {
                                    // 검색 결과인 경우
                                    return (
                                        <SearchResultItem
                                            key={item._id}
                                            index={(currentPage - 1) * itemsPerPage + index} // 정확한 인덱스 계산 필요
                                            item={item}
                                            // linkTo={getLinkToPath(item, keyword, false)}
                                            setClickedStore={setClickedStore}
                                            id={item._id}
                                        />
                                    );
                                    } else if (filterData) {
                                    // 필터 결과인 경우
                                    return (
                                        <FilterResultItem
                                            key={item._id}
                                            index={(currentPage - 1) * itemsPerPage + index} // 정확한 인덱스 계산 필요
                                            item={item}
                                            // linkTo={getLinkToPath(item, true)}
                                            setClickedStore={setClickedStore}
                                            id={item._id}
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
                                    이전
                                </button>
                                <span>{currentPage} / {pageCount}</span>
                                <button
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    disabled={currentPage >= pageCount}
                                >
                                    다음
                                </button>
                        </S.Pagination>
                    </S.ResultStores>
            </S.ResultDiv>
            </S.Search>
        </S.Container>
    );
}
