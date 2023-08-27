import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import UserInfo from '../UserInfo/UserInfo';
import * as S from './style/Header.style';

export default function Header() {
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
            <S.Logo to="/">
                <S.Img src="/imgs/logo1.png" alt="logo" />
            </S.Logo>
            <S.Form onSubmit={handleSubmit}>
                <S.SubmitBtn>
                    <FiSearch />
                </S.SubmitBtn>
                <S.SearchInput
                    type="search"
                    name="search"
                    id="search"
                    placeholder="지역,식당 또는 음식"
                    value={text}
                    onChange={handleChange}
                />
            </S.Form>
            <S.Menu>
                <S.MenuBtn onClick={() => navigate('/post')}>혼밥 메이트</S.MenuBtn>
                <S.MenuBtn onClick={() => navigate('/stores/register')}>음식점 등록</S.MenuBtn>
                <S.MenuBtn onClick={() => navigate('/mypage/123')}>마이페이지</S.MenuBtn>
            </S.Menu>
            <UserInfo />
        </S.Container>
    );
}
