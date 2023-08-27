import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../utils/axios';

export default function UserSignUp() {
    const navigate = useNavigate();

    //Input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    //Regex
    const EMAIL_REGEX =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    const NAME_REGEX = /^(?!$)[가-힣]{1,5}$/;
    const NICKNAME_REGEX = /^.{1,8}$/;

    //CONSTANT

    const ERROR_EMAIL = '이메일 양식이 맞지 않습니다.';
    const ERROR_PASSWORD = '비밀번호는 영문 대소문자와 숫자를 포함해 최소 8글자 이상이어야 합니다';
    const ERROR_NAME = '이름은 한글로만 구성되고 최대 5글자여야 합니다.';
    const ERROR_NICKNAME = '닉네임은 최대 8글자 이하이어야 합니다.';
    const ERROR_PASSWORDCHECK = '비밀번호가 일치하지 않습니다.';
    const ERROR_EMAILCHECK = '이메일 중복검사를 수행하세요.';
    const ERROR_NICKNAMECHECK = '닉네임 중복검사를 수행하세요.';

    //Input Valid Check
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isValidName, setIsValidName] = useState(false);
    const [isValidNickname, setIsValidNickname] = useState(false);

    useEffect(() => {
        setIsValidEmail(EMAIL_REGEX.test(email));
        setIsValidPassword(PASSWORD_REGEX.test(password));
        setIsValidName(NAME_REGEX.test(name));
        setIsValidNickname(NICKNAME_REGEX.test(nickname));
    }, [email, password, name, nickname]);

    //Check duplicate check
    const [emailCheck, setEmailCheck] = useState(false);
    const [nicknameCheck, setNicknameCheck] = useState(false);

    const DuplicateCheckButton = ({ item, value }) => {
        const duplicateCheck = async (e) => {
            e.stopPropagation();

            if (item === 'email' ? isValidEmail : isValidNickname) {
                try {
                    const response = await axios({
                        method: 'post',
                        url: `/auth/${item}`,
                        data: { [item]: value },
                    });

                    alert(response.data.message);
                    item === 'email'
                        ? setEmailCheck((prev) => !prev)
                        : setNicknameCheck((prev) => !prev);
                } catch (err) {
                    alert(err.response.data.message);
                }
            } else {
                item === 'email' ? alert(ERROR_EMAIL) : alert(ERROR_NICKNAME);
            }
        };
        return (
            <button
                type="button"
                name={item}
                onClick={duplicateCheck}
                disabled={item === 'email' ? emailCheck : nicknameCheck}
            >
                중복 확인
            </button>
        );
    };

    const signUpHandler = async () => {
        const response = await axios({
            method: 'post',
            url: '/auth/signup',
            headers: { 'Content-Type': 'application/json' },
            data: { email, password, name, nickname },
        });
        alert(response.data.message);
        navigate('/users/login', { state: { email }, replace: true });
    };

    const signUp = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            !isValidEmail
                ? alert(ERROR_EMAIL)
                : !emailCheck
                ? alert(ERROR_EMAILCHECK)
                : !isValidPassword
                ? alert(ERROR_PASSWORD)
                : password !== passwordCheck
                ? alert(ERROR_PASSWORDCHECK)
                : !isValidName
                ? alert(ERROR_NAME)
                : !isValidNickname
                ? alert(ERROR_NICKNAME)
                : !nicknameCheck
                ? alert(ERROR_NICKNAMECHECK)
                : signUpHandler();
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    return (
        <Container>
            <div>
                <h2>tasty Together</h2>
                <h1>Sign Up</h1>
                <form onSubmit={signUp}>
                    <ul>
                        <li>
                            <section>
                                <label htmlFor="email">
                                    이메일(ID)
                                    <input
                                        id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        disabled={emailCheck}
                                    />
                                </label>
                                <div>
                                    {email.length > 0 && !isValidEmail && (
                                        <IsValid>{ERROR_EMAIL}</IsValid>
                                    )}
                                </div>
                                <DuplicateCheckButton item="email" value={email} />
                            </section>
                        </li>
                        <li>
                            <section>
                                <label htmlFor="password">
                                    비밀번호
                                    <input
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </label>
                                <div>
                                    {password.length > 0 && !isValidPassword && (
                                        <IsValid>{ERROR_PASSWORD}</IsValid>
                                    )}
                                </div>
                            </section>
                        </li>
                        <li>
                            <section>
                                <label htmlFor="passwordCheck">
                                    비밀번호 확인
                                    <input
                                        id="passwordCheck"
                                        onChange={(e) => setPasswordCheck(e.target.value)}
                                        value={passwordCheck}
                                    />
                                </label>

                                <div>
                                    {password.length > 0 &&
                                        passwordCheck.length > 0 &&
                                        password !== passwordCheck && (
                                            <IsValid>{ERROR_PASSWORDCHECK}</IsValid>
                                        )}
                                </div>
                            </section>
                        </li>
                        <li>
                            <label htmlFor="name">
                                이름
                                <input
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </label>
                            <div>
                                {name.length > 0 && !isValidName && <IsValid>{ERROR_NAME}</IsValid>}
                            </div>
                        </li>
                        <li>
                            <section>
                                <label htmlFor="nickname">
                                    닉네임
                                    <input
                                        id="nickname"
                                        onChange={(e) => setNickname(e.target.value)}
                                        value={nickname}
                                        disabled={nicknameCheck}
                                    />
                                </label>
                                <div>
                                    {nickname.length > 0 && !isValidNickname && (
                                        <IsValid>{ERROR_NICKNAME}</IsValid>
                                    )}
                                </div>
                                <DuplicateCheckButton item="nickname" value={nickname} />
                            </section>
                        </li>
                    </ul>
                    <button type="submit">회원가입</button>
                </form>
                <Link to="/users/login" replace={true}>
                    로그인 페이지로 이동
                </Link>
            </div>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const IsValid = styled.span`
    color: red;
    font-size: 10px;
`;
