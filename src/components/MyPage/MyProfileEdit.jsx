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
    const { authRequiredAxios } = useAxios('application/json');
    const { authRequiredAxios: authRequiredAxiosForImage } = useAxios('multipart/form-data');
    const { auth, setAuth } = useAuth();
    const [name, setName] = useState(user.name);
    const [nickname, setNickname] = useState(user.nickname);
    const [profileText, setProfileText] = useState('');
    const [profileImage, setProfileImage] = useState(user.profileImage);
    const [coverImage, setCoverImage] = useState(user.coverImage);
    const [file, setFile] = useState();
    const [fileBg, setFileBg] = useState();
    const [check, setCheck] = useState();
    const [duplicate, setDuplicate] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('nickname', nickname);
        formData.append('profileText', profileText);
        formData.append('profileImage', profileImage);
        formData.append('coverImage', coverImage);
        try {
            const res = await authRequiredAxiosForImage({
                method: 'patch',
                url: `/user/${auth.userId}`,
                data: formData,
            });
            const data = await res.data;
            const status = res.status;
            if (status == 200) {
                const token = data.accessToken;
                localStorage.setItem('accessToken', token);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setModalOpen(false);
        }
    };

    const handleCheck = async () => {
        try {
            const res = await authRequiredAxios({
                method: 'get',
                url: `/user/checknickname/${nickname}`,
            });
            const message = res.data.message;
            if (message == '이미 닉네임이 사용 중입니다.') {
                setCheck('실패');
                setDuplicate(true);
            } else if (message == '중복 확인 완료') {
                setCheck('통과');
                setDuplicate(false);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'profileImage') {
            setProfileImage(files[0]);
            setFile(files[0]);
            return;
        }
        if (name === 'name') {
            setName(value);
            return;
        }
        if (name === 'nickname') {
            setNickname(value);
            setDuplicate(true);
            return;
        }
        if (name === 'profileText') {
            setProfileText(value);
            return;
        }
        if (name === 'coverImage') {
            setCoverImage(files[0]);
            setFileBg(files[0]);
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
                    {file && <S.PreviewImg src={URL.createObjectURL(file)} alt="프로필사진" />}
                    {!file && <S.PreviewImg src={profileImage} alt="프로필사진" />}
                    {fileBg && <S.PreviewImg src={URL.createObjectURL(fileBg)} alt="배경사진" />}
                    {!fileBg && <S.PreviewImg src={coverImage} alt="배경사진" />}
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
                        <S.CheckBtn type="button" onClick={handleCheck}>
                            중복 확인
                        </S.CheckBtn>
                        {check == '실패' && (
                            <S.CheckText check={check}>이미 사용중인 닉네임입니다.</S.CheckText>
                        )}
                        {check == '통과' && (
                            <S.CheckText check={check}>사용 가능한 닉네임입니다.</S.CheckText>
                        )}
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
                    <S.SubmitBtn disabled={duplicate}>
                        {duplicate ? '닉네임 중복 확인을 해주세요!' : '완료'}
                    </S.SubmitBtn>
                </S.Form>
            </S.Modal>
        </S.Container>
    );
}
