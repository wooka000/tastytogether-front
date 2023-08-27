import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './style/MyProfileEdit.style';

export default function MyProfileEdit({ setModalOpen }) {
    MyProfileEdit.propTypes = {
        setModalOpen: PropTypes.func.isRequired,
    };

    const [file, setFile] = useState();
    const [info, setInfo] = useState({
        name: '엘리스',
        nickName: '나는야리뷰왕',
        description: '안녕하세요 정직한 리뷰만 달고 있습니다~',
        photo: '/imgs/profile.png',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(info, file);
        setModalOpen(false);
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setFile(files && files[0]);
            return;
        }
        setInfo((info) => ({ ...info, [name]: value }));
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
                {!file && <S.PreviewImg src={info.photo} alt="preview" />}
                {file && <S.PreviewImg src={URL.createObjectURL(file)} alt="preview" />}
                <S.Form onSubmit={handleSubmit}>
                    <S.FieldFile>
                        <S.FileLabel htmlFor="fileInput">프로필 사진 설정</S.FileLabel>
                        <S.FileInput
                            type="file"
                            id="fileInput"
                            onChange={handleChange}
                            accept="image/*"
                            name="file"
                        />
                    </S.FieldFile>
                    <S.Field>
                        <S.Label htmlFor="name">이름</S.Label>
                        <S.Input
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleChange}
                            value={info.name}
                        />
                    </S.Field>
                    <S.Field>
                        <S.Label htmlFor="nickName">닉네임</S.Label>
                        <S.Input
                            type="text"
                            id="nickName"
                            onChange={handleChange}
                            name="nickName"
                            value={info.nickName}
                        />
                        <S.CheckText>이미 존재하는 닉네임입니다</S.CheckText>
                        <S.CheckBtn type="button">중복 확인</S.CheckBtn>
                    </S.Field>
                    <S.Field>
                        <S.Label htmlFor="description">한줄소개</S.Label>
                        <S.Input
                            type="text"
                            id="description"
                            name="description"
                            value={info.description}
                            onChange={handleChange}
                        />
                    </S.Field>
                    <S.SubmitBtn>완료</S.SubmitBtn>
                </S.Form>
            </S.Modal>
        </S.Container>
    );
}
