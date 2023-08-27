import styled from 'styled-components';

export const BottomDetailWrap = styled.section`
    width: 661px;
    height: 321px;
    margin-top: 19px;
    border-radius: 10px;
    background: #fff;
    padding: 25px 32px 29px 32px;
    display: flex;
    justify-content: space-between;
`;

export const StoreDetailBox = styled.div`
    height: 259px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    > div {
        display: grid;
        grid-template-columns: 66px auto;
    }
`;

export const StoreEditLink = styled.a`
    color: #c0c0c0;
    font-size: 12px;
    font-weight: 700;
`;

export const Addresses = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
`;

export const AddressDetail = styled.div`
    height: 34px;
    display: flex;
    flex-direction: column;
`;

export const AddressTitle = styled.p`
    width: 47px;
    line-height: 15px;
    color: #989797;
    font-size: 13px;
    font-weight: 700;
`;

export const AddressContent = styled.p`
    color: #100f0f;
    font-size: 13px;
    font-weight: 700;
`;

export const AddressStreets = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const AddressStreetIcon = styled.p`
    width: 25px;
    line-height: 15px;
    border-radius: 5px;
    border: 1px solid #989797;
    background: #fff;
    color: #989797;
    font-size: 8px;
    font-weight: 700;
    text-align: center;
`;

export const AddressStreet = styled.p`
    color: #989797;
    font-size: 11px;
    font-weight: 700;
    line-height: 15px;
`;

export const StoreDetailItem = styled.div`
    display: flex;
`;

export const StoreDetailTitle = styled.p`
    width: 47px;
    line-height: 15px;
    color: #989797;
    font-size: 12px;
    font-weight: 700;
`;

export const StoreDetailContent = styled.p`
    line-height: 15px;
    color: #100f0f;
    font-size: 13px;
    font-weight: 700;
`;

export const MenuItems = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MenuItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const MenuDividerLine = styled.div`
    margin-top: 2px;
    width: 212px;
    height: 1px;
    background: #d9d9d9;
`;
