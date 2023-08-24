import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function SearchResult() {
    const location = useLocation();
    const keyword = location.state.keyword;

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
        <Container>
            <Search>
                <Nav>
                    <Social>
                        <div className="filter_title">
                            <div className="square"></div>
                            <h2>소셜</h2>
                        </div>
                        <div className="filter_content">
                            <div>
                                <img src="/imgs/add.png" alt="" />
                                <h3>내가 찜한 가게</h3>
                            </div>
                            <div>
                                <img src="/imgs/add.png" alt="" />
                                <h3>내가 리뷰한 가게</h3>
                            </div>
                        </div>
                    </Social>
                    <TypeFilter>
                        <div className="filter_title">
                            <div className="square"></div>
                            <h2>업종</h2>
                        </div>
                        <div className="filter_content">
                            <label>
                                    <input className="filter_radio" type="radio" id="basic" name="store_type" value="일식" />
                                    <span htmlFor="basic">기본</span>
                            </label>
                            <label>
                                    <input className="filter_radio" type="radio" id="western" name="store_type" value="일식" />
                                    <span htmlFor="western">양식</span>
                            </label>
                            <label>
                                    <input className="filter_radio" type="radio" id="japan" name="store_type" value="일식" />
                                    <span htmlFor="japan">일식</span>
                            </label>
                            <label>
                                    <input className="filter_radio" type="radio" id="china" name="store_type" value="일식" />
                                    <span htmlFor="china">중식</span>
                            </label>
                            <label>
                                    <input className="filter_radio" type="radio" id="korea" name="store_type" value="일식" />
                                    <span htmlFor="korea">한식</span>
                            </label>
                            <label>
                                    <input className="filter_radio" type="radio" id="japan" name="store_type" value="일식" />
                                    <span htmlFor="asia">아시안</span>
                            </label>
                            <label>
                                    <input className="filter_radio" type="radio" id="cafe" name="store_type" value="일식" />
                                    <span htmlFor="cafe">카페.디저트</span>
                            </label>
                        </div>
                    </TypeFilter>
                    <RegionFilter>
                        <div className="filter_title">
                            <div className="square"></div>
                            <h2>지역</h2>
                        </div>
                        <div className="filter_content">
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
                        <div>
                            <img src="/imgs/related.png" alt="" />
                            <h4>정렬</h4>
                        </div>
                        <button>평점순</button>
                        <button>리뷰순</button>
                        <button>찜한순</button>
                    </Sort>
                    <FilteredMap>

                    </FilteredMap>
                    <div className="result_notice">
                        <Keyword>{keyword}</Keyword>
                        <h3>에 대한 검색결과입니다.</h3>
                    </div>
                    <ResultStore>
                        <div className="store_info">
                            <div className="info_left">
                                <img src="/imgs/food1.jpg" alt="" />
                            </div>
                            <div className="info_right">
                                <div className="store_name">
                                    <h3 className="name">1. 3일한우국밥</h3>
                                    <h3 className="store_region">서울 관악구</h3>
                                </div>
                                <div>
                                    <p className="store_type">한식</p>
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
                            <p id="review_id">by.야생돼지</p>
                        </StoreReview>
                    </ResultStore>
                    <ResultStore>
                        <div className="store_info">
                            <div className="info_left">
                                <img src="/imgs/food1.jpg" alt="" />
                            </div>
                            <div className="info_right">
                                <div className="store_name">
                                    <h3 className="name">1. 3일한우국밥</h3>
                                    <h3 className="store_region">서울 관악구</h3>
                                </div>
                                <div>
                                    <p className="store_type">한식</p>
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
                            <p id="review_id">by.야생돼지</p>
                        </StoreReview>
                    </ResultStore>
                    <ResultStore>
                        <div className="store_info">
                            <div className="info_left">
                                <img src="/imgs/food1.jpg" alt="" />
                            </div>
                            <div className="info_right">
                                <div className="store_name">
                                    <h3 className="name">1. 3일한우국밥</h3>
                                    <h3 className="store_region">서울 관악구</h3>
                                </div>
                                <div>
                                    <p className="store_type">한식</p>
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
                            <p id="review_id">by.야생돼지</p>
                        </StoreReview>
                    </ResultStore>
                </ResultDiv>
            </Search>
        </Container>
    )
}

const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
 `;

const Search = styled.div`
    width: 1440px;
    min-height: 1024px;
    display: flex;
    flex-direction: row;
    align-items: flex-start
    justify-content: center;
    background-color: #F8F9FA;
    padding: 37px;
    box-sizing: border-box;
    top: 101px;
    width: 1440px;
    padding: 17px;
    margin: auto;
    border-radius: 10px;
    height: auto;
    overflow: auto;
`
const Nav = styled.div`
    width: 324px;
    height: 84%;
    top: 120px;
    max-height: 1300px;
    height: auto;
    background-color: #fff;
    padding: 20px 20px 20px 20px;
    margin-left: 10px;
    margin-right: 41px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    position: fixed;
    bottom: 120px;
    border-radius: 10px;
