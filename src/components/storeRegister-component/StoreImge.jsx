import React, { useState } from 'react';

const StoreImage = () => {
  const [filesArr, setFilesArr] = useState([]);
  const [fileNo, setFileNo] = useState(0);

  const addFile = (event) => {
    const maxFileCnt = 5;
    const attFileCnt = document.querySelectorAll('.filebox').length;
    const remainFileCnt = maxFileCnt - attFileCnt;
    const curFileCnt = event.target.files.length;

    if (curFileCnt > remainFileCnt) {
      alert(`첨부파일은 최대 ${maxFileCnt}개 까지 첨부 가능합니다.`);
      return;
    }

    const newFilesArr = [...filesArr];

    for (let i = 0; i < Math.min(curFileCnt, remainFileCnt); i++) {
      const file = event.target.files[i];

      if (validation(file)) {
        const reader = new FileReader();
        reader.onload = function () {
          newFilesArr.push(file);
          setFilesArr(newFilesArr);
        };
        reader.readAsDataURL(file);

        const htmlData = (
          <div id={`file${fileNo}`} className="filebox">
            <p className="name">{file.name}</p>
            <a className="delete" onClick={() => deleteFile(fileNo)}>
              <i className="far fa-minus-square"></i>
            </a>
          </div>
        );

        setFileNo(fileNo + 1);
        // Render the HTMLData in your file list.
      }
    }
    event.target.value = '';
  };

  const validation = (file) => {
    const fileTypes = [
      'application/pdf',
      'image/gif',
      'image/jpeg',
      'image/png',
      'image/bmp',
      'image/tif',
      'application/haansofthwp',
      'application/x-hwp',
    ];

    if (file.name.length > 100) {
      alert('파일명이 100자 이상인 파일은 제외되었습니다.');
      return false;
    } else if (file.size > 100 * 1024 * 1024) {
      alert('최대 파일 용량인 100MB를 초과한 파일은 제외되었습니다.');
      return false;
    } else if (file.name.lastIndexOf('.') === -1) {
      alert('확장자가 없는 파일은 제외되었습니다.');
      return false;
    } else if (!fileTypes.includes(file.type)) {
      alert('첨부가 불가능한 파일은 제외되었습니다.');
      return false;
    } else {
      return true;
    }
  };

  const deleteFile = (num) => {
    const newFilesArr = [...filesArr];
    newFilesArr[num].is_delete = true;
    setFilesArr(newFilesArr);
  };

  const submitForm = () => {
    const formData = new FormData();
    for (let i = 0; i < filesArr.length; i++) {
      if (!filesArr[i].is_delete) {
        formData.append('attach_file', filesArr[i]);
      }
    }

    // Perform your AJAX request here using fetch or other libraries
    // For example, using fetch:
    fetch('/register', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then(() => {
        alert('파일업로드 성공');
      })
      .catch((error) => {
        alert('에러가 발생하였습니다.');
      });
  };

  return (
    <div>
      {/* Render your input elements and file list here */}
      <input type="file" onChange={addFile} />
      <div className="file-list">{/* Render your file list items here */}</div>
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default MyComponent;
