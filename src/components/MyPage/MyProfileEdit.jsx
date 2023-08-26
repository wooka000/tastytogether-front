import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

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
        <Container onClick={handleCancel}>
            <Modal onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <CancellBtn onClick={handleCancel}>X</CancellBtn>
                </ModalHeader>
                {!file && <PreviewImg src={info.photo} alt="preview" />}
                {file && <PreviewImg src={URL.createObjectURL(file)} alt="preview" />}
                <Form onSubmit={handleSubmit}>
                    <FieldFile>
                        <FileLabel htmlFor="fileInput">프로필 사진 설정</FileLabel>
                        <FileInput
                            type="file"
                            id="fileInput"
                            onChange={handleChange}
                            accept="image/*"
                            name="file"
                        />
                    </FieldFile>
                    <Field>
                        <Label htmlFor="name">이름</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleChange}
                            value={info.name}
                        />
                    </Field>
                    <Field>
                        <Label htmlFor="nickName">닉네임</Label>
                        <Input
                            type="text"
                            id="nickName"
                            onChange={handleChange}
                            name="nickName"
                            value={info.nickName}
                        />
                        <CheckText>이미 존재하는 닉네임입니다</CheckText>
                        <CheckBtn type="button">중복 확인</CheckBtn>
                    </Field>
                    <Field>
                        <Label htmlFor="description">한줄소개</Label>
                        <Input
                            type="text"
                            id="description"
                            name="description"
                            value={info.description}
                            onChange={handleChange}
                        />
                    </Field>
                    <SubmitBtn>완료</SubmitBtn>
                </Form>
            </Modal>
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 112vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Modal = styled.div`
    width: 700px;
    height: 600px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const ModalHeader = styled.div`
    width: 100%;
`;

const CancellBtn = styled.button`
    float: right;
    background-color: transparent;
    font-size: 24px;
    font-weight: bold;
    border: none;
    padding: 5px 10px;
    color: lightgray;
    transition: all 250ms ease-out;
    &:hover {
        color: gray;
    }
`;

const Form = styled.form`
    padding: 0 40px;
`;

const FieldFile = styled.div`
    margin: 0 auto;
    width: 70%;
    position: relative;
    text-align: center;
    height: 60px;
`;

const FileLabel = styled.label`
    background-color: whitesmoke;
    color: gray;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    display: block;
    height: 38px;
    cursor: pointer;
    transition: all 250ms ease-out;

    &:hover {
        color: black;
    }
`;

const FileInput = styled.input`
    display: none;
`;

const PreviewImg = styled.img`
    width: 150px;
    height: 150px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 10px;
    border-radius: 50%;
`;

const Field = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 80px;
    width: 70%;
    position: relative;
`;

const CheckBtn = styled.button`
    border: none;
    border-radius: 10px;
    color: gray;
    font-weight: bold;
    padding: 10px;
    position: absolute;
    top: 20px;
    right: -80px;
    transition: all 250ms ease-out;

    &:hover {
        color: black;
    }
`;

const Label = styled.label`
    color: gray;
    font-weight: bold;
`;

const Input = styled.input`
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: whitesmoke;
    color: black;
`;

const CheckText = styled.span`
    visibility: hidden;
    color: red;
    font-size: 12px;
    padding-top: 5px;
`;

const SubmitBtn = styled.button`
    display: block;
    background-color: lightskyblue;
    color: white;
    width: 70%;
    margin: 15px auto;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 20px;
    opacity: 0.5;
    transition: all 250ms ease-out;

    &:hover {
        opacity: 0.8;
    }
`;
