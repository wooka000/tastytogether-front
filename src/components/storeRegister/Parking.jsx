import PropTypes from 'prop-types';
import { useState } from 'react';
import * as S from './style/Parking.style'

const Parking = ({setStoreInfo}) =>{
    const [car, setCar] = useState();
    const handleSaveParking = (e) => {
        setCar(e.target.value);
        setStoreInfo((prevInfo) => ({
            ...prevInfo,
            parkingInfo: car
        }));
    }

    return(
        <S.TableLine>
            <div className="table_title">
                <span>주차*</span>
            </div>
            <div className="table_content">
                <label className="parking" htmlFor="parkingOption1">
                    <span className="radio_input">무료주차 가능</span>
                    <input className="radio_button" type="radio" id="parkingOption1" name="parkingOption" value="무료주차" onChange={handleSaveParking} />
                </label>
                <label className="parking" htmlFor="parkingOption2">
                    <span className="radio_input">유료주차장 이용</span>
                    <input className="radio_button" type="radio" id="parkingOption2" name="parkingOption" value="유료주차" onChange={handleSaveParking} />
                </label>
                <label className="parking" htmlFor="parkingOption3">
                    <span className="radio_input">주차장 없음</span>
                    <input className="radio_button" type="radio" id="parkingOption3" name="parkingOption" value="주차장없음" onChange={handleSaveParking} />
                </label>
            </div>
        </S.TableLine>
    )
}
Parking.propTypes = {
    setStoreInfo: PropTypes.func.isRequired,
  };
  

export default Parking;
