import { styled } from 'styled-components';

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-bottom: 1px solid lightgray;
    width: 550px;
    height: 100%;
    padding: 30px 0px;

    &:nth-last-of-type(1) {
        border-bottom: none;
    }
`;

export const Info = styled.div`
    display: flex;
    width: 100%;
    height: 70%;
`;

export const InfoLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
`;

export const ProfileImg = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
`;

export const Nickname = styled.span`
    font-weight: bold;
    font-size: 14px;
`;

export const InfoRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    height: 100%;
`;

export const Date = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: gray;
`;

export const Content = styled.div`
    text-align: left;
    font-size: 15px;
    font-weight: bolder;
    margin: 10px 0;
    width: 380px;
`;

export const Btns = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-end;
`;

export const EditBtn = styled.button`
    font-size: 13px;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 5px;
    margin-right: 10px;
    border-radius: 10px;
    font-weight: bold;
    transition: all 250ms ease-out;
    &:hover {
        color: lightgreen;
    }
`;

export const DeleteBtn = styled.button`
    font-size: 13px;
    background-color: transparent;
    outline: none;
    padding: 5px;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    transition: all 250ms ease-out;
    &:hover {
        color: lightcoral;
    }
`;

export const Grade = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const GradeImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

export const GradeText = styled.span`
    color: #ffc700;
    font-weight: bold;
    font-size: 14px;
`;

export const Photos = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
`;

export const Photo = styled.img`
    width: 120px;
    height: 100px;
    border-radius: 10px;
    transition: all 250ms ease-out;
    margin: 5px 0;
    &:hover {
        filter: brightness(110%);
    }
`;
