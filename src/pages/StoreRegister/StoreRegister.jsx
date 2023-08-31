import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style/StoreRegister.style';
import useAxios from '../../hooks/useAxios';
import { isValidPhoneNumber, isValidHour, isvalidMinute } from '../../utils/regList';
import DaumPost from '../../components/storeRegister/DaumPost';
import TypeModalButton from '../../components/storeRegister/TypeModalButton';
import StoreImage from '../../components/storeRegister/StoreImage';

export default function StoreDetailEdit() {
    const { authRequiredAxios } = useAxios('application/json');
    const navigate = useNavigate();
    const [storeInfo, setStoreInfo] = useState({});
    const [type, setType] = useState("");
    const [phone, setphone] = useState('');
    const [priceRange, setpriceRange] = useState('');
    const [ClosedDays, setClosedDays] = useState('');
    const [parkingInfo, setparkingInfo] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [BusinessHours, setBusinessHours] = useState(['', '', '', '']);
    const [MenuItems, setMenuItems] = useState([
        { name: '', price: '' },
        { name: '', price: '' },
        { name: '', price: '' },
    ]);
    const [banners, setBanners] = useState([]);

    const dayCheckList = ['월', '화', '수', '목', '금', '토', '일', '연중무휴'];

    const handleChange = (e) => {
        const { name, value, id } = e.target;
        if (name === 'phone') {
            setphone(value);
        }
        if (name === 'priceRange') {
            setpriceRange(value);
        }
        if (name === 'parkingInfo') {
            setparkingInfo(value);
        }
        if (name === 'BusinessHours') {
            if (id === 'openHour') {
                setBusinessHours((prevHours) => [value, prevHours[1], prevHours[2], prevHours[3]]);
            } else if (id === 'openMinutes') {
                setBusinessHours((prevHours) => [prevHours[0], value, prevHours[2], prevHours[3]]);
            } else if (id === 'closeHour') {
                setBusinessHours((prevHours) => [prevHours[0], prevHours[1], value, prevHours[3]]);
            } else if (id === 'closeMinutes') {
                setBusinessHours((prevHours) => [prevHours[0], prevHours[1], prevHours[2], value]);
            }
        }
        if (/^(name|price)/i.test(name)) {
            const index = /\d/.exec(name)[0] - 1;
            const property = /[a-z]+/i.exec(name)[0];
            setMenuItems((prev) => {
                const MenuItems = [...prev];
                MenuItems[index][property] = value;
                return MenuItems;
            });
        }
    };

    const checkedDayHandler = (value, isChecked) => {
        if (isChecked) {
            setClosedDays((prev) => [...prev, value]);
            return;
        }
        if (!isChecked && ClosedDays.includes(value)) {
            setClosedDays(ClosedDays.filter((day) => day !== value));
            return;
        }
        return;
    };

    const checkHandler = (e, value) => {
        setIsChecked(!isChecked);
        if (value === '연중무휴') {
            if (e.target.checked) {
                setClosedDays([]);
            }
        } else if (ClosedDays[0] === '연중무휴') {
            setClosedDays([]);
        }
        checkedDayHandler(value, e.target.checked);
    };

    const handleSubmit = async (e) => {
        // const isFullMenuItems = MenuItems.filter((el) => el.name !== '' && el.price !== '');
        // e.preventDefault();
        // if (
        //     !ClosedDays ||
        //     !phone ||
        //     !priceRange ||
        //     !parkingInfo ||
        //     BusinessHours.includes('') ||
        //     isFullMenuItems.length !== 3
        // ) {
        //     alert('입력하지 않은 값이 존재합니다.');
        //     return;
        // }
        // if (!isValidPhoneNumber(phone)) {
        //     alert('전화번호 형식이 일치하지 않습니다.');
        //     return;
        // }
        // if (!isValidHour(BusinessHours[0], BusinessHours[2])) {
        //     alert('시간 형식에 맞게 작성해주세요.');
        //     return;
        // }
        // if (!isvalidMinute(BusinessHours[1], BusinessHours[3])) {
        //     alert('분 형식에 맞게 작성해주세요.');
        //     return;
        // }

        // const sortedDayList = ClosedDays.sort(
        //     (a, b) => dayCheckList.indexOf(a) - dayCheckList.indexOf(b),
        // );
        // setClosedDays(sortedDayList);
        console.log(type);
        console.log(banners);

        //     const response = await authRequiredAxios({
        //         method: 'patch',
        //         url: `/stores/${storeId}`,
        //         data: {
        //             phone,
        //             MenuItems,
        //             priceRange,
        //             parkingInfo,
        //             BusinessHours,
        //             ClosedDays,
        //         },
        //     });
        //     if (response.status === 200) {
        //         alert('가게 정보 수정이 완료되었습니다.');
        //         navigate(`/stores/detail/${storeId}`);
        //     }
    };

    return (
        <S.Container>
            <S.DetailEditForm>
                <S.EditContentBox>
                    <DaumPost setStoreInfo={setStoreInfo} />
                </S.EditContentBox>
                <S.EditContentBox>
                    <TypeModalButton setType={setType} />
                </S.EditContentBox>
                <S.EditContentBox>
                    <S.EditTitle>전화번호</S.EditTitle>
                    <S.InputBox
                        placeholder="가게의 전화번호를 입력하세요.(0000-0000-0000)"
                        isphone={true}
                        name="phone"
                        value={phone ?? ''}
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
                        <S.InputLabel htmlFor="freepark">
                            무료주차 가능
                            <S.RadioInput
                                id="freepark"
                                name="parkingInfo"
                                type="radio"
                                value="무료주차 가능"
                                onChange={handleChange}
                            />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="paidpark">
                            유료주차 가능
                            <S.RadioInput
                                id="paidpark"
                                name="parkingInfo"
                                type="radio"
                                value="유료주차 가능"
                                onChange={handleChange}
                            />
                            <S.RadioDesign></S.RadioDesign>
                        </S.InputLabel>
                        <S.InputLabel htmlFor="nonepark">
                            주차 불가
                            <S.RadioInput
                                id="nonepark"
                                name="parkingInfo"
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
                                name="BusinessHours"
                                placeholder="00"
                                type="number"
                                onChange={handleChange}
                            />
                            시
                        </S.InputLabel>
                        <S.InputLabel htmlFor="openMinutes">
                            <S.TimeInput
                                id="openMinutes"
                                name="BusinessHours"
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
                                name="BusinessHours"
                                placeholder="00"
                                type="number"
                                onChange={handleChange}
                            />
                            시
                        </S.InputLabel>
                        <S.InputLabel htmlFor="closeMinutes">
                            <S.TimeInput
                                id="closeMinutes"
                                name="BusinessHours"
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
                                        checked={ClosedDays.includes(el)}
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
                        </S.MenuNameChart>
                        <S.MenuNameChart>
                            <tr>
                                <S.ChartHead scope="col">가격</S.ChartHead>
                            </tr>
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
                        </S.MenuNameChart>
                    </div>
                    <S.EditFormBtn>
                        <StoreImage setBanners={setBanners} />
                    </S.EditFormBtn>
                </S.EditContentBox>
                <S.DividerLine></S.DividerLine>
                <S.EditFormBtns>
                    <S.EditFormBtn type="button" onClick={handleSubmit}>
                        수정하기
                    </S.EditFormBtn>
                    <S.EditFormBtn>취소하기</S.EditFormBtn>
                </S.EditFormBtns>
            </S.DetailEditForm>
        </S.Container>
    );
}
