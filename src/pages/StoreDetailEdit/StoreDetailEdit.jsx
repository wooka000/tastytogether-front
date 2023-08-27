import React from 'react';
import styled from 'styled-components';

export default function StoreDetailEdit() {
    return (
        <Container>
            <DetailEditForm>
                <EditContentBox>
                    <EditTitle>전화번호</EditTitle>
                    <InputBox placeholder="02-0000-0000" isPhone={true} />
                </EditContentBox>
                <EditContentBox>
                    <EditTitle>가격대</EditTitle>
                    <div>
                        <InputLabel htmlFor="radio1">
                            1만원대
                            <RadioInput id="radio1" name="priceInfo" type="radio"></RadioInput>
                            <RadioDesign></RadioDesign>
                        </InputLabel>
                        <InputLabel htmlFor="radio2">
                            2만원대
                            <RadioInput id="radio2" name="priceInfo" type="radio" />
                            <RadioDesign></RadioDesign>
                        </InputLabel>
                        <InputLabel htmlFor="radio3">
                            3만원대
                            <RadioInput id="radio3" name="priceInfo" type="radio" />
                            <RadioDesign></RadioDesign>
                        </InputLabel>
                        <InputLabel htmlFor="radio4">
                            4만원대
                            <RadioInput id="radio4" name="priceInfo" type="radio" />
                            <RadioDesign></RadioDesign>
                        </InputLabel>
                        <InputLabel htmlFor="radio5">
                            기타
                            <RadioInput id="radio5" name="priceInfo" type="radio" />
                            <InputBox placeholder="가격대를 입력해주세요." isPhone={false} />
                        </InputLabel>
                    </div>
                </EditContentBox>
                <EditContentBox>
                    <EditTitle>주차</EditTitle>
                    <div>
                        <InputLabel htmlFor="freePark">
                            무료주차 가능
                            <RadioInput id="freePark" name="parkInfo" type="radio" />
                            <RadioDesign></RadioDesign>
                        </InputLabel>
                        <InputLabel htmlFor="paidPark">
                            유료주차 가능
                            <RadioInput id="paidPark" name="parkInfo" type="radio" />
                            <RadioDesign></RadioDesign>
                        </InputLabel>
                        <InputLabel htmlFor="nonePark">
                            주차 불가
                            <RadioInput id="nonePark" name="parkInfo" type="radio" />
                            <RadioDesign></RadioDesign>
                        </InputLabel>
                    </div>
                </EditContentBox>
                <EditContentBox isSmallGap={true}>
                    <EditTitle>영업시간</EditTitle>
                    <div>
                        <InputLabel htmlFor="openHour">
                            <TimeInput id="openHour" />시
                        </InputLabel>
                        <InputLabel htmlFor="openMinutes">
                            <TimeInput id="openMinutes" />분 ~
                        </InputLabel>
                        <InputLabel htmlFor="closeHour">
                            <TimeInput id="closeHour" />시
                        </InputLabel>
                        <InputLabel htmlFor="closeMinutes">
                            <TimeInput id="closeMinutes" />분
                        </InputLabel>
                    </div>
                </EditContentBox>
                <EditContentBox>
                    <EditTitle>휴무일</EditTitle>
                    <div>
                        <InputLabel htmlFor="monday">
                            <ClosedDayInput id="monday" name="closedDays" type="checkbox" />
                            <ClosedDayDesign></ClosedDayDesign>월
                        </InputLabel>
                        <InputLabel htmlFor="tuesday">
                            <ClosedDayInput id="tuesday" name="closedDays" type="checkbox" />
                            <ClosedDayDesign></ClosedDayDesign>화
                        </InputLabel>
                        <InputLabel htmlFor="wednesday">
                            <ClosedDayInput id="wednesday" name="closedDays" type="checkbox" />
                            <ClosedDayDesign></ClosedDayDesign>수
                        </InputLabel>
                        <InputLabel htmlFor="thursday">
                            <ClosedDayInput id="thursday" name="closedDays" type="checkbox" />
                            <ClosedDayDesign></ClosedDayDesign>목
                        </InputLabel>
                        <InputLabel htmlFor="friday">
                            <ClosedDayInput id="friday" name="closedDays" type="checkbox" />
                            <ClosedDayDesign></ClosedDayDesign>금
                        </InputLabel>
                        <InputLabel htmlFor="saturday">
                            <ClosedDayInput id="saturday" name="closedDays" type="checkbox" />
                            <ClosedDayDesign></ClosedDayDesign>토
                        </InputLabel>
                        <InputLabel htmlFor="sunday">
                            <ClosedDayInput id="sunday" name="closedDays" type="checkbox" />
                            <ClosedDayDesign></ClosedDayDesign>일
                        </InputLabel>
                        <InputLabel htmlFor="allDay">
                            <ClosedDayInput id="allDay" name="closedDays" type="checkbox" />
                            <ClosedDayDesign></ClosedDayDesign>연중무휴
                        </InputLabel>
                    </div>
                </EditContentBox>
                <EditContentBox isSmallGap={true}>
                    <EditTitle>대표 메뉴</EditTitle>
                    <div>
                        <MenuNameChart>
                            <tr>
                                <ChartHead scope="col" isLeft={true}>
                                    대표 메뉴
                                </ChartHead>
                            </tr>
                            <tr>
                                <ChartContent>
                                    <ChartInput type="text" placeholder="-" />
                                </ChartContent>
                            </tr>
                            <tr>
                                <ChartContent>
                                    <ChartInput type="text" placeholder="-" />
                                </ChartContent>
                            </tr>
                            <tr>
                                <ChartContent>
                                    <ChartInput type="text" placeholder="-" />
                                </ChartContent>
                            </tr>
                        </MenuNameChart>
                        <MenuNameChart>
                            <tr>
                                <ChartHead scope="col">가격</ChartHead>
                            </tr>
                            <tr>
                                <ChartContent>
                                    <ChartInput type="text" placeholder="-" />원
                                </ChartContent>
                            </tr>
                            <tr>
                                <ChartContent>
                                    <ChartInput type="text" placeholder="-" />원
                                </ChartContent>
                            </tr>
                            <tr>
                                <ChartContent>
                                    <ChartInput type="text" placeholder="-" />원
                                </ChartContent>
                            </tr>
                        </MenuNameChart>
                    </div>
                </EditContentBox>
                <DividerLine></DividerLine>
                <EditFormBtns>
                    <EditFormBtn isOrange={true}>수정하기</EditFormBtn>
                    <EditFormBtn>취소하기</EditFormBtn>
                </EditFormBtns>
            </DetailEditForm>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
    padding: 41px 0px 22px 0px;
    display: flex;
    justify-content: center;
`;

const DetailEditForm = styled.form`
    width: calc(100% - 20px);
    max-width: 804px;
    margin: 0 auto;
    height: 90vh;
    border-radius: 10px;
    background: #fff;
    padding: 66px 14px 43px 14px;
    display: flex;
    flex-direction: column;
    > div {
        display: grid;
        grid-template-columns: 73px auto;
        grid-template-rows: repeat(4, 21px) auto;
    }
`;

const EditContentBox = styled.div`
    display: flex;
    margin-left: 20px;
    > div {
        display: flex;
        gap: ${(props) => (props.isSmallGap ? '14px' : '32px')};
    }
`;

const EditTitle = styled.div`
    color: #989797;
    font-size: 15px;
    font-weight: 700;
`;

const InputBox = styled.input`
    width: ${(props) => (props.isPhone ? '352px' : '198px')};
    height: 32px;
    border: 1px solid #989797;
    border-radius: 5px;
    margin-top: -6px;
    text-indent: ${(props) => (props.isPhone ? '16px' : '12px')};
    &:focus {
        outline: 2px solid rgba(255, 145, 77, 0.6);
    }
    &::placeholder {
        color: #989797;
        font-size: 13px;
        text-indent: ${(props) => (props.isPhone ? '16px' : '12px')};
    }
`;

const InputLabel = styled.label`
    display: flex;
    gap: 11px;
    color: #989797;
    line-height: 18px;
    font-size: 15px;
    font-weight: 400;
`;

const RadioDesign = styled.div`
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background: #d9d9d9;
`;

const RadioInput = styled.input`
    display: none;
    &:checked + div {
        &::after {
            content: '';
            display: block;
            margin: 3px;
            border-radius: 50%;
            width: 13px;
            height: 13px;
            background-color: #ff914d;
        }
    }
`;

const TimeInput = styled.input`
    width: 42px;
    height: 29px;
    border: none;
    border-bottom: 1px solid #989797;
    margin-top: -6px;
    text-align: center;
    font-size: 15px;
    &:focus {
        outline: none;
    }
`;

const ClosedDayDesign = styled.div`
    width: 21px;
    height: 21px;
    border-radius: 5px;
    border: 1px solid #989797;
`;

const ClosedDayInput = styled.input`
    display: none;
    margin-top: -6px;
    &:checked + div {
        &::after {
            content: '✔';
            display: block;
            text-align: center;
            color: #ff914d;
        }
    }
`;

const MenuNameChart = styled.table`
    width: 200px;
    height: 144px;
    border-collapse: collapse;
`;

const ChartHead = styled.th`
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    background-color: #ff914d;
    border-top-left-radius: ${(props) => (props.isLeft ? '5px' : '0px')};
    border-top-right-radius: ${(props) => (props.isLeft ? '0px' : '5px')};
    height: 36px;
`;

const ChartContent = styled.td`
    border: 1px solid #989797;
    text-align: center;
    color: #989797;
    font-size: 13px;
    font-weight: 700;

    &:first-child {
        border-top: none;
    }
`;

const ChartInput = styled.input`
    height: 18px;
    border: none;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    &::placeholder {
        color: #989797;
        font-size: 14px;
        text-align: center;
    }
    &:focus {
        outline: none;
    }
`;

const DividerLine = styled.div`
    width: 776px;
    height: 1px;
    margin-top: 130px;
    background: #d9d9d9;
`;

const EditFormBtn = styled.button`
    width: 166px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid ${(props) => (props.isOrange ? '#ff914d' : ' #989797')};
    background: ${(props) => (props.isOrange ? '#ff914d' : '#FFF')};
    text-align: center;
    color: ${(props) => (props.isOrange ? '#fff' : '#989797')};
    font-size: 17px;
    font-weight: 400;
`;

const EditFormBtns = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    gap: 134px;
`;
