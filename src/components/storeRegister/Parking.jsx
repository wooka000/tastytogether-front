// import { useState } from 'react';
import * as S from './style/Parking.style'

const Parking = () =>{

    return(
        <S.TableLine>
            <div className="table_title">
                <span>주차</span>
            </div>
            <div className="table_content">
                <label className="parking" htmlFor="parkingOption1">
                    <span className="radio_input">무료주차 가능</span>
                    <input className="radio_button" type="radio" id="parkingOption1" name="parkingOption" />
                </label>
                <label className="parking" htmlFor="parkingOption2">
                    <span className="radio_input">유료주차장 이용</span>
                    <input className="radio_button" type="radio" id="parkingOption2" name="parkingOption" />
                </label>
                <label className="parking" htmlFor="parkingOption3">
                    <span className="radio_input">주차장 없음</span>
                    <input className="radio_button" type="radio" id="parkingOption3" name="parkingOption" />
                </label>
            </div>
        </S.TableLine>
    )
}

export default Parking;