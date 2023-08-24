import styled from 'styled-components';
import TypeModalButton from '../components/storeRegister-component/TypeModalButton'
import MenuModalButton from '../components/storeRegister-component/MenuModalButton'
import DaumPost from '../components/storeRegister-component/DaumPost'
import StoreImage from '../components/storeRegister-component/StoreImage';
import PropTypes from 'prop-types';
import React, { useState } from 'react'
// import axios from 'axios';


export default function StoreRegister ({showModal}) {

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const [coordinates, setCoordinates] = useState({ lat: 33.5563, lng: 126.79581 }); // 기본 좌표

    const handleAddressChange = (newCoordinates) => {
      setCoordinates(newCoordinates);
    };

    return(
        <Container>
            <Article>
                <RegisterForm onSubmit={handleSubmit}>
                    <DaumPost onAddressChange={handleAddressChange} coordinates={coordinates} />
                    <TableLine>
                        <div className="table_title">
                            <span>업종</span>
                        </div>
                        <div className="table_content">
                            <TypeModalButton type="button" className="store_check" onClick={showModal} />
                        </div>
                    </TableLine>
                    <TableLine id="mapDiv">
                        <div className="table_title">
                            <span>전화번호</span>
                        </div>
                        <div className="table_content">
                            {/* const regPhone = /^\d{2,4}-\d{3,4}-\d{4}$/; */}
                            <input className="input"
                            type="text"
                            pattern="[0-9]{2,4}-[0-9]{3,4}-[0-9]{4}" 
                            placeholder="가게의 전화번호를 입력하세요.(0000 - 0000 - 0000)" />
                        </div>
                    </TableLine>
                    <Map>
                        {/* <MapContainer initialCoordinates={coordinates} /> */}
                    </Map>
                    <TableLine>
                        <div className="table_title">
                            <span>가격대</span>
                        </div>
                        <div className="table_content">
                            <label className="price" htmlFor="price1">
                                <span className="radio_input">1만원대</span>
                                <input className="radio_button" type="radio" id="price1" name="price" value="1만원대" />
                            </label>
                            <label className="price" htmlFor="price2">
                                <span className="radio_input" htmlFor="price2">2만원대</span>
                                <input className="radio_button" type="radio" id="price2" name="price" value="2만원대" />
                            </label>
                            <label className="price" htmlFor="price3">
                                <span className="radio_input" htmlFor="price3">3만원대</span>
                                <input className="radio_button" type="radio" id="price3" name="price" value="3만원대" />
                            </label>
                            <label className="price" htmlFor="price4">
                                <span className="radio_input" htmlFor="price4">4만원대</span>
                                <input className="radio_button" type="radio" id="price4" name="price" value="4만원대" />
                            </label>
                            <label className="price" htmlFor="price0">
                                <span className="radio_input" htmlFor="price0" >기타</span>
                                <input className="radio_button" type="radio" id="price0" name="price" value="기타" />
                            </label>
                        </div>
                    </TableLine>
                    <TableLine>
                        <div className="table_title">
                            <span>주차</span>
                        </div>
                        <div className="table_content">
                            <label className="parking" htmlFor="parkingOption1">
                                <span>무료주차 가능</span>
                                <input className="radio_button" type="radio" id="parkingOption1" name="parkingOption" />
                            </label>
                            <label className="parking" htmlFor="parkingOption2">
                                <span>유료주차장 이용</span>
                                <input className="radio_button" type="radio" id="parkingOption2" name="parkingOption" />
                            </label>
                            <label className="parking" htmlFor="parkingOption3">
                                <span>주차장 없음</span>
                                <input className="radio_button" type="radio" id="parkingOption3" name="parkingOption" />
                            </label>
                        </div>
                    </TableLine>
                    <TableLine>
                        <div className="table_title">
                            <span>영업시간</span>
                        </div>
                        <div className="table_content">
                            <input className="time" type="text" placeholder="00" pattern="[0-9]{2}" />시 
                            <input className="time" type="text" placeholder="00" pattern="[0-9]{2}" />분  - 
                            <input className="time" type="text" placeholder="00" pattern="[0-9]{2}" />시 
                            <input className="time" type="text" placeholder="00" pattern="[0-9]{2}" />분
                        </div>
                    </TableLine>
                    <TableLine>
                        <div className="table_title">
                            <span>휴무일</span>
                        </div>
                        <div className="table_content">
                            <label className="day" htmlFor="monday">
                                <input type="checkbox" id="monday" name="day" />
                                <span>월</span>
                            </label>
                            <label className="day" htmlFor="tuesday">
                                <input type="checkbox" id="tuesday" name="day" />
                                <span>화</span>
                            </label>
                            <label className="day" htmlFor="wednesday">
                                <input type="checkbox" id="wednesday" name="day" />
                                <span>수</span>
                            </label>
                            <label className="day" htmlFor="thursday">
                                <input type="checkbox" id="thursday" name="day" />
                                <span>목</span>
                            </label>
                            <label className="day" htmlFor="friday">
                                <input type="checkbox" id="friday" name="day" />
                                <span>금</span>
                            </label>
                            <label className="day" htmlFor="saturday">
                                <input type="checkbox" id="saturday" name="day" />
                                <span>토</span>
                            </label>
                            <label className="day" htmlFor="sunday">
                                <input type="checkbox" id="sunday" name="day" />
                                <span>일</span>
                            </label>
                        </div>
                    </TableLine>
                    <TableLine>
                        <div className="table_title">
                            <span>대표메뉴</span>
                        </div>
                        <div className="table_content" id="menu_list">
                            <MenuModalButton type="button" className="menu_register" onClick={showModal}>메뉴작성</MenuModalButton>
                        </div>
                    </TableLine>
                    <StoreImage />
                    <RegisterButton>
                        <button type="submit">새로운 업체 등록하기</button>
                    </RegisterButton>
                </RegisterForm>
            </Article>
        </Container>
    )
}
StoreRegister.propTypes = {
    showModal: PropTypes.func.isRequired,
  };

  const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
    margin-bottom: 50px;


  `;
  const Article = styled.form`
    position: relative;
    top: 101px;
    width: 1440px;
    background-color: #FFFF;
    padding: 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    border-radius: 10px;
