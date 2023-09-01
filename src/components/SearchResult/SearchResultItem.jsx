import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style/SearchResultItem.style'; 

const SearchResultItem = ({ item, index, id }) => {
    const navigate = useNavigate();
    const handleItemClick = (e) => {
        // const clickedElement = e.currentTarget;
        navigate(`/stores/detail/${id}`);
        // setClickedStore(clickedElement);
    };
    const breakDay = () => {
        if (item.closedDays.includes('연중무휴')) {
          return '연중무휴';
        } else if (item.closedDays.length === 1) {
          const day = item.closedDays[0];
          return `${day} 휴무`;
        } else if (item.closedDays.length > 1) {
          const days = item.closedDays.slice(0, -1).join(', ');
          const lastDay = item.closedDays[item.closedDays.length - 1];
          return `${days}, ${lastDay} 휴무`;
        }
      };

    return(
        <div
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
                            <p>{item.storeLikes.length}</p>
                        </S.StoreEval>
                    </S.InfoRight>
                </S.StoreInfo>
            </S.ResultStore>
            
        </div>
    )
}
export default SearchResultItem; 
