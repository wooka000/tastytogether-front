import styled from 'styled-components';

export const TopDetailWrap = styled.section`
    width: 661px;
    height: 515px;
    border-radius: 10px;
    background: #fff;
    padding: 30px 44px 42px 42px;
    display: flex;
    flex-direction: column;
`;

export const StoreBanners = styled.div`
    width: 574px;
    height: 249px;
    display: flex;
    border-radius: 5px;
`;
export const StoreLeftImgs = styled.div`
    width: 287.26px;
    height: 249px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    > :first-child {
        border-top-left-radius: 5px;
    }
`;
export const GridImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;
export const StoreLeftTopImg = styled(GridImg)`
    width: 287.26px;
    height: 155.398px;
`;
export const StoreLeftBottomImgs = styled.div`
    width: 287.26px;
    height: 93.602px;
    display: grid;
    grid-template-columns: repeat(3, calc(100% / 3));
    > :first-child {
        border-bottom-left-radius: 5px;
    }
`;
export const StoreRightImgs = styled.div`
    width: 287.26px;
    height: 249px;
    display: grid;
    grid-template-columns: repeat(2, calc(100% / 2));
    grid-template-rows: repeat(2, calc(100% / 2));
    > :nth-child(2) {
        border-top-right-radius: 5px;
    }
    > :nth-child(4) {
        border-bottom-right-radius: 5px;
    }
`;
export const StoreName = styled.h1`
    margin-top: 25px;
    color: #000;
    font-size: 25px;
    font-weight: 700;
`;
export const StoreRegionAndType = styled.div`
    height: 19px;
    display: flex;
    margin-top: 14px;
`;
export const StoreRegion = styled.p`
    color: #636363;
    font-size: 15px;
    font-weight: 400;
`;
export const StoreRegionBar = styled.p`
    color: #636363;
    font-size: 15px;
    font-weight: 400;
    margin-left: 6px;
`;
export const StoreType = styled.p`
    color: #636363;
    font-size: 15px;
    font-weight: 400;
    margin-left: 9px;
`;
export const ScoreInfo = styled.div`
    display: flex;
    margin-top: 18px;
    flex-wrap: wrap;
`;
export const StarAverage = styled.p`
    margin-top: -3px;
    color: #ff914d;
    font-size: 20px;
    font-weight: 700;
`;
export const StarAverageCount = styled.p`
    margin-left: 2px;
    color: #989797;
    font-size: 15px;
    font-weight: 400;
`;
export const LikesSymbol = styled.img`
    margin-top: 2px;
    margin-left: 5px;
    width: 15px;
    height: 15px;
`;
export const LikesCount = styled.p`
    margin-left: 5px;
    color: #989797;
    font-size: 15px;
    font-weight: 400;
`;
export const ViewInfo = styled.p`
    width: 91px;
    height: 12px;
    display: flex;
    margin-top: 6px;
    margin-left: 297px;
`;
export const ViewIcon = styled.img`
    width: 15px;
    height: 11px;
`;
export const ViewText = styled.p`
    color: #989797;
    font-size: 10px;
    font-weight: 400;
    margin-left: 2px;
`;
export const DividerLine = styled.div`
    margin-top: 8.99px;
    width: 577px;
    height: 1px;
    background: #d9d9d9;
`;

export const TopBtns = styled.div`
    height: 58.01px;
    display: flex;
`;

export const TopBtn = styled.button`
    height: 36px;
    margin-top: 20px;
    padding: 12px 16px 12px 16px;
    border-radius: 20px;
    border: 1px solid #989797;
    background: #ffffff;
    display: flex;
    gap: 7px;
    & + & {
        margin-left: 19px;
    }
    & + & + & {
        margin-left: 251px;
    }
`;

export const TopBtnIcon = styled.img`
    width: ${(props) => (props.isBook ? '10px' : '15px')};
    height: ${(props) => (props.isBook ? '12px' : '15px')};
    margin-top: ${(props) => (props.isBook ? '-1px' : '-2px')};
`;

export const TopBtnText = styled.p`
    color: #989797;
    font-size: 10px;
    font-weight: 400;
    margin-left: ${(props) => (props.isBook ? '0px' : '')};
`;
