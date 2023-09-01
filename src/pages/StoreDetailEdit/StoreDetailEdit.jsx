import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style/StoreDetailEdit.style';
import useAxios from '../../hooks/useAxios';
import { isValidPhoneNumber, isValidHour, isvalidMinute } from '../../utils/regList';

export default function StoreDetailEdit() {
    const { authRequiredAxios } = useAxios('application/json');
    const location = useLocation();
    const navigate = useNavigate();
    const [newPhone, setNewPhone] = useState('');
    const [newPriceRange, setNewPriceRange] = useState('');
    const [newClosedDays, setNewClosedDays] = useState('');
    const [newParkingInfo, setNewParkingInfo] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [newBusinessHours, setNewBusinessHours] = useState(['', '', '', '']);
    const [newMenuItems, setNewMenuItems] = useState([
        { name: '', price: '' },
        { name: '', price: '' },
        { name: '', price: '' },
    ]);
    const storeId = location.state.storeId;

    const dayCheckList = ['월', '화', '수', '목', '금', '토', '일', '연중무휴'];

    const handleChange = (e) => {
        const { name, value, id } = e.target;
        if (name === 'newPhone') {
            setNewPhone(value);
        }
        if (name === 'newPriceRange') {
            setNewPriceRange(value);
        }
        if (name === 'newParkingInfo') {
            setNewParkingInfo(value);
        }
        if (name === 'newBusinessHours') {
            if (id === 'openHour') {
                setNewBusinessHours((prevHours) => [
                    value,
                    prevHours[1],
                    prevHours[2],
                    prevHours[3],
                ]);
            } else if (id === 'openMinutes') {
                setNewBusinessHours((prevHours) => [
                    prevHours[0],
                    value,
                    prevHours[2],
                    prevHours[3],
                ]);
            } else if (id === 'closeHour') {
                setNewBusinessHours((prevHours) => [
                    prevHours[0],
                    prevHours[1],
                    value,
                    prevHours[3],
                ]);
            } else if (id === 'closeMinutes') {
                setNewBusinessHours((prevHours) => [
                    prevHours[0],
                    prevHours[1],
                    prevHours[2],
                    value,
                ]);
            }
        }
        if (/^(name|price)/i.test(name)) {
            const index = /\d/.exec(name)[0] - 1;
            const property = /[a-z]+/i.exec(name)[0];
            setNewMenuItems((prev) => {
                const newMenuItems = [...prev];
                newMenuItems[index][property] = value;
                return newMenuItems;
            });
        }
    };

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
        } else if (newClosedDays[0] === '연중무휴') {
            setNewClosedDays([]);
        }
        checkedDayHandler(value, e.target.checked);
    };

    const handleSubmit = async (e) => {
        const isFullMenuItems = newMenuItems.filter((el) => el.name !== '' && el.price !== '');
        e.preventDefault();
        if (
            !newClosedDays ||
            !newPhone ||
            !newPriceRange ||
            !newParkingInfo ||
            newBusinessHours.includes('') ||
            isFullMenuItems.length !== 3
        ) {
            alert('입력하지 않은 값이 존재합니다.');
            return;
        }
        if (!isValidPhoneNumber(newPhone)) {
            alert('전화번호 형식이 일치하지 않습니다.');
            return;
        }
        if (!isValidHour(newBusinessHours[0], newBusinessHours[2])) {
            alert('시간 형식에 맞게 작성해주세요.');
            return;
        }
        if (!isvalidMinute(newBusinessHours[1], newBusinessHours[3])) {
            alert('분 형식에 맞게 작성해주세요.');
            return;
        }

        const sortedDayList = newClosedDays.sort(
            (a, b) => dayCheckList.indexOf(a) - dayCheckList.indexOf(b),
        );
        setNewClosedDays(sortedDayList);

        const response = await authRequiredAxios({
            method: 'patch',
            url: `/stores/${storeId}`,
            data: {
                newPhone,
                newMenuItems,
                newPriceRange,
                newParkingInfo,
                newBusinessHours,
                newClosedDays,
            },
        });
        if (response.status === 200) {
            alert('가게 정보 수정이 완료되었습니다.');
            navigate(`/stores/detail/${storeId}`);
        }
    };

    return (
        <S.Container>
            <S.DetailEditForm>
                <S.EditContentBox>
                    <S.EditTitle>전화번호</S.EditTitle>
                    <S.InputBox
                        placeholder="가게의 전화번호를 입력하세요.(0000-0000-0000)"
                        isPhone={true}
                        name="newPhone"
                        value={newPhone ?? ''}
                        onChange={handleChange}
                    />
                </S.EditContentBox>
                <S.EditContentBox>
                    <S.EditTitle>가격대</S.EditTitle>
                    <div>
                        <S.InputLabel htmlFor="radio1">
                            1만원대
                            <S.RadioInput
                                id="radio1"
                                name="newPriceRange"
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
                                name="newPriceRange"
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
                                name="newPriceRange"
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
                                name="newPriceRange"
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
                                name="newPriceRange"
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
                            <S.RadioInput
                                id="freePark"
                                name="newParkingInfo"
                                type="radio"
                                value="무료주차 가능"
                                onChange={handleChange}
                            />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="paidPark">
                            유료주차 가능
                            <S.RadioInput
                                id="paidPark"
                                name="newParkingInfo"
                                type="radio"
                                value="유료주차 가능"
                                onChange={handleChange}
                            />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="nonePark">
                            주차 불가
                            <S.RadioInput
                                id="nonePark"
                                name="newParkingInfo"
                                type="radio"
                                value="주차 불가"
                                onChange={handleChange}
                            />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                    </div>
                </S.EditContentBox>
                <S.EditContentBox isSmallGap={true}>
                    <S.EditTitle>영업시간</S.EditTitle>
                    <div>
                        <S.InputLabel htmlFor="openHour">
                            오전
                            <S.TimeInput
                                id="openHour"
                                name="newBusinessHours"
                                placeholder="00"
                                type="number"
                                onChange={handleChange}
                            />
                            시
                        </S.InputLabel>
                        <S.InputLabel htmlFor="openMinutes">
                            <S.TimeInput
                                id="openMinutes"
                                name="newBusinessHours"
                                placeholder="00"
                                type="number"
                                onChange={handleChange}
                            />
                            분 ~
                        </S.InputLabel>
                        <S.InputLabel htmlFor="closeHour">
                            오후
                            <S.TimeInput
                                id="closeHour"
                                name="newBusinessHours"
                                placeholder="00"
                                type="number"
                                onChange={handleChange}
                            />
                            시
                        </S.InputLabel>
                        <S.InputLabel htmlFor="closeMinutes">
                            <S.TimeInput
                                id="closeMinutes"
                                name="newBusinessHours"
                                placeholder="00"
                                type="number"
                                onChange={handleChange}
                            />
                            분
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
                            <thead>
                                <tr>
                                    <S.ChartHead scope="col" isLeft={true}>
                                        대표 메뉴
                                    </S.ChartHead>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <S.ChartContent>
                                        <S.ChartInput
                                            type="text"
                                            placeholder="-"
                                            name="name1"
                                            onChange={handleChange}
                                        />
                                    </S.ChartContent>
                                </tr>
                                <tr>
                                    <S.ChartContent>
                                        <S.ChartInput
                                            type="text"
                                            placeholder="-"
                                            name="name2"
                                            onChange={handleChange}
                                        />
                                    </S.ChartContent>
                                </tr>
                                <tr>
                                    <S.ChartContent>
                                        <S.ChartInput
                                            type="text"
                                            placeholder="-"
                                            name="name3"
                                            onChange={handleChange}
                                        />
                                    </S.ChartContent>
                                </tr>
                            </tbody>
                        </S.MenuNameChart>
                        <S.MenuNameChart>
                            <thead>
                                <tr>
                                    <S.ChartHead scope="col">가격</S.ChartHead>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <S.ChartContent>
                                        <S.ChartInput
                                            type="number"
                                            placeholder="-"
                                            name="price1"
                                            onChange={handleChange}
                                        />
                                        원
                                    </S.ChartContent>
                                </tr>
                                <tr>
                                    <S.ChartContent>
                                        <S.ChartInput
                                            type="number"
                                            placeholder="-"
                                            name="price2"
                                            onChange={handleChange}
                                        />
                                        원
                                    </S.ChartContent>
                                </tr>
                                <tr>
                                    <S.ChartContent>
                                        <S.ChartInput
                                            type="number"
                                            placeholder="-"
                                            name="price3"
                                            onChange={handleChange}
                                        />
                                        원
                                    </S.ChartContent>
                                </tr>
                            </tbody>
                        </S.MenuNameChart>
                    </div>
                </S.EditContentBox>
                <S.DividerLine></S.DividerLine>
                <S.EditFormBtns>
                    <S.EditFormBtn type="button" isOrange={true} onClick={handleSubmit}>
                        수정하기
                    </S.EditFormBtn>
                    <S.EditFormBtn
                        type="button"
                        onClick={() => {
                            navigate(`/stores/detail/${storeId}`);
                        }}
                    >
                        취소하기
                    </S.EditFormBtn>
                </S.EditFormBtns>
            </S.DetailEditForm>
        </S.Container>
    );
}
