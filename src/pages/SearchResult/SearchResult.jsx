import axios from 'axios';
import '../../utils/axios'
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import * as S from './style/SearchResult.style'
// // import { useLocation, useNavigate, Link, useParams } from 'react-router-dom';
// import Social from '../../components/SearchResult/Social'; 
// import TypeFilter from '../../components/SearchResult/TypeFilter'; 
// import RegionFilter from '../../components/SearchResult/RegionFilter'; 

export default function SearchResult() {
    const location = useLocation();
    const keyword = location.state && location.state.keyword ? location.state.keyword : '';
    const navigate = useNavigate();

    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const [filteredData, setFilteredData] = useState([]);

    const [ selectedType, setSelectedType ] = useState();
    const [ selectedCity, setSelectedCity ] = useState('');
    const [ selectedArea, setSelectedArea ] = useState('');
    const [ selectedSort, setSelectedSort ] = useState('');

    // 검색데이터
    const fetchSearchData = async () => {
        try {
            setLoading(true);
            const searchResponse = await axios.get(`/stores/search?keyword=${keyword}`);
            setSearchResults(searchResponse.data);
            setLoading(false);
            navigate(`/stores/search?keyword=${keyword}`);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };
    // 필터데이터
    const fetchFilteredData = async () => {
        try {
            const filterResponse = await axios.get(`/stores/filter?type=${selectedType}&region=${selectedCity}/${selectedArea}`);
            setFilteredData(filterResponse.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (selectedType || selectedCity || selectedArea || selectedSort) {
            fetchFilteredData();
        } else if (keyword) {
            fetchSearchData();
        } else {
            fetchSearchData(); // Fetch initial data when no filters or search term are applied
        }
    }, [selectedType, selectedCity, selectedArea, selectedSort, keyword]);


    const checkKeywordMatch = (item, keyword) => {
        return (
            (item.city.includes(keyword) && keyword.length >= 2) ||
            (item.state.includes(keyword) && keyword.length >= 2) ||
            (item.name.includes(keyword) && keyword.length >= 1) ||
            item.menuItems.some(menuItem => menuItem.name.includes(keyword) && keyword.length >= 1)
        );
    };

// 선택한 업종에 따라 필터링

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    }
    const handleSortChange = (e) => {
        setSelectedSort(e.target.value);
    }
    const handleSelectCityOption = (e) => {
        setSelectedCity(e.target.value);
    }
    const handleAreaChange = (e) => {
        setSelectedArea(e.target.value);
    }
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
    
    // 지역필터정의
    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        setSelectedArea(''); // 선택된 도시 변경 시 시군구 선택 초기화
    };
    const cities = ['서울','인천','대전','대구','울산','광주','부산','경기도','강원도','충청북도','충청남도','전라북도','전라남도','경상북도','경상남도','제주도']
    const areas = {
        서울 : ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'],
        인천 : ['중구', '동구', '미추홀구', '연수구', '남동구', '부평구', '계양구', '서구', '강화군', '옹진군'],
        대전 : ['동구', '중구', '서구', '유성구', '대덕구'],
        대구 : ['중구', '동구', '서구', '남구', '북구', '수성구', '달서구', '달성군'],
        울산 : ['중구', '남구', '동구', '북구', '울주군'],
        광주 : ['동구', '서구', '남구', '북구', '광산구'],
        부산 : ['중구', '서구', '동구', '영도구', '부산진구', '동래구', '남구', '북구', '해운대구', '사하구', '금정구', '강서구', '연제구', '수영구', '사상구', '기장군'],
        경기도 : ['수원시', '성남시', '고양시', '용인시', '부천시', '안산시', '안양시', '남양주시', '화성시', '평택시', '의정부시', '시흥시', '파주시', '김포시', '광명시', '광주시', '군포시', '이천시', '양주시', '오산시', '구리시', '안성시', '포천시', '의왕시', '하남시', '여주시', '양평군', '동두천시', '과천시', '가평군', '연천군'],
        강원도 : ['춘천시', '원주시', '강릉시', '동해시', '태백시', '속초시', '삼척시', '홍천군', '횡성군', '영월군', '평창군', '정선군', '철원군', '화천군', '양구군', '인제군', '고성군', '양양군'],
        충청북도 : ['청주시', '충주시', '제천시', '보은군', '옥천군', '영동군', '증평군', '진천군', '괴산군', '음성군', '단양군'],
        충청남도 : ['천안시', '공주시', '보령시', '아산시', '서산시', '논산시', '계룡시', '당진시', '금산군', '부여군', '서천군', '청양군', '홍성군', '예산군', '태안군'],
        전라북도 : ['전주시', '군산시', '익산시', '정읍시', '남원시', '김제시', '완주군', '진안군', '무주군', '장수군', '임실군', '순창군', '고창군', '부안군'],
        전라남도 : ['목포시', '여수시', '순천시', '나주시', '광양시', '담양군', '곡성군', '구례군', '고흥군', '보성군', '화순군', '장흥군', '강진군', '해남군', '영암군', '무안군', '함평군', '영광군', '장성군', '완도군', '진도군', '신안군'],
        경상북도 : ['포항시', '경주시', '김천시', '안동시', '구미시', '영주시', '영천시', '상주시', '문경시', '경산시', '군위군', '의성군', '청송군', '영양군', '영덕군', '청도군', '고령군', '성주군', '칠곡군', '예천군', '봉화군', '울진군', '울릉군'],
        경상남도 : ['창원시', '진주시', '통영시', '사천시', '김해시', '밀양시', '거제시', '양산시', '의령군', '함안군', '창녕군', '고성군', '남해군', '하동군', '산청군', '함양군', '거창군', '합천군'],
        제주도 : ['제주시', '서귀포시']
      }

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
                            <div>
                                <img src="/imgs/add.png" alt="" />
                                <h3>내가 찜한 가게</h3>
                            </div>
                            <div>
                                <img src="/imgs/add.png" alt="" />
                                <h3>내가 리뷰한 가게</h3>
                            </div>
                        </S.MyFilterContent>
                    </S.Social>
                    <S.TypeFilter>
                        <S.TypeFilterTitle>
                            <S.Square></S.Square>
                            <h2>업종</h2>
                        </S.TypeFilterTitle>
                        <S.TypeFilterContent>
                            <S.TypeLabel value="기본" onClick={handleTypeChange}>
                                    <S.TypeFilterRadio className="filter_radio" type="radio" id="basic" name="store_type" value="일식" />
                                    <S.TypeFilterSpan htmlFor="basic">기본</S.TypeFilterSpan>
                            </S.TypeLabel>
                            <S.TypeLabel value="양식" onClick={handleTypeChange}>
                                    <S.TypeFilterRadio className="filter_radio" type="radio" id="western" name="store_type" value="일식" />
                                    <S.TypeFilterSpan htmlFor="western">양식</S.TypeFilterSpan>
                            </S.TypeLabel>
                            <S.TypeLabel value="일식" onClick={handleTypeChange}>
                                    <S.TypeFilterRadio className="filter_radio" type="radio" id="japan" name="store_type" value="일식" />
                                    <S.TypeFilterSpan htmlFor="japan">일식</S.TypeFilterSpan>
                            </S.TypeLabel>
                            <S.TypeLabel value="중식" onClick={handleTypeChange}>
                                    <S.TypeFilterRadio className="filter_radio" type="radio" id="china" name="store_type" value="일식" />
                                    <S.TypeFilterSpan htmlFor="china">중식</S.TypeFilterSpan>
                            </S.TypeLabel>
                            <S.TypeLabel value="한식" onClick={handleTypeChange}>
                                    <S.TypeFilterRadio className="filter_radio" type="radio" id="korea" name="store_type" value="일식" />
                                    <S.TypeFilterSpan htmlFor="korea">한식</S.TypeFilterSpan>
                            </S.TypeLabel>
                            <S.TypeLabel value="아시안" onClick={handleTypeChange}>
                                    <S.TypeFilterRadio className="filter_radio" type="radio" id="japan" name="store_type" value="일식" />
                                    <S.TypeFilterSpan htmlFor="asia">아시안</S.TypeFilterSpan>
                            </S.TypeLabel>
                            <S.TypeLabel value="카페" onClick={handleTypeChange}>
                                    <S.TypeFilterRadio className="filter_radio" type="radio" id="cafe" name="store_type" value="일식" />
                                    <S.TypeFilterSpan htmlFor="cafe">카페.디저트</S.TypeFilterSpan>
                            </S.TypeLabel>
                        </S.TypeFilterContent>
                    </S.TypeFilter>
                    <S.RegionFilter>
                        <S.RegionFilterTitle>
                            <S.Square></S.Square>
                            <h2>지역</h2>
                        </S.RegionFilterTitle>
                        <S.RegionFilterContent>
                            <S.CitySelect name="city" id="city" onChange={handleCityChange} value={selectedCity}>
                                <S.SelectOption value="시도">시도</S.SelectOption>
                                {cities.map((city) => (
                                <S.SelectOption key={city} value={city} onClick={handleSelectCityOption}>
                                    {city}
                                </S.SelectOption>
                                ))}
                            </S.CitySelect>            
                            <S.AreaSelect name="area" id="area" onChange={(e) => setSelectedArea(e.target.value)} value={selectedArea}>
                                <S.SelectOption value="시군구">시군구</S.SelectOption>
                                {areas[selectedCity] && areas[selectedCity].map((area) => (
                                    <S.SelectOption key={area} value={area}  onClick={handleAreaChange}>
                                        {area}
                                    </S.SelectOption>
                                ))}
                            </S.AreaSelect>
                        </S.RegionFilterContent>
                    </S.RegionFilter>
                </S.Nav>

                <S.ResultDiv>
                    <S.Sort>
                        <S.SortTitle>
                            <img src="/imgs/related.png" alt="" />
                            <h4>정렬</h4>
                        </S.SortTitle>
                        <S.SortButton value="평점순" onClick={handleSortChange}>평점순</S.SortButton>
                        <S.SortButton value="리뷰순" onClick={handleSortChange}>리뷰순</S.SortButton>
                        <S.SortButton value="찜한순" onClick={handleSortChange}>찜한순</S.SortButton>
                    </S.Sort>

                    <S.FilteredMap>
                    </S.FilteredMap>
                    {loading && <p>검색중</p>}
                    {(searchResults.length === 0 && keyword.trim() === '') && (
                        <div>
                            <S.ResultNotice>
                                <S.Keyword>검색어를 입력해주세요.</S.Keyword>
                            </S.ResultNotice>
                        </div>
                    )}
                    {(searchResults.length > 0 || keyword.trim() === '') && ( 
                        <div>
                            <S.ResultNotice>
                                <S.Keyword>{keyword}에 대한 검색결과입니다.</S.Keyword>
                            </S.ResultNotice>
                            {applySearchAndSort.map((item, index) => {
                                const keywordMatch = 
                                (item.city.includes(keyword) && keyword.length >= 2) ||
                                (item.state.includes(keyword) && keyword.length >= 2) ||
                                (item.name.includes(keyword) && keyword.length >= 1) ||
                                item.menuItems.some(menuItem => menuItem.name.includes(keyword) && keyword.length >= 1);

                                if (keywordMatch) {
                                    return(
                                        <Link 
                                            key={item.id} 
                                            to={`/stores/detail/${item.id}`} 
                                            style={{ textDecoration: 'none', color: 'inherit' }}
                                        >
                                            <S.ResultStore key={item.id}>
                                                <S.StoreInfo>
                                                    <S.InfoLeft>
                                                        <img src={item.banners[0]} alt="" />
                                                    </S.InfoLeft>
                                                    <S.InfoRight>
                                                        <S.StoreName>
                                                            <h3 className="name">{index+1}. {item.name}</h3>
                                                            <h3 className="store_region">{item.city} {item.state}</h3>
                                                        </S.StoreName>
                                                        <div>
                                                            <S.StoreType>{item.type}</S.StoreType>
                                                        </div>
                                                        <S.StoreHash>
                                                            <p>#{item.parkingInfo}</p>
                                                            <p>#{item.closedDays}</p>
                                                            <p>#{item.PriceRange}</p>
                                                        </S.StoreHash>
                                                        <S.StoreEval>
                                                            <div>⭐</div>
                                                            <p>{item.starRating}</p>
                                                            <div>🤍</div>
                                                            <p>{item.storeLikes}</p>
                                                        </S.StoreEval>
                                                    </S.InfoRight>
                                                </S.StoreInfo>
                                                {item.reviews.length !== 0 ? (
                                                    <S.StoreReview key={index}>
                                                        <S.ReviewContent>{item.reviews[0].content}</S.ReviewContent>
                                                        <S.ReviewId>by.{item.reviews[0].userId}</S.ReviewId>
                                                    </S.StoreReview>
                                                ) : (
                                                    <S.StoreReview>
                                                        <S.ReviewContent>아직 첫 리뷰가 없습니다.</S.ReviewContent>
                                                    </S.StoreReview>
                                                )}
                                            </S.ResultStore>
                                        </Link>
                                    )
                                }else {
                                    return null;
                                }
                            })}
                        </div>
                    )}
                    {applyFiltersAndSort.map((item, index) => (
                        <div key={item.id}>
                            <S.ResultNotice>
                                <S.Keyword>{keyword}에 대한 필터결과입니다.</S.Keyword>
                            </S.ResultNotice>
                            <Link 
                                key={item.id} 
                                to={`/stores/detail/${item.id}`} 
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <S.ResultStore key={item.id}>
                                    <S.StoreInfo>
                                        <S.InfoLeft>
                                            <img src={item.banners[0]} alt="" />
                                        </S.InfoLeft>
                                        <S.InfoRight>
                                            <S.StoreName>
                                                <h3 className="name">{index+1}. {item.name}</h3>
                                                <h3 className="store_region">{item.city} {item.state}</h3>
                                            </S.StoreName>
                                            <div>
                                                <S.StoreType>{item.type}</S.StoreType>
                                            </div>
                                            <S.StoreHash>
                                                <p>#{item.parkingInfo}</p>
                                                <p>#{item.closedDays}</p>
                                                <p>#{item.PriceRange}</p>
                                            </S.StoreHash>
                                            <S.StoreEval>
                                                <div>⭐</div>
                                                <p>{item.starRating}</p>
                                                <div>🤍</div>
                                                <p>{item.storeLikes}</p>
                                            </S.StoreEval>
                                        </S.InfoRight>
                                    </S.StoreInfo>
                                    {item.reviews.length !== 0 ? (
                                            <S.StoreReview Key={index}>
                                                <S.ReviewContent>{item.reviews[0].content}</S.ReviewContent>
                                                <S.ReviewId>by.{item.reviews[0].userId}</S.ReviewId>
                                            </S.StoreReview>
                                    ) : (
                                        <S.StoreReview>
                                                <S.ReviewContent>아직 첫 리뷰가 없습니다.</S.ReviewContent>
                                        </S.StoreReview>
                                    )}
                                </S.ResultStore>
                            </Link>
                        </div>
                    ))}
                </S.ResultDiv>
            </S.Search>
        </S.Container>
    )
}