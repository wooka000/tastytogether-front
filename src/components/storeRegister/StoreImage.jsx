import React, { useState } from 'react';
import * as S from './style/StoreImage.style';

export default function StoreImage({ setBanners }) {
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

                    setBanners([...newUploadedImages]);
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

        setUploadedImages(newUploadedImages);
        setBanners(newUploadedImages);
    };
    return (
        <S.Container>
            <S.Title>대표이미지*</S.Title>
            <S.ImgContainer>
                <S.ImgDiv>
                    <S.ImageUpload>
                        <S.ImgInput
                            id="image_input"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={onUpload}
                        />
                        <S.Label htmlFor="image_input">이미지 업로드</S.Label>
                        {imageSrcs.length === 0 && (
                            <S.Text style={{ color: 'red' }}>
                                이미지를 최소 1장 업로드해주세요.
                            </S.Text>
                        )}
                    </S.ImageUpload>
                </S.ImgDiv>
            </S.ImgContainer>
            <S.ImagesPreview>
                {imageSrcs.map((imageSrc, index) => (
                    <S.Image key={index}>
                        <S.Img src={imageSrc} alt={`uploaded-image-${index}`} />
                        <S.CancelButton type="button" onClick={() => removeImage(index)}>
                            x
                        </S.CancelButton>
                    </S.Image>
                ))}
            </S.ImagesPreview>
        </S.Container>
    );
}
