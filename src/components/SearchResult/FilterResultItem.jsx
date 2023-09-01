import * as S from './style/FilterResultItem.style'
import { React } from 'react';
import { Link } from 'react-router-dom';

const FilterResultItem = ({ item, index,  linkTo, setClickedStore, filterData }) => {

    const handleItemClick = (e) => {
        const clickedElement = e.currentTarget;
        setClickedStore(clickedElement);
    };
    const breakDay = () => {
        if (item.closedDays.length === 1) {
            return `${item.closedDays[0]} 휴무`;
        } else if (item.closedDays.length > 1) {
            const formattedDays = item.closedDays.join(', ');
            return `${formattedDays} 휴무`;
        }
    };
    
    return (
        <Link 
            to={linkTo}
            style={{ textDecoration: 'none', color: 'inherit' }}
            onClick={handleItemClick}
        >
            <S.ResultStore>
                <S.StoreInfo>
                    <S.InfoLeft>
                        <img src={item.banners[0]} alt="" />
                    </S.InfoLeft>
                    <S.InfoRight>
                        <S.StoreName>
                            <h3 className="name">{index+1}. {item.name}</h3>
                            <h3 className="store_region">{item.address.city} {item.address.state}</h3>
                        </S.StoreName>
                        <div>
                            <S.StoreType>{item.type}</S.StoreType>
                        </div>
                        <S.StoreHash>
                            <p>#{item.parkingInfo}</p>
                            <p style={{color: '#FF9C5F'}}>#{breakDay()}</p>
                            <p>#{item.priceRange}</p>
                        </S.StoreHash>
                        <S.StoreEval>
                            <div>⭐</div>
                            <p>{item.starRating}</p>
                            <div>🤍</div>
                            <p>{item.storeLikes}</p>
                        </S.StoreEval>
                    </S.InfoRight>
                </S.StoreInfo>
            </S.ResultStore>
        </Link>
    )
}

export default FilterResultItem
