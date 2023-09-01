import * as S from './style/TypeModalPage.style';
import PropTypes from 'prop-types';

function TypeModalPage({ setModalOpen, setCategory }) {
    const handleCategorySelect = (category) => {
        setCategory(category);
        setModalOpen(false);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <S.Container onClick={() => setModalOpen(false)}>
            <S.Modal onClick={(e) => e.stopPropagation()}>
                <S.ModalTitle>업종을 선택하세요</S.ModalTitle>
                <S.CancellBtn onClick={() => setModalOpen(false)}>X</S.CancellBtn>
                <S.TypeButtons>
                    <S.Item onClick={() => handleCategorySelect('한식')} value="korea">
                        <S.Img src="/imgs/korea.png" alt="한식" />
                        <S.Name>한식</S.Name>
                    </S.Item>
                    <S.Item onClick={() => handleCategorySelect('양식')} value="western">
                        <S.Img src="/imgs/western.png" alt="양식" />
                        <S.Name>양식</S.Name>
                    </S.Item>
                    <S.Item onClick={() => handleCategorySelect('중식')} value="china">
                        <S.Img src="/imgs/china.png" alt="중식" />
                        <S.Name>중식</S.Name>
                    </S.Item>
                    <S.Item onClick={() => handleCategorySelect('일식')} value="japan">
                        <S.Img src="/imgs/japan.png" alt="일식" />
                        <S.Name>일식</S.Name>
                    </S.Item>
                    <S.Item onClick={() => handleCategorySelect('아시안')} value="asia">
                        <S.Img src="/imgs/asia.png" alt="아시안" />
                        <S.Name>아시안</S.Name>
                    </S.Item>
                    <S.Item onClick={() => handleCategorySelect('카페.디저트')} value="cafe">
                        <S.Img src="/imgs/cafe.png" alt="카페&디저트" />
                        <S.Name>카페&디저트</S.Name>
                    </S.Item>
                </S.TypeButtons>
            </S.Modal>
        </S.Container>
    );
}

TypeModalPage.propTypes = {
    setModalOpen: PropTypes.func.isRequired,
    setCategory: PropTypes.func.isRequired,
};

export default TypeModalPage;
