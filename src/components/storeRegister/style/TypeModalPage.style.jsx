import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 220vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
`;

export const Modal = styled.div`
    width: 700px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    position: relative;
    transform: translateY(200%);
    padding: 10px;
`;

export const ModalTitle = styled.div`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`;

export const CancellBtn = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    font-size: 24px;
    font-weight: bold;
    border: none;
    padding: 5px 10px;
    color: lightgray;
    transition: all 250ms ease-out;
    &:hover {
        color: gray;
    }
`;

export const TypeButtons = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 95%;
`;

export const Item = styled.li`
    width: 225px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        Img {
            transform: scale(1.1);
        }
    }
`;

export const Img = styled.img`
    transition: all 250ms ease-out;
    width: 100px;
`;

export const Name = styled.p`
    margin-top: 5px;
    font-size: 20px;
    font-weight: bold;
`;
