import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export default function MyReview() {
    const [reviews, setReviews] = useState();

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('/data/myreview.json');
            const data = res.data;
            setReviews(data);
        };
        getData();
    }, []);
    return (
        <TabBox>
            {reviews &&
                reviews.map((review) => {
                    return (
                        <Box key={review.id}>
                            <Img src={review.photo} />
                        </Box>
                    );
                })}
        </TabBox>
    );
}

const TabBox = styled.div`
    margin: 0px auto;
    margin-top: 160px;
    max-width: 1200px;
    height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 40px 35px 40px;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(6, 180px);
    grid-template-rows: auto;
    gap: 5px;
    justify-content: center;

    &::-webkit-scrollbar {
        width: 8px; /* 스크롤바 너비 설정 */
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--color-accent); /* 스크롤바 색상 설정 */
        border-radius: 4px; /* 스크롤바 모서리 둥글기 설정 */
    }

    &::-webkit-scrollbar-track {
        background-color: lightgray; /* 스크롤바 트랙 색상 설정 */
    }
`;

const Box = styled.div`
    border: 1px solid gray;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    height: 180px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;
