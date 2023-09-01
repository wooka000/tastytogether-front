import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
`;

export const ProfileBg = styled.div`
    background-image: ${(props) => (props.bg ? `url(${props.bg})` : "url('/imgs/profilebg.jpg')")};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 300px;
`;

export const Form = styled.form`
    font-size: 20px;
    color: gray;
    float: right;
    display: flex;
    align-items: center;
    border: 1px dotted gray;
    border-radius: 10px;
    padding: 5px 15px;
    cursor: pointer;
    transition: all 250ms ease-out;
    &:hover {
        color: black;
        border: 1px solid black;
    }
`;

export const ShowInputFile = styled.label`
    display: flex;
    align-items: center;
    margin: 10px;
`;

export const SubmitBtn = styled.button`
    border: 1px solid gray;
    padding: 10px;
    background: transparent;
`;

export const BtnText = styled.span`
    font-size: 15px;
`;

export const FileText = styled.span`
    font-size: 14px;
`;

export const InputFile = styled.input`
    display: none;
`;

export const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    background-color: rgba(255, 255, 255, 0.8);
    margin: -160px auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px 40px;
    position: relative;
`;

export const EditBtn = styled.button`
    width: 100px;
    height: 30px;
    background-color: transparent;
    border-radius: 10px;
    color: gray;
    border: 1px dotted gray;
    transition: all 250ms ease-out;
    position: absolute;
    top: 20px;
    right: 20px;
    &:hover {
        color: black;
        border: 1px solid black;
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const Img = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;

export const Text = styled.div`
    max-width: 800px;
    margin-left: 20px;
`;

export const Name = styled.p`
    font-weight: bold;
    font-size: 22px;
`;

export const Description = styled.p`
    font-size: 18px;
    height: 100px;
    padding-top: 10px;
`;

export const Menu = styled.ul`
    display: flex;
    align-items: center;
`;

export const MenuBtn = styled.li`
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid gray;
    width: 150px;
    margin: 10px 25px 0 25px;
    border: none;
    cursor: pointer;

    &:hover {
        p {
            color: var(--color-accent);
            transition: all 250ms ease-out;
        }
    }
    color: ${(props) => (props.active == 'active' ? 'var(--color-accent)' : 'gray')};
`;

export const Category = styled.p`
    margin-bottom: 10px;
`;
