// import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function TypeModalPage({ setModalOpen, setCategory }) { // Fixed the prop name
    // eslint-disable-next-line no-unused-vars
    
    const handleCategorySelect = (category) => {
        setCategory(category); 
        setModalOpen(false);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };
    
    return(
        <TypeModal>
            <div className="type_title">
                <img src="/imgs/logo2.png" alt="" />
                <p>업종을 선택하세요</p>
            </div>
            <TypeButtons>
                <div className="button_line">
                    <div className="type_button" onClick={() => handleCategorySelect('한식')}>
                        <img src="/imgs/korea.png" alt="한식" />
                        <p>한식</p>
                    </div>
                    <div className="type_button" onClick={() => handleCategorySelect('양식')}>
                        <img src="/imgs/western.png" alt="양식" />
                        <p>양식</p>
                    </div>
                    <div className="type_button" onClick={() => handleCategorySelect('중식')}>
                        <img src="/imgs/china.png" alt="중식" />
                        <p>중식</p>
                    </div>
                </div>
                <div className="button_line">
                    <div className="type_button" onClick={() => handleCategorySelect('일식')}>
                        <img src="/imgs/japan.png" alt="일식" />
                        <p>일식</p>
                    </div>
                    <div className="type_button" onClick={() => handleCategorySelect('아시안')}>
                        <img src="/imgs/asia.png" alt="아시안" />
                        <p>아시안</p>
                    </div>
                    <div className="type_button" onClick={() => handleCategorySelect('카페.디저트')}>
                        <img src="/imgs/cafe.png" alt="카페.디저트" />
                        <p>카페.디저트</p>
                    </div>
                </div>
            </TypeButtons>
            <div className="close_button_div">
                <button type="button" className="close_button" onClick={handleModalClose}>x</button>
            </div>
        </TypeModal>
    )
}

TypeModalPage.propTypes = {
    setModalOpen: PropTypes.func.isRequired, // prop 타입을 정의하고 필수로 표시합니다
    setCategory: PropTypes.func.isRequired,
};

export default TypeModalPage;
const TypeModal = styled.div`
    width: 1400px;
    height: 700px;
    z-index: 999;
    position: absolute;
    // 브라우저 기준으로 작동
    top: 50%;
    left: 50%;
    // 본인 크기 기준으로 작동
    transform: translate(-50%, -50%);
    background-color: #F8F9FA;
    border: 8px solid #FF9C5F;
    border-radius: 8px;

    .type_title{
        img{
            width: 100px;
            height: 93px;
            position: absolute;
            left: 25px;
            top: 25px;
        }
        p{
            width: 740px;
            height: 93px;
            position: absolute;
            color: #636363;
            left: 22%;
            text-align: center;
            font-size: 50px;
            font-weight: bold;
            top: 40px;
        }
    }

    .close_button_div{
        width: 10%;
        box-sizing: border-box;
        .close_button{
            width: 50px;
            height: 50px;
            position: absolute;
            right: 3%;
            top: 5%;
            background-color: #B0B0B0;
            color: #FFF;
            border:none;
            text-align: center;
            font-size: 36px;
            &:active {
                filter: brightness(70%);
            }
        }
    }
`
const TypeButtons = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 170px;

    .button_line{
        display: flex;
        flex-direction: row;
        
        .type_button{
            width: 150px;
            height: 150px;
            margin: 40px 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &:active {
                    transform: scale(1.1);
                    filter: brightness(70%);
            }  
            img{
                width: 140px;
                height: 140px;
                margin-bottom: 20px;
                &:hover{
                    transform: scale(1.1);
                }
            }
            p{
                width: 140px;
                text-align: center;
                font-size: 25px;
                color: #636363;
                font-weight: 1000;
            }
        }
    }
`