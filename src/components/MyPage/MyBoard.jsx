import React from 'react';
import { styled } from 'styled-components';

export default function MyBoard() {
    return <TabBox>내가 작성한 게시글 목록</TabBox>;
}
const TabBox = styled.div`
    margin: 0px auto;
    margin-top: 160px;
    max-width: 1200px;
    height: 400px;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0px 40px;
    position: relative;
`;
