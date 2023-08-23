import React, { useState } from 'react';
import useDaumPostcodePopup from './useDaumPostcodePopup'; // useDaumPostcodePopup 함수 임포트
import styled from 'styled-components';
import CheckInfo from './CheckInfo';
import MyContext from './MyContext';
import axios from 'axios'

function DaumPost(){

  const [ addressObj, setAddressObj ] = useState({
    street: '',
    jibunAddress: '',
    city: '',
    state: '',
    zipcode:'',
    bname: '',
    name: '',
  });
  const [isAddressRegistered, setIsAddressRegistered] = useState(false);

    //클릭 시 수행될 팝업 생성 함수
  const postcodeScriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(postcodeScriptUrl);
    
  const handleComplete = (data) => {
      console.log(data)
      let street = data.street;
      let jibunAddress = data.jibunAddress;
      let city = data.sido;
      let state = data.sigungu;
      let zipcode = data.zonecode;
      let bname = data.bname;
      let name = data.buildingName;

        //조건 판단 완료 후 지역 주소 및 상세주소 state 수정
        setAddressObj({
          street: street,
          jibunAddress: jibunAddress,
          city: city,
          state: state,
          zipcode: zipcode,
          bname: bname,
          name: name,
        });
        //주소 검색이 완료된 후 결과를 매개변수로 전달
      }
    
  const handleClick = () => {
        open({onComplete: handleComplete});
  }
  const handleInfoChange = () => {
    // DB에서 가져온 데이터와 비교
    const apiUrl = 'http://localhost:3000/stores';
    axios.get(apiUrl)
      .then(response => {
        const isRegistered = response.data.some(store => {
          return (
            store.street === addressObj.street || store.street === addressObj.jibunAddress
          ) && store.name === addressObj.name;
        });

        setIsAddressRegistered(isRegistered);
      })
      .catch(error => {
        console.error(error);
      });
  };


  return (
      <MyContext.Provider value={addressObj}>
        <CheckInfo isAddressRegistered={isAddressRegistered} />

        <TableLine>
                <div className="table_title">
                    <span>주소 등록 확인</span>
                </div>
                <div className="table_content">
                  <input id="address" 
                  className="input" 
                  type="text" 
                  value={addressObj.bname ? addressObj.jibunAddress : addressObj.fullAddress}
                  readOnly />
                  <button type="button" onClick={handleClick}>
                    주소찾기
                  </button>
                </div>
            </TableLine>
            <TableLine>
                <div className="table_title">
                    <span>업체명</span>
                </div>
                <div className="table_content">
                    <input id="buildingName"
                    className="input" 
                    type="text" 
                    placeholder="등록하려는 업체가 중복되는지 확인하세요." 
                    value={addressObj.name}
                    readOnly />
                    <button type="button" onClick={handleInfoChange}>중복확인</button>
                </div>
        </TableLine>
      </MyContext.Provider>
      
    )}
  
  export default DaumPost;

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
            font-size: 18px;
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
    }
`
