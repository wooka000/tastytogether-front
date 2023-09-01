import React, { useState } from 'react';
import * as S from './style/TypeModalButton.style';
import TypeModalPage from './TypeModalPage';

function TypeModalButton({ setType }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    const showModal = () => {
        setModalOpen(true);
    };
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setModalOpen(false);
        setType(category);
    };
    return (
        <S.Container>
            <S.Title>업종*</S.Title>
            <S.Content>
                <S.Input
                    id="type_input"
                    className="input"
                    type="text"
                    placeholder="업종을 선택하세요."
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    readOnly
                    required
                />
                <S.TypeButton type="button" onClick={showModal}>
                    업종선택
                </S.TypeButton>
                {modalOpen && (
                    <TypeModalPage setModalOpen={setModalOpen} setCategory={handleCategoryChange} />
                )}
            </S.Content>
        </S.Container>
    );
}

export default TypeModalButton;
