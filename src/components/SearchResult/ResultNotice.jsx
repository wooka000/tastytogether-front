import React, { useState } from 'react';
import * as S from './style/ResultNotice.style';

const ResultNotice = ({ selectedType, selectedCity, selectedArea, keyword, stores, resetFilters }) => {

  // 필터 결과 안내창
  function getFilterDescription() {
    if (keyword) {
      return `${keyword}에 대한 결과입니다.`;
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

  // 결과값을 초기화하는 함수
  const handleReset = () => {
    resetFilters(); // 상위 컴포넌트에서 전달받은 함수를 호출하여 선택된 값들을 초기화
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
