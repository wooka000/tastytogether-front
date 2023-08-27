import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';

export default function Board() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();
    const { countperpage, pageno } = useParams();

    useEffect(() => {
        fetchPosts();
    }, [countperpage, pageno]);

    const fetchPosts = async () => {
        try {
            let response;

            if (text) {
                response = await axios.get(`http://localhost:8080/posts/regionSearch?value=${text}`);
            } else {
                response = await axios.get(`http://localhost:8080/posts/?countperpage=${countperpage}&pageno=${pageno}`);
            }

            const responseData = response.data;

            setPosts(responseData.data);
            setCurrentPage(responseData.currentPage);
            setTotalPages(responseData.totalPages);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPosts();
    };

    const handlePostClick = (postId) => {
        navigate(`/post/${postId}`);
    };

    return (
        <Container>
            <BannerBox>
                <img src="/imgs/logo2.png" alt="logo" />
                <Link to="/post/create">
                    <button>작성하기</button>
                </Link>
            </BannerBox>
            <MainWrapper>
                <FindText> &quot;혼밥 메이트를 찾고 있어요.&quot;</FindText>
                <SearchForm onSubmit={handleSubmit}>
                    <SubmitBtn>
                        <FiSearch />
                    </SubmitBtn>
                    <SearchInput
                        type="search"
                        name="search"
                        id="search"
                        placeholder="지역검색"
                        value={text}
                        onChange={handleChange}
                    />
                </SearchForm>
                <StyledBoxWrapper>
                    {posts.map((post) => (
                        <StyledBox key={post._id} onClick={() => handlePostClick(post._id)}>
                            <StyledBoxImageWrapper>
                                <StyledBoxImage src={post.image[0]} alt="Post" />
                            </StyledBoxImageWrapper>
                            <PostInfo>
                                <PostInfoText>{post.region}</PostInfoText>
                                <PostInfoText>{post.title}</PostInfoText>
                                <PostInfoText>{post.meetDate}</PostInfoText>
                            </PostInfo>
                        </StyledBox>
                    ))}
                </StyledBoxWrapper>
                <Pagination>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <PageNumber key={index} selected={index + 1 === currentPage}>
                            <Link to={`/posts/?countperpage=${countperpage}&pageno=${index + 1}`}>
                                {index + 1}
                            </Link>
                        </PageNumber>
                    ))}
                </Pagination>
            </MainWrapper>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
`;
const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FindText = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    width: 600px;
    height: 44px;
    color: #000;
    font-family: Inter;
    font-size: 50px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;

const BannerBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 100%;
    height: 200px;
    background-color: #ff914d;
    position: relative;
    & img {
        display: block;
        margin: auto;
        max-width: 100%;
        max-height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    & button {
        margin-right: 20px;
        padding: 10px 30px;
        border-radius: 30px;
        background-color: transparent;
        color: #ffff;
        font-weight: 600;
        cursor: pointer;
        border: 2px solid #ffff;
        outline: none;
        font-size: 20px;
        position: absolute;
        bottom: 20px;
        right: 20px;
        transition: all 250ms ease-out;
        &:hover {
            background-color: #ffff;
            color: orange;
        }
    }
`;
const SearchForm = styled.form`
margin-left: 300px;
align-self: flex-start;
border-radius :30px ;
background-color :#ffff ;
width :250px ;
height :50px ;
margin-top: 20px;
`;
const SubmitBtn = styled.button`
    border: none;
    outline: none;
    font-size: 24px;
    background-color: transparent;
    color: grey;
`;
const SearchInput = styled.input`
    font-size: 20px;
    padding: 10px;
    width: 70%;
    border: none;
    outline: none;
    background-color: transparent;
    &::placeholder {
        font-weight: bold;
    }
`;

const StyledBoxImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    cursor: pointer;
`;

const StyledBoxImage = styled.img`
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-out;
`;

const PostInfo = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    transform: translateY(100%);
    transition: transform 0.3s ease-out;
    ${StyledBoxImageWrapper}:hover & {
        transform: translateY(0);
    }
`;

const PostInfoText = styled.p`
    margin: 4px 0;
    font-size: 14px;
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const PageNumber = styled.div`
    margin: 0 5px;
    padding: 5px 10px;
    background-color: ${({ selected }) => (selected ? '#FF914D' : '#FFF')};
    color: ${({ selected }) => (selected ? '#FFF' : '#000')};
    border-radius: 5px;
    cursor: pointer;
`;
const StyledBoxWrapper =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 1550px;
    height: 600px;
    margin: 30px 90px 206px;
    border-radius: 30px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
const StyledBox = styled.div`
    width: 260px;
    height: 40%;
    border-radius: 30px;
`;
