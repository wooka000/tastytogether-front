import React, { useState } from 'react';
import styled from 'styled-components';

const StoreImage = () => {
  const [imageSrcs, setImageSrcs] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const onUpload = (e) => {
    const files = e.target.files;

    if (files.length === 0) {
      return;
    }

    if (uploadedImages.length + files.length > 8) {
      alert('이미지는 최대 8개까지 등록할 수 있습니다.');
      return;
    }

    const newImageSrcs = [];
    const newUploadedImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (!isFileAlreadyUploaded(file)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          newImageSrcs.push(reader.result || null);
          newUploadedImages.push(file);
          setImageSrcs(newImageSrcs);
          setUploadedImages(newUploadedImages);
        };
      } else {
        alert(`${file.name} 파일은 이미 업로드되었습니다.`);
      }
    }
  };

  const isFileAlreadyUploaded = (file) => {
    return uploadedImages.some((uploadedFile) => uploadedFile.name === file.name);
  };

  const removeImage = (index) => {
    const newImageSrcs = [...imageSrcs];
    newImageSrcs.splice(index, 1);
    setImageSrcs(newImageSrcs);
  };

  return (
    <>
      <TableLine>
        <div className="table_title">
          <span>대표이미지</span>
        </div>
        <div className="table_content">
          <ImgDiv>
            <ImageUpload>
              <div>
                <label htmlFor="image_input">
                  이미지 업로드
                </label>
              </div>
              <ImageInput
                id="image_input"
                type="file"
                accept="image/*"
                multiple
                onChange={onUpload}
              />
            </ImageUpload>
          </ImgDiv>
        </div>
      </TableLine>
      <div id="img_line">
        <ImagesPreview>
          {imageSrcs.map((imageSrc, index) => (
            <Image key={index}>
              <Img
                src={imageSrc}
                alt={`uploaded-image-${index}`}
              />
              <CancelButton onClick={() => removeImage(index)}>취소</CancelButton>
            </Image>
          ))}
        </ImagesPreview>
      </div>
    </>
  );
};

export default StoreImage;

const TableLine = styled.div`
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
        font-size: 20px;
        input{
          font-size: 20px;
          color: #FF9C5F;
        }
      }
    #img_line{
      height: 150px;
    }
`
const ImgDiv = styled.div``
const ImageUpload = styled.div`
  font-size: 20px;
  text-align: center;
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
const ImageInput = styled.input`
    margin: 10px;
    // opacity: 0;
    display: none;
`
const ImagesPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`
const Image = styled.div`
  width: 150px;
  margin: 8px;
  position: relative;
  display: flex;
  box-sizing: border-box;
`
const Img = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  margin: 5px;
  border: 8px solid #F0F0F0;
  border-radius: 20px;
`
const CancelButton = styled.button`
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
