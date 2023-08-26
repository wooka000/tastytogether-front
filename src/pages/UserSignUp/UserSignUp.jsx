import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from '../../utils/axios';

export default function UserSignUp() {
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
                    console.log(response);
                    alert(response.data.message);
                    item === 'email'
                        ? setEmailCheck((prev) => !prev)
                        : setNicknameCheck((prev) => !prev);
                } catch (err) {
                    alert(err.response.data.message);
                }
            } else {
                item === 'email'
                    ? alert('이메일 양식이 맞지 않습니다.')
                    : alert('닉네임은 최대 8글자 이하이어야 합니다.');
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
    };

    const signUp = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            !isValidEmail
                ? alert('이메일 양식이 맞지 않습니다.')
                : !isValidPassword
                ? alert('비밀번호는 영문 대소문자와 숫자를 포함해 최소 8글자 이상이어야 합니다')
                : !isValidName
                ? alert('비밀번호가 일치하지 않습니다.')
                : !emailCheck
                ? alert('이름은 한글로만 구성되고 최대 5글자여야 합니다.')
                : !isValidNickname
                ? alert('닉네임은 최대 8글자 이하이어야 합니다.')
                : password !== passwordCheck
                ? alert('이메일 중복검사를 수행하세요.')
                : !nicknameCheck
                ? alert('닉네임 중복검사를 수행하세요.')
                : signUpHandler();
        } catch (err) {
            alert('회원가입을 실패하였습니다. 다시 시도해주세요.');
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
                                        <IsValid>이메일 양식이 맞지 않습니다.</IsValid>
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
                                        <IsValid>
                                            비밀번호는 영문 대소문자와 숫자를 포함해 최소 8글자
                                            이상이어야 합니다
                                        </IsValid>
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
                                {/* 별도의 일치 확인 버튼 제거, 바로 오류 문구 */}
                                <div>
                                    {password.length > 0 &&
                                        passwordCheck.length > 0 &&
                                        password !== passwordCheck && (
                                            <IsValid>비밀번호가 일치하지 않습니다.</IsValid>
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
                                {name.length > 0 && !isValidName && (
                                    <IsValid>
                                        이름은 한글로만 구성되고 최대 5글자여야 합니다.
                                    </IsValid>
                                )}
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
                                        <IsValid>닉네임은 최대 8글자 이하이어야 합니다.</IsValid>
                                    )}
                                </div>
                                <DuplicateCheckButton item="nickname" value={nickname} />
                            </section>
                        </li>
                    </ul>
                    <button type="submit">회원가입</button>
                </form>
                <div>로그인 페이지로 이동</div>
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
