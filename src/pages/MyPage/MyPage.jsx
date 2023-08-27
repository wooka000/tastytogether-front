import React, { useState } from 'react';
import * as S from './style/MyPage.style';
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
        <S.Container>
            {modalOpen && <MyProfileEdit setModalOpen={setModalOpen}></MyProfileEdit>}
            <S.ProfileBg file={bgFile ? bgFile : ''}>
                <S.ShowInputFile htmlFor="file">
                    <BiImageAdd />
                    <S.FileText>배경 사진 변경</S.FileText>
                </S.ShowInputFile>
                <S.InputFile
                    type="file"
                    name="file"
                    id="file"
                    accept="image/*"
                    onChange={handleChange}
                />
            </S.ProfileBg>
            <S.ProfileBox>
                <S.EditBtn onClick={() => setModalOpen(true)}>프로필 수정</S.EditBtn>
                <S.Info>
                    <S.Img src="/imgs/profile.png" alt="profile" />
                    <S.Text>
                        <S.Name>김망고</S.Name>
                        <S.Description>안녕하세요 정직한 리뷰만 달고 있습니다~</S.Description>
                    </S.Text>
                </S.Info>
                <S.Menu>
                    {tabList.map((item, index) => {
                        return (
                            <S.MenuBtn
                                key={index}
                                onClick={() => setTab(item.category)}
                                active={tab === item.category ? 'active' : ''}
                            >
                                <S.Category>{item.category}</S.Category>
                            </S.MenuBtn>
                        );
                    })}
                </S.Menu>
            </S.ProfileBox>
            {tabComponent[tab]}
        </S.Container>
    );
}
