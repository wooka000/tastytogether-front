import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style/Review.style';

export default function Review({ review }) {
    Review.propTypes = {
        review: PropTypes.object.isRequired,
    };
    const { createdAt, content, grade, photos } = review;
    return (
        <S.Item>
            <S.Info>
                <S.InfoLeft>
                    <S.ProfileImg src="/imgs/profile.png" alt="profile-image" />
                    <S.Nickname>김망고님</S.Nickname>
                </S.InfoLeft>
                <S.InfoRight>
                    <S.Date>{createdAt.split('T')[0]}</S.Date>
                    <S.Content>{content}</S.Content>
                    {/* <S.Btns>
                        <S.EditBtn>수정</S.EditBtn>
                        <S.DeleteBtn>삭제</S.DeleteBtn>
                    </S.Btns> */}
                    <S.Grade>
                        {grade === '5' && <S.GradeImg src={'/imgs/good.png'}></S.GradeImg>}
                        {grade === '5' && <S.GradeText>good</S.GradeText>}
                        {grade === '3' && <S.GradeImg src={'/imgs/soso.png'}></S.GradeImg>}
                        {grade === '3' && <S.GradeText>soso</S.GradeText>}
                        {grade === '1' && <S.GradeImg src={'/imgs/bad.png'}></S.GradeImg>}
                        {grade === '1' && <S.GradeText>bad</S.GradeText>}
                    </S.Grade>
                </S.InfoRight>
            </S.Info>
            <S.Photos>
                {photos &&
                    photos.map((photo, index) => (
                        <S.Photo src={photo} key={index} alt="review-image" />
                    ))}
            </S.Photos>
        </S.Item>
    );
}
