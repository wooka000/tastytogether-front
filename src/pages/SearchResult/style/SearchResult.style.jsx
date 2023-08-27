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
    .result_notice{
        font-size: 20px;
        padding: 10px;
        display: flex;
        flex-direction: row;
    }

`
export const Keyword = styled.h3`
    font-size: 25px;
    color: red;
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
    &:hover .filter_title .square {
        background-color: var(--color-accent);
        color: #f0f0f0;
    }
    .filter_title {
        font-size: 1.3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;

        .square{
            width: 25px;
            height: 25px;
            margin-right: 10px;
            border: 5px solid var(--color-accent);
            transition: all 250ms ease-out;
            border-radius: 100%;
        }
    }
    .filter_content {
        div{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 10px;
            img{
                width: 20px;
                margin-right: 10px;
            }
            h3{
                font-size: 1.1rem;
            }
        }
    }
`
export const TypeFilter = styled.div`
    margin-bottom: 20px;
    &:hover .filter_title .square {
        background-color: var(--color-accent);
        color: #f0f0f0;;
    }
    .filter_title {
        font-size: 1.3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;
        .square{
            width: 25px;
            height: 25px;
            margin-right: 10px;
            border: 5px solid var(--color-accent);
            transition: all 250ms ease-out;
            border-radius: 100%;
        }
    }
    .filter_content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        label{
            margin-bottom: 10px;
            .filter_radio{
                width: 20px;
                height: 20px;
                margin-right: 10px;
            }
            span{
                font-size: 1.1rem;
                font-weight: 600;
            }
        }
    }
`
export const RegionFilter = styled.div`
    &:hover .filter_title .square {
        background-color: var(--color-accent);
        color: #f0f0f0;
    }
    .filter_title {
        font-size: 1.3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;
        .square{
            width: 25px;
            height: 25px;
            margin-right: 10px;
            border: 5px solid var(--color-accent);
            transition: all 250ms ease-out;
            border-radius: 100%;
        }
    }
    .filter_content {
        width: 260px;
        display: flex;
        flex-direction: column;
        position: relative;
        #city{
            width: 100%;
            height: 50px;
            text-align: center;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 10px;
            }
        }
        #area{
            width: 100%;
            height: 50px;
            text-align: center;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 10px;
        }
        option{
            font-size: 22px;
            font-weight: 600;
        }
    }
`
export const Sort = styled.div`
    width: 985px;
    height: 70px;
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    justify-content: flex-start;
    align-items: center;
    div{
        display: flex;
        img{
            width: 30px;
            height: 30px;
            margin-right: 15px;
        }
        h4{
            font-size: 25px;
            margin-right: 50px;
        }
    }
    button{
        width: 120px;
        height: 50px;
        font-size: 15px;
        margin-right: 15px;
        box-sizing: border-box;
        border: 1px solid #f0f0f0;
        border-radius: 20px;
        background: white;
        font-size: 20px;
        font-weight: 600;
        border: none;
        background-color: #f0f0f0;
        transition: all 250ms ease-out;
        &:hover{
            background-color: var(--color-accent);
            color: white;
        }
    }
`
export const FilteredMap = styled.div`
    width: 985px;
    height: 400px;
    border: 1px solid #f0f0f0;
`

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
    .store_info{
        display: flex;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 20px 0 0 0;

        .info_left{
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
            }
        }
        .info_right{
            flex:1;
            height: 169px;
            box-sizing: border-box;
            line-height: 50px;
            display: flex;
            flex-direction: column;
            .store_name{
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
            }
            .store_eval{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 35px;
                font-size: 24px;
                p{
                    margin-right: 15px;
                }
            }
            .store_hash{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 35px;
                font-size: 20px;
                font-weight: 500;
                line-height: normal;
            }
            .store_type{
                font-size: 23px;
                font-weight: 600;
                color: gray;
            }
        }
    }
`
export const StoreReview = styled.div`
    width: 963px;
    height: 52px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    #review_content{
        width: 963px;
        font-size: 20px;
        font-weight: 600;
        color: gray;
    }
    #review_id{
        width: 963px;
        text-align: right;
        font-size: 20px;
        color: #FF914D;
        font-weight: 600;
    }
`