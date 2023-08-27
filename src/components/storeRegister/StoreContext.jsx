// import React, { createContext, useContext, useReducer } from 'react';

// // 초기 상태
// const initialState = {
//   banners: [],
//   name: "",
//   address: {
//     street: "",
//     city: "",
//     state: "",
//     fullAddress: "",
//     zipCode: "",
//     latitude: "",
//     longitude: "",
//   },
//   menuItems: [
//     { name: "", price: "" },
//     { name: "", price: "" },
//     { name: "", price: "" },
//   ],
//   type: "",
//   phone: "",
//   priceRange: "",
//   parkingInfo: "",
//   businessHours: [],
//   closedDays: [],
// };

// // 액션 타입
// const SET_STORE_INFO = 'SET_STORE_INFO';

// // 리듀서 함수
// const storeReducer = (state, action) => {
//   switch (action.type) {
//     case SET_STORE_INFO:
//       return { ...state, ...action.payload };
//     default:
//       return state;
//   }
// };

// // 컨텍스트 생성
// const StoreContext = createContext();

// // StoreProvider 컴포넌트
// export const StoreProvider = ({ children }) => {
//   const [storeInfo, dispatch] = useReducer(storeReducer, initialState);

//   return (
//     <StoreContext.Provider value={{ storeInfo, dispatch }}>
//       {children}
//     </StoreContext.Provider>
//   );
// };

// // 커스텀 훅
// export const useStoreContext = () => {
//   return useContext(StoreContext);
// };
