// import { useState } from 'react';
import * as S from './style/PriceAverage.style'

const PriceAverage = () => {
    return (
        <S.TableLine>
            <div className="table_title">
                <span>가격대</span>
            </div>
            <div className="table_content">
                <label className="price" htmlFor="price_range1">
                    <span className="radio_input">1만원대</span>
                    <input className="radio_button" type="radio" id="price_range1" name="price_range" value="1만원대" />
                </label>
                <label className="price" htmlFor="price2">
                    <span className="radio_input" htmlFor="price_range2">2만원대</span>
                    <input className="radio_button" type="radio" id="price_range2" name="price_range" value="2만원대" />
                </label>
                <label className="price" htmlFor="price3">
                    <span className="radio_input" htmlFor="price3">3만원대</span>
                    <input className="radio_button" type="radio" id="price_range3" name="price_range" value="3만원대" />
                </label>
                <label className="price" htmlFor="price4">
                    <span className="radio_input" htmlFor="price4">4만원대</span>
                    <input className="radio_button" type="radio" id="price_range4" name="price_range" value="4만원대" />
                </label>
                <label className="price" htmlFor="price0">
                    <span className="radio_input" htmlFor="price0" >기타</span>
                    <input className="radio_button" type="radio" id="price_range0" name="price_range" value="기타" />
                </label>
            </div>
        </S.TableLine>
    )
}

export default PriceAverage;