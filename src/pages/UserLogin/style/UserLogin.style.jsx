import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--color-accent);
    position: relative;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    font-size: 20px;
`;

export const Logo = styled.img`
    width: 100px;
    position: absolute;
    top: -50px;
`;

export const Form = styled.form`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 20px;

    li {
        input {
            padding-left: 10px;
            border: 1px solid var(--color-accent);
            font-size: 17px;
            width: 300px;
            height: 50px;
            border-radius: 10px;
            display: block;
            background-color: white;

            &:hover {
                outline: 1px solid var(--color-accent);
                background-color: white;
            }
            &:focus {
                outline: 1px solid var(--color-accent);
                background-color: white;
            }
        }
    }

    li:last-child {
        margin-top: 20px;
    }
    button {
        height: 50px;
        background-color: rgba(255, 145, 77, 0.7);
        border: none;
        border-radius: 10px;
        font-size: 17px;
        color: white;
        font-weight: bold;
        display: block;

        transition: 0.1s;
        &:hover {
            background-color: rgba(255, 145, 77);
            transition: 0.3s;
        }
    }
`;

export const LinkToSignUp = styled(Link)`
    width: 300px;
    height: 50px;
    background-color: rgba(160, 160, 160, 0.7);
    border: none;
    border-radius: 10px;
    font-size: 17px;
    color: white;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    &:hover {
        background-color: rgba(160, 160, 160);
        transition: 0.3s;
    }
`;

export const ErrorMsg = styled.span`
    color: red;
    font-size: 13px;
    font-weight: 500;
    display: inline-block;
    position: absolute;
    bottom: 15px;
`;
