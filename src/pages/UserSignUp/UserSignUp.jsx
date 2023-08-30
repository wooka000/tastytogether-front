import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './style/UserSignUp.style';
import axios from '../../utils/axios';

export default function UserSignUp() {
    const navigate = useNavigate();
    const location = useLocation();

    //Input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const [errMsg, setErrMsg] = useState('');

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
    const [emailCheckResult, setEmailCheckResult] = useState();
    const [nicknameCheckResult, setNicknameCheckResult] = useState();

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

                    item === 'email'
                        ? setEmailCheckResult(response.data.message)
                        : setNicknameCheckResult(response.data.message);

                    item === 'email' ? setEmailCheck(true) : setNicknameCheck(true);
                } catch (err) {
                    item === 'email'
                        ? setEmailCheckResult(err.response.data.message)
                        : setNicknameCheckResult(err.response.data.message);
                }
            } else {
                item === 'email'
                    ? setEmailCheckResult(ERROR_EMAIL)
                    : setNicknameCheckResult(ERROR_NICKNAME);
            }
        };
        return (
            <button type="button" name={item} onClick={duplicateCheck}>
                중복 확인
            </button>
        );
    };

    const signUpHandler = async () => {
        await axios({
            method: 'post',
            url: '/auth/signup',
            headers: { 'Content-Type': 'application/json' },
            data: { email, password, name, nickname },
        });

        navigate('/users/login', { state: { email, from: location.pathname } });
    };

    const signUp = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            !isValidEmail
                ? setErrMsg(ERROR_EMAIL)
                : !emailCheck
                ? setErrMsg(ERROR_EMAILCHECK)
                : !isValidPassword
                ? setErrMsg(ERROR_PASSWORD)
                : password !== passwordCheck
                ? setErrMsg(ERROR_PASSWORDCHECK)
                : !isValidName
                ? setErrMsg(ERROR_NAME)
                : !isValidNickname
                ? setErrMsg(ERROR_NICKNAME)
                : !nicknameCheck
                ? setErrMsg(ERROR_NICKNAMECHECK)
                : signUpHandler();
        } catch (err) {
            setErrMsg(err.response.data.message);
        }
    };

    return (
        <S.Container>
            <S.SignUpBox>
                <S.Logo
                    src="https://tasty-together.s3.ap-northeast-2.amazonaws.com/main/default-profile-image.png"
                    alt="logo"
                />
                <h1>Sign Up</h1>
                <S.Form onSubmit={signUp}>
                    <ul>
                        <li>
                            <label htmlFor="email"> 이메일(ID) </label>

                            <input
                                id="email"
                                type="text"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailCheckResult('');
                                    setEmailCheck(false);
                                }}
                                value={email}
                            />

                            <div>
                                {(email.length > 0 && !isValidEmail && (
                                    <S.IsValid>{ERROR_EMAIL}</S.IsValid>
                                )) || (
                                    <S.EmailDuplicateCheckResult emailCheck={emailCheck}>
                                        {emailCheckResult}
                                    </S.EmailDuplicateCheckResult>
                                )}
                            </div>

                            <DuplicateCheckButton item="email" value={email} />
                        </li>
                        <li>
                            <label htmlFor="password"> 비밀번호 </label>

                            <input
                                id="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />

                            <div>
                                {password.length > 0 && !isValidPassword && (
                                    <S.IsValid>{ERROR_PASSWORD}</S.IsValid>
                                )}
                            </div>
                        </li>
                        <li>
                            <label htmlFor="passwordCheck"> 비밀번호 확인 </label>

                            <input
                                id="passwordCheck"
                                type="password"
                                onChange={(e) => setPasswordCheck(e.target.value)}
                                value={passwordCheck}
                            />

                            <div>
                                {password.length > 0 &&
                                    passwordCheck.length > 0 &&
                                    password !== passwordCheck && (
                                        <S.IsValid>{ERROR_PASSWORDCHECK}</S.IsValid>
                                    )}
                            </div>
                        </li>
                        <li>
                            <label htmlFor="name"> 이름</label>

                            <input
                                id="name"
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />

                            <div>
                                {name.length > 0 && !isValidName && (
                                    <S.IsValid>{ERROR_NAME}</S.IsValid>
                                )}
                            </div>
                        </li>
                        <li>
                            <label htmlFor="nickname">닉네임</label>
                            <input
                                id="nickname"
                                type="text"
                                onChange={(e) => {
                                    setNickname(e.target.value);
                                    setNicknameCheckResult('');
                                    setNicknameCheck(false);
                                }}
                                value={nickname}
                            />
                            <div>
                                {(nickname.length > 0 && !isValidNickname && (
                                    <S.IsValid nicknameCheckResult={nicknameCheckResult}>
                                        {ERROR_NICKNAME}
                                    </S.IsValid>
                                )) || (
                                    <S.NicknameDuplicateCheckResult nicknameCheck={nicknameCheck}>
                                        {nicknameCheckResult}
                                    </S.NicknameDuplicateCheckResult>
                                )}
                            </div>

                            <DuplicateCheckButton item="nickname" value={nickname} />
                        </li>
                    </ul>
                    <S.Button type="submit">회원가입</S.Button>
                </S.Form>
                <S.LinkToLogin to="/users/login" state={{ from: '/users/signup' }}>
                    로그인 페이지로 이동
                </S.LinkToLogin>
                <S.ErrorMsg>{errMsg}</S.ErrorMsg>
            </S.SignUpBox>
        </S.Container>
    );
}
