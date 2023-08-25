// import { useState } from 'react';
import * as S from './style/PriceAverage.style'

const PriceAverage = () => {
    return (
        <S.TableLine>
            <div className="table_title">
                <span>가격대</span>
            </div>
            <div className="table_content">
                <label className="price" htmlFor="price1">
                    <span className="radio_input">1만원대</span>
                    <input className="radio_button" type="radio" id="price1" name="price" value="1만원대" />
                </label>
                <label className="price" htmlFor="price2">
                    <span className="radio_input" htmlFor="price2">2만원대</span>
                    <input className="radio_button" type="radio" id="price2" name="price" value="2만원대" />
                </label>
                <label className="price" htmlFor="price3">
                    <span className="radio_input" htmlFor="price3">3만원대</span>
                    <input className="radio_button" type="radio" id="price3" name="price" value="3만원대" />
                </label>
                <label className="price" htmlFor="price4">
                    <span className="radio_input" htmlFor="price4">4만원대</span>
                    <input className="radio_button" type="radio" id="price4" name="price" value="4만원대" />
                </label>
                <label className="price" htmlFor="price0">
                    <span className="radio_input" htmlFor="price0" >기타</span>
                    <input className="radio_button" type="radio" id="price0" name="price" value="기타" />
                </label>
            </div>
        </S.TableLine>
    )
}

export default PriceAverage;