import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import minilogo from './minilogo.png';
import korea from './korea.png';
import western from './western.png';
import japan from './japan.png';
import china from './china.png';
import asia from './asia.png';
import cafe from './cafe.png';
// import PropTypes from 'prop-types';


// 모달창 크기
const TypeModal = styled.div`
    width: 1400px;
    height: 700px;
    // 최상단에 위치함
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
            left: 230px;
            text-align: center;
            font-size: 30px;
            font-weight: bold;
            top: 40px;
        }
    }

    .close_button_div{
        width: 20%;
        box-sizing: border-box;
        .close_button{
            width: 194px;
            height: 90px;
            position: absolute;
            right: 10%;
            top: 45%;
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
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 190px;

    .button_line{
        display: flex;
        flex-direction: row;
        
        .type_button{
            width: 150px;
            height: 150px;
            margin: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-itmes: center;
            &:active {
                    transform: scale(1.1);
                    filter: brightness(70%);
            }  
            img{
                width: 120px;
                height: 120px;
                &:hover{
                    transform: scale(1.1);
                }
            }
            p{
                width: 120px;
                text-align: center;
                font-size: 22px;
                color: #636363;
                font-weight: 1000;
            }
        }
    }
`


function TypeModalPage({ setModalOpen, setCategory }) { // Fixed the prop name
    // eslint-disable-next-line no-unused-vars
    const [selectedCategory, setSelectedCategory] = useState('');
    
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setCategory(category); // Call the setCategory prop function
        setModalOpen(false);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };
    
    return(
        <TypeModal>
            <div className="type_title">
                <img src={ minilogo } alt="" />
                <p>업종을 선택하세요</p>
            </div>
            <TypeButtons>
                <div className="button_line">
                    <div className="type_button" onClick={() => handleCategorySelect('한식')}>
                        <img src={korea} alt="한식" />
                        <p>한식</p>
                    </div>
                    <div className="type_button" onClick={() => handleCategorySelect('양식')}>
                        <img src={western} alt="양식" />
                        <p>양식</p>
                    </div>
                    <div className="type_button" onClick={() => handleCategorySelect('중식')}>
                        <img src={china} alt="중식" />
                        <p>중식</p>
                    </div>
                </div>
                <div className="button_line">
                    <div className="type_button" onClick={() => handleCategorySelect('일식')}>
                        <img src={japan} alt="일식" />
                        <p>일식</p>
                    </div>
                    <div className="type_button" onClick={() => handleCategorySelect('아시안')}>
                        <img src={asia} alt="아시안" />
                        <p>아시안</p>
                    </div>
                    <div className="type_button" onClick={() => handleCategorySelect('카페.디저트')}>
                        <img src={cafe} alt="카페.디저트" />
                        <p>카페.디저트</p>
                    </div>
                </div>
            </TypeButtons>
            <div className="close_button_div">
                <button type="button" className="close_button" onClick={handleModalClose}>취소</button>
            </div>
        </TypeModal>
    )
}

TypeModalPage.propTypes = {
    setModalOpen: PropTypes.func.isRequired, // prop 타입을 정의하고 필수로 표시합니다
    setCategory: PropTypes.func.isRequired,
};

export default TypeModalPage;