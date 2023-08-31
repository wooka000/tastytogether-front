import React from 'react';
import * as S from './style/ResultNotice.style';

const ResultNotice = ({ selectedType, selectedCity, selectedArea, keyword, applySearchAndSort, applyFiltersAndSort }) => {

  // 필터 결과 안내창
  function getFilterDescription() {
    // 지역, 업종이 모두 있는 경우
    if (selectedType !== '기본' && selectedType !== '' && selectedCity !== '' && selectedArea !== '') {
      return `${selectedCity} ${selectedArea} ${selectedType}에 대한 결과입니다.`;
    // 업종만 선택한 경우
    } else if (selectedType !== '기본' && selectedType !== '' && selectedCity === '') {
      return `${selectedType}에 대한 결과입니다.`;
    // 업종만 있는 경우(업종+city 선택한 경우)
    } else if (selectedType !== '기본' && selectedType !== '' && selectedCity !== '') {
      return `${selectedType}에 대한 결과입니다.`;
    // city, state만 있는 경우
    } else if (selectedType === '기본' && selectedCity !== '' && selectedArea !== '') {
      return `${selectedCity} ${selectedArea}에 대한 결과입니다.`
    } else if (selectedType === '기본' && selectedCity === '' && selectedArea === '') {
      return `어떤 맛집을 찾고 계신가요?`
    } else if(selectedType === '기본' && selectedCity !== '' && selectedArea === ''){
      return `검색어를 입력하거나 필터를 설정해주세요.`
    } else if(applySearchAndSort){
      return `${keyword}에 대한 결과입니다.`
    }
  }

  // 필터가 적용되면 키워드가 안보이게, 키워드검색을 하면 필터가 기본으로 돌아가게 하고 싶음.
  // 검색결과랑 필터 결과안내가 중복되서 나옴.  
  return (
    <S.ResultNotice>
      <S.Keyword>
        {getFilterDescription()}
      </S.Keyword>
    </S.ResultNotice>
  ) 
}

export default ResultNotice;
