import React, { useState } from 'react';
import styled from 'styled-components';
import MyBoard from '../../components/MyPage/MyBoard';
import MyReview from '../../components/MyPage/MyReview';
import MyBookmark from '../../components/MyPage/MyBookmark';
import MyProfileEdit from '../../components/MyPage/MyProfileEdit';
import { BiImageAdd } from 'react-icons/bi';

export default function MyPage() {
    const [tab, setTab] = useState('게시글');
    const tabList = [{ category: '게시글' }, { category: '리뷰' }, { category: '북마크' }];
    const tabComponent = {
        게시글: <MyBoard />,
        리뷰: <MyReview />,
        북마크: <MyBookmark />,
    };
    const [modalOpen, setModalOpen] = useState(false);
    const [bgFile, setBgFile] = useState();
    const handleChange = (e) => {
        const { files } = e.target;
        setBgFile(files && files[0]);
        console.log(bgFile);
    };
    return (
        <Container>
            {modalOpen && <MyProfileEdit setModalOpen={setModalOpen}></MyProfileEdit>}
            <ProfileBg file={bgFile ? bgFile : ''}>
                <ShowInputFile htmlFor="file">
                    <BiImageAdd />
                    <FileText>배경 사진 변경</FileText>
                </ShowInputFile>
                <InputFile
                    type="file"
                    name="file"
                    id="file"
                    accept="image/*"
                    onChange={handleChange}
                />
            </ProfileBg>
            <ProfileBox>
                <EditBtn onClick={() => setModalOpen(true)}>프로필 수정</EditBtn>
                <Info>
                    <Img src="/imgs/profile.png" alt="profile" />
                    <Text>
                        <Name>김망고</Name>
                        <Description>안녕하세요 정직한 리뷰만 달고 있습니다~</Description>
                    </Text>
                </Info>
                <Menu>
                    {tabList.map((item, index) => {
                        return (
                            <MenuBtn key={index} onClick={() => setTab(item.category)}>
                                <Category>{item.category}</Category>
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
    background-image: ${(props) =>
        props.file === ''
            ? 'url("/imgs/profilebg.jpg")'
            : `url(${URL.createObjectURL(props.file)})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 300px;
`;

const ShowInputFile = styled.label`
    font-size: 20px;
    color: gray;
    float: right;
    display: flex;
    align-items: center;
    margin: 10px;
    border: 1px dotted gray;
    border-radius: 10px;
    padding: 5px 15px;
    cursor: pointer;
    transition: all 250ms ease-out;
    &:hover {
        color: black;
        border: 1px solid black;
    }
`;

const FileText = styled.span`
    font-size: 14px;
`;

const InputFile = styled.input`
    display: none;
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
    color: grey;

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
