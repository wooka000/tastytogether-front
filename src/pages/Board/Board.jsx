import React, { useState, useEffect } from 'react';
import * as S from './style/Board.style';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';

export default function Board() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();
    const { countperpage = 10, pageno = 1 } = useParams(); 

    useEffect(() => {
        fetchPosts();
    }, [countperpage, pageno]);

    const fetchPosts = async () => {
        try {
            let response;

            if (text) {
                response = await axios.get(`http://localhost:8080/regionSearch?value=${text}`);
            } else {
                response = await axios.get(`http://localhost:8080/posts/?countperpage=${countperpage}&pageno=${pageno}`);
            }

            const responseData = response.data;
              console.log("API Response:", responseData);

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
        <S.Container>
            <S.BannerBox>
                <img src="/imgs/logo2.png" alt="logo" />
                <Link to="/post/create">
                    <button>작성하기</button>
                </Link>
            </S.BannerBox>
            <S.MainWrapper>
                <S.FindText> &quot;혼밥 메이트를 찾고 있어요.&quot;</S.FindText>
                <S.SearchForm onSubmit={handleSubmit}>
                    <S.SubmitBtn>
                        <FiSearch />
                    </S.SubmitBtn>
                    <S.SearchInput
                        type="search"
                        name="search"
                        id="search"
                        placeholder="지역검색"
                        value={text}
                        onChange={handleChange}
                    />
                </S.SearchForm>
                <S.StyledBoxWrapper>
                    {posts.map((post) => (
                        <S.StyledBox key={post._id} onClick={() => handlePostClick(post._id)}>
                            <S.StyledBoxImageWrapper>
                                <S.StyledBoxImage src={post.image[0]} alt="Post" />
                            </S.StyledBoxImageWrapper>
                            <S.PostInfo>
                                <S.PostInfoText>{post.region}</S.PostInfoText>
                                <S.PostInfoText>{post.title}</S.PostInfoText>
                                <S.PostInfoText>{post.meetDate}</S.PostInfoText>
                            </S.PostInfo>
                        </S.StyledBox>
                    ))}
                </S.StyledBoxWrapper>
                <S.Pagination>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <S.PageNumber key={index} selected={index + 1 === currentPage}>
                          <Link to={`/posts/?countperpage=10&pageno=${index + 1}`}>
                                {index + 1}
                            </Link>
                        </S.PageNumber>
                    ))}
                </S.Pagination>
            </S.MainWrapper>
        </S.Container>
    );
}
