import React, { useEffect, useState } from 'react';
import * as S from './style/MyPage.style';
import MyBoard from '../../components/MyPage/MyBoard';
import MyReview from '../../components/MyPage/MyReview';
import MyBookmark from '../../components/MyPage/MyBookmark';
import MyProfileEdit from '../../components/MyPage/MyProfileEdit';
import useAxios from '../../hooks/useAxios';

export default function MyPage() {
    const { authRequiredAxios } = useAxios('application/json');
    const [tab, setTab] = useState('게시글');
    const tabList = [{ category: '게시글' }, { category: '리뷰' }, { category: '북마크' }];
    const [user, setUser] = useState({});
    const tabComponent = {
        게시글: <MyBoard />,
        리뷰: <MyReview />,
        북마크: <MyBookmark />,
    };

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            const res = await authRequiredAxios({
                method: 'get',
                url: '/user',
            });
            const data = await res.data;
            setUser(data);
        };
        getUser();
    }, [modalOpen]);
    const { profileImage, nickname, profileText, coverImage } = user;
    return (
        <S.Container>
            {modalOpen && <MyProfileEdit setModalOpen={setModalOpen} user={user}></MyProfileEdit>}
            {coverImage ? (
                <S.ProfileBg bg={coverImage}></S.ProfileBg>
            ) : (
                <S.ProfileBg bg={''}></S.ProfileBg>
            )}
            <S.ProfileBox>
                <S.EditBtn onClick={() => setModalOpen(true)}>프로필 수정</S.EditBtn>
                <S.Info>
                    <S.Img src={profileImage} alt="profile" />
                    <S.Text>
                        <S.Name>{nickname}</S.Name>
                        <S.Description>{profileText}</S.Description>
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
