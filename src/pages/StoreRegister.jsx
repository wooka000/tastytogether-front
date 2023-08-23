import styled from 'styled-components';
// import MapContainer from '../components/MapContainer';
// import PostCode from '../components/DaumPost';
import TypeModalButton from '../components/storeRegister-component/TypeModalButton'
import MenuModalButton from '../components/storeRegister-component/MenuModalButton'
import DaumPost from '../components/storeRegister-component/DaumPost'
import PropTypes from 'prop-types';
import { useState } from 'react'


export default function StoreRegister ({showModal}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        // 폼 데이터를 이용하여 작업 수행
        // price와 같은 방식으로 상태에 접근 가능
    };
    // const [ address, setAddress ] = useState('');
    const [ selectedFile, setSelectedFile ] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        const imgInput = document.querySelector('#img_input');
        if(imgInput) {
            imgInput.value = selectedFile;
        }
    };
    const [coordinates, setCoordinates] = useState({ lat: 33.5563, lng: 126.79581 }); // 기본 좌표

    const handleAddressChange = (newCoordinates) => {
      setCoordinates(newCoordinates);
    };


    return(
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
                        <span className="radio_input" type="text" id="customPrice" name="customPrice" placeholder="기타" value="" />
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
            <TableLine>
                <div className="table_title">
                    <span>대표이미지</span>
                </div>
                <div className="table_content">
                    <input type="file" 
                    id="avatar" 
                    name="avatar" 
                    accept="image/png, image/jpeg" 
                    onChange={handleFileChange}
                    />
                </div>
            </TableLine>
        </RegisterForm>
        <RegisterButton>
            <button type="submit">새로운 업체 등록하기</button>
        </RegisterButton>
    </Article>
    )
}
StoreRegister.propTypes = {
    showModal: PropTypes.func.isRequired, // prop 타입을 정의하고 필수로 표시합니다
  };


  const Article = styled.form`
    width: 1440px;
    background-color: #wFFF;
    padding: 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
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
    border-top: 1px solid #F0F0F0;
    border-bottom: 1px solid #F0F0F0;

    .table_title{
        width: 260px;
        height: 35px;
        font-size: 25px;
        padding: 20px;
        text-align: center;
    }
    .table_content{
        width: 1082px;
        height: 35px;
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        line-height: 18px;
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
        }
        input{
            font-size: 20px;
            color: #FF9C5F;
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
            margin: 0 20px;
            text-align: center;
        }
        .price{
            margin-right: 40px;
            line-height: 18px;
        }
        .parking{
            margin-right: 40px;
            line-height: 18px;
        }
        .day{
            margin-right: 40px;
            line-height: 18px;
            display:flex;
            align-items: center;
            input{
                width: 25px;
                height: 25px;
            }
            span{
                font-size: 25px;
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
    width: 800px;
    height: 460px;
`
const RegisterButton = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
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