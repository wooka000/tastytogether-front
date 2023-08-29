import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
 `;

export const Search = styled.div`
    width: 1440px;
    min-height: 1024px;
    display: flex;
    flex-direction: row;
    align-items: flex-start
    justify-content: center;
    background-color: #F8F9FA;
    padding: 37px;
    box-sizing: border-box;
    top: 101px;
    width: 1440px;
    padding: 17px;
    margin: auto;
    border-radius: 10px;
    height: auto;
    overflow: auto;
`
export const Nav = styled.div`
    width: 324px;
    height: 84%;
    top: 120px;
    max-height: 1300px;
    height: auto;
    background-color: #fff;
    padding: 20px 20px 20px 20px;
    margin-left: 10px;
    margin-right: 41px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    position: fixed;
    bottom: 120px;
    border-radius: 10px;
`

export const ResultDiv = styled.div`
    width: 1030px;
    min-height: 1000px;
    background-color: #fff;
    padding: 20px;
    position: relative;
    border-radius: 10px;
    left: 365px;
`

export const Social = styled.div`
    width: 260px;
    height: 125px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    margin-bottom: 30px;
`

export const MyFilterTitle = styled.div`
    font-size: 1.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`
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
export const MyFilterContent = styled.div`
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 10px;
        &:hover{
            cursor: pointer;
        }
        img{
            width: 20px;
            margin-right: 10px;
        }
        h3{
            font-size: 1.1rem;
            &:hover{
                background-color: var(--color-accent);
                color: white;
                border-radius: 3px;
            }
        }
    }
`

export const FilteredMap = styled.div`
    width: 985px;
    height: 400px;
    border: 1px solid #f0f0f0;
`
export const ResultNotice = styled.div`
    font-size: 20px;
    padding: 10px;
    display: flex;
    flex-direction: row;
`

export const Keyword = styled.h3`
    font-size: 25px;
    color: red;
`
export const MapContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
        #map{
            width: 700px;
            height: 360px;
        }
        button{
            z-index: 999;
        }
`
export const AddressInput = styled.input`
    display: none;
`