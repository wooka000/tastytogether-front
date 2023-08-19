import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import StoreDetail from './pages/StoreDetail';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import UserEdit from './pages/UserEdit';
import MyBoard from './pages/MyBoard';
import StoreLike from './pages/StoreLike';
import MyReview from './pages/MyReview';
import BoardLike from './pages/BoardLike';
import Board from './pages/Board';
import CreatePost from './pages/CreatePost';
import PostUpdate from './pages/PostUpdate';
import PostDetail from './pages/PostDetail';
import CreateReview from './pages/CreateReview';
import StoreRegister from './pages/StoreRegister';
import SearchResult from './pages/SearchResult';
import StoreDetailEdit from './pages/StoreDetailEdit';
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
            { path: '/mypage/:userId/edit', element: <UserEdit /> }, // 환욱
            { path: '/mypage/:userId/board', element: <MyBoard /> }, // 환욱
            { path: '/mypage/:userId/storelike', element: <StoreLike /> }, // 환욱
            { path: '/mypage/:userId/review', element: <MyReview /> }, // 환욱
            { path: '/mypage/:userId/like', element: <BoardLike /> }, // 환욱
            { path: '/post', element: <Board /> }, // 화경
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
