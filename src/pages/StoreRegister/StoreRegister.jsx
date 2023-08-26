import React, { useState } from 'react';
import * as S from './style/StoreRegister.style'
import DaumPost from '../../components/storeRegister/DaumPost'; 
import TypeModalButton from '../../components/storeRegister/TypeModalButton';
import PhoneNumber from '../../components/storeRegister/PhoneNumber';
import PriceAverage from '../../components/storeRegister/PriceAverage';
import Parking from '../../components/storeRegister/Parking';
import Time from '../../components/storeRegister/Time';
import MenuModalButton from '../../components/storeRegister/MenuModalButton';
import StoreImage from '../../components/storeRegister/StoreImage';
// import MapContainer from '../../components/storeRegister/MapContainer';
import axios from 'axios';


export default function StoreRegister () {

    const [storeInfo, setStoreInfo] = useState({
        banners: [],
        name: "",
        address: {
            street: "",
            city: "",
            state: "",
            fullAddress: "",
            zipCode: "",
            latitude: "",
            longitude: "",
        },
        menuItems: [
            { name: "", price: "" },
            { name: "", price: "" },
            { name: "", price: "" },
        ],
        type: "",
        phone: "",
        priceRange: "",
        parkingInfo: "",
        businessHours: [],
        closedDays: [],
    });

    const handleSaveStore = (e) => {
        e.preventDefault();
        handleSubmit(storeInfo);
    }
    // const handleMenuItemsChange = (menuItems) => {
    //     setStoreInfo(prevInfo => ({
    //         ...prevInfo,
    //         menuItems: menuItems,
    //     }));
    //     console.log(storeInfo)
    // }
    const handleSubmit = (updatedStoreInfo) => { 
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
                    {/* <S.Map id="mapDiv">
                            <MapContainer coordinates={coordinates} setCoordinates={setCoordinates} />
                    </S.Map> */}
                    <TypeModalButton setStoreInfo={setStoreInfo} /> 
                    <PhoneNumber />
                    <PriceAverage />
                    <Parking />
                    <Time />
                    <MenuModalButton setStoreInfo={setStoreInfo} />
                    <StoreImage />
                        <S.RegisterButton>
                            <button type="submit" onClick={handleSaveStore}>새로운 업체 등록하기</button>
                        </S.RegisterButton>
                </S.RegisterForm>
            </S.Article>
        </S.Container>
    )
}
