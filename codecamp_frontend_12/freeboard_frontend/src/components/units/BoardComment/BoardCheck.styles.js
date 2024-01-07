import styled from "@emotion/styled";

export const InputBox = styled.div`
  font-weight: 500;
  width: 320px;
  height: 35px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const CommentBox = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

export const Cmt_Title = styled.div`
  border-top: 1px solid #bdbdbd;
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Cmt_Title_Content = styled.div`
  width: 6%;
  height: 15%;
  padding: 15px 0px;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Cmt_LogIn = styled.div`
  padding-bottom: 15px;
  width: 42%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WriteBox = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  text-indent: 20px;
`;

export const PwBox = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  text-indent: 20px;
`;

export const Rate = styled.div``;

export const Cmt_Content = styled.div`
  height: 20%;
`;

export const Cmt = styled.div`
  padding-bottom: 500px;
`;

export const Cmt_Content_Box = styled.input`
  width: 100%;
  height: 98px;
  text-indent: 20px;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
`;

export const Cmt_Create = styled.div`
  border: 1px solid #bdbdbd;
  border-top: none;
  padding-left: 5px;
  height: calc(100% - 98px);
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Number = styled.span``;

export const Length_Number = styled.span``;

export const CreateBtn = styled.button`
  width: 91px;
  height: 52px;
  background-color: black;
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => (props.cmtEdit ? "black" : "white")};
  background-color: ${(props) => (props.cmtEdit ? "gold" : "black")};
`;
