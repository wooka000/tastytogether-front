// import axios from 'axios';

// const RegisterButton = () => {

//     // 회원가입 정보와 이미지 파일을 담을 FormData 생성
//     const storeFormData = new FormData();
//     formData.append('username', '사용자이름');
//     formData.append('email', '이메일주소');
//     formData.append('password', '비밀번호');
//     formData.append('profileImage', profileImageFile); // profileImageFile은 파일 인풋에서 선택한 이미지 파일
    
//     // Axios를 사용하여 POST 요청 보내기
//     axios({
//       method: 'post',
//       url: 'https://localhost:3000/stores',
//       data: formData,
//       headers: {
//         'content-type': 'multipart/form-data', // FormData를 사용할 때는 반드시 이 헤더를 설정해야 합니다.
//       },
//     })
//       .then(response => {
//         console.log('응답 데이터:', response.data);
//       })
//       .catch(error => {
//         console.error('에러:', error);
//       });

//     // const registerFormSubmit() => {
        
//     // }

//     return (
//         <div id="register_button">
//             <button type="submit" onClick={registerFormSubmit}>새로운 업체 등록하기</button>
//         </div>
//     )
// }
// export default RegisterButton;
