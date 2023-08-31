import React from 'react';
import * as S from './style/ResultNotice.style';

const ResultNotice = ({ selectedType, selectedCity, selectedArea, keyword, searchResults, applyFiltersAndSort }) => {

  // 필터 결과 안내창
  function getFilterDescription() {
    if (selectedType !== '' && selectedCity !== '' && selectedArea !== '') {
      return `${selectedType} & ${selectedCity} ${selectedArea}`;
    } else if (selectedType !== '') {
      return selectedType;
    } else if (selectedCity !== '' && selectedArea !== '') {
      return `${selectedCity} ${selectedArea}`
    }
  }

  return (
    <S.ResultNotice>
      <S.Keyword>
        {keyword.trim() !== '' && (
          <span>{`${keyword}에 대한 결과입니다.`}</span>
        )}
        {keyword.trim() === '' && applyFiltersAndSort.length > 0 && (
          <span>{`${getFilterDescription()}에 대한 결과입니다.`}</span>
        )}
      </S.Keyword>
    </S.ResultNotice>
  )
}

export default ResultNotice;