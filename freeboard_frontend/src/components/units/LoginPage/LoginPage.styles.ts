import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 910px;
  border: 3px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const LoginBox = styled.div`
  width: 550px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid red;
`;

export const Title = styled.div`
  width: 100%;
  height: 330px;
  border: 2px solid blue;
`;

export const InputBox = styled.div`
  border: 2px solid green;
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ErrorBox = styled.div`
  width: 100%;
  height: 20px;
  color: red;
  font-size: 13px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Email = styled.input`
  width: 330px;
  height: 50px;
`;

export const Password = styled.input`
  width: 330px;
  height: 50px;
`;

export const SideMenuBox = styled.div`
  width: 100%;
  height: 100px;
  border: 2px solid blue;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: 15px 10px;
`;

export const LogInBtn = styled.button`
  width: 180px;
  height: 50px;
  background-color: ${(props) => (props.isValid ? "pink" : "lightgray")};
  border: 2px solid green;
  border-radius: 17px;
  text-align: center;
  line-height: 3;
  margin-left: 155px;
  cursor: pointer;
`;

export const SignUp = styled.span`
  border: 2px solid blue;
  height: 20px;
`;
