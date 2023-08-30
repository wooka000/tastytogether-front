import React, {  } from 'react';
import * as S from './style/StoreDetailEdit.style';

export default function StoreDetailEdit() {
    // const { authRequiredAxios } = useAxios('application/json');
    // const [phone, setPhone] = useState("")
    //  const [phone, setPhone] = useState("")
    //  const [phone, setPhone] = useState("")
    //  const [phone, setPhone] = useState("")
    //  const [phone, setPhone] = useState("")
    // const handleSubmit = async () => {
    //     const formData = new FormData();
    //     formData.append('region', region);
    //     formData.append('title', title);
    //     formData.append('content', content);
    //     formData.append('meetDate', date);

    //     try {
    //         await authRequiredAxios.post('/posts', formData);
    //         alert('게시글이 성공적으로 생성되었습니다!');
    //         window.location.href = '/post';
    //     } catch (error) {
    //         alert('게시글 생성에 실패했습니다.');
    //         console.error(error);
    //     }
    // };

    return (
        <S.Container>
            <S.DetailEditForm>
                <S.EditContentBox>
                    <S.EditTitle>전화번호</S.EditTitle>
                    <S.InputBox placeholder="02-0000-0000" isPhone={true} />
                </S.EditContentBox>
                <S.EditContentBox>
                    <S.EditTitle>가격대</S.EditTitle>
                    <div>
                        <S.InputLabel htmlFor="radio1">
                            1만원대
                            <S.RadioInput id="radio1" name="priceInfo" type="radio"></S.RadioInput>
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="radio2">
                            2만원대
                            <S.RadioInput id="radio2" name="priceInfo" type="radio" />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="radio3">
                            3만원대
                            <S.RadioInput id="radio3" name="priceInfo" type="radio" />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="radio4">
                            4만원대
                            <S.RadioInput id="radio4" name="priceInfo" type="radio" />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="radio5">
                            기타
                            <S.RadioInput id="radio5" name="priceInfo" type="radio" />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                    </div>
                </S.EditContentBox>
                <S.EditContentBox>
                    <S.EditTitle>주차</S.EditTitle>
                    <div>
                        <S.InputLabel htmlFor="freePark">
                            무료주차 가능
                            <S.RadioInput id="freePark" name="parkInfo" type="radio" />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="paidPark">
                            유료주차 가능
                            <S.RadioInput id="paidPark" name="parkInfo" type="radio" />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="nonePark">
                            주차 불가
                            <S.RadioInput id="nonePark" name="parkInfo" type="radio" />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                    </div>
                </S.EditContentBox>
                <S.EditContentBox isSmallGap={true}>
                    <S.EditTitle>영업시간</S.EditTitle>
                    <div>
                        <S.InputLabel htmlFor="openHour">
                            <S.TimeInput id="openHour" />시
                        </S.InputLabel>
                        <S.InputLabel htmlFor="openMinutes">
                            <S.TimeInput id="openMinutes" />분 ~
                        </S.InputLabel>
                        <S.InputLabel htmlFor="closeHour">
                            <S.TimeInput id="closeHour" />시
                        </S.InputLabel>
                        <S.InputLabel htmlFor="closeMinutes">
                            <S.TimeInput id="closeMinutes" />분
                        </S.InputLabel>
                    </div>
                </S.EditContentBox>
                <S.EditContentBox>
                    <S.EditTitle>휴무일</S.EditTitle>
                    <div>
                        <S.InputLabel htmlFor="monday">
                            <S.ClosedDayInput id="monday" name="closedDays" type="checkbox" />
                            <S.ClosedDayDesign></S.ClosedDayDesign>월
                        </S.InputLabel>
                        <S.InputLabel htmlFor="tuesday">
                            <S.ClosedDayInput id="tuesday" name="closedDays" type="checkbox" />
                            <S.ClosedDayDesign></S.ClosedDayDesign>화
                        </S.InputLabel>
                        <S.InputLabel htmlFor="wednesday">
                            <S.ClosedDayInput id="wednesday" name="closedDays" type="checkbox" />
                            <S.ClosedDayDesign></S.ClosedDayDesign>수
                        </S.InputLabel>
                        <S.InputLabel htmlFor="thursday">
                            <S.ClosedDayInput id="thursday" name="closedDays" type="checkbox" />
                            <S.ClosedDayDesign></S.ClosedDayDesign>목
                        </S.InputLabel>
                        <S.InputLabel htmlFor="friday">
                            <S.ClosedDayInput id="friday" name="closedDays" type="checkbox" />
                            <S.ClosedDayDesign></S.ClosedDayDesign>금
                        </S.InputLabel>
                        <S.InputLabel htmlFor="saturday">
                            <S.ClosedDayInput id="saturday" name="closedDays" type="checkbox" />
                            <S.ClosedDayDesign></S.ClosedDayDesign>토
                        </S.InputLabel>
                        <S.InputLabel htmlFor="sunday">
                            <S.ClosedDayInput id="sunday" name="closedDays" type="checkbox" />
                            <S.ClosedDayDesign></S.ClosedDayDesign>일
                        </S.InputLabel>
                        <S.InputLabel htmlFor="allDay">
                            <S.ClosedDayInput id="allDay" name="closedDays" type="checkbox" />
                            <S.ClosedDayDesign></S.ClosedDayDesign>연중무휴
                        </S.InputLabel>
                    </div>
                </S.EditContentBox>
                <S.EditContentBox isSmallGap={true}>
                    <S.EditTitle>대표 메뉴</S.EditTitle>
                    <div>
                        <S.MenuNameChart>
                            <tr>
                                <S.ChartHead scope="col" isLeft={true}>
                                    대표 메뉴
                                </S.ChartHead>
                            </tr>
                            <tr>
                                <S.ChartContent>
                                    <S.ChartInput type="text" placeholder="-" />
                                </S.ChartContent>
                            </tr>
                            <tr>
                                <S.ChartContent>
                                    <S.ChartInput type="text" placeholder="-" />
                                </S.ChartContent>
                            </tr>
                            <tr>
                                <S.ChartContent>
                                    <S.ChartInput type="text" placeholder="-" />
                                </S.ChartContent>
                            </tr>
                        </S.MenuNameChart>
                        <S.MenuNameChart>
                            <tr>
                                <S.ChartHead scope="col">가격</S.ChartHead>
                            </tr>
                            <tr>
                                <S.ChartContent>
                                    <S.ChartInput type="text" placeholder="-" />원
                                </S.ChartContent>
                            </tr>
                            <tr>
                                <S.ChartContent>
                                    <S.ChartInput type="text" placeholder="-" />원
                                </S.ChartContent>
                            </tr>
                            <tr>
                                <S.ChartContent>
                                    <S.ChartInput type="text" placeholder="-" />원
                                </S.ChartContent>
                            </tr>
                        </S.MenuNameChart>
                    </div>
                </S.EditContentBox>
                <S.DividerLine></S.DividerLine>
                <S.EditFormBtns>
                    <S.EditFormBtn isOrange={true} >
                        수정하기
                    </S.EditFormBtn>
                    <S.EditFormBtn>취소하기</S.EditFormBtn>
                </S.EditFormBtns>
            </S.DetailEditForm>
        </S.Container>
    );
}

// 가격대에서 기타 가격대 칸을 눌렀을 때 다른 라디오 버튼 선택이 풀려야 함
// 입력 값을 잘못 입력하면 오류를 뱉어야 함
