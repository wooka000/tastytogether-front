import React from 'react';
import * as S from './style/SortFilter.style';

const SortFilter = ({ setSelectedSort }) => {

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
}

  return (
    <S.Sort>
        <S.SortTitle>
            <img src="/imgs/related.png" alt="" />
            <h4>정렬</h4>
        </S.SortTitle>
        <S.SortButton value="평점순" onClick={handleSortChange}>평점순</S.SortButton>
        <S.SortButton value="리뷰순" onClick={handleSortChange}>리뷰순</S.SortButton>
        <S.SortButton value="찜한순" onClick={handleSortChange}>찜한순</S.SortButton>
    </S.Sort>

  );
};

export default SortFilter;