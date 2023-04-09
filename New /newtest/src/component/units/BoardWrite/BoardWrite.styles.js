import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 0px 40px;
  width: 764px;
  height: 648px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  background: white;
`;

export const WrapperTop = styled.div`
  border-bottom: 1px solid #6400ff;
  margin-bottom: 30px;
  height: 84px;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  line-height: 3.3;
  background: white;
`;

export const WrapperBody = styled.div`
  height: 430px;
  background: white;
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
  background: white;
`;

export const TitleBox = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

export const TitleInput = styled.input`
  width: 604px;
  height: 40px;
  background: white;
  border-radius: 5px;
  border: 1px solid #e5e5e5;

  :focus {
    outline-color: #6400ff;
  }
`;

export const ContentBox = styled.div`
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  background: white;
`;

export const ContentInput = styled.input`
  width: 604px;
  height: 240px;
  background: white;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  :focus {
    outline-color: #6400ff;
  }
`;

export const Imageset = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
`;

export const ImageList = styled.div`
  width: 260px;
  margin-left: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
`;

export const ImgBox = styled.div`
  width: 80px;
  height: 80px;
  background: #fafafa;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px dashed #e5e5e5;
`;

export const WrapperBottom = styled.div``;

export const Login = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
`;

export const WriterBox = styled.div`
  width: 322px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

export const Writer = styled.input`
  width: 242px;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background: white;
  :focus {
    outline-color: #6400ff;
  }
`;

export const PasswordBox = styled.div`
  width: 322px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

export const Password = styled.input`
  width: 242px;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background: white;
  :focus {
    outline-color: #6400ff;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

export const Create = styled.button`
  width: 80px;
  height: 30px;
  background: #6400ff;
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: 700;
  font-size: 12px;
  margin-right: 5px;
`;

export const Cancel = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 30px;
  background: #999999;
  color: white;
  font-weight: 700;
  font-size: 12px;
  margin-left: 5px;
`;
