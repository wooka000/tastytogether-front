import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import * as S from './style/Time.style';

const Time = ({ setStoreInfo }) => {
    const [h1, setH1] = useState('');
    const [m1, setM1] = useState('');
    const [h2, setH2] = useState('');
    const [m2, setM2] = useState('');

    useEffect(() => {
        setStoreInfo(prevInfo => ({
            ...prevInfo,
            businessHours: [h1, m1, h2, m2]
        }));
    }, [h1, m1, h2, m2, setStoreInfo]);

    const isValidHour = (hour) => {
        const numericHour = Number(hour);
        return numericHour >= 0 && numericHour <= 12;
    };

    const isValidMinute = (minute) => {
        const numericMinute = Number(minute);
        return numericMinute >= 0 && numericMinute <= 59;
    };

    const handleHourChange = (e, setter) => {
        const newValue = e.target.value;
        if (isValidHour(newValue)) {
            setter(newValue);
        }
    };

    const handleMinuteChange = (e, setter) => {
        const newValue = e.target.value;
        if (isValidMinute(newValue)) {
            setter(newValue);
        }
    };

    return (
        <S.TableLine>
            <div className="table_title">
                <span>영업시간</span>
            </div>
            <div className="table_content">
                <input
                    id="start_h"
                    className="time"
                    type="text"
                    placeholder="00"
                    pattern="[0-9]{2}"
                    maxLength={2}
                    value={h1}
                    onChange={e => handleHourChange(e, setH1)}
                />시 
                <input
                    id="start_m"
                    className="time"
                    type="text"
                    placeholder="00"
                    pattern="[0-9]{2}"
                    maxLength={2}
                    value={m1}
                    onChange={e => handleMinuteChange(e, setM1)}
                />분  - 
                <input
                    id="end_h"
                    className="time"
                    type="text"
                    placeholder="00"
                    pattern="[0-9]{2}"
                    maxLength={2}
                    value={h2}
                    onChange={e => handleHourChange(e, setH2)}
                />시 
                <input
                    id="end_m"
                    className="time"
                    type="text"
                    placeholder="00"
                    pattern="[0-9]{2}"
                    maxLength={2}
                    value={m2}
                    onChange={e => handleMinuteChange(e, setM2)}
                />분
            </div>
        </S.TableLine>
    );
};

Time.propTypes = {
    setStoreInfo: PropTypes.func.isRequired,
};

export default Time;
