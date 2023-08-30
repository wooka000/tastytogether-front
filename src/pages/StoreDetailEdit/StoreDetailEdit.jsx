import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import * as S from './style/StoreDetailEdit.style';
// import useAxios from '../../hooks/useAxios';

export default function StoreDetailEdit() {
    // const { authRequiredAxios } = useAxios('application/json');
    const [newClosedDays, setNewClosedDays] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    // const location = useLocation();
    const dayCheckList = ['월', '화', '수', '목', '금', '토','일', '연중무휴'];

    // const storeId = location.state.storeId;

    const checkedDayHandler = (value, isChecked) => {
        if (isChecked) {
            setNewClosedDays((prev) => [...prev, value]);
            return;
        }
        if (!isChecked && newClosedDays.includes(value)) {
            setNewClosedDays(newClosedDays.filter((day) => day !== value));
            return;
        }
        return;
    };

    const checkHandler = (e, value) => {
        setIsChecked(!isChecked);
        if (value === '연중무휴') {
            if (e.target.checked) {
                setNewClosedDays([]);
            }
        } else {
            checkedDayHandler(value, e.target.checked);
        }
    };
    console.log(newClosedDays);
    return (
        <S.Container>
            <S.DetailEditForm>
                <S.EditContentBox>
                    <S.EditTitle>전화번호</S.EditTitle>
                    <S.InputBox
                        placeholder="가게의 전화번호를 입력하세요.(0000-0000-0000)"
                        isPhone={true}
                        name="phone"
                    />
                </S.EditContentBox>
                <S.EditContentBox>
                    <S.EditTitle>가격대</S.EditTitle>
                    <div>
                        <S.InputLabel htmlFor="radio1">
                            1만원대
                            <S.RadioInput
                                id="radio1"
                                name="priceRange"
                                type="radio"
                                value="1만원대"
                            ></S.RadioInput>
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="radio2">
                            2만원대
                            <S.RadioInput
                                id="radio2"
                                name="priceRange"
                                type="radio"
                                value="2만원대"
                            />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="radio3">
                            3만원대
                            <S.RadioInput
                                id="radio3"
                                name="priceRange"
                                type="radio"
                                value="3만원대"
                            />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="radio4">
                            4만원대
                            <S.RadioInput
                                id="radio4"
                                name="priceRange"
                                type="radio"
                                value="4만원대"
                            />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="radio5">
                            기타
                            <S.RadioInput id="radio5" name="priceRange" type="radio" value="기타" />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                    </div>
                </S.EditContentBox>
                <S.EditContentBox>
                    <S.EditTitle>주차</S.EditTitle>
                    <div>
                        <S.InputLabel htmlFor="freePark">
                            무료주차 가능
                            <S.RadioInput id="freePark" name="parkingInfo" type="radio" />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="paidPark">
                            유료주차 가능
                            <S.RadioInput id="paidPark" name="parkingInfo" type="radio" />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="nonePark">
                            주차 불가
                            <S.RadioInput id="nonePark" name="parkingInfo" type="radio" />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                    </div>
                </S.EditContentBox>
                <S.EditContentBox isSmallGap={true}>
                    <S.EditTitle>영업시간</S.EditTitle>
                    <div>
                        <S.InputLabel htmlFor="openHour">
                            오전
                            <S.TimeInput id="openHour" name="openHour" type="number" />시
                        </S.InputLabel>
                        <S.InputLabel htmlFor="openMinutes">
                            <S.TimeInput id="openMinutes" name="openMinutes" type="number" />분 ~
                        </S.InputLabel>
                        <S.InputLabel htmlFor="closeHour">
                            오후
                            <S.TimeInput id="closeHour" name="closeHour" type="number" />시
                        </S.InputLabel>
                        <S.InputLabel htmlFor="closeMinutes">
                            <S.TimeInput id="closeMinutes" name="closeMinutes" type="number" />분
                        </S.InputLabel>
                    </div>
                </S.EditContentBox>
                <S.EditContentBox>
                    <S.EditTitle>휴무일</S.EditTitle>
                    <div>
                        {dayCheckList.map((el, idx) => {
                            return (
                                <S.InputLabel htmlFor={el} key={idx}>
                                    <S.ClosedDayInput
                                        id={el}
                                        name="closedDays"
                                        checked={newClosedDays.includes(el)}
                                        onChange={(e) => checkHandler(e, el)}
                                        type="checkbox"
                                    />
                                    <S.ClosedDayDesign></S.ClosedDayDesign>
                                    {el}
                                </S.InputLabel>
                            );
                        })}
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
                    <S.EditFormBtn isOrange={true}>수정하기</S.EditFormBtn>
                    <S.EditFormBtn>취소하기</S.EditFormBtn>
                </S.EditFormBtns>
            </S.DetailEditForm>
        </S.Container>
    );
}

// 가격대에서 기타 가격대 칸을 눌렀을 때 다른 라디오 버튼 선택이 풀려야 함
// 입력 값을 잘못 입력하면 오류를 뱉어야 함
