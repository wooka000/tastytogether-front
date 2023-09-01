import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style/Review.style';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';

export default function Review({ review }) {
    Review.propTypes = {
        review: PropTypes.object.isRequired,
    };
    const { createdAt, content, grade, photos, userId, _id, usernickname, profileImage } = review;
    const { auth } = useAuth();
    const user = auth.userId;
    const { authRequiredAxios } = useAxios('application/json');

    const handleDelete = async () => {
        const deletedMessage = confirm('해당 리뷰를 삭제하시겠습니까?');
        if (deletedMessage) {
            try {
                const res = await authRequiredAxios({ method: 'delete', url: `/review/${_id}` });
                const status = res.status;
                if (status == 200) {
                    window.location.reload();
                }
            } catch (err) {
                console.err(err);
            }
        } else {
            return;
        }
    };
    return (
        <S.Item>
            {userId == user && <S.DeleteBtn onClick={handleDelete}>Delete</S.DeleteBtn>}
            <S.Info>
                <S.InfoLeft>
                    <S.ProfileImg
                        src={profileImage ? profileImage : '/imgs/review-profile-image.png'}
                        alt="프로필이미지"
                    />
                    <S.Nickname>{usernickname}</S.Nickname>
                </S.InfoLeft>
                <S.InfoRight>
                    <S.Date>{createdAt.split('T')[0]}</S.Date>
                    <S.Content>{content}</S.Content>
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
