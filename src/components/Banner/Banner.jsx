import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import * as S from './style/Banner.style';

export default function Banner() {
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/stores/search', { state: { keyword: text } });
    };
    return (
        <S.Container>
            <S.TextContainer>
                <S.Title>
                    솔직한 리뷰, 믿을 수 있는 평점! <br /> TASTY TOGETHER
                </S.Title>
            </S.TextContainer>
            <S.Form onSubmit={handleSubmit}>
                <S.Search type="search" value={text} onChange={handleChange} />
                <S.SubmitBtn>
                    <FiSearch />
                </S.SubmitBtn>
            </S.Form>
        </S.Container>
    );
}
