import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SignUpBox = styled.div`
    width: 500px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--color-accent);
    position: relative;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    font-size: 15px;
`;

export const Logo = styled.img`
    width: 100px;
    position: absolute;
    top: -50px;
`;

export const Form = styled.form`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 20px;

    ul {
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    li {
        position: relative;

        label {
            font-size: 13px;
            display: block;
            margin-bottom: 4px;
            font-weight: bold;
        }

        input {
            padding-left: 2px;
            border: none;
            border-bottom: 1px solid var(--color-accent);
            font-size: 14px;
            width: 300px;
            height: 30px;

            display: block;
            background-color: white;

            &:hover {
                outline: none;
                border-bottom: 2px solid var(--color-accent);
            }
            &:focus {
                outline: none;
                border-bottom: 2px solid var(--color-accent);
            }
        }

        button {
            width: 60px;
            font-size: 10px;
            font-weight: 400;
            position: absolute;
            top: 2px;
            right: 0px;
            height: 15px;
            border: none;
            border-radius: 5px;
            outline: 1px solid rgba(255, 145, 77);
            background-color: white;

            &:hover {
                background-color: rgba(255, 145, 77, 0.7);
                transition: 0.1s;
                color: white;
                outline: white;
            }
        }

        div {
            height: 30px;
            position: absolute;
            width: 350px;
        }
    }
`;

export const IsValid = styled.span`
    color: red;
    font-size: 10px;
`;

export const EmailDuplicateCheckResult = styled.span`
    color: ${({ emailCheck }) => (emailCheck ? 'green' : 'red')};
    font-size: 10px;
`;

export const NicknameDuplicateCheckResult = styled.span`
    color: ${({ nicknameCheck }) => (nicknameCheck ? 'green' : 'red')};
    font-size: 10px;
`;

export const Button = styled.button`
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
`;
export const LinkToLogin = styled(Link)`
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
    font-weight: bold;
    display: inline-block;
    position: absolute;
    bottom: 15px;
`;