`

const ResultDiv = styled.div`
    width: 1030px;
    min-height: 1000px;
    background-color: #fff;
    padding: 20px;
    position: relative;
    border-radius: 10px;
    left: 365px;
    .result_notice{
        font-size: 20px;
        padding: 10px;
        display: flex;
        flex-direction: row;
    }

`
const Keyword = styled.h3`
    font-size: 25px;
    color: red;
`
const Social = styled.div`
    width: 260px;
    height: 125px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    margin-bottom: 30px;
    &:hover .filter_title .square {
        background-color: var(--color-accent);
        color: #f0f0f0;
    }
    .filter_title {
        font-size: 1.3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;

        .square{
            width: 25px;
            height: 25px;
            margin-right: 10px;
            border: 5px solid var(--color-accent);
            transition: all 250ms ease-out;
            border-radius: 100%;
        }
    }
    .filter_content {
        div{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 20px;
            img{
                width: 20px;
                margin-right: 10px;
            }
            h3{
                font-size: 1.1rem;
            }
        }
    }
`
const TypeFilter = styled.div`
    margin-bottom: 20px;
    &:hover .filter_title .square {
        background-color: var(--color-accent);
        color: #f0f0f0;;
    }
    .filter_title {
        font-size: 1.3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;
        .square{
            width: 25px;
            height: 25px;
            margin-right: 10px;
            border: 5px solid var(--color-accent);
            transition: all 250ms ease-out;
            border-radius: 100%;
        }
    }
    .filter_content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        label{
            margin-bottom: 10px;
            .filter_radio{
                width: 20px;
                height: 20px;
                margin-right: 10px;
            }
            span{
                font-size: 1.1rem;
                font-weight: 600;
            }
        }
    }
`
const RegionFilter = styled.div`
    &:hover .filter_title .square {
        background-color: var(--color-accent);
        color: #f0f0f0;;
    }
    .filter_title {
        font-size: 1.3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;
        .square{
            width: 25px;
            height: 25px;
            margin-right: 10px;
            border: 5px solid var(--color-accent);
            transition: all 250ms ease-out;
            border-radius: 100%;
        }
    }
    .filter_content {
        width: 260px;
        display: flex;
        flex-direction: column;
        position: relative;
        #city{
            width: 100%;
            height: 50px;
            text-align: center;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 10px;
            }
        }
        #area{
            width: 100%;
            height: 50px;
            text-align: center;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 10px;
        }
        option{
            font-size: 22px;
            font-weight: 600;
        }
    }
`
const Sort = styled.div`
    width: 985px;
    height: 70px;
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    justify-content: flex-start;
    align-items: center;
    div{
        display: flex;
        img{
            width: 30px;
            height: 30px;
            margin-right: 15px;
        }
        h4{
            font-size: 25px;
            margin-right: 50px;
        }
    }
    button{
        width: 120px;
        height: 50px;
        font-size: 15px;
        margin-right: 15px;
        box-sizing: border-box;
        border: 1px solid #f0f0f0;
        border-radius: 20px;
        background: white;
        font-size: 20px;
        font-weight: 600;
        border: none;
        background-color: #f0f0f0;
        transition: all 250ms ease-out;
        &:hover{
            background-color: var(--color-accent);
            color: white;
        }
    }
`
const FilteredMap = styled.div`
    width: 985px;
    height: 400px;
    border: 1px solid #f0f0f0;
`

const ResultStore = styled.div`
    height: 260px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding-left: 10px;
    border-radius: 10px;
    transition: all 500ms ease-out;
    &:hover{
        background-color: #f0f0f0;
    }
    .store_info{
        display: flex;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 20px 0 0 0;

        .info_left{
            width: 227px;
            height: 169px;
            border-radius: 10px;
            background: lightgray 50% / cover no-repeat;
            margin-right: 20px;
            img{
                width: 227px;
                height: 169px;
                border-radius: 10px;
                &:hover{
                    cursor: pointer;
                }
            }
        }
        .info_right{
            flex:1;
            height: 169px;
            box-sizing: border-box;
            line-height: 50px;
            display: flex;
            flex-direction: column;
            .store_name{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 742px;
                height: 35px;
                font-size: 28px;
                flex: 1;
                &:hover{
                    cursor: pointer;
                }
                .name{
                    width: 50%;
                    text-align: left;
                }
                .store_region{
                    width: 50%;
                    text-align: right;
                    color: gray;
                    margin-right: 20px;
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
            .store_type{
                font-size: 23px;
                font-weight: 600;
                color: gray;
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
        font-weight: 600;
        color: gray;
    }
    #review_id{
        width: 963px;
        text-align: right;
        font-size: 20px;
        color: #FF914D;
        font-weight: 600;
    }
`