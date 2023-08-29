// import React from 'react';
// // import { Link } from 'react-router-dom';
// import * as S from './SearchResult.styles';

// export function StoreInfo({ item, index }) {
//     return (
//         <S.StoreInfo>
//             <S.InfoLeft>
//                 <img src={item.banners[0]} alt="" />
//             </S.InfoLeft>
//             <S.InfoRight>
//                 <S.StoreName>
//                     <h3 className="name">{index + 1}. {item.name}</h3>
//                     <h3 className="store_region">{item.city} {item.state}</h3>
//                 </S.StoreName>
//                 <div>
//                     <S.StoreType>{item.type}</S.StoreType>
//                 </div>
//                 <S.StoreHash>
//                     <p>#{item.parkingInfo}</p>
//                     <p>#{item.closedDays}</p>
//                     <p>#{item.PriceRange}</p>
//                 </S.StoreHash>
//                 <S.StoreEval>
//                     <div>⭐</div>
//                     <p>{item.starRating}</p>
//                     <div>🤍</div>
//                     <p>{item.storeLikes}</p>
//                 </S.StoreEval>
//             </S.InfoRight>
//         </S.StoreInfo>
//     );
// }