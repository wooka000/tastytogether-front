import { React } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style/SearchResultItem.style'; // import your styles

const SearchResultItem = ({ item, index, linkTo, setClickedStore }) => {
    
    // if (!checkKeywordMatch) {
    //     return null;
    // }
    const handleItemClick = (e) => {
        const clickedElement = e.currentTarget;
        setClickedStore(clickedElement);
    };

    return(
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
                            <p>#휴무일{item.closedDays}</p>
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
                {item.reviews.length !== 0 ? (
                    <S.StoreReview>
                        <S.ReviewContent>{item.reviews[0]}</S.ReviewContent>
                    </S.StoreReview>
                ) : (
                    <S.StoreReview>
                        <S.ReviewContent>아직 첫 리뷰가 없습니다.</S.ReviewContent>
                    </S.StoreReview>
                )}
            </S.ResultStore>
            
        </Link>
    )
}
export default SearchResultItem;