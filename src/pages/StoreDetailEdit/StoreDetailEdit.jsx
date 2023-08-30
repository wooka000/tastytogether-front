import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style/StoreDetailEdit.style';
import useAxios from '../../hooks/useAxios';

export default function StoreDetailEdit() {
    const { authRequiredAxios } = useAxios('application/json');
    const [newPhone, setNewPhone] = useState('');
    const [newMenuItems, setNewMenuItmes] = useState([]);
    const [newPriceRange, setNewPriceRange] = useState('');
    const [newParkingInfo, setNewParkingInfo] = useState('');
    const [newBusinessHours, setNewBusinessHours] = useState('');
    const [newClosedDays, setNewClosedDays] = useState('');
    const location = useLocation();
    const dayCheckList = ['월', '화', '수', '목', '금', '토', '연중무휴'];
    const storeId = location.state.storeId;

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'file') {
            if (count > 7) {
                return;
            }
            setCount((prev) => prev + 1);
            files[0] && setPhotos((list) => [...list, files[0]]);
            return;
        } else if (name === 'grade') {
            setGrade(value);
        } else if (name === 'content') {
            setContent(value);
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await authRequiredAxios({
                method: 'post',
                url: `stores/${storeId}`,
                data: {},
            });
            console.log(response);
        } catch (error) {
            alert('가게 수정에 실패했습니다.');
            console.error(error);
        }
    };

    return (
        <S.Container>
            <S.DetailEditForm>
                <S.EditContentBox>
                    <S.EditTitle>전화번호</S.EditTitle>
                    <S.InputBox
                        placeholder="02-0000-0000"
                        isPhone={true}
                        name="phone"
                        value={phone ?? ''}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="radio5">
                            기타
                            <S.RadioInput
                                id="radio5"
                                name="priceRange"
                                type="radio"
                                value="기타"
                                onChange={handleChange}
                            />
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
                            <S.TimeInput id="openHour" name="openHour" value={openHour ?? ''} />시
                        </S.InputLabel>
                        <S.InputLabel htmlFor="openMinutes">
                            <S.TimeInput
                                id="openMinutes"
                                name="openMinutes"
                                value={openMinutes ?? ''}
                            />
                            분 ~
                        </S.InputLabel>
                        <S.InputLabel htmlFor="closeHour">
                            <S.TimeInput id="closeHour" name="closeHour" value={closeHour ?? ''} />
                            시
                        </S.InputLabel>
                        <S.InputLabel htmlFor="closeMinutes">
                            <S.TimeInput
                                id="closeMinutes"
                                name="closeMinutes"
                                value={closeMinutes ?? ''}
                            />
                            분
                        </S.InputLabel>
                    </div>
                </S.EditContentBox>
                <S.EditContentBox>
                    <S.EditTitle>휴무일</S.EditTitle>
                    <div>
                        {dayCheckList.map((el) => {
                            return (
                                <S.InputLabel htmlFor="monday">
                                    <S.ClosedDayInput
                                        id="monday"
                                        name="closedDays"
                                        value="월"
                                        type="checkbox"
                                    />
                                    <S.ClosedDayDesign></S.ClosedDayDesign>월
                                </S.InputLabel>
                            );
                        })}

                        <S.InputLabel htmlFor="tuesday">
                            <S.ClosedDayInput
                                id="tuesday"
                                name="closedDays"
                                value="화"
                                type="checkbox"
                            />
                            <S.ClosedDayDesign></S.ClosedDayDesign>화
                        </S.InputLabel>
                        <S.InputLabel htmlFor="wednesday">
                            <S.ClosedDayInput
                                id="wednesday"
                                name="closedDays"
                                value="수"
                                type="checkbox"
                            />
                            <S.ClosedDayDesign></S.ClosedDayDesign>수
                        </S.InputLabel>
                        <S.InputLabel htmlFor="thursday">
                            <S.ClosedDayInput
                                id="thursday"
                                name="closedDays"
                                value="목"
                                type="checkbox"
                            />
                            <S.ClosedDayDesign></S.ClosedDayDesign>목
                        </S.InputLabel>
                        <S.InputLabel htmlFor="friday">
                            <S.ClosedDayInput
                                id="friday"
                                name="closedDays"
                                value="금"
                                type="checkbox"
                            />
                            <S.ClosedDayDesign></S.ClosedDayDesign>금
                        </S.InputLabel>
                        <S.InputLabel htmlFor="saturday">
                            <S.ClosedDayInput
                                id="saturday"
                                name="closedDays"
                                value="토"
                                type="checkbox"
                            />
                            <S.ClosedDayDesign></S.ClosedDayDesign>토
                        </S.InputLabel>
                        <S.InputLabel htmlFor="sunday">
                            <S.ClosedDayInput
                                id="sunday"
                                name="closedDays"
                                value="일"
                                type="checkbox"
                            />
                            <S.ClosedDayDesign></S.ClosedDayDesign>일
                        </S.InputLabel>
                        <S.InputLabel htmlFor="allDay">
                            <S.ClosedDayInput
                                id="allDay"
                                name="closedDays"
                                value="연중무휴"
                                type="checkbox"
                            />
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
                    <S.EditFormBtn isOrange={true} onClick={handleSubmit}>
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
