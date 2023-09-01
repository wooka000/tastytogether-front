import React from 'react';
import * as S from './style/ResultNotice.style';

const ResultNotice = ({ selectedType, selectedCity, selectedArea, keyword, stores, resetFilters }) => {
  function getFilterDescription() {
    if (keyword) {
      const decodedName = decodeURIComponent(keyword);
      return `${decodedName}에 대한 결과입니다.`;
    } else if (selectedType !== '기본' && selectedType !== '' && selectedCity !== '' && selectedArea !== '') {
      return `${selectedCity} ${selectedArea} ${selectedType}에 대한 결과입니다.`;
    } else if (selectedType !== '기본' && selectedType !== '' && selectedCity === '') {
      return `${selectedType}에 대한 결과입니다.`;
    } else if (selectedType !== '기본' && selectedType !== '' && selectedCity !== '') {
      return `${selectedType}에 대한 결과입니다.`;
    } else if (selectedType === '기본' && selectedCity !== '' && selectedArea !== '') {
      return `${selectedCity} ${selectedArea}에 대한 결과입니다.`;
    } else if (selectedType === '기본' && selectedCity === '' && selectedArea === '') {
      return `어떤 맛집을 찾고 계신가요?`;
    } else if (selectedType === '기본' && selectedCity !== '' && selectedArea === '') {
      return `검색어를 입력하거나 필터를 설정해주세요.`;
    } else {
      return '';
    }
  }

  const handleReset = () => {
    resetFilters();
  };

  return (
    <S.ResultNotice>
      <S.Keyword onChange={handleReset}>
        {getFilterDescription()}
      </S.Keyword>
    </S.ResultNotice>
  );
}

export default ResultNotice;
