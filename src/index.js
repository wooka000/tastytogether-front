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

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, path: '/', element: <Main /> },
            { path: '/review/:storeId', element: <CreateReview /> },
            { path: '/stores/detail/:storeId', element: <StoreDetail /> },
            { path: '/users/login', element: <UserLogin /> },
            { path: '/users/signup', element: <UserSignUp /> },
            { path: '/mypage/:userId/edit', element: <UserEdit /> },
            { path: '/mypage/:userId/board', element: <MyBoard /> },
            { path: '/mypage/:userId/storelike', element: <StoreLike /> },
            { path: '/mypage/:userId/review', element: <MyReview /> },
            { path: '/mypage/:userId/like', element: <BoardLike /> },
            { path: '/post', element: <Board /> },
            { path: '/post/update', element: <PostUpdate /> },
            { path: '/post/create', element: <CreatePost /> },
            { path: '/post/:id', element: <PostDetail /> },
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
