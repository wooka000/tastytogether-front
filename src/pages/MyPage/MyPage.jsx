import React, { useState } from 'react';
import styled from 'styled-components';
import MyBoard from '../../components/MyPage/MyBoard';
import MyReview from '../../components/MyPage/MyReview';
import MyBookmark from '../../components/MyPage/MyBookmark';

export default function MyPage() {
    const tabList = [
        { category: '게시글', count: '8' },
        { category: '리뷰', count: '11' },
        { category: '북마크', count: '24' },
    ];
    const [tab, setTab] = useState();
    const tabComponent = {
        게시글: <MyBoard></MyBoard>,
        리뷰: <MyReview></MyReview>,
        북마크: <MyBookmark></MyBookmark>,
    };
    return (
        <Container>
            <ProfileBg></ProfileBg>
            <ProfileBox>
                <EditBtn>프로필 수정</EditBtn>
                <Info>
                    <Img src="/imgs/profile.png" alt="profile" />
                    <Text>
                        <Name>김망고</Name>
                        <Description>안녕하세요 정직한 리뷰만 달고 있습니다~</Description>
                    </Text>
                </Info>
                <Menu>
                    {tabList.map((tab, index) => {
                        return (
                            <MenuBtn key={index} onClick={() => setTab(tab.category)}>
                                <Category>{tab.category}</Category>
                                <Count>{tab.count}</Count>
                            </MenuBtn>
                        );
                    })}
                </Menu>
            </ProfileBox>
            {tabComponent[tab]}
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
`;

const ProfileBg = styled.div`
    background-image: url('/imgs/profilebg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 300px;
`;

const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    background-color: rgba(255, 255, 255, 0.8);
    margin: -160px auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px 40px;
    position: relative;
`;

const EditBtn = styled.button`
    width: 100px;
    height: 30px;
    background-color: transparent;
    border-radius: 10px;
    color: gray;
    border: 1px dotted gray;
    transition: all 250ms ease-out;
    position: absolute;
    top: 20px;
    right: 20px;
    &:hover {
        color: black;
        border: 1px solid black;
    }
`;

const Info = styled.div`
    display: flex;
    align-items: center;
`;

const Img = styled.img`
    width: 150px;
    height: 150px;
`;

const Text = styled.div`
    max-width: 800px;
`;

const Name = styled.p`
    font-weight: bold;
    font-size: 22px;
`;

const Description = styled.p`
    font-size: 18px;
    height: 100px;
    padding-top: 10px;
`;

const Menu = styled.ul`
    display: flex;
    align-items: center;
`;

const MenuBtn = styled.li`
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid gray;
    width: 150px;
    margin: 10px 25px 0 25px;
    border: none;
    cursor: pointer;

    &:hover {
        p {
            color: var(--color-accent);
            transition: all 250ms ease-out;
        }
    }
`;

const Category = styled.p`
    margin-bottom: 10px;
`;

const Count = styled.span`
    font-size: 18px;
`;
