import { React } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as S from './style/Social.style';
// import RequireLogin from './components/RequireLogin/RequireLogin';
// import MyPage from '../MyPage/MyPage';

const Social = () => {
    const navigate = useNavigate();
    // 필터 결과 안내창
    // 소셜페이지 이동(로그인 필요)???????
    // const router = createBrowserRouter([
    //     {
    //         path: '/',
    //         element: <App />,
    //         errorElement: <NotFound />,
    //         children: [
    //             { index: true, path: '/', element: <Main /> }, 
    //             {
    //                 path: '/mypage/:id',
    //                 element: (
    //                     <RequireLogin>
    //                         <MyPage />
    //                     </RequireLogin>
    //                 ),
    //             }, 
    // ]}])
        // 소셜필터 페이지 이동 기능???
        const handleLikedStoresClick = () =>{
            navigate('/user/store/likes');
          }
          const handleReviewedStoresClick = () =>{
            navigate('/user/reviews');
          }

    return (
        <S.Social>
            <S.MyFilterTitle>
                <S.Square></S.Square>
                <h2>소셜</h2>
            </S.MyFilterTitle>
            <S.MyFilterContent>
                {/* 마이페이지로 이동하는 기능 추가 */}
                    <div onClick={handleLikedStoresClick}>
                        <img src="/imgs/add.png" alt="" />
                        <h3>내가 찜한 가게</h3>
                    </div>
                    <div onClick={handleReviewedStoresClick}>
                        <img src="/imgs/add.png" alt="" />
                        <h3>내가 리뷰한 가게</h3>
                    </div>
            </S.MyFilterContent>
        </S.Social>
    )
}

export default Social;