import React, { useState } from 'react';
import * as S from './style/CreateReview.style';
import { AiOutlinePlus } from 'react-icons/ai';

export default function CreateReview() {
    const [review, setReview] = useState({});
    const [fileList, setFileList] = useState([]);
    const [count, setCount] = useState(0);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            if (count > 7) {
                return;
            }
            setCount((prev) => prev + 1);
            files[0] && setFileList((list) => [...list, files[0]]);
            return;
        }
        setReview((review) => ({ ...review, [name]: value }));
    };

    const handleReset = () => {
        setReview({});
        setFileList([]);
        setCount(0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!review.grade) {
            alert('평점 아이콘을 눌러주세요!');
            return;
        }
        console.log(review, fileList);
    };

    const handleRemove = (e) => {
        console.log(e.target);
    };

    return (
        <S.Container>
            <S.ReviewCard>
                <S.Title>
                    <S.Name>맘스터치 건대로데오점</S.Name>에 대한 솔직한 리뷰를 써주세요.
                </S.Title>
                <S.Form onSubmit={handleSubmit}>
                    <S.GradeList>
                        <S.GradeItem ischecked={review.grade === '5' ? 'yes' : 'no'}>
                            <S.RadioBtn
                                type="radio"
                                id="good"
                                name="grade"
                                value="5"
                                onChange={handleChange}
                            />
                            <S.Label htmlFor="good">
                                <S.LabelImg src="/imgs/good.png" alt="good" />
                                <S.LabelText>good</S.LabelText>
                            </S.Label>
                        </S.GradeItem>
                        <S.GradeItem ischecked={review.grade === '3' ? 'yes' : 'no'}>
                            <S.RadioBtn
                                type="radio"
                                id="soso"
                                name="grade"
                                value="3"
                                onChange={handleChange}
                            />
                            <S.Label htmlFor="soso">
                                <S.LabelImg src="/imgs/soso.png" alt="soso" />
                                <S.LabelText>soso</S.LabelText>
                            </S.Label>
                        </S.GradeItem>
                        <S.GradeItem ischecked={review.grade === '1' ? 'yes' : 'no'}>
                            <S.RadioBtn
                                type="radio"
                                id="bad"
                                name="grade"
                                value="1"
                                onChange={handleChange}
                            />
                            <S.Label htmlFor="bad">
                                <S.LabelImg src="/imgs/bad.png" alt="bad" />
                                <S.LabelText>bad</S.LabelText>
                            </S.Label>
                        </S.GradeItem>
                    </S.GradeList>
                    <S.Content
                        name="content"
                        id="content"
                        cols="30"
                        rows="10"
                        placeholder="회원님, 주문하신 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!"
                        value={review.content ?? ''}
                        onChange={handleChange}
                    ></S.Content>
                    <S.Files>
                        {fileList &&
                            fileList.map((filed, index) => {
                                return (
                                    <S.Preview key={index}>
                                        <S.PreviewImg
                                            src={URL.createObjectURL(filed)}
                                            alt="prev"
                                            data-key={index}
                                        />
                                        <S.RemoveBtn type="button" onClick={handleRemove}>
                                            x
                                        </S.RemoveBtn>
                                    </S.Preview>
                                );
                            })}
                        <S.ShowFile count={count} htmlFor="file">
                            <S.ShowText count={count}>
                                <AiOutlinePlus />
                            </S.ShowText>
                            <S.Count>{count}/8</S.Count>
                        </S.ShowFile>
                        <S.File
                            type="file"
                            name="file"
                            id="file"
                            onChange={handleChange}
                            accept="image/*"
                            multiple
                            disabled={count > 7 ? true : false}
                        />
                    </S.Files>
                    <S.Btns>
                        <S.ResetBtn type="reset" onClick={handleReset}>
                            다시쓰기
                        </S.ResetBtn>
                        <S.SubmitBtn type="submit">리뷰 등록하기</S.SubmitBtn>
                    </S.Btns>
                </S.Form>
            </S.ReviewCard>
        </S.Container>
    );
}
