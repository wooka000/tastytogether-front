import React from 'react';
import * as S from './style/BottomDetail.style';
import { useNavigate } from 'react-router-dom';

export default function BottomDetail({ storeInfo }) {
    const navigate = useNavigate();
    const { address, phone, menuItems, priceRange, parkingInfo, businessHours, closedDays } =
        storeInfo;

    return (
        <S.BottomDetailWrap>
            <S.StoreDetailBox>
                <S.AddressDetail>
                    <S.AddressTitle>주소</S.AddressTitle>
                    <S.Addresses>
                        <S.AddressContent>{address && address.street}</S.AddressContent>
                        <S.AddressStreets>
                            <S.AddressStreetIcon>지번</S.AddressStreetIcon>
                            <S.AddressStreet>{address && address.fullAddress}</S.AddressStreet>
                        </S.AddressStreets>
                    </S.Addresses>
                </S.AddressDetail>
                <S.StoreDetailItem>
                    <S.StoreDetailTitle>전화번호</S.StoreDetailTitle>
                    <S.StoreDetailContent>{phone}</S.StoreDetailContent>
                </S.StoreDetailItem>
                <S.StoreDetailItem>
                    <S.StoreDetailTitle>가격대</S.StoreDetailTitle>
                    <S.StoreDetailContent>{priceRange}</S.StoreDetailContent>
                </S.StoreDetailItem>
                <S.StoreDetailItem>
                    <S.StoreDetailTitle>주차</S.StoreDetailTitle>
                    <S.StoreDetailContent>{parkingInfo}</S.StoreDetailContent>
                </S.StoreDetailItem>
                <S.StoreDetailItem>
                    <S.StoreDetailTitle>영업시간</S.StoreDetailTitle>
                    <S.StoreDetailContent>
                        {businessHours &&
                            `${businessHours[0]}:${businessHours[1]}~${businessHours[2]}:${businessHours[3]}`}
                    </S.StoreDetailContent>
                </S.StoreDetailItem>
                <S.StoreDetailItem>
                    <S.StoreDetailTitle>휴무일</S.StoreDetailTitle>
                    <S.StoreDetailContent>{closedDays}</S.StoreDetailContent>
                </S.StoreDetailItem>
                <S.StoreDetailItem>
                    <S.StoreDetailTitle>대표 메뉴</S.StoreDetailTitle>
                    <S.MenuItems>
                        <S.MenuItem>
                            <S.StoreDetailContent>
                                {menuItems && menuItems[0].name}
                            </S.StoreDetailContent>
                            <S.StoreDetailContent>
                                {menuItems && Number(menuItems[0].price).toLocaleString()}
                            </S.StoreDetailContent>
                        </S.MenuItem>
                        <S.MenuDividerLine></S.MenuDividerLine>
                        <S.MenuItem>
                            <S.StoreDetailContent>
                                {menuItems && menuItems[1].name}
                            </S.StoreDetailContent>
                            <S.StoreDetailContent>
                                {menuItems && Number(menuItems[1].price).toLocaleString()}
                            </S.StoreDetailContent>
                        </S.MenuItem>
                        <S.MenuDividerLine></S.MenuDividerLine>
                        <S.MenuItem>
                            <S.StoreDetailContent>
                                {menuItems && menuItems[2].name}
                            </S.StoreDetailContent>
                            <S.StoreDetailContent>
                                {menuItems && Number(menuItems[2].price).toLocaleString()}
                            </S.StoreDetailContent>
                        </S.MenuItem>
                        <S.MenuDividerLine></S.MenuDividerLine>
                    </S.MenuItems>
                </S.StoreDetailItem>
            </S.StoreDetailBox>
            <div>
                <S.StoreEditLink onClick={() => navigate(`/stores/detail/${storeInfo._id}/edit`)}>
                    정보 수정하기 &#62;
                </S.StoreEditLink>
            </div>
        </S.BottomDetailWrap>
    );
}
