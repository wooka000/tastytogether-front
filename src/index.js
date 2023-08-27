import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Main from './pages/Main/Main';
import StoreDetail from './pages/StoreDetail/StoreDetail';
import UserLogin from './pages/UserLogin/UserLogin';
import UserSignUp from './pages/UserSignUp/UserSignUp';
import UserEdit from './pages/UserEdit/UserEdit';
import MyBoard from './pages/MyBoard/MyBoard';
import StoreLike from './pages/StoreLike/StoreLike';
import MyReview from './pages/MyReview/MyReview';
import BoardLike from './pages/BoardLike/BoardLike';
import Board from './pages/Board/Board';
import CreatePost from './pages/CreatePost/CreatePost';
import PostUpdate from './pages/PostUpdate/PostUpdate';
import PostDetail from './pages/PostDetail/PostDetail';
import CreateReview from './pages/CreateReview/CreateReview';
import StoreRegister from './pages/StoreRegister/StoreRegister';
import SearchResult from './pages/SearchResult/SearchResult';
import StoreDetailEdit from './pages/StoreDetailEdit/StoreDetailEdit';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, path: '/', element: <Main /> }, // 진규
            { path: '/review/:storeId', element: <CreateReview /> }, // 진규
            { path: '/stores/detail/:storeId', element: <StoreDetail /> }, // 수연
            { path: '/stores/detail/edit', element: <StoreDetailEdit /> }, // 수연
            { path: '/users/login', element: <UserLogin /> }, // 윤렬
            { path: '/users/signup', element: <UserSignUp /> }, // 윤렬
            { path: '/mypage/:userId/edit', element: <UserEdit /> }, // 진규
            { path: '/mypage/:userId/board', element: <MyBoard /> }, // 진규
            { path: '/mypage/:userId/storelike', element: <StoreLike /> }, // 진규
            { path: '/mypage/:userId/review', element: <MyReview /> }, // 진규
            { path: '/mypage/:userId/like', element: <BoardLike /> }, // 진규
            { path: '/post', element: <Board /> }, // 화경
            { path: '/post/countperpage/:countperpage/pageno/:pageno', element: <Board /> },
            { path: '/post/create', element: <CreatePost /> }, // 화경
            { path: '/post/update', element: <PostUpdate /> }, // 화경
            { path: '/post/:id', element: <PostDetail /> }, // 화경
            { path: '/stores/register', element: <StoreRegister /> }, // 혜지
            { path: '/stores/search', element: <SearchResult /> }, // 혜지
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

reportWebVitals();
