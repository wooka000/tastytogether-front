import React, { useState } from 'react';
import styled from 'styled-components';
// import axios from '../api/axios';

export default function UserSignUp() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();

    const [nickname, setNickname] = useState();
    const [name, setName] = useState();

    // //정규표현식 일치
    // // const [isValidEmail, setIsValidEmail] = useState(false);
    // // const [isValidPassword, setIsValidPassword] = useState(false);
    // // const [isValid, setIsValidPassword] = useState(false);
    // // const [isValidPassword, setIsValidPassword] = useState(false);

    // const DuplicateCheckButton = ({ item, value }) => {
    //     const checkHandler = async () => {
    //         try {
    //             const response = await axios.post({
    //                 url: `http://localhost:8080/auth/${item}`,
    //                 data: JSON.stringify(value),
    //             });

    //             alert(response.data.message);
    //         } catch (err) {
    //             console.log(err.message);
    //         }
    //     };

    //     return (
    //         <button name={item} onClick={checkHandler}>
    //             중복 확인
    //         </button>
    //     );
    // };

    // const signUpHandler = async (e) => {
    //     e.preventDefault();
    //     await axios.post({
    //         url: 'http://localhost:8080/auth/signup',
    //         data: {},
    //     });
    //     console.log(email, password, nickname, name);
    // };

    // useEffect(() => {
    //     const emailRegex =
    //         /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    //     const passwordREGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    //     //5글자 이하로 수정
    //     const nameREGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{,5}$/;
    //     const nicknameREGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{,5}$/;

    //     //아래 경고 글자 뜨도록 Boolean 값
    //     setIsValidEmail(emailRegex.test(email));
    //     setIsValidPassword(passwordREGEX.test(password));
    // }, [email, password]);

    return (
        <Container>
            <div>
                <h2>tasty Together</h2>
                <h1>Sign Up</h1>
                <form
                    onSubmit={() => {
                        console.log('hello');
                    }}
                >
                    <ul>
                        <li>
                            <section>
                                <label htmlFor="email">
                                    <input
                                        id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </label>
                                <div>이메일 양식이 맞지 않습니다.</div>
                                {/* <DuplicateCheckButton item="email" value={email} /> */}
                            </section>
                        </li>
                        <li>
                            <section>
                                <label htmlFor="password">
                                    <input
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={[password]}
                                    />
                                </label>
                                <div>비밀번호는 최소 8글자 이상이어야 합니다.</div>
                            </section>
                        </li>
                        <li>
                            <section>
                                <label htmlFor="passwordCheck">
                                    <input
                                        id="passwordCheck"
                                        onChange={(e) => setPasswordCheck(e.target.value)}
                                        value={passwordCheck}
                                    />
                                </label>
                                {/* 별도의 일치 확인 버튼 제거, 바로 오류 문구 */}
                                <div>비밀번호 일치하지 않습니다.</div>
                            </section>
                        </li>
                        <li>
                            <label htmlFor="name">
                                <input
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </label>
                        </li>
                        <li>
                            <section>
                                <label htmlFor="nickname">
                                    <input
                                        id="nickname"
                                        onChange={(e) => setNickname(e.target.value)}
                                        value={nickname}
                                    />
                                </label>
                                <div>닉네임은 최대 5글자 이하이어야 합니다.</div>
                                {/* <DuplicateCheckButton item="nickname" value={nickname} /> */}
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
