import PropTypes from 'prop-types';
import React, { useState } from 'react';
import * as S from './style/BreakDay.style';

const BreakDay = ({ setStoreInfo }) => {
    const [breakDays, setBreakDays] = useState([]);

    const handleSelectDay = (e) => {
    const selectedDay = e.target.value;
    let updatedBreakDays;

    if (breakDays.includes(selectedDay)) {
      // 이미 선택된 날짜인 경우 제거
      updatedBreakDays = breakDays.filter((day) => day !== selectedDay);
    } else {
      // 새로운 날짜를 선택한 경우 추가
      updatedBreakDays = [...breakDays, selectedDay];
    }

    setBreakDays(updatedBreakDays);
    setStoreInfo((prevInfo) => ({
      ...prevInfo,
      breakDays: updatedBreakDays,
    }));
  };

    return(
        <S.TableLine>
            <div className="table_title">
                <span>휴무일*</span>
            </div>
            <div className="table_content">
                <label className="day" htmlFor="monday">
                    <input type="checkbox" id="monday" name="day" value="월요일휴무" onChange={handleSelectDay} checked={breakDays.includes("월요일휴무")} />
                    <span>월</span>
                </label>
                <label className="day" htmlFor="tuesday">
                    <input type="checkbox" id="tuesday" name="day" value="화요일휴무" onChange={handleSelectDay} checked={breakDays.includes("화요일휴무")} />
                    <span>화</span>
                </label>
                <label className="day" htmlFor="wednesday">
                    <input type="checkbox" id="wednesday" name="day" value="수요일휴무" onChange={handleSelectDay} checked={breakDays.includes("수요일휴무")} />
                    <span>수</span>
                </label>
                <label className="day" htmlFor="thursday">
                    <input type="checkbox" id="thursday" name="day" value="목요일휴무" onChange={handleSelectDay} checked={breakDays.includes("목요일휴무")} />
                    <span>목</span>
                </label>
                <label className="day" htmlFor="friday">
                    <input type="checkbox" id="friday" name="day" value="금요일휴무" onChange={handleSelectDay} checked={breakDays.includes("금요일휴무")} />
                    <span>금</span>
                </label>
                <label className="day" htmlFor="saturday">
                    <input type="checkbox" id="saturday" name="day" value="토요일휴무" onChange={handleSelectDay} checked={breakDays.includes("토요일휴무")} />
                    <span>토</span>
                </label>
                <label className="day" htmlFor="sunday">
                    <input type="checkbox" id="sunday" name="day" value="일요일휴무" onChange={handleSelectDay} checked={breakDays.includes("일요일휴무")} />
                    <span>일</span>
                </label>
                <label className="day" htmlFor="everyday">
                    <input type="checkbox" id="everyday" name="day" value="연중무휴" onChange={handleSelectDay} checked={breakDays.includes("연중무휴")} />
                    <span>연중무휴</span>
                </label>
            </div>
        </S.TableLine>
    )
}
BreakDay.propTypes = {
    setStoreInfo: PropTypes.func.isRequired,
};
export default BreakDay;