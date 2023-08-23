import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

export default function CreateReview() {
    const [review, setReview] = useState({});
    const [file, setFile] = useState();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setFile(files && files[0]);
            return;
        }
        setReview((review) => ({ ...review, [name]: value }));
    };

    const handleReset = () => {
        setReview({});
        setFile();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!review.grade) {
            alert('평점 아이콘을 눌러주세요!');
            return;
        }
        console.log(review, file && file.name);
    };

    return (
        <Container>
            <ReviewCard>
                <Title>
                    <Name>맘스터치 건대로데오점</Name>에 대한 솔직한 리뷰를 써주세요.
                </Title>
                <Form onSubmit={handleSubmit}>
                    <GradeList>
                        <GradeItem ischecked={review.grade === '맛있다' ? 'yes' : 'no'}>
                            <RadioBtn
                                type="radio"
                                id="good"
                                name="grade"
                                value="맛있다"
                                onChange={handleChange}
                            />
                            <Label htmlFor="good">
                                <LabelImg src="/imgs/good.png" alt="good" />
                                <LabelText>good</LabelText>
                            </Label>
                        </GradeItem>
                        <GradeItem ischecked={review.grade === '괜찮다' ? 'yes' : 'no'}>
                            <RadioBtn
                                type="radio"
                                id="soso"
                                name="grade"
                                value="괜찮다"
                                onChange={handleChange}
                            />
                            <Label htmlFor="soso">
                                <LabelImg src="/imgs/soso.png" alt="soso" />
                                <LabelText>soso</LabelText>
                            </Label>
                        </GradeItem>
                        <GradeItem ischecked={review.grade === '별로다' ? 'yes' : 'no'}>
                            <RadioBtn
                                type="radio"
                                id="bad"
                                name="grade"
                                value="별로다"
                                onChange={handleChange}
                            />
                            <Label htmlFor="bad">
                                <LabelImg src="/imgs/bad.png" alt="bad" />
                                <LabelText>bad</LabelText>
                            </Label>
                        </GradeItem>
                    </GradeList>
                    <Content
                        name="content"
                        id="content"
                        cols="30"
                        rows="10"
                        placeholder="회원님, 주문하신 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!"
                        value={review.content ?? ''}
                        onChange={handleChange}
                    ></Content>
                    <Files>
                        {file && <PreviewImg src={URL.createObjectURL(file)} alt="prev" />}
                        <ShowFile htmlFor="file">
                            <ShowText>
                                <AiOutlinePlus />
                            </ShowText>
                        </ShowFile>
                        <File
                            type="file"
                            name="file"
                            id="file"
                            onChange={handleChange}
                            accept="image/*"
                        />
                    </Files>
                    <Btns>
                        <ResetBtn type="reset" onClick={handleReset}>
                            다시쓰기
                        </ResetBtn>
                        <SubmitBtn type="submit">리뷰 등록하기</SubmitBtn>
                    </Btns>
                </Form>
            </ReviewCard>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
`;

const ReviewCard = styled.div`
    background-color: white;
    width: 90%;
    max-width: 1440px;
    height: 650px;
    margin: 0 auto;
    margin-top: 150px;
    border-radius: 10px;
    padding: 50px;
`;

const Title = styled.div`
    text-align: left;
    margin-bottom: 20px;
`;

const Name = styled.span`
    font-size: 24px;
    color: var(--color-accent);
    font-weight: bold;
`;

const Form = styled.form`
    display: flex;
    height: 500px;
    flex-direction: column;
    border: 2px solid lightgray;
    border-radius: 10px;
    padding: 30px;
`;

const GradeList = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const GradeItem = styled.div`
    margin-right: 10px;
    opacity: ${(props) => (props.ischecked === 'yes' ? 1 : 0.4)};
    transition: all 250ms ease-out;

    &:hover {
        opacity: 1;
        transform: scale(1.1);
    }
`;

const RadioBtn = styled.input`
    display: none;
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LabelImg = styled.img`
    width: 50px;
    height: 50px;
    cursor: pointer;
`;

const LabelText = styled.span`
    font-weight: bold;
    color: #ffc700;
    cursor: pointer;
`;

const Content = styled.textarea`
    border: none;
    outline: none;
    font-size: 18px;
    padding: 0 10px;
    font-weight: bold;
`;

const Files = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
`;

const PreviewImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-right: 30px;
`;

const ShowFile = styled.label`
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    background-color: transparent;
    border-radius: 10px;
    border: 1px dotted gray;
    cursor: pointer;
    margin-right: 30px;
`;

const ShowText = styled.div`
    font-size: 40px;
    color: lightgray;
`;

const File = styled.input`
    display: none;
`;

const Btns = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const ResetBtn = styled.button`
    border: 2px solid lightgray;
    font-size: 20px;
    margin-right: 10px;
    padding: 10px 30px;
    border-radius: 30px;
    background-color: white;
    color: gray;
    transition: all 250ms ease-out;
    &:hover {
        border-color: grey;
        color: black;
    }
`;

const SubmitBtn = styled.button`
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    color: white;
    background-color: gray;
    transition: all 250ms ease-out;
    &:hover {
        background-color: var(--color-accent);
        color: white;
    }
`;
