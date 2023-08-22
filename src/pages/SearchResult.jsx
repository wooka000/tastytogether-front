import React, { useState } from 'react';
import styled from 'styled-components';

const Search = styled.div`
    width: 1440px;
    min-height: 1024px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #F8F9FA;
    padding: 20px 37px;
`
const Nav = styled.div`
    width: 324px;
    min-height: 1000px;
    background-color: #fff;
    padding: 20px;
    margin-right: 41px;
`

const ResultDiv = styled.div`
    width: 1003px;
    min-height: 1000px;
    background-color: #fff;
    padding: 20px;
`
const Social = styled.div`
    width: 260px;
    height: 125px;
    display: flex;
    flex-direction: row;
    justify-content: center;

`
const TypeFilter = styled.div`
    width: 260px;
    height: 360px;
    display: flex;
    flex-direction: row;
`
const RegionFilter = styled.div`
    width: 260px;
    height: 200px;
    display: flex;
    flex-direction: row;
`
const Sort = styled.div`
    width: 963px;
    height: 70px;
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    justify-content: flex-start;
    align-items: center;
    h4{
        font-size: 24px;
        margin-right: 50px;
    }
    button{
        width: 80px;
        height: 30px;
        font-size: 15px;
        margin-right: 20px;
        box-sizing: border-box;
        border: 1px solid #f0f0f0;
        background: white;
    }
`
const FilteredMap = styled.div`
    width: 963px;
    height: 400px;
    border: 1px solid #f0f0f0;
`
const ResultStore = styled.div`
    width: 963px;
    height: 225px;
    display: flex;
    flex-direction: column;
    .store_info{
        display: flex;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 20px 0 0 0;

        .info_left{
            width: 227px;
            height: 169px;
            border-radius: 10px;
            background: url(<path-to-image>), lightgray 50% / cover no-repeat;
            margin-right: 20px;
        }
        .info_right{
            flex:1;
            height: 169px;
            box-sizing: border-box;
            line-height: 5px;
            display: flex;
            flex-direction: column;
            .store_name{
                display: flex;
                align-items: center;
                width: 742px;
                height: 35px;
                font-size: 28px;
                flex: 1;
                .name{
                    width: 50%;
                    text-align: left;
                }
                .store_region{
                    justify-content: flex-end;
                    width: 50%;
                    text-align: right;
                    color: gray;
                }
            }
            .store_eval{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 35px;
                font-size: 24px;
                p{
                    margin-right: 15px;
                }
            }
            .store_hash{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 35px;
                font-size: 20px;
                font-weight: 500;
                line-height: normal;
            }
        }
    }
`
const StoreReview = styled.div`
    width: 963px;
    height: 52px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    #review_content{
        width: 963px;
        font-size: 20px;
    }
    #review_id{
        width: 963px;
        text-align: right;
        font-size: 20px;
        color: #FF914D;
    }
`


export default function SearchResult() {

    const [selectedCity, setSelectedCity] = useState('');
    const [selectedArea, setSelectedArea] = useState('');

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
    // const selectedAreas = areas[selectedCity] || [];
    
    return(
    <Search>
        <Nav>
            <Social>
                <div>
                    <div></div>
                    <h2>소셜</h2>
                </div>
                <div>
                    <div>
                        <div>+</div>
                        <h3>내가 찜한 가게</h3>
                    </div>
                    <div>
                        <div>+</div>
                        <h3>내가 리뷰한 가게</h3>
                    </div>
                </div>
            </Social>
            <TypeFilter>
                <div>
                    <div></div>
                    <h2>업종</h2>
                </div>
                <div>
                    <span>
                            <input type="radio" id="japan" name="store_type" value="일식" />
                            <label htmlFor="basic">기본</label>
                    </span>
                    <span>
                            <input type="radio" id="japan" name="store_type" value="일식" />
                            <label htmlFor="western">양식</label>
                    </span>
                    <span>
                            <input type="radio" id="japan" name="store_type" value="일식" />
                            <label htmlFor="japan">일식</label>
                    </span>
                    <span>
                            <input type="radio" id="japan" name="store_type" value="일식" />
                            <label htmlFor="china">중식</label>
                    </span>
                    <span>
                            <input type="radio" id="japan" name="store_type" value="일식" />
                            <label htmlFor="korea">한식</label>
                    </span>
                    <span>
                            <input type="radio" id="japan" name="store_type" value="일식" />
                            <label htmlFor="asia">아시안</label>
                    </span>
                    <span>
                            <input type="radio" id="japan" name="store_type" value="일식" />
                            <label htmlFor="cafe">카페.디저트</label>
                    </span>
                </div>
            </TypeFilter>
            <RegionFilter>
                <div>
                    <div></div>
                    <h2>지역</h2>
                </div>
                <div>
                    <select name="city" id="city" onChange={handleCityChange} value={selectedCity}>
                        <option value="">시도</option>
                        {cities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                        ))}
                    </select>            
                    <select name="area" id="area" onChange={(e) => setSelectedArea(e.target.value)} value={selectedArea}>
                        <option value="">시군구</option>
                        {areas[selectedCity] && areas[selectedCity].map((area) => (
                            <option key={area} value={area}>
                                {area}
                            </option>
                        ))}
                    </select>
                </div>
            </RegionFilter>
        </Nav>
        <ResultDiv>
            <Sort>
                <h4>🔁정렬</h4>
                <button>평점순</button>
                <button>리뷰순</button>
                <button>찜한순</button>
            </Sort>
            <FilteredMap>

            </FilteredMap>
            <ResultStore>
                <div className="store_info">
                    <div className="info_left">
                        <img src="../../public/minilogo.png" alt="" />
                    </div>
                    <div className="info_right">
                        <div className="store_name">
                            <h3 className="name">1. 3일한우국밥</h3>
                            <h3 className="store_region">서울 관악구</h3>
                        </div>
                        <div>
                            <p>한식</p>
                        </div>
                        <div className="store_hash">
                            <p>#무료주차</p>
                            <p>#월요일휴무</p>
                            <p>#1만원대</p>
                        </div>
                        <div className="store_eval">
                            <div>⭐</div>
                            <p>4.3</p>
                            <div>🤍</div>
                            <p>161</p>
                        </div>
                    </div>
                </div>
                <StoreReview>
                    <p id="review_content">“취향저격 당한 국밥 뜨끈하고, 얼큰한 국물에 밥 말아서 먹으면 술은 안마셨지만 아침 해장메뉴구나 싶다.”</p>
                    <p id="review_id">by.돼지</p>
                </StoreReview>
            </ResultStore>
        </ResultDiv>
    </Search>
    )
}
