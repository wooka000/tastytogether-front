import { React } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style/SearchResultItem.style'; // import your styles

function SearchResultItem({ item, index, linkTo, checkKeywordMatch }) {
    
    if (!checkKeywordMatch) {
        return null;
    }
    return(
        <Link to={linkTo} style={{ textDecoration: 'none', color: 'inherit' }}>
    
            <S.ResultStore key={item.id}>
                <S.StoreInfo>
                    <S.InfoLeft>
                        <img src={item.banners[0]} alt="" />
                    </S.InfoLeft>
                    <S.InfoRight>
                        <S.StoreName>
                            <h3 className="name">{index+1}. {item.name}</h3>
                            <h3 className="store_region">{item.city} {item.state}</h3>
                        </S.StoreName>
                        <div>
                            <S.StoreType>{item.type}</S.StoreType>
                        </div>
                        <S.StoreHash>
                            <p>#{item.parkingInfo}</p>
                            <p>#{item.closedDays}</p>
                            <p>#{item.PriceRange}</p>
                        </S.StoreHash>
                        <S.StoreEval>
                            <div>⭐</div>
                            <p>{item.starRating}</p>
                            <div>🤍</div>
                            <p>{item.storeLikes}</p>
                        </S.StoreEval>
                    </S.InfoRight>
                </S.StoreInfo>
                {item.reviews.length !== 0 ? (
                    <S.StoreReview key={index}>
                        <S.ReviewContent>{item.reviews[0].content}</S.ReviewContent>
                        <S.ReviewId>by.{item.reviews[0].userId}</S.ReviewId>
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