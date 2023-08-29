// import React, { useState } from 'react';
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style/StoreRegister.style'
import DaumPost from '../../components/storeRegister/DaumPost'; 
import TypeModalButton from '../../components/storeRegister/TypeModalButton';
import PhoneNumber from '../../components/storeRegister/PhoneNumber';
import PriceAverage from '../../components/storeRegister/PriceAverage';
import Parking from '../../components/storeRegister/Parking';
import Time from '../../components/storeRegister/Time';
import BreakDay from '../../components/storeRegister/BreakDay';
import MenuModalButton from '../../components/storeRegister/MenuModalButton';
import StoreImage from '../../components/storeRegister/StoreImage';
import axios from 'axios';

export default function StoreRegister () {
    // 로그인시 주석 해제
    const navigate = useNavigate();

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
        menuItems: [],
        type: "",
        phone: "",
        priceRange: "",
        parkingInfo: "",
        businessHours: [],
        closedDays: [],
    });

    const handleSaveStore = async (e) => {
        e.preventDefault();

        const {
            banners,
            name,
            address,
            menuItems,
            type,
            phone,
            priceRange,
            parkingInfo,
            businessHours,
            closedDays,
        } = storeInfo;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('type', type);
        formData.append('phone', phone);
        formData.append('priceRange', priceRange);
        formData.append('parkingInfo', parkingInfo);

        banners && banners.forEach((banner, index) => {
            formData.append(`banners[${index}]`, banner);
        });
        menuItems && menuItems.forEach((menuItem, index) => {
            formData.append(`menuItems[${index}][name]`, menuItem.name);
            formData.append(`menuItems[${index}][price]`, menuItem.price);
        });

        formData.append('address[street]', address.street);
        formData.append('address[city]', address.city);
        formData.append('address[state]', address.state);
        formData.append('address[fullAddress]', address.fullAddress);
        formData.append('address[zipCode]', address.zipCode);
        formData.append('address[latitude]', address.latitude);
        formData.append('address[longitude]', address.longitude);

        businessHours && businessHours.forEach((day, index) => {
            formData.append(`businessHours[${index}]`, day);
        });
        closedDays && closedDays.forEach((day, index) => {
            formData.append(`closedDays[${index}]`, day);
        });
        console.log(address.street)
        try {
            const response = await axios.post('/stores', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
        console.log(storeInfo)
    };

    return(
        <S.Container>
            <S.Article>
                <S.RegisterForm onSubmit={handleSaveStore}>
                    <DaumPost setStoreInfo={setStoreInfo}  />
                    <TypeModalButton setStoreInfo={setStoreInfo} /> 
                    <PhoneNumber setStoreInfo={setStoreInfo} />
                    <PriceAverage setStoreInfo={setStoreInfo} />
                    <Parking setStoreInfo={setStoreInfo} />
                    <Time setStoreInfo={setStoreInfo} />
                    <BreakDay setStoreInfo={setStoreInfo} />
                    <MenuModalButton setStoreInfo={setStoreInfo} />
                    <StoreImage setStoreInfo={setStoreInfo} />
                    <S.RegisterButton>
                        <button type="submit">새로운 업체 등록하기</button>
                    </S.RegisterButton>
                </S.RegisterForm>
            </S.Article>
        </S.Container>
    )
}
