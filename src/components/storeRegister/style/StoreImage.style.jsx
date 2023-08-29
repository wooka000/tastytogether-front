import styled from 'styled-components';

export const TableLine = styled.div`
    width: 1360px;
    height: 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid #F0F0F0;
    border-bottom: 3px solid #F0F0F0;
  
    .table_title{
        width: 260px;
        height: 35px;
        font-size: 25px;
        text-align: center;
        font-weight: 600;
    }
    .table_content{
        width: 1082px;
        height: 35px;
        padding-left: 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: 25px;
        input{
          font-size: 25px;
          color: #FF9C5F;
        }
      }
    #img_line{
      height: 150px;
    }
`
export const ImgDiv = styled.div``
export const ImageUpload = styled.div`
  font-size: 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  div{
    width: 160px;
    height: 52px;
    padding: 11px;
    border-radius: 5px;
    background-color: lightgray;
    color: white;
    font-weight: 600;

    &:hover{
      background-color: #FF9C5F;
    }
    &:active {
        filter: brightness(70%);
    }
  }
`
export const ImageInput = styled.input`
    margin: 10px;
    // opacity: 0;
    display: none;
`
export const ImagesPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`
export const Image = styled.div`
  width: 150px;
  margin: 8px;
  position: relative;
  display: flex;
  box-sizing: border-box;
`
export const Img = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  margin: 5px;
  border: 8px solid #F0F0F0;
  border-radius: 20px;
`
export const CancelButton = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;
  padding: 2px 6px;
  font-size: 15px;
  background-color: #FF9C5F;
  border: none;
  color: white;
  cursor: pointer;
  border-Radius: 5px;
`;
