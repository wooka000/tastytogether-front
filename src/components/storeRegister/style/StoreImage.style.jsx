import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 30px;
`;

export const Title = styled.div`
    color: #989797;
    font-size: 18px;
    font-weight: 700;
    width: 100px;
`;

export const ImgContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    margin-top: 10px;
    width: 663px;
    height: 60px;
`;

export const ImgDiv = styled.div`
    width: 100%;
`;

export const ImageUpload = styled.div``;

export const ImgInput = styled.input`
    display: none;
`;

export const Label = styled.label`
    display: block;
    border-radius: 10px;
    font-size: 20px;
    text-align: center;
    padding: 15px 0;
    background-color: var(--color-accent);
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

export const Text = styled.p`
    text-align: center;
`;

export const ImagesPreview = styled.div`
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    width: 663px;
    height: 250px;
    gap: 10px;
    margin: 15px auto 0px;
    border: 1px solid lightgray;
    border-radius: 10px;
`;
export const Image = styled.div`
    width: 120px;
    height: 110px;
    position: relative;
    border: 1px solid gray;
    border-radius: 10px;
    &:hover {
        button {
            display: block;
        }
        img {
            opacity: 0.8;
        }
    }
`;
export const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    transition: all 250ms ease-out;
`;
export const CancelButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 26px;
    padding: 0 5px;
    display: none;
    color: white;
    transition: all 250ms ease-out;
`;
