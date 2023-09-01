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
        <S.TableLine>
            <div className="table_title">
                <span>업종*</span>
            </div>
            <div className="table_content">
                <input
                    id="type_input"
                    className="input"
                    type="text"
                    placeholder="업종을 선택하세요."
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    readOnly
                    required
                />
                <S.TypeButton onClick={showModal}>업종선택</S.TypeButton>
                {modalOpen && (
                    <TypeModalPage setModalOpen={setModalOpen} setCategory={handleCategoryChange} />
                )}
            </div>
        </S.TableLine>
    );
}

export default TypeModalButton;
