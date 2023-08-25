// import React, { useState } from 'react';
import * as S from './style/Time.style'

const Time = () => {
    
    return(
        <S.TableLine>
            <div className="table_title">
                <span>영업시간</span>
            </div>
            <div className="table_content">
                <input className="time" type="text" placeholder="00" pattern="[0-9]{2}" maxLength={2} />시 
                <input className="time" type="text" placeholder="00" pattern="[0-9]{2}" maxLength={2} />분  - 
                <input className="time" type="text" placeholder="00" pattern="[0-9]{2}" maxLength={2} />시 
                <input className="time" type="text" placeholder="00" pattern="[0-9]{2}" maxLength={2} />분
            </div>
        </S.TableLine>
    )
}

export default Time;
