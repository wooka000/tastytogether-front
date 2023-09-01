import React from 'react';
import * as S from './style/TypeFilter.style';

const TypeFilter = ({ setSelectedType, dataSave }) => {
    const handleTypeChange = (e) => {
        dataSave({ name: 'type', value: e.target.value });
        setSelectedType(e.target.value);
    };
    return (
        <S.TypeFilter>
            <S.TypeFilterTitle>
                <S.Square></S.Square>
                <h2>업종</h2>
            </S.TypeFilterTitle>
            <S.TypeFilterContent>
                <S.TypeLabel htmlFor="basic">
                    <S.TypeFilterRadio
                        className="filter_radio"
                        type="radio"
                        id="basic"
                        name="store_type"
                        value="기본"
                        onChange={handleTypeChange}
                        defaultChecked
                    />
                    <S.TypeFilterSpan value="기본">기본</S.TypeFilterSpan>
                </S.TypeLabel>
                <S.TypeLabel htmlFor="western" onClick={handleTypeChange}>
                    <S.TypeFilterRadio
                        className="filter_radio"
                        type="radio"
                        id="western"
                        name="store_type"
                        value="양식"
                        onChange={handleTypeChange}
                    />
                    <S.TypeFilterSpan value="양식">양식</S.TypeFilterSpan>
                </S.TypeLabel>
                <S.TypeLabel htmlFor="japan" onClick={handleTypeChange}>
                    <S.TypeFilterRadio
                        className="filter_radio"
                        type="radio"
                        id="japan"
                        name="store_type"
                        value="일식"
                        onChange={handleTypeChange}
                    />
                    <S.TypeFilterSpan value="일식">일식</S.TypeFilterSpan>
                </S.TypeLabel>
                <S.TypeLabel htmlFor="china" onClick={handleTypeChange}>
                    <S.TypeFilterRadio
                        className="filter_radio"
                        type="radio"
                        id="china"
                        name="store_type"
                        value="중식"
                        onChange={handleTypeChange}
                    />
                    <S.TypeFilterSpan value="중식">중식</S.TypeFilterSpan>
                </S.TypeLabel>
                <S.TypeLabel htmlFor="korea" onClick={handleTypeChange}>
                    <S.TypeFilterRadio
                        className="filter_radio"
                        type="radio"
                        id="korea"
                        name="store_type"
                        value="한식"
                        onChange={handleTypeChange}
                    />
                    <S.TypeFilterSpan value="한식">한식</S.TypeFilterSpan>
                </S.TypeLabel>
                <S.TypeLabel htmlFor="asia" onClick={handleTypeChange}>
                    <S.TypeFilterRadio
                        className="filter_radio"
                        type="radio"
                        id="asia"
                        name="store_type"
                        value="아시안"
                        onChange={handleTypeChange}
                    />
                    <S.TypeFilterSpan value="아시안">아시안</S.TypeFilterSpan>
                </S.TypeLabel>
                <S.TypeLabel htmlFor="cafe" onClick={handleTypeChange}>
                    <S.TypeFilterRadio
                        className="filter_radio"
                        type="radio"
                        id="cafe"
                        name="store_type"
                        value="카페"
                        onChange={handleTypeChange}
                    />
                    <S.TypeFilterSpan value="카페">카페.디저트</S.TypeFilterSpan>
                </S.TypeLabel>
            </S.TypeFilterContent>
        </S.TypeFilter>
    );
};

export default TypeFilter;