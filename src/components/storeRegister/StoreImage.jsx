import PropTypes from 'prop-types';
import React, { useState } from 'react';
import * as S from './style/StoreImage.style';

const StoreImage = ({ setStoreInfo }) => {
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

    const newImageSrcs = [...imageSrcs];
    const newUploadedImages = [...uploadedImages];

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

          // 업로드 후 storeInfo 업데이트
          setStoreInfo((prevInfo) => ({
            ...prevInfo,
            street: prevInfo.street || '',
            images: uploadedImages,
          }));
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

    const newUploadedImages = [...uploadedImages];
    newUploadedImages.splice(index, 1);
    setStoreInfo((prevInfo)=>({
      ...prevInfo,
      images: uploadedImages,
    }))
    
 };
  return (
    <>
      <S.TableLine>
        <div className="table_title">
          <span>대표이미지*</span>
        </div>
        <div className="table_content">
          <S.ImgDiv>
            <S.ImageUpload>
              <div>
                <label htmlFor="image_input">
                  이미지 업로드
                </label>
              </div>
              <S.ImageInput
                id="image_input"
                type="file"
                accept="image/*"
                multiple
                onChange={onUpload}
              />
        {imageSrcs.length === 0 &&  <p style={{ color: 'red' }}>이미지를 최소 1장 업로드해주세요.</p>}

            </S.ImageUpload>
          </S.ImgDiv>
        </div>
      </S.TableLine>
      <div id="img_line">
        <S.ImagesPreview>
          {imageSrcs.map((imageSrc, index) => (
            <S.Image key={index}>
              <S.Img
                src={imageSrc}
                alt={`uploaded-image-${index}`}
              />
              <S.CancelButton onClick={() => removeImage(index)}>취소</S.CancelButton>
            </S.Image>
          ))}
        </S.ImagesPreview>
      </div>
    </>
  );
};
StoreImage.propTypes = {
  setStoreInfo: PropTypes.func.isRequired,
};
export default StoreImage;