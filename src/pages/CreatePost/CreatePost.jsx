import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaImage, FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function CreatePost() {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [date, setDate] = useState('');
    const [region, setRegion] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    const handleFileUpload = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const imageURL = URL.createObjectURL(selectedFile);
            setSelectedImage(imageURL);
        }
        console.log(selectedFile);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('image', fileInputRef.current.files[0]);

        formData.append('userId', '1');
        formData.append('region', region);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('meetDate', date);

        try {
            await axios.post('http://localhost:8080/posts', formData);
            alert('게시글이 성공적으로 생성되었습니다!');
        } catch (error) {
            alert('게시글 생성에 실패했습니다.');
            console.error(error);
        }
    };

    return (
        <Container>
            <BoxContainer>
                <Box1>
                    <div>
                        <FaRegCalendarAlt />
                        <label>
                            날짜
                            <input type="date" onChange={(e) => setDate(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <FaMapMarkerAlt />
                        <label>
                            지역
                            <input type="text" onChange={(e) => setRegion(e.target.value)} />
                        </label>
                    </div>
                </Box1>

                <Box2>
                    <input
                        type="file"
                        accept=".jpg, .png"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                    />
                    {selectedImage ? (
                        <img
                            src={selectedImage}
                            alt="Selected"
                            style={{ width: '100%', height: '100%' }}
                        />
                    ) : (
                        <>
                            <ImageUploadIcon onClick={handleIconClick}>
                                <FaImage />
                            </ImageUploadIcon>
                            <span style={{ fontSize: '24px' }}>이미지 파일을 선택해주세요.</span>
                        </>
                    )}
                </Box2>

                <Box3>
                    <textarea
                        placeholder="ex)8월 18일 오레노라멘 가실분 구합니다."
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Box3>

                <Box4>
                    <textarea
                        placeholder="어떤 동행을 찾고있나요? 구체적으로 작성해주세요."
                        onChange={(e) => setContent(e.target.value)}
                    />
                </Box4>

                <Btn>
                    <ButtonCancel>취소</ButtonCancel>
                    <ButtonSubmit onClick={handleSubmit}>작성하기</ButtonSubmit>
                </Btn>
            </BoxContainer>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 6%; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
`;

const BoxContainer = styled.div`
    width: 1600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Box = styled.div`
    width: 1500px;
    border: 1px solid #ff914d;
    background-color: white;
    margin-bottom: 35px;
`;

const Box1 = styled(Box)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 70px;

    input[type='date'],
    input[type='text'] {
        margin-left: 10px;
        width: 200px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #ff914d;
    }
`;

const Box2 = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 280px;
    input[type='file'] {
        display: none;
    }
`;

const ImageUploadIcon = styled.div`
    font-size: 100px;
    color: black;
    cursor: pointer;
`;
const Box3 = styled(Box)`
    height: 80px;
    textarea {
        width: 95%;
        height: 90%;
        border: none;
        resize: none;
        font-size: 20px;
        font-style: normal;
    }
`;

const Box4 = styled(Box)`
    height: 380px;
    textarea {
        width: 95%;
        height: 90%;
        border: none;
        resize: none;
        font-size: 20px;
        font-style: normal;
    }
`;
const Btn = styled.button`
    display: flex;
    justify-content: space-between;
    border: none;
`;

const ButtonCancel = styled.button`
    width: 720px;
    height: 55px;
    margin-right: 50px;
    background-color: #d9d9d9;
    font-size: 20px;
    font-weight: 700;
    border: none;
`;
const ButtonSubmit = styled.button`
    width: 720px;
    height: 55px;
    background-color: #ff914de5;
    font-size: 20px;
    font-weight: 700;
    border: none;
`;
