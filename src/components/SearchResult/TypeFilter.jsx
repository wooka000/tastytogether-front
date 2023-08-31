import React from 'react';
import * as S from './style/TypeFilter.style';

const TypeFilter = ({ setSelectedType }) => {

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    }
    return (
    <S.TypeFilter>
        <S.TypeFilterTitle>
            <S.Square></S.Square>
            <h2>업종</h2>
        </S.TypeFilterTitle>
        <S.TypeFilterContent>
            <S.TypeLabel value="기본" onClick={handleTypeChange}>
                    <S.TypeFilterRadio className="filter_radio" type="radio" id="basic" name="store_type" value="기본" />
                    <S.TypeFilterSpan htmlFor="basic" value="기본">기본</S.TypeFilterSpan>
            </S.TypeLabel>
            <S.TypeLabel value="양식" onClick={handleTypeChange}>
                    <S.TypeFilterRadio className="filter_radio" type="radio" id="western" name="store_type"  value="양식" />
                    <S.TypeFilterSpan htmlFor="western" value="양식">양식</S.TypeFilterSpan>
            </S.TypeLabel>
            <S.TypeLabel value="일식" onClick={handleTypeChange}>
                    <S.TypeFilterRadio className="filter_radio" type="radio" id="japan" name="store_type" value="일식" />
                    <S.TypeFilterSpan htmlFor="japan" value="일식">일식</S.TypeFilterSpan>
            </S.TypeLabel>
            <S.TypeLabel value="중식" onClick={handleTypeChange}>
                    <S.TypeFilterRadio className="filter_radio" type="radio" id="china" name="store_type" value="중식" />
                    <S.TypeFilterSpan htmlFor="china" value="중식">중식</S.TypeFilterSpan>
            </S.TypeLabel>
            <S.TypeLabel value="한식" onClick={handleTypeChange}>
                    <S.TypeFilterRadio className="filter_radio" type="radio" id="korea" name="store_type" value="한식" />
                    <S.TypeFilterSpan htmlFor="korea" value="한식">한식</S.TypeFilterSpan>
            </S.TypeLabel>
            <S.TypeLabel value="아시안" onClick={handleTypeChange}>
                    <S.TypeFilterRadio className="filter_radio" type="radio" id="japan" name="store_type" value="아시안" />
                    <S.TypeFilterSpan htmlFor="asia" value="아시안">아시안</S.TypeFilterSpan>
            </S.TypeLabel>
            <S.TypeLabel value="카페" onClick={handleTypeChange}>
                    <S.TypeFilterRadio className="filter_radio" type="radio" id="cafe" name="store_type" value="카페" />
                    <S.TypeFilterSpan htmlFor="cafe" value="카페">카페.디저트</S.TypeFilterSpan>
            </S.TypeLabel>
        </S.TypeFilterContent>
    </S.TypeFilter>
  );
};

export default TypeFilter;