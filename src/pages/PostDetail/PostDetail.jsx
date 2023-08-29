import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    const fetchPostDetail = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/posts/${id}`);
            setPost(response.data);
        } catch (error) {
            console.error('Error fetching post details:', error);
        }
    };

    const fetchPostDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/posts/${id}`);
            alert('게시글이 성공적으로 삭제되었습니다.');
            window.location.href = "/post"; // 리다이렉트
        } catch (error) {
            console.error('Error deleting post:', error);
            alert('게시글을 삭제하는데 실패했습니다.');
        }
    };

    const handleDelete = () => {
        const isConfirmed = window.confirm('정말로 이 게시글을 삭제하시겠습니까?');
        if (isConfirmed) {
            fetchPostDelete();
        }
    };

    useEffect(() => {
        fetchPostDetail();
    }, [id]);

    return (
        <Container>
            <DetailPost>
                <PostHeader>
                    <TitleBox>
                        <h3 className="title">{post ? post.board.title : 'Loading...'}😋</h3>
                    </TitleBox>
                    <SetBoard>
                        <UserBox>
                            <span className="nickName">
                                {post ? post.board.userId.nickname : 'Loading...'}
                            </span>
                            <span className="createdAt">
                                {post ? post.board.createdAt : 'Loading...'}
                            </span>
                        </UserBox>
                        <ButtonBox>
                            <LinkButton to="/post" className="boardList">
                                목록조회
                            </LinkButton>
                            <button className="boardDelete" onClick={handleDelete}>
                                삭제하기
                            </button>
                        </ButtonBox>
                    </SetBoard>
                </PostHeader>
                <IconBox>
                    <ImageBox>
                        <FoodImage src={post ? post.board.image : 'Loading...'} alt="음식사진" />
                    </ImageBox>
                    <ThreeIcon>
                        <RegionBox>
                            <FaMapMarkerAlt />
                            <p>
                                지역:
                                <span className="region">
                                    {post ? post.board.region : 'Loading...'}
                                </span>
                            </p>
                        </RegionBox>
                        <DateBox>
                            <FaRegCalendarAlt />
                            <p>
                                약속일자:
                                <span className="meetDate">
                                    {post ? post.board.meetDate : 'Loading...'}
                                </span>
                            </p>
                        </DateBox>
                        <ContentBox>
                            <p className="content">{post ? post.board.content : 'Loading...'}</p>
                        </ContentBox>
                    </ThreeIcon>
                </IconBox>
            </DetailPost>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    margin-top: 6%;
`;

const DetailPost = styled.div`
    border-radius: 15px;
    width: 1000px;
    height: 1100px;
    background-color: #fff;
    border: 1px solid #ff9c5f;
    margin: auto;
`;
const PostHeader = styled.div``;
const SetBoard = styled.div`
    background-color: #ff9c5f;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #ff9c5f;
    padding: 0px 40px 20px 40px;
    font-size: 20px;
`;
const TitleBox = styled.div`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #ff9c5f;
    display: flex;
    justify-content: flex-start;
    padding: 60px 20px 30px 40px;
    align-content: center;
    > h3 {
        font-size: 33px;
    }
`;
const ButtonBox = styled.div`
    > button {
        border: none;
        background-color: transparent;
        padding-right: 20px;
        font-size: 22px;
        font-weight: bold;
        color: white;
    }
`;
const LinkButton = styled(Link)`
    border: none;
    background-color: transparent;
    padding-right: 20px;
    font-size: 22px;
    font-weight: bold;
    color: white;
`;
const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 40px;
`;
const IconBox = styled.div`
    display: flex;
    width: auto;
    height: 400px;
    border-bottom: 2px solid #ff9c5f;
`;
const ThreeIcon = styled.div`
    display: flex;
    flex-direction: column;

    width: 500px;
    > div {
        display: flex;
    }
    p {
        padding-left: 10px;
        font-size: 22px;
        font-style: Bold;
        padding: 5px;
        > span {
            padding: 10px;
        }
    }
`;
const RegionBox = styled.div`
    display: flex;
    align-items: center;
    width: 350px;
    height: 80px;
`;
const DateBox = styled.div`
    display: flex;
    align-items: center;
    width: 350px;
    height: 80px;
`;
const ContentBox = styled.div`
    display: flex;
    width: 350px;
    height: 300px;
`;
const FoodImage = styled.img`
    border-radius: 15px;
`;
const UserBox = styled.div`
    > span {
        padding-right: 10px;
    }
`;