`
const RegisterForm = styled.div`
    box-sizing: border-box;
    width: 1404px;
    padding: 30px;
    border: none;
    margin-bottom: 20px;
`

const TableLine = styled.div`
    width: 1360px;
    height: 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid #F0F0F0;
    border-bottom: 1px solid #F0F0F0;

    .table_title{
        width: 260px;
        height: 35px;
        font-size: 25px;
        text-align: center;
    }
    .table_content{
        width: 1082px;
        height: 35px;
        padding-left: 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: 20px;

        label{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .radio_button{
            width: 25px;
            height: 25px;
            margin: 20px;
        }
        .store_check{
            width: 107px;
            height: 52px;
            border-radius: 5px;
            background: #FF9C5F;
            font-size: 20px;
        }
        .input{
            flex: 1;
            margin-right: 10px;
            height: 52px;
            border: none;
            font-size: 20px;
            color: #FF9C5F;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        input{
            font-size: 20px;
            color: #FF9C5F;
            padding: 10px;
        }
        button{
            width: 107px;
            height: 52px;
            border-radius: 5px;
            border: none;
            background-color: lightgray;
            font-size: 18px;
            color: white;
            margin-left: 20px;
            right: 20px;
            &:hover{
                background-color: #FF9C5F;
            }
            &:active {
                filter: brightness(70%);
              }
        }
        .time{
            width: 85px;
            height: 42px;
            border:none;
            border-bottom: 1px solid lightgray;
            margin: 0 20px 0 0;
            text-align: center;
        }
        .price{
            margin-right: 40px;
            line-height: 18px;
            display: flex;
            flex-direction: row
            justify-content: center;
            #custom_price{
                width: 80px;
                border: 1px solid lightgray;
            }
        }
        .parking{
            padding-top:20px;
            margin-right: 40px;
            line-height: 18px;
        }
        .day{
            margin-right: 50px;
            line-height: 18px;
            display:flex;
            padding-top:20px;
            align-items: center;
            input{
                width: 25px;
                height: 25px;
                margin-right: 15px;
        }
            span{
                font-size: 25px;
            }
        }
        #img_div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            aligh-items: center;
            #store_img{

            }
        }

        #file-upload-button{
            width: 107px;
            height: 52px;
            border-radius: 5px;
            border: none;
            background-color: lightgray;
            font-size: 18px;
            color: white;
            margin-left: 20px;
            &:hover{
                background-color: #FF9C5F;
            }
            &:active {
                filter: brightness(70%);
              }
        }
    }
`
const Map = styled.div`
    width: 1360px;
    height: 400px;
    border-top: 2px solid #F0F0F0;
    border-bottom: 2px solid #F0F0F0;
`
const RegisterButton = styled.div`
    width: 1440px;
    display: flex;
    justify-content: center;
    align-self: center;
    height: 150px;
    margin-top: 100px;
    button{
        width: 400px;
        height: 90px;
        background-color: #FF9C5F;
        border-radius: 8px;
        border: none;
        color: #fff;
        font-size: 36px;
    }
    &:active {
        filter: brightness(70%);
    }
`