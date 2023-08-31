import styled from 'styled-components';

export const ResultStore = styled.div`
    height: 260px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding-left: 10px;
    border-radius: 10px;
    transition: all 500ms ease-out;
    &:hover{
        background-color: #f0f0f0;
    }
`
export const StoreInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 20px 0 0 0;
`
export const InfoLeft = styled.div`
    width: 227px;
    height: 169px;
    border-radius: 10px;
    background: lightgray 50% / cover no-repeat;
    margin-right: 20px;
    img{
        width: 227px;
        height: 169px;
        border-radius: 10px;
        &:hover{
            cursor: pointer;
        }
`
export const InfoRight = styled.div`
    flex:1;
    height: 169px;
    box-sizing: border-box;
    line-height: 50px;
    display: flex;
    flex-direction: column;
`
export const StoreName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 742px;
    height: 35px;
    font-size: 28px;
    flex: 1;
    &:hover{
        cursor: pointer;
    }
    .name{
        width: 50%;
        text-align: left;
    }
    .store_region{
        width: 50%;
        text-align: right;
        color: gray;
        margin-right: 20px;
    }
`
export const StoreType = styled.p`
    font-size: 23px;
    font-weight: 600;
    color: gray;
`
export const StoreHash = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 35px;
    font-size: 20px;
    font-weight: 500;
    line-height: normal;
`
export const StoreEval =styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 35px;
    font-size: 24px;
    p{
        margin-right: 15px;
    }
`

export const StoreReview = styled.div`
    width: 963px;
    height: 52px;
    padding: 5px;
    display: flex;
    flex-direction: column;
`
export const ReviewContent = styled.p`
    width: 963px;
    font-size: 20px;
    font-weight: 600;
    color: gray;
`
export const ReviewId = styled.p`
    width: 963px;
    text-align: right;
    font-size: 20px;
    color: #FF914D;
    font-weight: 600;
`
