import { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './style/PriceAverage.style'

const PriceAverage = ({ setStoreInfo }) => {
    const [range, setRange] = useState();
    const handleSaveRange = (e) => {
        setRange(e.target.value);
        setStoreInfo((prevInfo) => ({
            ...prevInfo,
            priceRange: range
        }));
    }
    return (
        <S.TableLine>
            <div className="table_title">
                <span>가격대*</span>
            </div>
            <div className="table_content">
                <label className="price" htmlFor="price_range1">
                    <span className="radio_input">1만원대</span>
                    <input className="radio_button" type="radio" id="price_range1" name="price_range" value="1만원대" onChange={handleSaveRange} />
                </label>
                <label className="price" htmlFor="price2">
                    <span className="radio_input" htmlFor="price_range2">2만원대</span>
                    <input className="radio_button" type="radio" id="price_range2" name="price_range" value="2만원대" onChange={handleSaveRange} />
                </label>
                <label className="price" htmlFor="price3">
                    <span className="radio_input" htmlFor="price3">3만원대</span>
                    <input className="radio_button" type="radio" id="price_range3" name="price_range" value="3만원대" onChange={handleSaveRange} />
                </label>
                <label className="price" htmlFor="price4">
                    <span className="radio_input" htmlFor="price4">4만원대</span>
                    <input className="radio_button" type="radio" id="price_range4" name="price_range" value="4만원대" onChange={handleSaveRange} />
                </label>
                <label className="price" htmlFor="price0">
                    <span className="radio_input" htmlFor="price0" >기타</span>
                    <input className="radio_button" type="radio" id="price_range0" name="price_range" value="기타" onChange={handleSaveRange} />
                </label>
            </div>
        </S.TableLine>
    )
}
PriceAverage.propTypes = {
    setStoreInfo: PropTypes.func.isRequired,
  };

export default PriceAverage;
