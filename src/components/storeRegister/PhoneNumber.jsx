// import { useState } from 'react';
import * as S from './style/PhoneNumber.style'

const PhoneNumber = () => {

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
                    placeholder="가게의 전화번호를 입력하세요.(0000 - 0000 - 0000)" />
            </div>
        </S.TableLine>
        )
}

export default PhoneNumber;

