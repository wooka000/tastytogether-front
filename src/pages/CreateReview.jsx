import React, { useState } from 'react';
import styled from 'styled-components';

export default function CreateReview() {
    const [file, setFile] = useState();
    return (
        <Container>
            <Section>
                <Title>
                    <Name>맘스터치 건대로데오점</Name>에 대한 솔직한 리뷰를 써주세요.
                </Title>
                <Form>
                    <Grade>
                        <Col>
                            <Img id="good" src="/imgs/good.png" alt="good" />
                            <Label htmlFor="good">맛있다</Label>
                        </Col>
                        <Col>
                            <Img id="soso" src="/imgs/soso.png" alt="soso" />
                            <Label htmlFor="good">괜찮다</Label>
                        </Col>
                        <Col>
                            <Img id="bad" src="/imgs/bad.png" alt="bad" />
                            <Label htmlFor="good">별로다</Label>
                        </Col>
                    </Grade>

                    <Content
                        name="content"
                        id="content"
                        cols="30"
                        rows="10"
                        placeholder="김망고님, 주문하신 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!"
                    ></Content>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files && e.target.files[0])}
                        value={file}
                        accept="image/*"
                    />
                    <Btns>
                        <ResetBtn type="reset">취소</ResetBtn>
                        <SubmitBtn type="submit">리뷰 등록하기</SubmitBtn>
                    </Btns>
                </Form>
            </Section>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
`;

const Section = styled.div`
    background-color: white;
    width: 90%;
    height: 550px;
    margin: 0 auto;
    margin-top: 200px;
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
    height: 400px;
    flex-direction: column;
    border: 2px solid lightgray;
    border-radius: 10px;
    padding: 20px;
`;

const Grade = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.6;
    margin: 0px 2px;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`;

const Img = styled.img`
    width: 50px;
    height: 50px;
`;

const Label = styled.label`
    font-size: 14px;
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
`;
const SubmitBtn = styled.button`
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    color: white;
    background-color: gray;
`;
