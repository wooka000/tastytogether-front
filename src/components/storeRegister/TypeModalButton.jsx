import React, { useState } from 'react';
import TypeModalPage from './TypeModalPage';
import * as S from './style/MenuModalButton.style'


function TypeModalButton() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const showModal = () => {
        setModalOpen(true);
    };
    const handleCategoryChange = (category) => {
        setSelectedCategory(category); // Update selectedCategory instead of setCategory
        setModalOpen(false);
    };

    return (
        <S.TableLine>
            <div className="table_title">
                <span>업종</span>
            </div>
            <div className="table_content">
                <input
                        id="type_input"
                        className="input"
                        type="text"
                        placeholder="업종을 선택하세요."
                        value={selectedCategory} // Use selectedCategory here
                        onChange={(e) => setSelectedCategory(e.target.value)} // Update selectedCategory when input changes
                        readOnly
                        required
                />
                <button id="Type_modal_button" onClick={showModal}>업종선택</button>
                {modalOpen && <TypeModalPage setModalOpen={setModalOpen} setCategory={handleCategoryChange} />}
            </div>
        </S.TableLine>
    );
}

export default TypeModalButton;
