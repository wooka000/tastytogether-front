import * as S from './style/FilterResultItem.style'


const FilterResultItem = ({item, index, keyword, Link, type}) => {

    return (
        <div key={item.id}>
            <S.ResultNotice>
                <S.Keyword>{keyword}에 대한 필터결과입니다.</S.Keyword>
            </S.ResultNotice>
            <Link 
                key={item.id} 
                to={{
                    pathname: `/stores/filter`,
                    state: {
                        type: type,
                        region: `${item.city}/${item.state}`
                    }
                }} 
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
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
                            <S.StoreReview Key={index}>
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
        </div>

    )
}

export default FilterResultItem