import React, { useState } from 'react';
import TypeModalPage from './TypeModalPage';


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
        <>
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

            <button onClick={showModal}>업종선택</button>
            {modalOpen && <TypeModalPage setModalOpen={setModalOpen} setCategory={handleCategoryChange} />}
        </>
    );
}

export default TypeModalButton;
