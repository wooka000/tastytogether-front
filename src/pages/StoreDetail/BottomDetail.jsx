import React from 'react';
import * as S from './style/BottomDetail.style';

export default function BottomDetail() {
    return (
        <S.BottomDetailWrap>
            <S.StoreDetailBox>
                <S.AddressDetail>
                    <S.AddressTitle>주소</S.AddressTitle>
                    <S.Addresses>
                        <S.AddressContent>서울특별시 마포구 독막로6길 14</S.AddressContent>
                        <S.AddressStreets>
                            <S.AddressStreetIcon>지번</S.AddressStreetIcon>
                            <S.AddressStreet>서울시 마포구 합정동 361-1</S.AddressStreet>
                        </S.AddressStreets>
                    </S.Addresses>
                </S.AddressDetail>
                <S.StoreDetailItem>
                    <S.StoreDetailTitle>전화번호</S.StoreDetailTitle>
                    <S.StoreDetailContent>02-1234-1234</S.StoreDetailContent>
                </S.StoreDetailItem>
                <S.StoreDetailItem>
                    <S.StoreDetailTitle>가격대</S.StoreDetailTitle>
                    <S.StoreDetailContent>2만원대</S.StoreDetailContent>
                </S.StoreDetailItem>
                <S.StoreDetailItem>
                    <S.StoreDetailTitle>주차</S.StoreDetailTitle>
                    <S.StoreDetailContent>무료주차 가능</S.StoreDetailContent>
                </S.StoreDetailItem>
                <S.StoreDetailItem>
                    <S.StoreDetailTitle>영업시간</S.StoreDetailTitle>
                    <S.StoreDetailContent>9:30~18:00</S.StoreDetailContent>
                </S.StoreDetailItem>
                <S.StoreDetailItem>
                    <S.StoreDetailTitle>휴무일</S.StoreDetailTitle>
                    <S.StoreDetailContent>일</S.StoreDetailContent>
                </S.StoreDetailItem>
                <S.StoreDetailItem>
                    <S.StoreDetailTitle>대표 메뉴</S.StoreDetailTitle>
                    <S.MenuItems>
                        <S.MenuItem>
                            <S.StoreDetailContent>냉면</S.StoreDetailContent>
                            <S.StoreDetailContent>3,000원</S.StoreDetailContent>
                        </S.MenuItem>
                        <S.MenuDividerLine></S.MenuDividerLine>
                        <S.MenuItem>
                            <S.StoreDetailContent>떡볶이</S.StoreDetailContent>
                            <S.StoreDetailContent>15,000원</S.StoreDetailContent>
                        </S.MenuItem>
                        <S.MenuDividerLine></S.MenuDividerLine>
                        <S.MenuItem>
                            <S.StoreDetailContent>마르게리따 피자</S.StoreDetailContent>
                            <S.StoreDetailContent>130,000원</S.StoreDetailContent>
                        </S.MenuItem>
                        <S.MenuDividerLine></S.MenuDividerLine>
                    </S.MenuItems>
                </S.StoreDetailItem>
            </S.StoreDetailBox>
            <div>
                <S.StoreEditLink href="/stores/detail/edit">정보 수정하기 &#62;</S.StoreEditLink>
            </div>
        </S.BottomDetailWrap>
    );
}
