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
            <S.TypeLabel value="basic" onClick={handleTypeChange}>
                    <S.TypeFilterRadio className="filter_radio" type="radio" id="basic" name="store_type" />
                    <S.TypeFilterSpan htmlFor="basic">기본</S.TypeFilterSpan>
            </S.TypeLabel>
            <S.TypeLabel value="western" onClick={handleTypeChange}>
                    <S.TypeFilterRadio className="filter_radio" type="radio" id="western" name="store_type" />
                    <S.TypeFilterSpan htmlFor="western">양식</S.TypeFilterSpan>
            </S.TypeLabel>
            <S.TypeLabel value="japan" onClick={handleTypeChange}>
                    <S.TypeFilterRadio className="filter_radio" type="radio" id="japan" name="store_type" />
                    <S.TypeFilterSpan htmlFor="japan">일식</S.TypeFilterSpan>
            </S.TypeLabel>
            <S.TypeLabel value="china" onClick={handleTypeChange}>
                    <S.TypeFilterRadio className="filter_radio" type="radio" id="china" name="store_type" />
                    <S.TypeFilterSpan htmlFor="china">중식</S.TypeFilterSpan>
            </S.TypeLabel>
            <S.TypeLabel value="korea" onClick={handleTypeChange}>
                    <S.TypeFilterRadio className="filter_radio" type="radio" id="korea" name="store_type" />
                    <S.TypeFilterSpan htmlFor="korea">한식</S.TypeFilterSpan>
            </S.TypeLabel>
            <S.TypeLabel value="asia" onClick={handleTypeChange}>
                    <S.TypeFilterRadio className="filter_radio" type="radio" id="japan" name="store_type" />
                    <S.TypeFilterSpan htmlFor="asia">아시안</S.TypeFilterSpan>
            </S.TypeLabel>
            <S.TypeLabel value="cafe" onClick={handleTypeChange}>
                    <S.TypeFilterRadio className="filter_radio" type="radio" id="cafe" name="store_type" />
                    <S.TypeFilterSpan htmlFor="cafe">카페.디저트</S.TypeFilterSpan>
            </S.TypeLabel>
        </S.TypeFilterContent>
    </S.TypeFilter>
  );
};

export default TypeFilter;