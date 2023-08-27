import PropTypes from 'prop-types';
import React, { useState } from 'react';
import * as S from './style/BreakDay.style';

const BreakDay = ({ setStoreInfo }) => {
    const [breakDay, setBreakDay] = useState([]);
    const handleSelectDay = (e) => {
        const selectedDay = e.target.value;
        const updatedBreakDay = breakDay.concat(selectedDay);
        setBreakDay(updatedBreakDay);
        setStoreInfo(updatedBreakDay);
    }
    return(
        <S.TableLine>
            <div className="table_title">
                <span>휴무일</span>
            </div>
            <div className="table_content">
                <label className="day" htmlFor="monday">
                    <input type="checkbox" id="monday" name="day" value="월" onChange={handleSelectDay} />
                    <span>월</span>
                </label>
                <label className="day" htmlFor="tuesday">
                    <input type="checkbox" id="tuesday" name="day" value="화" onChange={handleSelectDay} />
                    <span>화</span>
                </label>
                <label className="day" htmlFor="wednesday">
                    <input type="checkbox" id="wednesday" name="day" value="수" onChange={handleSelectDay} />
                    <span>수</span>
                </label>
                <label className="day" htmlFor="thursday">
                    <input type="checkbox" id="thursday" name="day" value="목" onChange={handleSelectDay} />
                    <span>목</span>
                </label>
                <label className="day" htmlFor="friday">
                    <input type="checkbox" id="friday" name="day" value="금" onChange={handleSelectDay} />
                    <span>금</span>
                </label>
                <label className="day" htmlFor="saturday">
                    <input type="checkbox" id="saturday" name="day" value="토" onChange={handleSelectDay} />
                    <span>토</span>
                </label>
                <label className="day" htmlFor="sunday">
                    <input type="checkbox" id="sunday" name="day" value="일" onChange={handleSelectDay} />
                    <span>일</span>
                </label>
                <label className="day" htmlFor="everyday">
                    <input type="checkbox" id="everyday" name="day" value="연중무휴" onChange={handleSelectDay} />
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