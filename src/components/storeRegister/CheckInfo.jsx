import React, { useState, useEffect, useContext } from 'react';
import * as S from './style/CheckInfo.style';
import MyContext from './MyContext';

export default function CheckInfo({ isAddressRegistered }) {
    const [textContent, setTextContent] = useState('');
    const address = useContext(MyContext);

    useEffect(() => {
        if (!address.street && !address.fullAddress) {
            setTextContent(
                '새롭게 등록하려는 맛집이 등록되어 있는지 저장하기를 눌러 확인해주세요.',
            );
        } else if (isAddressRegistered) {
            setTextContent('이미 등록되어있는 맛집입니다.');
        } else {
            setTextContent('새로운 맛집입니다! 나머지 정보를 입력해주세요.');
        }
    }, [address, isAddressRegistered]);

    return (
        <S.CheckDiv>
            <S.Title>맛집 등록 페이지</S.Title>
            <S.Description>{textContent}</S.Description>
        </S.CheckDiv>
    );
}
