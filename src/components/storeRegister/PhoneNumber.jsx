import PropTypes from 'prop-types';
import { useState } from 'react';
import * as S from './style/PhoneNumber.style'

const PhoneNumber = ({ setStoreInfo }) => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const handleSaveNumber = (e) => {
        setPhoneNumber(e.target.value);
        setStoreInfo((prevInfo)=>({
            ...prevInfo,
            phone: phoneNumber
        }));
    }
    return(
        
        <S.TableLine>
            <div className="table_title">
                <span>전화번호</span>
            </div>
            <div className="table_content">
                <input 
                    className="input"
                    type="text"
                    pattern="[0-9]{2,4}-[0-9]{3,4}-[0-9]{4}" 
                    maxLength="14"
                    onChange={handleSaveNumber}
                    placeholder="가게의 전화번호를 입력하세요.(0000 - 0000 - 0000)" />
            </div>
        </S.TableLine>
        )
}
PhoneNumber.propTypes = {
    setStoreInfo: PropTypes.func.isRequired,
  };
  
export default PhoneNumber;

