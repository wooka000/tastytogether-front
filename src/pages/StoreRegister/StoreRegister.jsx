import React, { useState } from 'react';
import * as S from './style/StoreRegister.style'
import PropTypes from 'prop-types';
import DaumPost from '../../components/storeRegister/DaumPost'; 
import TypeModalButton from '../../components/storeRegister/TypeModalButton';
import PhoneNumber from '../../components/storeRegister/PhoneNumber';
import PriceAverage from '../../components/storeRegister/PriceAverage';
import Parking from '../../components/storeRegister/Parking';
import Time from '../../components/storeRegister/Time';
import MenuModalButton from '../../components/storeRegister/MenuModalButton';
import StoreImage from '../../components/storeRegister/StoreImage';
// import { AddressProvider } from '../../components/storeRegister/AddressContext';
// import { StoreProvider } from '../../components/storeRegister/StoreContext';
// import { MenuItemsProvider } from '../../components/storeRegister/MenuItemsContext';
// import { CoordinatesProvider } from '../components/storeRegister-component/CoordinatesContext';
// import { PhoneProvider } from '../components/storeRegister-component/PhoneContext';
// import StoreContext from '../components/storeRegister-component/StoreContext'
import axios from 'axios';


export default function StoreRegister ({ showModal }) {
    // DB에 보낼 store 객체 저장 
    // JavaScript 객체의 속성명에는 대괄호([])를 사용할 수 없음. 대괄호는 배열의 인덱스 지정에 사용되거나, 동적인 속성명 생성에 사용되기도 하지만 객체의 속성명으로 직접 사용하는 것은 잘못된 문법.
    const [storeInfo, setStoreInfo] = useState({
        banners: [],
        name: null,
        address: {
            street: null,
            city: null,
            state: null,
            fullAddress: null,
            zipCode: null,
            latitude: null,
            longitude: null,
        },
        menuItems: [
            { name: null, price: null },
            { name: null, price: null },
            { name: null, price: null },
        ],
        type: null,
        phone: null,
        priceRange: null,
        parkingInfo: null,
        businessHours: [],
        closedDays: [],
    });

    const handleSaveStore = (e) => {
        e.preventDefault();
        handleSubmit(storeInfo);
    }
    const handleSubmit = (updatedStoreInfo) => { 
        // axios 로 DB에 저장하는 로직작성
        axios.post('http://localhost:8080/stores', updatedStoreInfo)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    };

    return(
        <S.Container>
            <S.Article>
                <S.RegisterForm onSubmit={handleSubmit}>
                    <DaumPost setStoreInfo={setStoreInfo} />
                    <TypeModalButton showModal={showModal} setStoreInfo={setStoreInfo} /> 
                    <PhoneNumber />
                    <S.Map id="mapDiv">
                        {/* <CoordinatesProvider> */}
                            {/* <MapContainer initialCoordinates={coordinates} /> */}
                        {/* </CoordinatesProvider> */}
                    </S.Map>
                    <PriceAverage />
                    <Parking />
                    <Time />
                    <MenuModalButton showModal={showModal} />
                    <StoreImage />
                    {/* <StoreProvider> */}
                        <S.RegisterButton>
                            <button type="submit" onClick={handleSaveStore}>새로운 업체 등록하기</button>
                        </S.RegisterButton>
                    {/* </StoreProvider> */}
                </S.RegisterForm>
            </S.Article>
        </S.Container>
    )
}
StoreRegister.propTypes = {
    showModal: PropTypes.func.isRequired,
};