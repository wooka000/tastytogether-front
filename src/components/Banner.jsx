import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export default function Banner() {
    return (
        <Container>
            <TextContainer>
                <Title>
                    솔직한 리뷰, 믿을 수 있는 평점! <br /> TASTY TOGETHER
                </Title>
            </TextContainer>
            <Form>
                <Search type="search" />
                <SubmitBtn>
                    <FiSearch />
                </SubmitBtn>
            </Form>
        </Container>
    );
}

const Container = styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 500px;
    background-image: url('/imgs/banner.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const TextContainer = styled.div`
    width: 680px;
    margin-bottom: 20px;
`;

const Title = styled.h3`
    font-size: 35px;
    color: white;
`;

const Form = styled.form`
    display: flex;
    align-items: center;
`;

const Search = styled.input`
    width: 600px;
    height: 60px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    outline: none;
    font-size: 20px;
    padding: 0 30px;
    border: 2px solid var(--color-accent);
    border-right: none;
`;

const SubmitBtn = styled.button`
    width: 80px;
    height: 60px;
    font-size: 24px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border: 2px solid var(--color-accent);
    background-color: var(--color-accent);
    color: white;
`;
