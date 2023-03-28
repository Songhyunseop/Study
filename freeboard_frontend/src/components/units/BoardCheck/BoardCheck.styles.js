import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 1602px;
  border: 2px solid black;
  margin: 0 auto;
  padding: 80px 105px;
  position: relative;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Privacy = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Profile = styled.img`
  width: 46px;
  height: 46px;
`;

export const User = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 16px;
`;

export const Name = styled.div`
  width: 70px;
  font-weight: 500;
  font-size: 24px;
`;

export const Date = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #828282;
`;

export const Emoji = styled.div`
  width: 75px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

export const AlertBox = styled.img`
  position: absolute;
  top: 20px;
  left: 700px;
`;

export const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  text-align: end;
  position: absolute;
  top: 34px;
  left: 730px;
  color: white;
`;

export const Body = styled.div`
  height: 50%;
  border-top: 1px solid #bdbdbd;
  margin-top: 24px;
  padding-top: 80px;
`;

export const UpBox = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UpBox_Title = styled.div`
  font-weight: 700;
  font-size: 36px;
`;

export const ContentsBox = styled.div`
  height: 200px;
`;

export const Bottom = styled.div`
  height: calc(1200px - 45%);
`;

export const DownBox = styled.div`
  height: 550px;
  padding: 50px 50px 0px 50px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const DownBox_Like = styled.div`
  width: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Wrapper_Bottom = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const BtnBox = styled.div`
  width: 55%;
  height: 233px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Page_Btn = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  font-weight: 400;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;

export const CommentBox = styled.div`
  width: 100%;
  height: 752px;
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
  font-weight: 500;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Cmt_LogIn = styled.div`
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

export const Cmt_Box = styled.div`
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.div``;

export const ProfileLeft = styled.div`
  width: calc(100% - 48px);
  height: 130px;
  display: flex;
  flex-direction: column;
`;

export const Cmt = styled.div`
  padding-bottom: 500px;
`;

export const CmtUpper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CmtUpperBox1 = styled.div``;

export const CMtUpperBox2 = styled.div`
  width: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserName = styled.span`
  font-family: "Noto Sans CJK KR";
  font-weight: 500;
  font-size: 16px;
  margin-left: 16px;
  margin-right: 18px;
`;

export const RateEdit2 = styled.span``;

export const Edit = styled.img`
  cursor: pointer;
`;

export const Delete = styled.img`
  cursor: pointer;
`;

export const CmtBottom = styled.div`
  margin-left: 16px;
  width: 100%;
  height: 82px;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Cmt_Text = styled.div``;

export const Cmt_CreateDate = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #bdbdbd;
`;
