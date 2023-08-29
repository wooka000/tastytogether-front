import styled from 'styled-components';


export const Square = styled.div`
    width: 25px;
    height: 25px;
    margin-right: 10px;
    border: 5px solid var(--color-accent);
    transition: all 250ms ease-out;
    border-radius: 100%;
    &:hover {
        background-color: var(--color-accent);
        color: #f0f0f0;;
    }

`
export const RegionFilter = styled.div`
    margin-bottom: 20px;

`
export const RegionFilterTitle = styled.div`
    font-size: 1.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`
export const RegionFilterContent = styled.div`
    width: 260px;
    display: flex;
    flex-direction: column;
    position: relative;
`
export const CitySelect = styled.select`
    width: 100%;
    height: 50px;
    text-align: center;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 10px;
`
export const AreaSelect = styled.select`
    width: 100%;
    height: 50px;
    text-align: center;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 10px;
`
export const SelectOption = styled.option`
    font-size: 22px;
    font-weight: 600;
    background-color: #fff;
`
