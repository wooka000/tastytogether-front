import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './style/MyProfileEdit.style';
import useAxios from '../../hooks/useAxios';
import useAuth from '../../hooks/useAuth';

export default function MyProfileEdit({ setModalOpen, user }) {
    MyProfileEdit.propTypes = {
        setModalOpen: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
    };
    const { authRequiredAxios } = useAxios('multipart/form-data');
    const { auth } = useAuth();
    const [name, setName] = useState(user.name);
    const [nickname, setNickname] = useState(user.nickname);
    const [profileText, setProfileText] = useState(user.profileText);
    const [profileImage, setProfileImage] = useState(user.profileImage);
    const [coverImage, setCoverImage] = useState(user.coverImage);
    const [file, setFile] = useState();
    const [fileBg, setFileBg] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('nickname', nickname);
        formData.append('profileText', profileText);
        formData.append('profileImage', profileImage);
        // formData.append('coverImage', coverImage);
        try {
            await authRequiredAxios({
                method: 'patch',
                url: `/user/${auth.userId}`,
                data: formData,
            });
        } catch (err) {
            console.error(err);
        } finally {
            setModalOpen(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'profileImage') {
            setProfileImage(files[0]);
            setFile(files[0]);
            return;
        } else if (name === 'coverImage') {
            setCoverImage(value);
            setFileBg(files[0]);
            return;
        } else if (name === 'name') {
            setName(value);
            return;
        } else if (name === 'nickname') {
            setNickname(value);
            return;
        } else if (name === 'profileText') {
            setProfileText(value);
            return;
        }
    };

    const handleCancel = () => {
        setModalOpen(false);
    };

    return (
        <S.Container onClick={handleCancel}>
            <S.Modal onClick={(e) => e.stopPropagation()}>
                <S.ModalHeader>
                    <S.CancellBtn onClick={handleCancel}>X</S.CancellBtn>
                </S.ModalHeader>
                <S.PreviewImgs>
                    {file && (
                        <S.PreviewImg src={URL.createObjectURL(file)} alt="preview-profile-image" />
                    )}
                    {!file && <S.PreviewImg src={profileImage} alt="preview-profile-image" />}
                    {fileBg && (
                        <S.PreviewImg
                            src={URL.createObjectURL(fileBg)}
                            alt="preview-profile-image"
                        />
                    )}
                    {!fileBg && <S.PreviewImg src={coverImage} alt="preview-profile-image" />}
                </S.PreviewImgs>
                <S.Form onSubmit={handleSubmit}>
                    <S.FieldFile>
                        <S.FileLabel htmlFor="fileInput">프로필 사진 설정</S.FileLabel>
                        <S.FileInput
                            type="file"
                            id="fileInput"
                            onChange={handleChange}
                            accept="image/*"
                            name="profileImage"
                        />
                        <S.BgFileLabel htmlFor="bgFileInput">배경 사진 설정</S.BgFileLabel>
                        <S.BgFileInput
                            type="file"
                            id="bgFileInput"
                            onChange={handleChange}
                            accept="image/*"
                            name="coverImage"
                        />
                    </S.FieldFile>
                    <S.Field>
                        <S.Label htmlFor="name">이름</S.Label>
                        <S.Input
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleChange}
                            value={name}
                        />
                    </S.Field>
                    <S.Field>
                        <S.Label htmlFor="nickName">닉네임</S.Label>
                        <S.Input
                            type="text"
                            id="nickName"
                            onChange={handleChange}
                            name="nickname"
                            value={nickname}
                        />
                        <S.CheckText>이미 존재하는 닉네임입니다</S.CheckText>
                        <S.CheckBtn type="button">중복 확인</S.CheckBtn>
                    </S.Field>
                    <S.Field>
                        <S.Label htmlFor="description">한줄소개</S.Label>
                        <S.Input
                            type="text"
                            id="description"
                            name="profileText"
                            value={profileText}
                            onChange={handleChange}
                        />
                    </S.Field>
                    <S.SubmitBtn>완료</S.SubmitBtn>
                </S.Form>
            </S.Modal>
        </S.Container>
    );
}
