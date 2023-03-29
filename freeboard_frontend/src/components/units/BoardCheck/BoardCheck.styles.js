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
